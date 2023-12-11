import React from "react";
import { useLocation } from "react-router-dom";
import FeesCategoryList from "../../FinanceManager/FeesStructure/FeesCategoryList";
import TransportFeesStructureList from "./TransportFeesStructureList";
import style from "../../Hostel/HostelFeeStructure/HostelFeeStructure.module.css";
import TransportFeeStructureCount from "./TransportFeeStructureCount";
const TransportFeeStructure = ({
  financeId,
  instituteId,
  fees_category_count,
  fee_master_array_count,
  fee_structure_count,
  carryParentState,
  accessRole,
  transportId,
  callApi,
  pageOpenAs,
  isRootAccess,
}) => {
  const getQuery = useLocation();
  return (
    <div className={style.fess_container}>
      {getQuery?.search?.substring(3) === "fee" && (
        <TransportFeeStructureCount
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
        <FeesCategoryList financeId={financeId} openAs="TRANSPORT_MANAGER" />
      )}
      {getQuery?.search?.substring(9) === "structure" && (
        <TransportFeesStructureList
          financeId={financeId}
          instituteId={instituteId}
          transportId={transportId}
          isRootAccess={isRootAccess}
        />
      )}
    </div>
  );
};

export default TransportFeeStructure;
