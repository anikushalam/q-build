import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import AlumniList from "./AlumniList/AlumniList";
// import CompletedVacancies from "./CompletedVacancies";
// import InsCareerCard from "./InsCareerCard";
import style from "./InsAlumniMiddleContent.module.css";
// import OngoingVacancies from "./OngoingVacancies";
import Tabs from "./Tabs";

function InsAlumniMiddleContent({ setStatus, aid, flag }) {
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
        {/* <div className={style.MiddleContentLeftop}>
          <p onClick={() => setStatus("openForm")}>{t("open_vacancies")}</p>
        </div> */}

        {activeIndex === 0 && (
          <div className={style.itemIconContainer}>
            <div
              className={style.itemIcon}
              onClick={() => setStatus("regAlumni")}
            >
              <img src="/images/alumni/alumni-reg.svg" alt="alumni-register" />
              <p>{t("reg_alumni_for_cert")}</p>
            </div>

            <div
              className={style.itemIcon}
              onClick={() => setStatus("alumniFeedback")}
            >
              <img
                src="/images/alumni/alumni-feedback.svg"
                alt="alumni feedback"
              />
              <p>{t("alumni_feed")}</p>
            </div>

            <div
              className={style.itemIcon}
              onClick={() => setStatus("prominent")}
            >
              <img src="/images/alumni/proinent-alumni.svg" alt="prominent" />
              <p>{t("prominent_alumni")}</p>
            </div>

            <div className={style.itemIcon}>
              <img
                src="/images/alumni/governing-body.svg"
                alt="governing_body"
              />
              <p>{t("governing_body")}</p>
            </div>
          </div>
        )}

        {activeIndex === 1 && (
          <AlumniList setStatus={setStatus} aid={aid} flag={flag} />
        )}
      </div>
    </div>
  );
}

export default InsAlumniMiddleContent;
