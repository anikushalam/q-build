import { assestsNavbarUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import CreateButton from "../../../Ui/Button/CreateButton";
import UserMemberContainerWrapper from "../../../Ui/UserMember/UserMemberContainerWrapper";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import style from "../FinanceManager.module.css";
import StudentStatiticsDetailCard from "./StudentStatiticsDetailCard";
import { useFinanceStudentStatisticsExport } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { cdnUrl } from "../../../Services/UrlConfig/BaseUrl";
import QvipleLoader from "../../../Loader/QvipleLoader";

const StudentStatiticsDetail = () => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [student, setStudent] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [financeStudentStatisticsExport] = useFinanceStudentStatisticsExport();
  useEffect(() => {
    if (getQuery?.state?.studentList?.length) {
      setStudent(getQuery?.state?.studentList);
    }
  }, [getQuery?.state?.studentList]);
  const onSearchEvent = (e) => {
    if (e.target.value) {
      let filterData = getFilterStudent(
        getQuery?.state?.studentList,
        e.target.value
      );
      setStudent(() => filterData);
    } else {
      setStudent(getQuery?.state?.studentList);
    }
  };

  const onExportExcel = useCallback(() => {
    setDisabled((pre) => !pre);
    let arr = [];
    for (let stu of student) {
      arr.push(stu?._id);
    }
    financeStudentStatisticsExport({
      exportBody: {
        all_arr: arr,
        batch: getQuery?.state?.batchId,
        depart: getQuery?.state?.departmentId,
      },
    })
      .then((res) => {
        if (res?.data?.data) {
          setDisabled((pre) => !pre);
          window.open(`${cdnUrl}/${res?.data?.data}`, "_blank", "noreferrer");
        }
      })
      .catch({});
  }, [student]);
  return (
    <>
      <UserMemberContainerWrapper>
        <UserMemberContentWrapper>
          <div className={style.fm_header_container}>
            <h6>
              {t(
                getQuery?.state?.openAs === "OVERVIEW"
                  ? "overview_statistics_detail"
                  : getQuery?.state?.openAs === "ADMISSION_OVERVIEW"
                  ? "admission_statistics_detail"
                  : "student_statistics_detail"
              )}
            </h6>
            <div className={style.fm_search}>
              <section className={style.fm_search_container}>
                <div className={style.fm_search_container_inner}>
                  <img
                    className={style.fm_search_icon}
                    alt="search icon"
                    src={`${assestsNavbarUrl}/navbar-search.svg`}
                  />
                  <input
                    type="text"
                    placeholder={t("search")}
                    onChange={onSearchEvent}
                  />
                </div>
              </section>
              <CreateButton
                label="export"
                customStyle={{
                  margin: "0",
                  paddingBlock: "0.61rem",
                }}
                onAction={onExportExcel}
              />
            </div>
          </div>
        </UserMemberContentWrapper>
        <BorderBottom />
        <UserMemberContentWrapper
          customStyle={{
            paddingTop: "0",
          }}
        >
          {student?.map((student) => (
            <StudentStatiticsDetailCard student={student} key={student?._id} />
          ))}
        </UserMemberContentWrapper>
      </UserMemberContainerWrapper>
      {disabled && <QvipleLoader />}
    </>
  );
};

export default StudentStatiticsDetail;

const getFilterStudent = (list, search) => {
  return list?.filter((val) => {
    if (
      val?.valid_full_name?.toLowerCase()?.includes(search?.toLowerCase()) ||
      val?.studentGRNO?.toLowerCase()?.includes(search?.toLowerCase())
    ) {
      return val;
    }
    return null;
  });
};
