import React from "react";
import style from "./MiddleContent.module.css";
import { useTranslation } from "react-i18next";
import SubjectTabChangeLink from "../../SubjectTabChangeLink";
function MiddleContent({ carryParentState }) {
  const { t } = useTranslation();
  return (
    <div className={style.MiddleContent}>
      <div className={style.MiddleContentLeft}>
        <div className={style.item}>
          <SubjectTabChangeLink
            carryParentState={carryParentState}
            activeTab="catalog"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/class/class-catalog-icon.svg"
                alt="Class Catalog"
              />
              <p>{t("catalog")}</p>
            </div>
          </SubjectTabChangeLink>
          <SubjectTabChangeLink
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
          </SubjectTabChangeLink>
          <SubjectTabChangeLink
            carryParentState={carryParentState}
            activeTab="assignment"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/subject/subject-assignment-icon.svg"
                alt="assignment"
              />
              <p>{t("assigmnent")}</p>
            </div>
          </SubjectTabChangeLink>
          <SubjectTabChangeLink
            carryParentState={carryParentState}
            activeTab="exam"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/department/department-examination-icon.svg"
                alt="attendence"
              />
              <p>{t("examinations")}</p>
            </div>
          </SubjectTabChangeLink>
          {/* <SubjectTabChangeLink
            carryParentState={carryParentState}
            activeTab="mcq"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/subject/subject-mcq-icon.svg"
                alt="student Request"
              />
              <p>{t("mcqs")}</p>
            </div>
          </SubjectTabChangeLink> */}
          <SubjectTabChangeLink
            carryParentState={carryParentState}
            activeTab="academic"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/subject/subject-daily-update-icon.svg"
                alt="student Request"
              />
              <p
                style={{
                  textAlign: "center",
                }}
              >
                {t("academics_teachings")}
              </p>
            </div>
          </SubjectTabChangeLink>
          <SubjectTabChangeLink
            carryParentState={carryParentState}
            activeTab="co-attainment"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/subject/subject-attainment-icon.svg"
                alt="settings"
              />
              <p
                style={{
                  textAlign: "center",
                }}
              >
                {t("co_mapping_and_attainment")}
              </p>
            </div>
          </SubjectTabChangeLink>
          <SubjectTabChangeLink
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
          </SubjectTabChangeLink>
        </div>
      </div>
    </div>
  );
}

export default MiddleContent;
