import React from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import style from "../ElectionNotification/ElectionNotification.module.css";

const SubjectMarkUpdateActivity = ({ activity }) => {
  const params = useParams();
  const { t } = useTranslation();
  return (
    <div className={style.vote_result_wrapper}>
      <div
        className={style.vote_member}
        style={{
          marginBottom: "0",
        }}
      >
        <img
          src="/images/profileAndCover/department-profile-img.svg"
          style={{ borderRadius: "50%", width: "2.7vw", height: "2.7vw" }}
          alt="candidate avatar"
        />
        <div>
          <h6 className={style.vote_candidate}>
            {activity?.notifyContent ?? ""}
          </h6>
        </div>
      </div>
      <hr />
      {/* 
      <h6
        className={style.vote_result_heading}
        style={{
          display: "inline-block",
        }}
      >
        {t("backlog_exam")}
      </h6> */}
      <Link
        to={`/q/${params.username}/member/backlog/subject/marks`}
        state={{
          examId: activity?.examId,
          classId: activity?.classId,
          subjectId: activity?.subjectId,
        }}
      >
        <button className={style.give_feedback_btn}>{t("mark_update")}</button>
      </Link>
      <p
        className={style.vote_time}
        style={{
          marginBottom: "0.3rem",
        }}
      >
        {moment(activity?.notifyTime).format("DD MMM yyyy")},{" "}
        {moment(activity?.notifyTime).format("LT")}
      </p>
    </div>
  );
};

export default SubjectMarkUpdateActivity;
