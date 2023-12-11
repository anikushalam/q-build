import React from "react";
import { useLocation } from "react-router-dom";
import CategoryCountWithDepartmentList from "./CategoryCountWithDepartmentList";
import FeesCategoryList from "./FeesCategoryList";
import style from "./FeesStructure.module.css";
// import FeesStructureList from "./FeesStructureList";
import FeeStructureConfig from "./Department/FeeStructureConfig";
const FeesStructure = ({
  financeId,
  instituteId,
  fees_category_count,
  fee_master_array_count,
  carryParentState,
  accessRole,
  callApi,
  viewAs,
}) => {
  const getQuery = useLocation();

  return (
    <div className={style.fess_container}>
      {getQuery?.search?.substring(3) === "fee" && (
        <CategoryCountWithDepartmentList
          instituteId={instituteId}
          fees_category_count={fees_category_count}
          carryParentState={carryParentState}
          fee_master_array_count={fee_master_array_count}
          accessRole={accessRole}
          callApi={callApi}
          viewAs={viewAs}
        />
      )}
      {getQuery?.search?.substring(9) === "category" && (
        <FeesCategoryList financeId={financeId} />
      )}
      {getQuery?.search?.substring(9, 18) === "structure" && (
        <FeeStructureConfig
          financeId={financeId}
          instituteId={instituteId}
          accessRole={accessRole}
          callApi={callApi}
          viewAs={viewAs}
        />
      )}
    </div>
  );
};

export default FeesStructure;
