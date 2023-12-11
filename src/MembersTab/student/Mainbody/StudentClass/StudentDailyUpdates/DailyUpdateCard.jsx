import React from "react";
import style from "./StudentDailyUpdates.module.css";
import moment from "moment";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import { useTranslation } from "react-i18next";

function DailyUpdateCard({ update }) {
  const { t } = useTranslation();

  return (
    <div className={style.dailyUpdateCard}>
      <div className={style.cardTop}>
        <h6>{moment().format("Do MMM YY")}</h6>
        <p>
          {t("by_")} {update?.subject?.subjectTeacherName?.staffFirstName}{" "}
          {update?.subject?.subjectTeacherName?.staffMiddleName
            ? update?.subject?.subjectTeacherName?.staffMiddleName
            : ""}{" "}
          {update?.subject?.subjectTeacherName?.staffLastName}`
        </p>
      </div>
      <p className={style.carddesc}>{update?.updateDescription}</p>

      <div className={style.cardImages}>
        {update?.upadateImage?.map((doc) => (
          <img
            className={style.cardImag}
            src={`${imageShowUrl}/${doc?.documentKey}`}
            alt=""
          />
        ))}
      </div>
      <div className={style.cardBottom}>
        <p>{moment(update?.createdAt).format("Do MMM YY")}</p>
        <p>{moment(update?.createdAt).format("LT")}</p>
      </div>
    </div>
  );
}

export default DailyUpdateCard;
