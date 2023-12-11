import React from "react";
import { useTranslation } from "react-i18next";
import style from "./SeatingArrangement.module.css";
import moment from "moment";

const SeatingExaminationCard = ({
  customExamStyle,
  examDetail,
  viewAs,
  studentCount,
}) => {
  const { t } = useTranslation();
  let rt =
    examDetail?.currentSubject?.subject?.date?.split("/") ??
    examDetail?.date?.split("/");

  return (
    <div
      className={style.seating_examination_container}
      style={customExamStyle}
    >
      <h6>{examDetail?.examName ?? ""}</h6>
      <p>
        {examDetail?.currentSubject?.subject?.subjectName ??
          examDetail?.subjectName ??
          ""}
        ,{" "}
        {`${
          examDetail?.currentSubject?.classMaster
            ? `${examDetail?.currentSubject?.classMaster} ,`
            : ""
        }`}
        {examDetail?.selectClass ?? ""}
      </p>
      <p>
        {moment(`${rt?.[2]}-${rt?.[1]}-${rt?.[0]}`)?.format("DD-MMM-yyyy")},{" "}
        {examDetail?.currentSubject?.subject?.startTime ??
          examDetail?.startTime ??
          ""}{" "}
        to{" "}
        {examDetail?.currentSubject?.subject?.endTime ??
          examDetail?.endTime ??
          ""}
      </p>
      {viewAs === "ADD_SEATING" ? (
        <p>
          {t("students")}: {`(${studentCount ?? 0} ${t("students")})`}
        </p>
      ) : (
        <p>
          {t("students")}: From {examDetail?.from} to {examDetail?.to}{" "}
          {`(${+examDetail?.to - +examDetail?.from} ${t("students")})`}
        </p>
      )}
    </div>
  );
};

export default SeatingExaminationCard;
