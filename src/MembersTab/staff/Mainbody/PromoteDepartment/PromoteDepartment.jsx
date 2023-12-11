import React from "react";
import style from "./PromoteDepartment.module.css";
import { useLocation } from "react-router-dom";
import PromoteDepartmentProfile from "./PromoteDepartmentProfile";
import OneDepartment from "./Department/OneDepartment";
import OneClass from "./Department/OneClass";
import PromoteExport from "./PromoteExport/PromoteExport";

const PromoteDepartment = ({ onClickValue, carryParentState }) => {
  const getQuery = useLocation();
  // console.info("thisisnnm as", onClickValue);
  return (
    <div className={style.departmenthead}>
      {(!getQuery?.search ||
        ["student-message", "departmentlist", "student", "setting"]?.includes(
          getQuery.search?.substring(3)
        )) && (
        <PromoteDepartmentProfile
          // promoteValue={onClickValue}
          carryParentState={carryParentState}
          instituteId={onClickValue?.institute}
        />
      )}
      {getQuery?.search && getQuery?.search?.substring(3) === "department" && (
        <OneDepartment carryParentState={carryParentState} />
      )}
      {getQuery?.search && getQuery?.search?.substring(3) === "class" && (
        <OneClass carryParentState={carryParentState} />
      )}
      {getQuery?.search && getQuery?.search?.substring(3) === "export" && (
        <PromoteExport instituteId={onClickValue?.institute} />
      )}
    </div>
  );
};

export default PromoteDepartment;
