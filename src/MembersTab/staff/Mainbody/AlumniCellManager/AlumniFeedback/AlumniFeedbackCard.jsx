import React from "react";
import style from "./AlumniFeedback.module.css";
import { useTranslation } from "react-i18next";

function AlumniFeedbackCard({ aid, poll }) {
  const { t } = useTranslation();
  return (
    <div className={style.alumnifeedbackcard}>
      <img
        src="/images/menu-dots-icon.svg"
        alt="menu"
        className={style.menudot}
      />
      <p className={style.pollabel}>{t("feed_question")}</p>

      <p className={style.pollquestion}>{poll?.poll_question}</p>

      <div className={style.options}>
        {poll?.poll_answer?.map((answer, index) => (
          <div className={style.barContainer} key={index}>
            <h6>{answer?.content}</h6>
            <p>{answer?.percent_vote?.toFixed(0)} %</p>
            <div
              className={style.bar}
              style={{
                width: `${answer?.percent_vote}%`,
                backgroundColor: answer?.color_type
                  ? `${answer?.color_type}`
                  : `#F2F2F2`,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlumniFeedbackCard;
