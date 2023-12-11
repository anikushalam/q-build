import React, { useState } from "react";
import style from "./AlumniMiddleConetent.module.css";
import { useTranslation } from "react-i18next";
import Tabs from "./Tabs";
import AlumniTabChangeLink from "./AlumniTabChnageLink";
import AlumniList from "./AlumniList/AlumniList";

function AlumniMiddleContent({ carryParentState }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <div className={style.MiddleContent}>
      <div className={style.MiddleContentLeft}>
        <div className={style.tabs}>
          <Tabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>

        {activeIndex === 0 && (
          <div className={style.itemIconContainer}>
            <AlumniTabChangeLink
              carryParentState={carryParentState}
              activeTab="register&alumni"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/alumni/alumni-reg.svg"
                  alt="alumni-register"
                />
                <p>{t("reg_alumni_for_cert")}</p>
              </div>
            </AlumniTabChangeLink>

            <AlumniTabChangeLink
              carryParentState={carryParentState}
              activeTab="feedback"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/alumni/alumni-feedback.svg"
                  alt="alumni feedback"
                />
                <p>{t("alumni_feed")}</p>
              </div>
            </AlumniTabChangeLink>

            <AlumniTabChangeLink
              carryParentState={carryParentState}
              activeTab="prominent"
            >
              <div className={style.itemIcon}>
                <img src="/images/alumni/proinent-alumni.svg" alt="prominent" />
                <p>{t("prominent_alumni")}</p>
              </div>
            </AlumniTabChangeLink>
            {/* 
            <AlumniTabChangeLink
              carryParentState={carryParentState}
              activeTab="governing&body"
            > */}
            <div className={style.itemIcon}>
              <img
                src="/images/alumni/governing-body.svg"
                alt="governing_body"
              />
              <p>{t("governing_body")}</p>
            </div>
            {/* </AlumniTabChangeLink> */}
          </div>
        )}

        {activeIndex === 1 && (
          <AlumniList carryParentState={carryParentState} />
        )}
      </div>
    </div>
  );
}

export default AlumniMiddleContent;
