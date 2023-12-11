import React from "react";
import { useTranslation } from "react-i18next";
import StudentAbout from "../StudentAbout/StudentAbout";
import StudentTabChangeLink from "../StudentTabChangeLink";
import style from "./MiddleContent.module.css";
import Tabs from "./Tabs";
import { useLocation } from "react-router";

function MiddleContent({
  studentId,
  classHeadTitle,
  classTeacher,
  carryParentState,
  studentMentor,
}) {
  const { t } = useTranslation();
  const getQuery = useLocation();

  return (
    <div className={style.MiddleContent}>
      <div className={style.MiddleContentLeft}>
        <div className={style.tabs}>
          <Tabs carryParentState={carryParentState} />
        </div>
        {!getQuery?.search && (
          <div className={style.student_middle_container}>
            <div className={style.item}>
              <StudentTabChangeLink
                carryParentState={carryParentState}
                activeTab="attendance"
                customStyleLink={{
                  width: "17%",
                }}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/class/class-attendance-icon.svg"
                    alt="attendence_time"
                  />
                  <p>{t("attendence_time")}</p>
                </div>
              </StudentTabChangeLink>
              <StudentTabChangeLink
                carryParentState={carryParentState}
                activeTab="classmates"
                customStyleLink={{
                  width: "17%",
                }}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/finance/finance-student-icon.svg"
                    alt="attendence_time"
                  />
                  <p>{t("student_classmates")}</p>
                </div>
              </StudentTabChangeLink>
              <StudentTabChangeLink
                carryParentState={carryParentState}
                activeTab="assignment"
                customStyleLink={{
                  width: "17%",
                }}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/subject/subject-assignment-icon.svg"
                    alt="assigmnent"
                  />
                  <p>{t("assigmnent")}</p>
                </div>
              </StudentTabChangeLink>
              <StudentTabChangeLink
                carryParentState={{
                  ...carryParentState,
                  selectedTab: 0,
                }}
                activeTab="academic"
                customStyleLink={{
                  width: "17%",
                }}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/student/student-update-icon.svg"
                    alt="daily_updates"
                  />
                  <p>{t("academics_teachings")}</p>
                </div>
              </StudentTabChangeLink>
              <StudentTabChangeLink
                carryParentState={carryParentState}
                activeTab="fees"
                customStyleLink={{
                  width: "17%",
                }}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/department/department-fees-icon.svg"
                    alt="fees"
                  />
                  <p>{t("fees_data")}</p>
                </div>
              </StudentTabChangeLink>
              <StudentTabChangeLink
                carryParentState={carryParentState}
                activeTab="exam"
                customStyleLink={{
                  width: "17%",
                }}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/department/department-examination-icon.svg"
                    alt="examinations"
                  />
                  <p>{t("examinations")}</p>
                </div>
              </StudentTabChangeLink>
              {/* <StudentTabChangeLink
                carryParentState={carryParentState}
                activeTab="mcq"
                customStyleLink={{
                  width: "17%",
                }}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/subject/subject-mcq-icon.svg"
                    alt="mcqs"
                  />
                  <p>{t("mcqs")}</p>
                </div>
              </StudentTabChangeLink> */}
              <StudentTabChangeLink
                carryParentState={carryParentState}
                activeTab="library"
                customStyleLink={{
                  width: "17%",
                }}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/student/student-library-icon.svg"
                    alt="library"
                  />
                  <p>{t("library")}</p>
                </div>
              </StudentTabChangeLink>
              <div
                className={style.itemIcon}
                style={{
                  width: "17%",
                }}
              >
                <img
                  src="/images/member_tab/student/student-transport-icon.svg"
                  alt="transport"
                />
                <p>{t("transport")}</p>
              </div>
            </div>
          </div>
        )}

        {getQuery?.search?.substring(3) === "about" && (
          <StudentAbout
            sid={studentId}
            classHeadTitle={classHeadTitle}
            classTeacher={classTeacher}
            studentMentor={studentMentor}
            carryParentState={carryParentState}
          />
        )}

        {getQuery?.search?.substring(3) === "activity" && (
          <div className={style.item}>
            <StudentTabChangeLink
              carryParentState={carryParentState}
              activeTab="events"
              customStyleLink={{
                width: "17%",
              }}
            >
              <div className={style.itemIcon}>
                <img src="/images/events/event.svg" alt="events" />
                <p>{t("events")}</p>
              </div>
            </StudentTabChangeLink>
            <StudentTabChangeLink
              carryParentState={carryParentState}
              activeTab="seminars"
              customStyleLink={{
                width: "17%",
              }}
            >
              <div className={style.itemIcon}>
                <img src="/images/events/seminar.svg" alt="seminars" />
                <p>{t("seminars")}</p>
              </div>
            </StudentTabChangeLink>
            <StudentTabChangeLink
              carryParentState={carryParentState}
              activeTab="elections"
              customStyleLink={{
                width: "17%",
              }}
            >
              <div className={style.itemIcon}>
                <img src={`/images/events/election.svg`} alt="elections" />
                <p>{t("elections")}</p>
              </div>
            </StudentTabChangeLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default MiddleContent;
