import React, { useState } from "react";
import style from "./MiddleContent.module.css";
import Tabs from "./Tabs";
import { useTranslation } from "react-i18next";
import "./Tabs.css";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import ClassTabChangeLink from "../../ClassTabChangeLink";

function MiddleContent({ classProfile, carryParentState }) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={style.MiddleContent}>
      <div className={style.MiddleContentLeft}>
        <div className={style.tabs}>
          <Tabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>

        {activeIndex === 0 && (
          <div className={style.item}>
            <ClassTabChangeLink
              carryParentState={carryParentState}
              activeTab="catalog"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/class/class-catalog-icon.svg"
                  alt="Class Catalog"
                />
                <p>{t("class_catalog")}</p>
              </div>
            </ClassTabChangeLink>
            <ClassTabChangeLink
              carryParentState={carryParentState}
              activeTab="batch"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/master-24-grey-icon.svg"
                  alt="Class Catalog"
                />
                <p>{t("hostel_tab_batch")}</p>
              </div>
            </ClassTabChangeLink>
            <ClassTabChangeLink
              carryParentState={carryParentState}
              activeTab="attendance"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/class/class-attendance-icon.svg"
                  alt="attendence"
                />
                <p> {t("attendance")} </p>
              </div>
            </ClassTabChangeLink>
            <ClassTabChangeLink
              carryParentState={carryParentState}
              activeTab="leave"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/class/class-leave-transfer-icon.svg"
                  alt="student Request"
                />
                <p>{t("leaves_and_transfer")}</p>
              </div>
            </ClassTabChangeLink>
            <ClassTabChangeLink
              carryParentState={carryParentState}
              activeTab="fees"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/department/department-fees-icon.svg"
                  alt="fees"
                />
                <p>{t("class_fees")}</p>
              </div>
            </ClassTabChangeLink>
            <ClassTabChangeLink
              carryParentState={carryParentState}
              activeTab="time-table"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/class/class-timetable-icon.svg"
                  alt="settings"
                />
                <p>{t("time_table")}</p>
              </div>
            </ClassTabChangeLink>
            <ClassTabChangeLink
              carryParentState={carryParentState}
              activeTab="checklist"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/department/department-checklist-icon.svg"
                  alt="fees"
                />
                <p>{t("checklist")}</p>
              </div>
            </ClassTabChangeLink>

            <ClassTabChangeLink
              carryParentState={carryParentState}
              activeTab="behaviour"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/class/class-behaviour-icon.svg"
                  alt="Behaviour"
                />
                <p>{t("behaviour")}</p>
              </div>
            </ClassTabChangeLink>
            <ClassTabChangeLink
              carryParentState={carryParentState}
              activeTab="report"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/class/class-report-icon.svg"
                  alt="final report"
                />
                <p>{t("final_report")}</p>
              </div>
            </ClassTabChangeLink>
            <ClassTabChangeLink
              carryParentState={carryParentState}
              activeTab="promote"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/class/class-promote-icon.svg"
                  alt="settings"
                />
                <p>{t("promote_student")}</p>
              </div>
            </ClassTabChangeLink>
            <ClassTabChangeLink
              carryParentState={carryParentState}
              activeTab="complaint"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/department/department-complaint-icon.svg"
                  alt="settings"
                />
                <p>{t("complaints")}</p>
              </div>
            </ClassTabChangeLink>
            <ClassTabChangeLink
              carryParentState={carryParentState}
              activeTab="setting"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/class/class-setting-icon.svg"
                  alt="settings"
                />
                <p>{t("setting")}</p>
              </div>
            </ClassTabChangeLink>
            <ClassTabChangeLink
              carryParentState={carryParentState}
              activeTab="request"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/class/class-request-icon.svg"
                  alt="student Request"
                />
                <p>{t("request")}</p>
              </div>
            </ClassTabChangeLink>
          </div>
        )}
        {activeIndex === 1 && (
          <div className={style.classList}>
            {classProfile?.subject?.map((sub) => (
              <ClassTabChangeLink
                carryParentState={{
                  ...carryParentState,
                  subjectId: sub?._id,
                  subjectName: `${sub?.subjectName} ${
                    sub?.subject_category ? `(${sub?.subject_category})` : ""
                  } ${
                    sub?.selected_batch_query?.batchName
                      ? `(${sub?.selected_batch_query?.batchName})`
                      : ""
                  } ${
                    sub?.subjectOptional === "Optional"
                      ? `(${sub?.subjectOptional})`
                      : ""
                  }`,
                  batchId: sub?.selected_batch_query?._id,
                }}
                activeTab="subject-detail"
                key={sub._id}
              >
                <div className={style.classListItem}>
                  <img
                    src={
                      sub?.subjectTeacherName?.staffProfilePhoto
                        ? `${imageShowUrl}/${sub?.subjectTeacherName?.staffProfilePhoto}`
                        : "/images/subject-icon.svg"
                    }
                    alt="subject head avatar"
                  />
                  <div>
                    <h6>
                      {" "}
                      {sub?.subjectName ?? ""}{" "}
                      {sub?.subject_category
                        ? `(${sub?.subject_category})`
                        : ""}
                      {sub?.selected_batch_query?.batchName ? (
                        <span
                          style={{
                            fontWeight: "400",
                            fontSize: "12px",
                          }}
                        >
                          {" "}
                          ({sub?.selected_batch_query?.batchName ?? ""})
                        </span>
                      ) : null}
                      {sub?.subjectOptional === "Optional" &&
                        `(${sub?.subjectOptional})`}
                    </h6>
                    <p>{`${sub?.subjectTeacherName?.staffFirstName ?? ""} ${
                      sub?.subjectTeacherName?.staffMiddleName || ""
                    } ${sub?.subjectTeacherName?.staffLastName ?? ""}`}</p>
                  </div>
                </div>
              </ClassTabChangeLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MiddleContent;
