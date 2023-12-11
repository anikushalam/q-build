import React from "react";
import style from "./InstituteSetting.module.css";
import BorderBottom from "../components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../../Dashboard/InsDashboard/Components/Navbar/Navbar";
import InstituteSettingTab from "./InstituteSettingTab";
const InstituteSettingConfig = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const onGoback = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={style.navbar}>
        <Navbar status="home" />
      </div>

      <div className={style.goback_container}>
        <div className={style.goback_container_text} onClick={onGoback}>
          <img src="/images/arr-left-white.svg" alt="go back icon" />
          <h6 className={style.goback_container_text_go}>{t("go_back")}</h6>
        </div>
      </div>

      <div className={style.student_from_container}>
        <h6 className={style.student_from_fill}>{t("institute_setting")}</h6>

        <BorderBottom customStyle={{ width: "100%" }} />

        <InstituteSettingTab />
      </div>
    </>
  );
};

export default InstituteSettingConfig;
