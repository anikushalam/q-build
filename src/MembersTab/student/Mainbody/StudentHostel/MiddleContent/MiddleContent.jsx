import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import HostelAnnouncement from "../../../../staff/Mainbody/Hostel/HostelAnnouncement.jsx/HostelAnnouncement";
import Roommate from "../Roommate";
import StudentHostelTabChangeLink from "../StudentHostelTabChangeLink";
import style from "./MiddleContent.module.css";
import Tabs from "./Tabs";

function MiddleContent({ carryParentState, studentId, hid }) {
  const { t } = useTranslation();
  const getQuery = useLocation();

  return (
    <div className={style.MiddleContent}>
      <div className={style.MiddleContentLeft}>
        <div className={style.tabs}>
          <Tabs carryParentState={carryParentState} />
        </div>
        {!getQuery?.search && (
          <div className={style.item}>
            <StudentHostelTabChangeLink
              carryParentState={carryParentState}
              activeTab="knows"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/hostel/hostel-hostelite-icon.svg"
                  alt="attendence_time"
                />
                <p>{t("knows_hostelites")}</p>
              </div>
            </StudentHostelTabChangeLink>
            {/* <StudentHostelTabChangeLink
              carryParentState={carryParentState}
              activeTab="complaint"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/hostel/hostel-complaints-icon.svg"
                  alt="assigmnent"
                />
                <p>{t("complaints")}</p>
              </div>
            </StudentHostelTabChangeLink> */}
            <StudentHostelTabChangeLink
              carryParentState={carryParentState}
              activeTab="rule"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/hostel/hostel-rule-icon.svg"
                  alt="daily_updates"
                />
                <p>{t("rules_and_regulation")}</p>
              </div>
            </StudentHostelTabChangeLink>
            <StudentHostelTabChangeLink
              carryParentState={carryParentState}
              activeTab="fees"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/department/department-fees-icon.svg"
                  alt="fees"
                />
                <p>{t("fees_data")}</p>
              </div>
            </StudentHostelTabChangeLink>
            {/* <StudentHostelTabChangeLink
              carryParentState={carryParentState}
              activeTab="renewal"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/hostel/hostel-renewal-icon.svg"
                  alt="examinations"
                />
                <p>{t("stay_renewal")}</p>
              </div>
            </StudentHostelTabChangeLink> */}
          </div>
        )}
        {getQuery?.search?.substring(3) === "roommate" && (
          <Roommate sid={studentId} />
        )}
        {getQuery?.search?.substring(3) === "notice" && (
          <div
            style={{
              padding: "1rem",
            }}
          >
            <HostelAnnouncement hid={hid} carryParentState={carryParentState} />
          </div>
        )}
      </div>
    </div>
  );
}

export default MiddleContent;
