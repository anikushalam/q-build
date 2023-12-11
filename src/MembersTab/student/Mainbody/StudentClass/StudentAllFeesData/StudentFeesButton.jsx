import React from "react";
import style from "./StudentAllFeesData.module.css";
import { useTranslation } from "react-i18next";
const StudentFeesButton = ({
  label,
  value,
  currentValue,
  onClick,
  customStyleContainer,
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={
        value === currentValue
          ? `${style.student_fees_btn_container} ${style.student_fees_btn_container_active}`
          : style.student_fees_btn_container
      }
      onClick={() => onClick(currentValue)}
      style={customStyleContainer}
    >
      <h6>{t(label)}</h6>
      <img src="/images/studentclass/fees/fees_arrow_right.svg" alt="arrow" />
    </div>
  );
};

export default StudentFeesButton;
