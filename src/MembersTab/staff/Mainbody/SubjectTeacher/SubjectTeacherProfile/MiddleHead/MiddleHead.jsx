import React from "react";
// import { imageShowUrl } from "../../../../../../services/BaseUrl";
import ClassCover from "./ClassCover";
import ClassPhoto from "./ClassPhoto";
import style from "./DepartmentMiddleHead.module.css";

const DepartmentMiddleHead = ({
  onClickValue,
  // onClickValue?.class?.classTitle, onClickValue?.subjectName
}) => {
  return (
    <div className={style.main}>
      <div className={style.deptPhoto}>
        <ClassPhoto />
      </div>

      <div className={style.textContainer}>
        <div className={style.textTop}>
          <h6>
            {onClickValue?.class?.classTitle}-{onClickValue?.subjectName}
          </h6>
          {/* <p>Batch {batchName}</p> */}
        </div>
        {/* <div className={style.textBottom}>
          <div className={style.textBottomitem}>
            <h6>{studentCount}</h6>
            <p>Students</p>
          </div>

          <div className={style.textBottomitem}>
            <h6>{subjectCount}</h6>
            <p>Subjects</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DepartmentMiddleHead;
