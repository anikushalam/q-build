import React from "react";
import style from "./DepartmentSetting.module.css";
import "./DepartmentSetting.css";
import Complaints from "./Complaints/Complaints";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";

const DepartmentComplaint = ({ did }) => {
  const { t } = useTranslation();
  return (
    <div className={style.ClassSetting}>
      <h6>{t("complaints")}</h6>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <Complaints did={did} />
    </div>
  );
};

export default DepartmentComplaint;
