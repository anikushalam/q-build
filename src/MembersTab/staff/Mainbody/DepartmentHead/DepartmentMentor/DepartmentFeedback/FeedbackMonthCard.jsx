import React from "react";
import style from "../Mentor.module.css";
import { useTranslation } from "react-i18next";
import moment from "moment";
const FeedbackMonthCard = ({ viewAs, customStyleContainer }) => {
  const { t } = useTranslation();
  return (
    <div className={style.mentor_card_container} style={customStyleContainer}>
      {viewAs === "CALENDER_TYPE" ? (
        <>
          <img
            src="/images/finance/calender-payroll-icon.svg"
            alt="mentor avatar"
            style={{
              borderRadius: "0",
            }}
          />
          <div className={style.mentor_container_inner}>
            <h6>{moment().format("DD MMMM yyyy")}</h6>
            <p>
              45 {t("out_off")} 100 {t("feedbacks")}
            </p>
          </div>
        </>
      ) : (
        <>
          <img
            src="/images/fees-category-icon.svg"
            alt="mentor avatar"
            style={{
              borderRadius: "0",
            }}
          />
          <div className={style.mentor_container_inner}>
            <h6>{t("feedback_questions")}</h6>
            <p>{t("total")} 100</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FeedbackMonthCard;
