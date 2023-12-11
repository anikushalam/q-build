import React from "react";
import style from "./Standerds.module.css";
import DepartmentTabChangeLink from "../../DepartmentTabChangeLink";
import ExamTabChangeLink from "../../../ExamDepartment/ExamTabChangeLink";

function StanderdItem({ classMaster, carryParentState, viewAs }) {
  return (
    <>
      {viewAs === "EXAMINATION_SECTION" ? (
        <ExamTabChangeLink
          carryParentState={{
            ...carryParentState,
            clsId: classMaster?._id,
          }}
          activeTab={"department&n=backlog&subject"}
        >
          <div className={`${style.standerdItem} ${style.standerdItemm}`}>
            <img
              className={style.standerdsImg}
              src="/images/department/staffs.svg"
              alt=""
            />
            <div className={style.standerdsright}>
              <h6 className={style.standerdsh6}>
                {classMaster?.className || ""}
              </h6>
              <p className={style.standerdsp}>
                Total Class: {classMaster?.classCount}
              </p>
            </div>
          </div>
        </ExamTabChangeLink>
      ) : (
        <DepartmentTabChangeLink
          carryParentState={{
            ...carryParentState,
            clsId: classMaster?._id,
          }}
          activeTab="backlog&subject"
        >
          <div className={`${style.standerdItem} ${style.standerdItemm}`}>
            <img
              className={style.standerdsImg}
              src="/images/department/staffs.svg"
              alt=""
            />
            <div className={style.standerdsright}>
              <h6 className={style.standerdsh6}>
                {classMaster?.className || ""}
              </h6>
              <p className={style.standerdsp}>
                Total Class: {classMaster?.classCount}
              </p>
            </div>
          </div>
        </DepartmentTabChangeLink>
      )}
    </>
  );
}

export default StanderdItem;
