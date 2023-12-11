import React from "react";
import style from "./NewTabs.module.css";
import { useTranslation } from "react-i18next";
// import RippleButton from "../../../../../../Tabs/RippleButton/RippleButton";

function NewTabs({ activeIndex, setActiveIndex }) {
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
          onClick={() => setActiveIndex(0)}
        >
          {t("events")}
        </div>

        <div
          className={
            activeIndex === 1
              ? `${style.mcqTopItem} ${style.active}`
              : style.mcqTopItem
          }
          onClick={() => setActiveIndex(1)}
        >
          {t("sports")}
        </div>
      </div>
    </div>
  );
}

export default NewTabs;
