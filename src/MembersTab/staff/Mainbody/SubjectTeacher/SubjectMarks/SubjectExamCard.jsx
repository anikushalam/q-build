import React from "react";
import style from "../SubjectTeacher.module.css";
import { useTranslation } from "react-i18next";
import SubjectTabChangeLink from "../SubjectTabChangeLink";

function SubjectExamCard({ exam, carryParentState }) {
  const { t } = useTranslation();
  return (
    <SubjectTabChangeLink
      carryParentState={{ ...carryParentState, examView: exam }}
      activeTab="exam-detail"
    >
      <div className={style.sidebarheader} title="See exam details">
        <div className={style.dot}></div>
        <img src="/images/members/exam-icon.svg" alt="" />
        <div className={style.text}>
          <div className={style.insName}>
            <h6>{exam?.examName}</h6>
          </div>
          {!exam?.examWeight ? (
            ""
          ) : (
            <div className={style.insUserName}>
              <p>
                {t("weightage")}: {exam?.examWeight} %
              </p>
            </div>
          )}
        </div>

        <div className={style.date}>
          <h6>
            {" "}
            {t("total_marks")} {exam?.totalMarks}
          </h6>

          {/* <p>{exam?.examType}</p> */}
        </div>
      </div>
    </SubjectTabChangeLink>
  );
}

export default SubjectExamCard;
