import React from "react";
import { useTranslation } from "react-i18next";
import style from "./SeatingArrangement.module.css";

const SubjectCard = ({
  subject,
  classMaster,
  customCardStyle,
  onCurrentSubject,
  viewAs,
}) => {
  const { t } = useTranslation();

  const onClick = () => {
    if (viewAs === "SEATING")
      onCurrentSubject({
        classMaster,
        subject,
      });
  };
  return (
    <div
      className={
        viewAs === "SEATING"
          ? `${style.subject_container} ${style.subject_container_active}`
          : style.subject_container
      }
      onClick={onClick}
      style={customCardStyle}
    >
      <h6>{subject?.subjectName ?? ""}</h6>
      <p className={style.subject_standard}>{classMaster ?? ""}</p>
      <p className={style.subject_other}>
        {t("date")} {": "}
        {subject?.date ?? ""}
      </p>
      <p className={style.subject_other}>
        {t("time")}
        {": "}
        {`${subject?.startTime ?? ""} to ${subject?.endTime ?? ""}`}
      </p>
      <p className={style.subject_other}>
        {t("marks")}
        {": "}
        {subject?.totalMarks ?? 0}
      </p>
      <p className={style.subject_other}>
        {t("co_mapping")}
        {" : "}
        {subject?.copo_list?.map((attainment, index) => (
          <span key={attainment?.attainmentId}>
            {index <= 0 ? "" : ", "}
            {attainment?.attainment_name} {": "}
            {attainment?.marks ?? ""}
          </span>
        ))}
      </p>
      {subject?.subject_attachment?.[0]?.documentName ? (
        <p className={style.subject_other}>
          {t("file")}
          {": "}
          {subject?.subject_attachment?.[0]?.documentName}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default SubjectCard;
