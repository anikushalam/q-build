import React, { useCallback, useEffect, useState } from "react";
import style from "../../StaffAdmisionAdmin/AdmissionScholarship/AdmissionScholarship.module.css";
import { useTranslation } from "react-i18next";
import { debounce } from "lodash";
import { useInView } from "react-intersection-observer";
import { useGetInstituteAllStudentFilter } from "../../../../../hooks/institute/institute-staff-student-api";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import StudentDetailCard from "./StudentDetailCard";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import EmptyInfo from "../../../../../Loader/EmptyInfo";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
import { useGetPendingCustomFilterByAdmission } from "../../../../../hooks/member_tab/admission-api";
import AllStudentFilter from "../../../Filter/Dynamic/AllStudentFilter";
import SendFilterStudentMessage from "./SendFilterStudentMessage";
import { useParams, Link } from "react-router-dom";

const AllStudent = ({
  instituteId,
  is_view,
  viewId,
  studentAlias,
  headId,
  carryParentState,
}) => {
  const { t } = useTranslation();
  const params = useParams();
  const [state, setState] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView({ skip: search });
  const [allStudent, setAllStudent] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [applyFilter, setApplyFilter] = useState({
    depart_arr: [],
    batch_arr: [],
    master_arr: [],
    gender: "",
    cast_category: "",
    filter_by: "",
  });
  const [filter, setFilter] = useState(false);
  const [callApi, setCallApi] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [sendStudentList, setSendStudentList] = useState([]);

  const { scrollToTop } = useScrollbar();

  const [getInstituteAllStudentFilter] = useGetInstituteAllStudentFilter();

  const {
    getPendingCustomFilterByAdmission,
    getPendingCustomFilterByAdmissionRefetch,
  } = useGetPendingCustomFilterByAdmission({
    data: {
      aid: viewId,
      flow:
        is_view === "ADMISSION_ADMIN"
          ? "Admission_Student_Filter"
          : is_view === "FINANCE_MANAGER"
          ? "Finance_Student_Filter"
          : is_view === "CERTIFICATE_AUTHORITY"
          ? "Certificate_Section_Filter"
          : is_view === "STUDENT_SECTION"
          ? "Student_Section_Filter"
          : is_view === "ID_CARD_SECTION"
          ? "Id_Card_Section_Filter"
          : "Institute_Filter",
    },
    skip: !viewId,
  });
  useEffect(() => {
    if (viewId) {
      getPendingCustomFilterByAdmissionRefetch();
    }
  }, [viewId, getPendingCustomFilterByAdmissionRefetch]);

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

  const onAllStudentFilter = useCallback(() => {
    if (callApi) {
      getInstituteAllStudentFilter({
        id: instituteId,
        page: page,
        limit: 10,
        search: search,
        is_view: is_view,
        mid: viewId,
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
  }, [search, page, instituteId, viewId, applyFilter, callApi]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (instituteId) {
      setShowingDataLoading(true);
      onAllStudentFilter();
    }
  }, [page, instituteId, search, onAllStudentFilter]);

  useEffect(() => {
    setPage((prev) => (prev = 1));
    setShowingDataLoading(true);
    onAllStudentFilter();
  }, [applyFilter]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    setPage(1);
    onDebounce(e.target.value);
    if (!e.target.value) {
      onAllStudentFilter();
      setShowingDataLoading(true);
    }
  };

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  // console.info("is_view", is_view);
  return (
    <div
      className={style.moderator_container}
      style={{
        marginTop: "0",
      }}
    >
      <section className={style.moderator_container_title}>
        <div className={style.with_search}>
          <h6>{t("all_students")}</h6>
          <section
            className={style.search_container}
            style={{
              gap: "1rem",
            }}
          >
            <div className={style.search_container_input}>
              <img
                className={style.searchIcon}
                alt="search icon"
                src="/images/search-dash-icon.svg"
              />
              <input
                type="text"
                placeholder="Search student..."
                onChange={onSearchEvent}
                style={{
                  width: "400px",
                }}
              />
            </div>
            <div className={style.os_filter_container}>
              <img
                src="/images/filter-blue-icon.svg"
                alt="filter icon"
                onClick={() => setFilter(true)}
                style={{
                  cursor: "pointer",
                }}
              />
              <Link
                to={
                  is_view === "FINANCE_MANAGER"
                    ? `/q/${params.username}/member/finance?a=student-message`
                    : is_view === "ADMISSION_ADMIN"
                    ? `/q/${params.username}/member/admission?a=student-message`
                    : is_view === "ID_CARD_SECTION"
                    ? `/q/${params.username}/member/idcard?a=student-message`
                    : is_view === "CERTIFICATE_AUTHORITY"
                    ? `/q/${params.username}/member/certificate?a=student-message`
                    : is_view === "STUDENT_SECTION"
                    ? `/q/${params.username}/member/promote?a=student-message`
                    : `/q/${params.username}/member`
                }
                state={carryParentState}
              >
                <img
                  src="/images/member_tab/finance/finance-message-log-icon.svg"
                  alt="receipt icon"
                  title="View message history"
                  style={{
                    height: "2rem",
                    cursor: "pointer",
                  }}
                />
              </Link>

              <button
                className={style.os_reminder}
                onClick={() => setReminder(true)}
                // disabled={!isEnable}
              >
                {t("student_message")}
              </button>
            </div>
          </section>
        </div>
      </section>

      <div className={style.student_table}>
        <div className={style.student_table_header}>
          <p
            className={style.student_table_header_label}
            style={{
              flex: "1",
            }}
          >
            {studentAlias ?? t("gr_no")}
          </p>
          <p
            className={style.student_table_header_label}
            style={{
              flex: "3",
            }}
          >
            {t("name")}
          </p>
          <p
            className={style.student_table_header_label}
            style={{
              flex: "2",
            }}
          >
            {t("contact_number")}
          </p>
          <p
            className={style.student_table_header_label}
            style={{
              flex: "1",
            }}
          >
            {t("applicable_outs")}
          </p>
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />

        {allStudent?.map((student, index) =>
          allStudent?.length === index + 1 ? (
            <div key={student?._id} ref={ref}>
              <StudentDetailCard
                student={student}
                is_view={is_view}
                messageId={viewId}
                headId={headId}
                carryParentState={carryParentState}
                instituteId={instituteId}
              />
            </div>
          ) : (
            <StudentDetailCard
              key={student?._id}
              student={student}
              is_view={is_view}
              messageId={viewId}
              headId={headId}
              carryParentState={carryParentState}
              instituteId={instituteId}
            />
          )
        )}
        {!showingDataLoading && !allStudent.length && (
          <EmptyInfo
            customStyleContainer={{
              marginTop: "9rem",
            }}
            title={"No student found for this filter."}
          />
        )}
        {showingDataLoading && <QvipleLoading status="white" />}
      </div>

      {filter && (
        <AllStudentFilter
          onClose={() => setFilter(false)}
          instituteId={instituteId}
          setApplyFilter={setApplyFilter}
          applyFilter={applyFilter}
        />
      )}

      {reminder && (
        <SendFilterStudentMessage
          onClose={() => setReminder(false)}
          messageId={viewId}
          headId={headId}
          // onRefetch={onRefetch}
          viewAs={is_view}
          sendStudentList={sendStudentList}
          toRedirectUrl={
            is_view === "FINANCE_MANAGER"
              ? `/q/${params.username}/member/finance?a=student-message`
              : is_view === "ADMISSION_ADMIN"
              ? `/q/${params.username}/member/admission?a=student-message`
              : is_view === "ID_CARD_SECTION"
              ? `/q/${params.username}/member/idcard?a=student-message`
              : is_view === "CERTIFICATE_AUTHORITY"
              ? `/q/${params.username}/member/certificate?a=student-message`
              : is_view === "STUDENT_SECTION"
              ? `/q/${params.username}/member/promote?a=student-message`
              : `/q/${params.username}/student?a=student-message`
          }
          carryParentState={carryParentState}
          instituteId={instituteId}
        />
      )}
    </div>
  );
};

export default AllStudent;
