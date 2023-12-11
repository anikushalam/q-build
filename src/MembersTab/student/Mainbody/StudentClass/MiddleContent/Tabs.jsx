import React from "react";
import style from "./Tabs.module.css";
import { useTranslation } from "react-i18next";
import StudentTabChangeLink from "../StudentTabChangeLink";
import { useLocation } from "react-router-dom";

function Tabs({ carryParentState }) {
  const { t } = useTranslation();
  const getQuery = useLocation();

  return (
    <div className={style.mcqTop}>
      <div className={style.mcqToptabs}>
        <StudentTabChangeLink carryParentState={carryParentState} activeTab="">
          <div
            className={
              !getQuery.search
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
          >
            {t("menu")}
          </div>
        </StudentTabChangeLink>

        <StudentTabChangeLink
          carryParentState={carryParentState}
          activeTab="about"
        >
          <div
            className={
              getQuery.search?.substring(3) === "about"
                ? `${style.mcqTopItem} ${style.active} ${style.mcqTopItemm}`
                : `${style.mcqTopItem} ${style.mcqTopItemm}`
            }
          >
            {t("about")}
          </div>
        </StudentTabChangeLink>

        <StudentTabChangeLink
          carryParentState={carryParentState}
          activeTab="activity"
        >
          <div
            className={
              getQuery.search?.substring(3) === "activity"
                ? `${style.mcqTopItem} ${style.active} ${style.mcqTopItemm}`
                : `${style.mcqTopItem} ${style.mcqTopItemm}`
            }
          >
            {t("activity")}
          </div>
        </StudentTabChangeLink>
      </div>
    </div>
  );
}

export default Tabs;
