import React from "react";
import style from "./Tabs.module.css";
import { useTranslation } from "react-i18next";
import SportClassTabChangeLink from "../SportClassTabChangeLink";

function Tabs({ carryParentState, activeUrl }) {
  const { t } = useTranslation();
  return (
    <div className={style.mcqTop}>
      <div className={style.mcqToptabs}>
        <SportClassTabChangeLink
          carryParentState={carryParentState}
          customStyleOfLink={{ width: "50%" }}
        >
          <div
            className={
              activeUrl?.substring(3) !== "teams"
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
          >
            {t("members")}
          </div>
        </SportClassTabChangeLink>
        <SportClassTabChangeLink
          carryParentState={carryParentState}
          activeTab="teams"
          customStyleOfLink={{ width: "50%" }}
        >
          <div
            className={
              activeUrl?.substring(3) === "teams"
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
          >
            {t("teams")}
          </div>
        </SportClassTabChangeLink>
      </div>
    </div>
  );
}

export default Tabs;
