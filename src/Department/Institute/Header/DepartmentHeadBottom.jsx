import React from "react";
import style from "./DepartmentHeadBottom.module.css";
const DepartmentHeadBottom = ({ dept, classes, staff, student, subject }) => {
  return (
    <div className={style.container}>
      {dept ? (
        <>
          <div className={style.section}>
            <p className={style.sectionCount}>{classes}</p>
            <p className={style.sectionText}>Classes</p>
          </div>
          <div className={style.section}>
            <p className={style.sectionCount}>{student}</p>
            <p className={style.sectionText}>Students</p>
          </div>
          <div className={style.section}>
            <p className={style.sectionCount}>{staff}</p>
            <p className={style.sectionText}>Staff</p>
          </div>
        </>
      ) : (
        <>
          <div className={style.section}>
            <p className={style.sectionCount}>{student}</p>
            <p className={style.sectionText}>Students</p>
          </div>
          <div className={style.section1}>
            <p className={style.sectionCount}>{subject}</p>
            <p className={style.sectionText}>Subject</p>
          </div>
        </>
      )}
    </div>
  );
};

export default DepartmentHeadBottom;
