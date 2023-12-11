import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import InsTenderCard from "./InsTenderCard";
import style from "./InsCareerMiddleContent.module.css";
import Tabs from "./Tabs";
import OngoingTenders from "./OngoingTenders";
import ClosedTenders from "./ClosedTenders";

function InsCareerMiddleContent({ setStatus, ltid }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  return (
    <div className={style.MiddleContent}>
      <div className={style.MiddleContentLeft}>
        <div className={style.tabs}>
          <Tabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
        {activeIndex === 0 && (
          <div className={style.MiddleContentLeftop}>
            <p onClick={() => setStatus("openForm")}>{t("create_tender")}</p>
          </div>
        )}

        {activeIndex === 0 && (
          <OngoingTenders setStatus={setStatus} ltid={ltid} />
        )}

        {activeIndex === 1 && (
          <ClosedTenders setStatus={setStatus} ltid={ltid} />
        )}
      </div>
    </div>
  );
}

export default InsCareerMiddleContent;
