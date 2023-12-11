import React from "react";
import { useTranslation } from "react-i18next";
import style from "../SeatingArrangement.module.css";

const SelectedCountView = ({
  customExamStyle,
  examName,
  total_staff,
  total_classroom,
  student_count,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={style.seating_examination_container}
      style={customExamStyle}
    >
      <h6>{examName ?? ""}</h6>
      <p>
        {t("total_staffs")} {" : "} {total_staff ?? 0}
      </p>
      <p>
        {t("total_classrooms")} {total_classroom ?? 0}
      </p>
      <p>
        {t("total_students")} {" : "} {student_count ?? 0}
      </p>
    </div>
  );
};

export default SelectedCountView;
