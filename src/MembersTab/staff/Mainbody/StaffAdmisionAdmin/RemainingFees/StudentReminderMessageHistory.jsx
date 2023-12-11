import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
import style from "../../StaffAdmisionAdmin/AdmissionApplicationRequest/AdmissionApplicationRequest.module.css";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { useLocation, useNavigate } from "react-router-dom";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import StudentReminderMessageHistoryCard from "./StudentReminderMessageHistoryCard";
import { useGetReminderHistoryByAdmission } from "../../../../../hooks/member_tab/admission-api";
const StudentReminderMessageHistory = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const getQuery = useLocation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [historyList, setHistoryList] = useState([]);

  const {
    getReminderHistoryByAdmission,
    getReminderHistoryByAdmissionRefetch,
  } = useGetReminderHistoryByAdmission({
    data: {
      id: getQuery.state?.instituteId,
      page: page,
      limit: 10,
    },
    skip: !getQuery.state?.instituteId,
  });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (getQuery.state?.instituteId) {
      setShowingDataLoading(true);
      getReminderHistoryByAdmissionRefetch();
    }
  }, [getQuery.state?.instituteId, page, getReminderHistoryByAdmissionRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getReminderHistoryByAdmission?.all_message) {
      if (page === 1) {
        setHistoryList(getReminderHistoryByAdmission?.all_message);
      } else {
        setHistoryList((prevState) =>
          [
            ...new Set(
              [
                ...prevState,
                ...getReminderHistoryByAdmission?.all_message,
              ]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
      }
      setShowingDataLoading(false);
    } else if (getReminderHistoryByAdmission?.all_message?.length === 0)
      setShowingDataLoading(false);
    else {
    }

    if (getReminderHistoryByAdmission?.all_message?.length === 10)
      setState(true);
    else setState(false);
  }, [getReminderHistoryByAdmission?.all_message]);
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
          <h6>{t("reminder_message_history")}</h6>
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
            <StudentReminderMessageHistoryCard data={data} />
          </div>
        ) : (
          <StudentReminderMessageHistoryCard key={data?._id} data={data} />
        )
      )}
      {showingDataLoading && <QvipleLoading status="white" />}
    </div>
  );
};

export default StudentReminderMessageHistory;
