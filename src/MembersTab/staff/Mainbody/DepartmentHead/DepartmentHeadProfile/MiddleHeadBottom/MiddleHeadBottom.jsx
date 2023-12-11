import React from "react";
import style from "./MiddleHeadBottom.module.css";

const MiddleHeadBottom = ({ classCount, studentCount, staffCount }) => {
  return (
    <div className={style.bottomDiv}>
      <div className={style.bottomDivLeft}>
        {/* <div className={style.btn}>Edit Department</div>
        <div></div> */}
      </div>
    </div>
  );
};

export default MiddleHeadBottom;
