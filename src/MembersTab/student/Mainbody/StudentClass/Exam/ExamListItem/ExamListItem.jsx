import React from "react";
import style from "../Exam.module.css";

function ExamListItem({ setViewDetail, clickExamDetail, examData }) {
  return (
    // <div className={style.assignment}>
    //   <div className={style.assignmentTop}>
    //     <img src="/images/members/exam-icon-orange.svg" alt="" />
    //     <h6>MCQ Test</h6>
    //   </div>

    <div
      className={style.assignmentItem}
      onClick={() => {
        clickExamDetail();
        setViewDetail("examDetail");
      }}
    >
      <div className={style.left}>
        <img src="/images/members/exam-icon.svg" alt="" />
        <div className={style.text}>
          <h6>{examData?.examName}</h6>
          {/* <p>Weightage {examData?.examWeight}%</p> */}
        </div>
      </div>
      <div className={style.right}>
        {examData?.subject > 1 ? (
          <h6>Total {examData?.subject} Papers</h6>
        ) : (
          <h6>Total {examData?.subject} Paper</h6>
        )}
        <p>{examData?.examType}</p>
      </div>
    </div>
    // </div>
  );
}

export default ExamListItem;
