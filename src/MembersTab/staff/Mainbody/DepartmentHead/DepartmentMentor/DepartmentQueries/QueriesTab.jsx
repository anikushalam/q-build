import React from "react";
import style from "../../../Hostel/MiddleContent/Tabs.module.css";
import { useTranslation } from "react-i18next";

const QueriesTab = ({ activeIndex, setActiveIndex }) => {
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
          {t("unsolved")}
        </div>

        <div
          className={
            activeIndex === 1
              ? `${style.mcqTopItem} ${style.active}`
              : style.mcqTopItem
          }
          onClick={() => setActiveIndex(1)}
        >
          {t("solved")}
        </div>
      </div>
    </div>
  );
};

export default QueriesTab;
