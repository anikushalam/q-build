import React from "react";
import style from "./MiddleBodyRight.module.css";
import { useTranslation } from "react-i18next";

const MiddleBodyRight = ({ questionCount, answerQuestionCount, upVote }) => {
  const { t } = useTranslation();
  return (
    <div className={style.middleBodyRight}>
      <div className={style.middleBodyRightTop}>
        {" "}
        {t("know_s")} ({t("knowledge_score")})
      </div>
      <div className={style.middleBodyRightbottom}>
        <h6>
          {t("total_questions_asked")} : {questionCount}
        </h6>
        <h6>
          {t("questions_answered")} : {answerQuestionCount}
        </h6>
        <h6>
          {t("total_upward")} : {upVote}
        </h6>
      </div>
    </div>
  );
};

export default MiddleBodyRight;
