import React from "react";
import { useLocation } from "react-router-dom";
import RemainingApplicableFees from "./RemainingApplicableFees";
import RemainingAllFees from "./RemainingAllFees";
import style from "./RemainingFees.module.css";

function RemainingFees({
  isEnable,
  instituteId,
  onRefetch,
  carryParentState,
  pageOpenAs,
  admissionId,
}) {
  const getQuery = useLocation();
  return (
    <div className={style.remainingFees}>
      {getQuery.search?.substring(3) === "pending" ? (
        <RemainingAllFees
          isEnable={isEnable}
          carryParentState={carryParentState}
          onRefetch={onRefetch}
          instituteId={instituteId}
          pageOpenAs={pageOpenAs}
          admissionId={admissionId}
        />
      ) : (
        <RemainingApplicableFees
          isEnable={isEnable}
          carryParentState={carryParentState}
          onRefetch={onRefetch}
          instituteId={instituteId}
          pageOpenAs={pageOpenAs}
          admissionId={admissionId}
        />
      )}
    </div>
  );
}

export default RemainingFees;
