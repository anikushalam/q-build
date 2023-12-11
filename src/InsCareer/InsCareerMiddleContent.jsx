import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CompletedVacancies from "./CompletedVacancies";
import InsCareerCard from "./InsCareerCard";
import style from "./InsCareerMiddleContent.module.css";
import OngoingVacancies from "./OngoingVacancies";
import Tabs from "./Tabs";

function InsCareerMiddleContent({ setStatus, lcid, flag }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [status, setsetStatus] = useState(
    activeIndex === 0 ? "Ongoing" : "Completed"
  );
  const { t } = useTranslation();
  return (
    <div className={style.MiddleContent}>
      <div className={style.MiddleContentLeft}>
        <div className={style.tabs}>
          <Tabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
        <div className={style.MiddleContentLeftop}>
          <p onClick={() => setStatus("openForm")}>{t("open_vacancies")}</p>
        </div>

        {activeIndex === 0 && (
          <OngoingVacancies setStatus={setStatus} lcid={lcid} flag={flag} />
        )}

        {activeIndex === 1 && (
          <CompletedVacancies setStatus={setStatus} lcid={lcid} flag={flag} />
        )}
      </div>
    </div>
  );
}

export default InsCareerMiddleContent;
