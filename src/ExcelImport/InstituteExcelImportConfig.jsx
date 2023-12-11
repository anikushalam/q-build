import React, { useState } from "react";
import style from "../StaffTab/InstituteSetting/InstituteSetting.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Navbar from "../Dashboard/InsDashboard/Components/Navbar/Navbar";
import BorderBottom from "../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import InstituteExcelImportTab from "./InstituteExcelImportTab";
import ExcelSelectDepartment from "./ExcelSelectDepartment";
const InstituteExcelImportConfig = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");

  const onGoback = () => {
    navigate(-1);
  };

  const onActive = (val) => {
    setActiveTab(val);
  };

  const onCloseState = () => {
    setActiveTab("");
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
        <h6 className={style.student_from_fill}>{t("excel_import")}</h6>

        <BorderBottom customStyle={{ width: "100%" }} />

        <InstituteExcelImportTab onActive={onActive} />
        {activeTab && (
          <ExcelSelectDepartment
            onClose={onCloseState}
            isAuthority={activeTab}
          />
        )}
      </div>
    </>
  );
};

export default InstituteExcelImportConfig;
