import React from "react";
import style from "../Standerds/Standerds.module.css";
function ExamItem() {
  return (
    <div className={`${style.standerdItem} ${style.examItem}`}>
      <div className={style.standerdsleft}>
        <div className={style.studentImgcontainer}>
          <img
            className={style.studentImg}
            src="/images/members/exam-icon.svg"
            alt="student"
          />
        </div>
        <div className={style.standerdsright}>
          <h6 className={style.standerdsh6} style={{ marginBottom: "0.4rem" }}>
            12 April 2022
          </h6>
          <p className={style.studentRightp}>11:00 AM to 2:00 PM</p>
        </div>
      </div>
      <div className={style.standerdsrright}>
        <img className={style.dotsImg} src="/images/menu-dots-icon.svg" />
        <p className={style.studentp1}>Marks: 80</p>
      </div>
    </div>
  );
}

export default ExamItem;
