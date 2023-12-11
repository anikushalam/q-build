import React from "react";
import style from "../ElectionNotification/ElectionNotification.module.css";
import { useTranslation } from "react-i18next";

const MentorFeedbackActivity = () => {
  const { t } = useTranslation();
  return (
    <div className={style.vote_result_wrapper}>
      <h6
        className={style.vote_result_heading}
        style={{
          display: "inline-block",
        }}
      >
        {t("give_feedback_to_mentor")}
      </h6>
      <button className={style.give_feedback_btn}>{t("give_feedback")}</button>
      <p className={style.vote_time}>From 11th Feb to 15th Feb</p>
      <hr />
      <div
        className={style.vote_member}
        style={{
          marginBottom: "0",
        }}
      >
        <img
          // src={`${imageShowUrl}/${election?.election_winner?.studentProfilePhoto}`}
          src="/images/member_tab/class/default_avatar.svg"
          style={{ borderRadius: "50%", width: "2.7vw", height: "2.7vw" }}
          alt="candidate avatar"
        />
        <div>
          {/* <h6 className={style.vote_candidate}>{`${
                election?.election_winner?.studentFirstName
              } ${election?.election_winner?.studentMiddleName || ""} ${
                election?.election_winner?.studentLastName
              }`}</h6> */}
          <h6 className={style.vote_candidate}>Kavita Sathe</h6>
          <p className={style.vote_tagline}>{t("mentor")}</p>
        </div>
      </div>
    </div>
  );
};

export default MentorFeedbackActivity;
