import React from "react";
import style from "../SubjectTeacher.module.css";
import { useTranslation } from "react-i18next";

function Item({ exam, onExamView }) {
  const { t } = useTranslation();
  return (
    <div
      className={style.sidebarheader}
      onClick={() => onExamView(exam)}
      title="See exam"
    >
      <div
        className={style.dot}

        // className={exam?.completed === "true" ? style.dot : style.dotred}
      ></div>
      <img src="/images/members/exam-icon.svg" alt="" />
      <div className={style.text}>
        <div className={style.insName}>
          <h6>{exam?.examName}</h6>
        </div>
        {exam?.examType === "Final" ? (
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

        <p>{exam?.examType}</p>
      </div>
    </div>
  );
}

export default Item;
