import React from "react";
import style from "./ExamList.module.css";
import moment from "moment";
import { useTranslation } from "react-i18next";
import DepartmentTabChangeLink from "../../DepartmentTabChangeLink";
import ExamTabChangeLink from "../../../ExamDepartment/ExamTabChangeLink";

function DepartmentExamCard({ exam, carryParentState, viewAs, seeUrl }) {
  const { t } = useTranslation();
  return (
    <>
      {viewAs === "EXAMINATION_SECTION" ? (
        <ExamTabChangeLink
          carryParentState={{
            ...carryParentState,
            examId: exam?._id,
          }}
          activeTab="department&n=exam&n=detail"
        >
          <div className={style.exam_card_container} title="View exam detail">
            <div className={style.imagedot}>
              <img src="/images/members/exam-icon.svg" alt="" />
              <div
                className={
                  exam?.examMode === t("Offline")
                    ? `${style.dot} ${style.blue}`
                    : `${style.dot} ${style.red}`
                }
              ></div>
            </div>
            <div className={style.exam_inner_text}>
              <h6>{exam?.examName}</h6>
              {exam?.examType === "Final" ? (
                ""
              ) : (
                <p>
                  {t("weightage")}: {exam?.examWeight} %
                </p>
              )}
            </div>

            <div className={style.exam_date}>
              <h6>{moment(exam?.createdAt).format("DD MMMM YYYY")}</h6>
              <p>{t(exam?.examType)}</p>
            </div>
          </div>
        </ExamTabChangeLink>
      ) : viewAs === "DEPARTMENT_BACKLOG" ? (
        <DepartmentTabChangeLink
          carryParentState={{
            ...carryParentState,
            examId: exam?._id,
          }}
          activeTab={"backlog&exam&detail"}
        >
          <div className={style.exam_card_container} title="View exam detail">
            <div className={style.imagedot}>
              <img src="/images/members/exam-icon.svg" alt="" />
              <div
                className={
                  exam?.examMode === t("Offline")
                    ? `${style.dot} ${style.blue}`
                    : `${style.dot} ${style.red}`
                }
              ></div>
            </div>
            <div className={style.exam_inner_text}>
              <h6>{exam?.examName}</h6>
              {exam?.examType === "Final" ? (
                ""
              ) : (
                <p>
                  {t("weightage")}: {exam?.examWeight} %
                </p>
              )}
            </div>

            <div className={style.exam_date}>
              <h6>{moment(exam?.createdAt).format("DD MMMM YYYY")}</h6>
              <p>{t(exam?.examType)}</p>
            </div>
          </div>
        </DepartmentTabChangeLink>
      ) : (
        <DepartmentTabChangeLink
          carryParentState={{
            ...carryParentState,
            examId: exam?._id,
          }}
          activeTab="exam&n=detail"
        >
          <div className={style.exam_card_container} title="View exam detail">
            <div className={style.imagedot}>
              <img src="/images/members/exam-icon.svg" alt="" />
              <div
                className={
                  exam?.examMode === t("Offline")
                    ? `${style.dot} ${style.blue}`
                    : `${style.dot} ${style.red}`
                }
              ></div>
            </div>
            <div className={style.exam_inner_text}>
              <h6>{exam?.examName}</h6>
              {exam?.examType === "Final" ? (
                ""
              ) : (
                <p>
                  {t("weightage")}: {exam?.examWeight} %
                </p>
              )}
            </div>

            <div className={style.exam_date}>
              <h6>{moment(exam?.createdAt).format("DD MMMM YYYY")}</h6>
              <p>{t(exam?.examType)}</p>
            </div>
          </div>
        </DepartmentTabChangeLink>
      )}
    </>
  );
}

export default DepartmentExamCard;
