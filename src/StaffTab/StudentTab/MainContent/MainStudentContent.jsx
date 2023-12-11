import React, { useCallback, useEffect, useState } from "react";
import StudentExplore from "./StudentExplore/StudentExplore";
import StudentFunctionRow from "./StudentFunctionRow/StudentFunctionRow";
import StudentTable from "./StudentTable/StudentTable";
import { useLocation, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "../../components/DividerTab/MainContent/StaffTable/StaffTable.module.css";
import CustomSuspense from "../../../Custom/SuspenseLoading/CustomSuspense";
import { useGetInstituteAllStudentFilter } from "../../../hooks/institute/institute-staff-student-api";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../Loader/QvipleLoading";
import { useOneInstituteDashboard } from "../../../hooks/dashboard/dashboard-api";
import StudentProfile from "./StudentAProfile/StudentProfile";
import { useGetPendingCustomFilterByAdmission } from "../../../hooks/member_tab/admission-api";
import { debounce } from "lodash";
import { useScrollbar } from "../../../Scroll/use-scroll";
import StudentMessageHistory from "../../../MembersTab/staff/Mainbody/FinanceManager/AllStudent/StudentMessageHistory";

const StudentForm = React.lazy(() => import("./StudentForm/StudentForm"));
const Complaints = React.lazy(() => import("./Complaints/Complaints"));
const Certificates = React.lazy(() => import("./Certificates/Certificates"));
const IDCards = React.lazy(() => import("./IDCards/IDCards"));
const UnapprovedStudent = React.lazy(() =>
  import("./UnapprovedStudent/UnapprovedStudent")
);
const MainStudentContent = ({
  leavingform,
  setLeavingForm,
  student,
  setStudent,
  download,
  setDownload,
  toggle,
  setToggle,
}) => {
  const { t } = useTranslation();
  const ids = useSelector((state) => state.idChange);
  const [searchParams] = useSearchParams();
  const [studentFull, setStudentFull] = useState(true);
  const [studentHalf, setStudentHalf] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [allStudent, setAllStudent] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [callApi, setCallApi] = useState(false);
  const [applyFilter, setApplyFilter] = useState({
    depart_arr: [],
    batch_arr: [],
    master_arr: [],
    gender: "",
    cast_category: "",
    filter_by: "",
  });
  const [sendStudentList, setSendStudentList] = useState([]);
  //for the fetch more or not after seeing all post
  const [state, setState] = useState(true);
  //for setting the next page to fetch data
  const [page, setPage] = useState(1);
  // for the infinit scroll
  const [ref, inView] = useInView({ skip: search });

  //for direct open profile of student from search page
  const location = useLocation();
  const { scrollToTop } = useScrollbar();

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: ids?.id,
      skip: !ids?.id,
    });
  const [getInstituteAllStudentFilter] = useGetInstituteAllStudentFilter();
  const {
    getPendingCustomFilterByAdmission,
    getPendingCustomFilterByAdmissionRefetch,
  } = useGetPendingCustomFilterByAdmission({
    data: {
      aid: ids?.id,
      flow: "Institute_Filter",
    },
    skip: !ids?.id,
  });
  useEffect(() => {
    if (ids?.id) {
      getPendingCustomFilterByAdmissionRefetch();
    }
  }, [ids?.id, getPendingCustomFilterByAdmissionRefetch]);

  const onAllStudentFilter = useCallback(() => {
    if (callApi) {
      getInstituteAllStudentFilter({
        id: ids?.id,
        page: page,
        limit: 10,
        search: search,
        // flow: "All_Pending_Fees_Query",
        filter_by: applyFilter.filter_by,
        filterData: {
          ...applyFilter,
        },
      })
        .then((res) => {
          if (res.data?.studentIns) {
            setSendStudentList(res.data?.all_student_query);
            if (search) {
              setAllStudent(res.data?.studentIns);
              setShowingDataLoading(false);
            } else {
              if (res.data?.studentIns) {
                if (page === 1) {
                  setAllStudent(res.data?.studentIns);
                } else {
                  setAllStudent((prev) =>
                    [
                      ...new Set(
                        [...prev, ...res.data?.studentIns].map(JSON.stringify)
                      ),
                    ].map(JSON.parse)
                  );
                }
                setShowingDataLoading(false);
              } else if (res.data?.studentIns?.length === 0) {
                setShowingDataLoading(false);
              } else {
              }
            }
            if (res.data?.studentIns?.length === 10) setState(true);
            else setState(false);
          }
        })
        .catch({});
    }
  }, [search, page, ids?.id, applyFilter, callApi]);

  useEffect(() => {
    if (ids?.id) {
      setShowingDataLoading(true);
      onAllStudentFilter();
    }
  }, [page, ids?.id, search, onAllStudentFilter]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    setPage((prev) => (prev = 1));
    setShowingDataLoading(true);
    onAllStudentFilter();
  }, [applyFilter]);

  useEffect(() => {
    if (ids?.id) {
      oneInstituteDashboardRefetch();
    }
  }, [ids?.id, oneInstituteDashboardRefetch]);

  useEffect(() => {
    if (location.state?.openType?.openId) {
      setStudentId(location.state?.openType?.openId);
      setStudentFull(false);
      setStudentHalf(true);
    }
  }, [location.state?.openType?.openId]);

  useEffect(() => {
    if (
      getPendingCustomFilterByAdmission?.ads_admin?.pending_fee_custom_filter
    ) {
      let isFilter =
        getPendingCustomFilterByAdmission?.ads_admin?.pending_fee_custom_filter;
      setApplyFilter({
        depart_arr: isFilter?.department,
        batch_arr: isFilter?.batch,
        master_arr: isFilter?.master,
        gender: isFilter?.gender,
        cast_category: isFilter?.cast_category,
        filter_by: "",
      });
      setCallApi(true);
    }
  }, [getPendingCustomFilterByAdmission?.ads_admin?.pending_fee_custom_filter]);

  const onCloseStaffInfo = () => {
    setStudentId("");
    setStudentFull(true);
    setStudentHalf(false);
  };

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );
  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
    if (!e.target.value) {
      setPage(1);
      onAllStudentFilter();
      setShowingDataLoading(true);
    }
  };

  return (
    <>
      {searchParams.get("a") === "student-message" ? (
        <StudentMessageHistory sid={ids?.id} isInstitute />
      ) : (
        <>
          <StudentExplore />
          {!searchParams.get("a") && (
            <>
              {!studentHalf && (
                <StudentFunctionRow
                  onSearchEvent={onSearchEvent}
                  id={ids?.id}
                  applyFilter={applyFilter}
                  setApplyFilter={setApplyFilter}
                  sendStudentList={sendStudentList}
                />
              )}
              {studentFull && (
                <>
                  <div className={style.header}>
                    <p className={style.index}>
                      {oneInstituteDashboard?.institute?.alias_pronounciation
                        ?.student_alias ?? t("gr_no")}
                    </p>
                    {/* <p className={style.index}>{t("gr_no")}</p> */}
                    <p className={style.name}>{t("name")}</p>
                    <p className={style.contact}>{t("contact_number")}</p>
                    <p className={style.joinigDate}>
                      {t("applicable_outs")}
                      {/* {t("applicable_remaining_fees")} */}
                    </p>
                  </div>
                  <div className={style.container}>
                    {allStudent?.map((row, index) =>
                      allStudent?.length === index + 1 ? (
                        <div key={row.studentGRNO} ref={ref}>
                          <StudentTable
                            setStudentFull={setStudentFull}
                            setStudentHalf={setStudentHalf}
                            setStudentId={setStudentId}
                            row={row}
                          />
                        </div>
                      ) : (
                        <StudentTable
                          setStudentFull={setStudentFull}
                          setStudentHalf={setStudentHalf}
                          setStudentId={setStudentId}
                          key={row.studentGRNO}
                          row={row}
                        />
                      )
                    )}
                    {allStudent?.length === 0 && !showingDataLoading && (
                      <p
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        No any search found
                      </p>
                    )}

                    {showingDataLoading && <QvipleLoading status="white" />}
                  </div>
                </>
              )}
              {studentHalf && (
                // <CustomSuspense>
                <StudentProfile sid={studentId} onClose={onCloseStaffInfo} />
                // </CustomSuspense>
              )}
            </>
          )}
          <CustomSuspense>
            {searchParams.get("a") === "certificate" && (
              <Certificates
                leavingform={leavingform}
                setLeavingForm={setLeavingForm}
                student={student}
                setStudent={setStudent}
                download={download}
                toggle={toggle}
                setToggle={setToggle}
                setDownload={setDownload}
              />
            )}
            {searchParams.get("a") === "complaint" && <Complaints />}
            {searchParams.get("a") === "idcard" && (
              <IDCards instituteId={ids?.id} />
            )}
            {searchParams.get("a") === "unapproved" && (
              <UnapprovedStudent instituteId={ids?.id} />
            )}
            {searchParams.get("a") === "setting" && <StudentForm />}
          </CustomSuspense>
        </>
      )}
    </>
  );
};

export default MainStudentContent;
