import React from "react";
import style from "./Tabs.module.css";
import { useTranslation } from "react-i18next";
// import RippleButton from "../../../../../../Tabs/RippleButton/RippleButton";

function Tabs({ activeIndex, setActiveIndex, seminarData, setSeminarData }) {
  const { t } = useTranslation();
  return (
    <div className={style.mcqTop}>
      <div className={style.mcqToptabs}>
        <div
          className={
            activeIndex === 0
              ? `${style.mcqTopItem} ${style.active}`
              : style.mcqTopItem
          }
          onClick={() => {
            setActiveIndex(0);
            setSeminarData({ ...seminarData, seminar_mode: "Offline" });
          }}
        >
          {t("offline")}
        </div>

        <div
          className={
            activeIndex === 1
              ? `${style.mcqTopItem} ${style.active}`
              : style.mcqTopItem
          }
          onClick={() => {
            setActiveIndex(1);
            setSeminarData({ ...seminarData, seminar_mode: "Online" });
          }}
        >
          {t("online")}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
