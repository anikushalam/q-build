import React from "react";
import style from "./Tabs.module.css";
import { useTranslation } from "react-i18next";

function Tabs({ bookAddType, onToggleType }) {
  const { t } = useTranslation();
  return (
    <div className={style.mcqTop}>
      <div className={style.mcqToptabs}>
        <div
          className={
            !bookAddType
              ? `${style.mcqTopItem} ${style.active}`
              : style.mcqTopItem
          }
          onClick={() => onToggleType("offline")}
        >
          {t("offline")}
        </div>

        <div
          className={
            bookAddType
              ? `${style.mcqTopItem} ${style.active}`
              : style.mcqTopItem
          }
          onClick={() => onToggleType("online")}
        >
          {t("online")}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
