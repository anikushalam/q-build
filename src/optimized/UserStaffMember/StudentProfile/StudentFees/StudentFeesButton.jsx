import React from "react";
import style from "./StudentFees.module.css";
import { useTranslation } from "react-i18next";
import { assestsUserFinanceUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const StudentFeesButton = ({ label, isActive, customStyleContainer, url }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const onNavigate = () => {
    navigate(`/${params.username}/student/profile?type=fees${url}`, {
      state: getQuery.state,
    });
  };
  return (
    <div
      className={
        isActive
          ? `${style.student_fees_btn_container} ${style.student_fees_btn_container_active}`
          : style.student_fees_btn_container
      }
      onClick={onNavigate}
      style={customStyleContainer}
    >
      <h6>{t(label)}</h6>
      <img src={`${assestsUserFinanceUrl}/forward.svg`} alt="arrow" />
    </div>
  );
};

export default StudentFeesButton;
