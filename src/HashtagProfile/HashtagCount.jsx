import React from "react";
import { useTranslation } from "react-i18next";
import BorderBottom from "../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "./HashtagProfile.module.css";
const HashtagCount = ({ hash }) => {
  const { t } = useTranslation();

  return (
    <div className={style.hashtag_right}>
      <div className={style.hashtag_right_one}>
        <div className={style.hashtag_count_text}>
          <h6>{t("hashtag_follower")}</h6>
          <p>{t("hashtag_follower_placeholder")}</p>
        </div>
        <h6>{hash?.hashtag_follower_count ?? 0}</h6>
      </div>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <div className={style.hashtag_right_one}>
        <div className={style.hashtag_count_text}>
          <h6>{t("hashtag_question")}</h6>
          <p>{t("hashtag_question_placeholder")}</p>
        </div>
        <h6>{hash?.hashtag_question_count ?? 0}</h6>
      </div>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <div className={style.hashtag_right_one}>
        <div className={style.hashtag_count_text}>
          <h6>{t("hashtag_quiz_polls")}</h6>
          <p>{t("hashtag_quiz_polls_placeholder")}</p>
        </div>
        <h6>{hash?.hashtag_poll_count ?? 0}</h6>
      </div>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <div className={style.hashtag_right_one}>
        <div className={style.hashtag_count_text}>
          <h6>{t("hashtag_answers")}</h6>
          <p>{t("hashtag_answers_placeholder")}</p>
        </div>
        <h6>{hash?.hashtag_repost_count ?? 0}</h6>
      </div>
    </div>
  );
};

export default HashtagCount;
