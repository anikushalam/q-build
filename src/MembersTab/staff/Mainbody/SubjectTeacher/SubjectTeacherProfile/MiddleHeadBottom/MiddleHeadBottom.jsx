import React from "react";
import style from "./MiddleHeadBottom.module.css";

const MiddleHeadBottom = ({ studentCount, subjectCount }) => {
  return (
    <div className={style.bottomDiv}>
      <div className={style.bottomDivLeft}>
        {/* <div className={style.btn}>Edit Class</div>
        <div></div> */}
      </div>
      <div className={style.bottomDivRight}>
        <div className={style.bottomOneItem}>
          <p className={style.bottomCount}>{studentCount}</p>

          <p className={style.bottomText}>Students</p>
        </div>
        <div className={style.bottomOneItem}>
          <p className={style.bottomCount}>{subjectCount}</p>

          <p className={style.bottomText}>Subjects</p>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeadBottom;
