import React from "react";
import DepartmentTabChangeLink from "../DepartmentTabChangeLink";
import style from "../../SubjectTeacher/SubjectTeacherProfile/MiddleContent/MiddleContent.module.css";
import { useTranslation } from "react-i18next";
import ClassTabChangeLink from "../../ClassTeacher/ClassTabChangeLink";
const OneDepartmentSubjectDetail = ({ carryParentState, isDepartment }) => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className={style.MiddleContentLeft}
        style={{
          border: "none",
        }}
      >
        {isDepartment === "CLASS_TEACHER" ? (
          <div
            className={style.item}
            style={{
              paddingLeft: "2vw",
            }}
          >
            <ClassTabChangeLink
              carryParentState={carryParentState}
              activeTab="subject-catalog"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/class/class-catalog-icon.svg"
                  alt="Class Catalog"
                />
                <p>{t("catalog")}</p>
              </div>
            </ClassTabChangeLink>
            <ClassTabChangeLink
              carryParentState={carryParentState}
              activeTab="subject-attendance"
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
              activeTab="subject-assignment"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/subject/subject-assignment-icon.svg"
                  alt="assignment"
                />
                <p>{t("assigmnent")}</p>
              </div>
            </ClassTabChangeLink>
            <ClassTabChangeLink
              carryParentState={carryParentState}
              activeTab="subject-exam"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/department/department-examination-icon.svg"
                  alt="attendence"
                />
                <p>{t("examinations")}</p>
              </div>
            </ClassTabChangeLink>
            <ClassTabChangeLink
              carryParentState={carryParentState}
              activeTab="subject-academic"
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
            </ClassTabChangeLink>
          </div>
        ) : (
          <div
            className={style.item}
            style={{
              paddingLeft: "2vw",
            }}
          >
            <DepartmentTabChangeLink
              carryParentState={carryParentState}
              activeTab="subject-catalog"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/class/class-catalog-icon.svg"
                  alt="Class Catalog"
                />
                <p>{t("catalog")}</p>
              </div>
            </DepartmentTabChangeLink>
            <DepartmentTabChangeLink
              carryParentState={carryParentState}
              activeTab="subject-attendance"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/class/class-attendance-icon.svg"
                  alt="attendence"
                />
                <p> {t("attendance")} </p>
              </div>
            </DepartmentTabChangeLink>
            <DepartmentTabChangeLink
              carryParentState={carryParentState}
              activeTab="subject-assignment"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/subject/subject-assignment-icon.svg"
                  alt="assignment"
                />
                <p>{t("assigmnent")}</p>
              </div>
            </DepartmentTabChangeLink>
            <DepartmentTabChangeLink
              carryParentState={carryParentState}
              activeTab="subject-exam"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/department/department-examination-icon.svg"
                  alt="attendence"
                />
                <p>{t("examinations")}</p>
              </div>
            </DepartmentTabChangeLink>
            <DepartmentTabChangeLink
              carryParentState={carryParentState}
              activeTab="subject-academic"
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
            </DepartmentTabChangeLink>
          </div>
        )}
      </div>
    </>
  );
};

export default OneDepartmentSubjectDetail;
