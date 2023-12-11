import React from "react";
import style from "./ExamDepartment.module.css";
import { useLocation } from "react-router-dom";
import ExamDepartmentProfile from "./ExamDepartmentProfile";
import OneExamDepartment from "./OneExamDepartment";

const ExamDepartment = ({ onClickValue, carryParentState }) => {
  const getQuery = useLocation();
  // console.info("thisisnnm as", onClickValue);
  return (
    <div className={style.departmenthead}>
      {!getQuery?.search && (
        <ExamDepartmentProfile
          // promoteValue={onClickValue}
          carryParentState={carryParentState}
          instituteId={onClickValue?.institute}
        />
      )}
      {getQuery?.search &&
        getQuery?.search?.substring(3, 13) === "department" && (
          <OneExamDepartment
            carryParentState={carryParentState}
            instituteId={onClickValue?.institute}
          />
        )}
      {/* {getQuery?.search && getQuery?.search?.substring(3) === "class" && (
          <OneClass carryParentState={carryParentState} />
        )} */}
    </div>
  );
};

export default ExamDepartment;
