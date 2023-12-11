import React from "react";
import style from "./DailyUpdatesTabs.module.css";
import RippleButton from "./RippleButton/RippleButton";
import { useTranslation } from "react-i18next";

function Tabs({ activeIndex, setActiveIndex }) {
  const { t } = useTranslation();

  return (
    <div className={style.mcqTop}>
      <div
        className={
          activeIndex === 0
            ? `${style.mcqTopItem} ${style.active}`
            : style.mcqTopItem
        }
        onClick={() => setActiveIndex(0)}
      >
        <RippleButton>{t("all")}</RippleButton>
      </div>
      <div
        className={
          activeIndex === 1
            ? `${style.mcqTopItem} ${style.active} `
            : `${style.mcqTopItem} ${style.ripple}`
        }
        onClick={() => setActiveIndex(1)}
      >
        <RippleButton>{t("math")}</RippleButton>
      </div>
    </div>
  );
}

export default Tabs;
