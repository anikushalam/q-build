import React from "react";
import style from "./Assignment.module.css";

const AssignmentLineBar = ({ text, background, progress, number }) => {
  return (
    <div className={style.rangeRow}>
      <div className={style.rangeColumn1}>
        <div
          className={`${style.rangecircle}`}
          style={{ backgroundColor: background }}
        ></div>
      </div>
      <div className={style.rangeColumn2}>
        <h6>{text}</h6>
      </div>
      <div className={style.rangeColumn3}>
        <div className={style.progressdiv}>
          <div
            className={style.progress}
            style={{
              width: progress === 0 ? `0.5%` : `${progress}%`,
              backgroundColor: background,
            }}
          ></div>
        </div>
      </div>
      <div className={style.rangeColumn4}>
        <h6>{number}</h6>
      </div>
    </div>
  );
};

export default AssignmentLineBar;
