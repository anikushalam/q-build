import React, { useCallback, useEffect, useState } from "react";
import UnapprovedStudentHead from "./UnapprovedStudentHead";
import styleOther from "../StudentFunctionRow/StudentFunctionRow.module.css";
import { useTranslation } from "react-i18next";
import CustomSuspense from "../../../../Custom/SuspenseLoading/CustomSuspense";
import style from "../../../components/DividerTab/MainContent/StaffTable/StaffTable.module.css";
import QvipleLoading from "../../../../Loader/QvipleLoading";
import UnapprovedStudentCard from "./UnapprovedStudentCard";
import EmptyInfo from "../../../../Loader/EmptyInfo";
import { useGetUnapprovedStudentByInstitute } from "../../../../Department/Institute/Components/DepartmentApi/depart-api";
import { useInView } from "react-intersection-observer";
import { debounce } from "lodash";
import { useOneInstituteDashboard } from "../../../../hooks/dashboard/dashboard-api";

const StudentProfile = React.lazy(() =>
  import("../StudentAProfile/StudentProfile")
);
const UnapprovedStudent = ({ instituteId }) => {
  const { t } = useTranslation();
  const [studentId, setStudentId] = useState("");
  const [allStudent, setAllStudent] = useState([]);
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const {
    getUnapprovedStudentByInstitute,
    getUnapprovedStudentByInstituteRefetch,
  } = useGetUnapprovedStudentByInstitute({
    data: {
      id: instituteId,
      page: page,
      limit: 10,
      search: search,
    },
    skip: !instituteId,
  });
  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: instituteId,
      skip: !instituteId,
    });

  React.useEffect(() => {
    if (instituteId) {
      oneInstituteDashboardRefetch();
    }
  }, [instituteId, oneInstituteDashboardRefetch]);
  useEffect(() => {
    if (instituteId) {
      setShowingDataLoading(true);
      getUnapprovedStudentByInstituteRefetch();
    }
  }, [instituteId, page, search, getUnapprovedStudentByInstituteRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (search) {
      setAllStudent(getUnapprovedStudentByInstitute?.studentIns);
      setShowingDataLoading(false);
    } else {
      if (getUnapprovedStudentByInstitute?.studentIns) {
        setAllStudent((prevState) =>
          [
            ...new Set(
              [
                ...prevState,
                ...getUnapprovedStudentByInstitute?.studentIns,
              ]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getUnapprovedStudentByInstitute?.studentIns?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }

    if (getUnapprovedStudentByInstitute?.studentIns?.length === 10)
      setState(true);
    else setState(false);
  }, [getUnapprovedStudentByInstitute?.studentIns]);
  const onCloseProfile = () => {
    setStudentId("");
  };
  const onViewProfile = (value) => {
    setStudentId(value);
  };
  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };
  return (
    <>
      {studentId ? (
        <CustomSuspense>
          <StudentProfile sid={studentId} onClose={onCloseProfile} />
        </CustomSuspense>
      ) : (
        <>
          <UnapprovedStudentHead id={instituteId}>
            <input
              type="text"
              placeholder={t("search")}
              name="search"
              className={`form-control ${styleOther.searchinput}`}
              onChange={onSearchEvent}
              style={{
                width: "95%",
              }}
            />
          </UnapprovedStudentHead>
          <div className={style.header}>
            <p className={style.index}>
              {" "}
              {oneInstituteDashboard?.institute?.alias_pronounciation
                ?.student_alias ?? t("gr_no")}
            </p>
            <p className={style.name}>{t("name")}</p>
            <p className={style.contact}>{t("contact_number")}</p>
            <p className={style.joinigDate}>
              {t("applicable_outs")}
              {/* {t("applicable_remaining_fees")} */}
            </p>
          </div>
          <div className={style.container}>
            {allStudent?.map((student, index) =>
              allStudent?.length === index + 1 ? (
                <div ref={ref} key={student?.studentGRNO}>
                  <UnapprovedStudentCard
                    onViewProfile={onViewProfile}
                    student={student}
                  />
                </div>
              ) : (
                <UnapprovedStudentCard
                  onViewProfile={onViewProfile}
                  key={student?.studentGRNO}
                  student={student}
                />
              )
            )}
            {!showingDataLoading &&
              !getUnapprovedStudentByInstitute?.studentIns?.length && (
                <EmptyInfo
                  customStyleContainer={{
                    marginTop: "5rem",
                  }}
                  title={"No student found."}
                  subtitle={
                    "Please make sure you have added unappoved students."
                  }
                />
              )}
            {search &&
              !showingDataLoading &&
              !getUnapprovedStudentByInstitute?.studentIns?.length && (
                <EmptyInfo
                  customStyleContainer={{
                    marginTop: "5rem",
                  }}
                  title={"No search found!"}
                />
              )}

            {showingDataLoading && <QvipleLoading />}
          </div>
        </>
      )}
    </>
  );
};

export default UnapprovedStudent;
