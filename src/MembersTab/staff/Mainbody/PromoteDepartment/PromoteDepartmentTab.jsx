import React from "react";
import { useTranslation } from "react-i18next";
import style from "../StaffAdmisionAdmin/MiddleContent/Tabs.module.css";
function PromoteDepartmentTab({ activeIndex, setActiveIndex }) {
  const { t } = useTranslation();
  return (
    <div
      className={style.mcqTop}
      style={{
        padding: "0",
      }}
    >
      <div className={style.mcqToptabs}>
        <div
          className={
            activeIndex === 0
              ? `${style.mcqTopItem} ${style.active}`
              : style.mcqTopItem
          }
          onClick={() => setActiveIndex(0)}
        >
          {t("all_students")}
        </div>

        <div
          className={
            activeIndex === 1
              ? `${style.mcqTopItem} ${style.active}`
              : style.mcqTopItem
          }
          onClick={() => setActiveIndex(1)}
        >
          {t("departments")}
        </div>
        <div
          className={
            activeIndex === 2
              ? `${style.mcqTopItem} ${style.active}`
              : style.mcqTopItem
          }
          onClick={() => setActiveIndex(2)}
        >
          {t("settings")}
        </div>
      </div>
    </div>
  );
}

export default PromoteDepartmentTab;
