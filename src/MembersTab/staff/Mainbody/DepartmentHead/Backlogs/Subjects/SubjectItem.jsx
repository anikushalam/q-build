import React from "react";
import style from "../Standerds/Standerds.module.css";
import DepartmentTabChangeLink from "../../DepartmentTabChangeLink";
import ExamTabChangeLink from "../../../ExamDepartment/ExamTabChangeLink";

function SubjectItem({ subMaster, carryParentState, viewAs }) {
  return (
    <>
      {viewAs === "EXAMINATION_SECTION" ? (
        <ExamTabChangeLink
          carryParentState={{
            ...carryParentState,
            subId: subMaster?._id,
          }}
          activeTab={"department&n=backlog&student"}
        >
          <div className={`${style.standerdItem} ${style.standerdItemm}`}>
            <img
              className={style.standerdsImg}
              src="/images/department/subjectIcon.svg"
              alt=""
            />
            <div className={style.standerdsright}>
              <h6 className={style.standerdsh6}>{subMaster?.subjectName}</h6>
              <p className={style.standerdsp}>
                Total Student: {subMaster?.backlogStudentCount}
              </p>
            </div>
          </div>
        </ExamTabChangeLink>
      ) : (
        <DepartmentTabChangeLink
          carryParentState={{
            ...carryParentState,
            subId: subMaster?._id,
          }}
          activeTab={"backlog&student"}
        >
          <div className={`${style.standerdItem} ${style.standerdItemm}`}>
            <img
              className={style.standerdsImg}
              src="/images/department/subjectIcon.svg"
              alt=""
            />
            <div className={style.standerdsright}>
              <h6 className={style.standerdsh6}>{subMaster?.subjectName}</h6>
              <p className={style.standerdsp}>
                Total Student: {subMaster?.backlogStudentCount}
              </p>
            </div>
          </div>
        </DepartmentTabChangeLink>
      )}
    </>
  );
}

export default SubjectItem;
