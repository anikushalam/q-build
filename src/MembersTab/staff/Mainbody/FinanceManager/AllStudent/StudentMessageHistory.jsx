import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useGetStudentMessageHistoryGenerate } from "../../../../../hooks/institute/institute-staff-student-api";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
import style from "../../StaffAdmisionAdmin/AdmissionApplicationRequest/AdmissionApplicationRequest.module.css";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { useNavigate } from "react-router-dom";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import StudentMessageHistoryCard from "./StudentMessageHistoryCard";
const StudentMessageHistory = ({ sid, isInstitute }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [historyList, setHistoryList] = useState([]);

  const {
    getStudentMessageHistoryGenerate,
    getStudentMessageHistoryGenerateRefetch,
  } = useGetStudentMessageHistoryGenerate({
    data: {
      sid: sid,
      page: page,
      limit: 10,
      flow: "INSTITUTE_ADMIN",
      // flow: isInstitute ? "INSTITUTE_ADMIN" : "Other",
    },
    skip: !sid,
  });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (sid) {
      setShowingDataLoading(true);
      getStudentMessageHistoryGenerateRefetch();
    }
  }, [sid, page, getStudentMessageHistoryGenerateRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getStudentMessageHistoryGenerate?.all_message) {
      if (page === 1) {
        setHistoryList(getStudentMessageHistoryGenerate?.all_message);
      } else {
        setHistoryList((prevState) =>
          [
            ...new Set(
              [
                ...prevState,
                ...getStudentMessageHistoryGenerate?.all_message,
              ]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
      }
      setShowingDataLoading(false);
    } else if (getStudentMessageHistoryGenerate?.all_message?.length === 0)
      setShowingDataLoading(false);
    else {
    }

    if (getStudentMessageHistoryGenerate?.all_message?.length === 10)
      setState(true);
    else setState(false);
  }, [getStudentMessageHistoryGenerate?.all_message]);
  const onBackWithArrowLeft = () => {
    navigate(-1);
  };
  return (
    <div className={style.admission_application_container}>
      <section className={style.moderator_container_title}>
        <img
          src="/images/arrow-left-fees-icon.svg"
          onClick={onBackWithArrowLeft}
          alt="go to previous tab"
          title="Go Back"
          style={{
            cursor: "pointer",
          }}
        />
        <div className={style.with_search}>
          <h6>{t("message_history")}</h6>
        </div>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
        }}
      />
      {historyList?.map((data, index) =>
        historyList?.length === index + 1 ? (
          <div key={data?._id} ref={ref}>
            <StudentMessageHistoryCard data={data} />
          </div>
        ) : (
          <StudentMessageHistoryCard key={data?._id} data={data} />
        )
      )}
      {showingDataLoading && <QvipleLoading status="white" />}
    </div>
  );
};

export default StudentMessageHistory;
