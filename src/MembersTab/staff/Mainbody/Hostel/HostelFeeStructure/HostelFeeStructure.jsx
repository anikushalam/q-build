import React from "react";
import { useLocation } from "react-router-dom";
import FeesCategoryList from "../../FinanceManager/FeesStructure/FeesCategoryList";
import HostelFeesStructureList from "./HostelFeesStructureList";
import style from "./HostelFeeStructure.module.css";
import HostelFeeStructureCount from "./HostelFeeStructureCount";
const HostelFeeStructure = ({
  financeId,
  instituteId,
  fees_category_count,
  fee_master_array_count,
  fee_structure_count,
  carryParentState,
  accessRole,
  hostelId,
  callApi,
  pageOpenAs,
}) => {
  const getQuery = useLocation();
  //   console.info("sfbdhfbgfjsdjjgjk", financeId);
  return (
    <div className={style.fess_container}>
      {getQuery?.search?.substring(3) === "fee" && (
        <HostelFeeStructureCount
          instituteId={instituteId}
          fees_category_count={fees_category_count ?? 0}
          carryParentState={carryParentState}
          fee_master_array_count={fee_master_array_count ?? 0}
          fee_structure_count={fee_structure_count}
          accessRole={accessRole}
          callApi={callApi}
          pageOpenAs={pageOpenAs}
        />
      )}
      {getQuery?.search?.substring(9) === "category" && (
        <FeesCategoryList financeId={financeId} openAs="HOSTEL_MANAGER" />
      )}
      {getQuery?.search?.substring(9) === "structure" && (
        <HostelFeesStructureList
          financeId={financeId}
          instituteId={instituteId}
          hostelId={hostelId}
        />
      )}
    </div>
  );
};

export default HostelFeeStructure;
