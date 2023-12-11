import React, { useEffect } from "react";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";
import { useLocation } from "react-router-dom";
// import FinanceManager from "../Mainbody/FinanceManager/FinanceManager";
import { financeChangeAction } from "../../../redux/store/finance-slice";
import { useDispatch } from "react-redux";
import FinanceManager from "../../../optimized/UserStaffMember/FinanaceManager/FinanceManager";
// import FinanceManager from "@/UserStaffMember/FinanaceManager/FinanceManager";

const FinanceConfig = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  // console.info("this is finance loactio", location);
  useEffect(() => {
    dispatch(
      financeChangeAction.financeQuery({
        fid: location?.state?.role
          ? location?.state?.onClickValue?.finance
          : location?.state?.onClickValue,
        insId: location?.state?.insId,
      })
    );
  }, []);
  return (
    <StaffMemberConfig
      index={location?.state?.role ? "27" : "4"}
      sid={location?.state?.sid ?? ""}
      onClickValue={location?.state?.onClickValue ?? ""}
    >
      <FinanceManager
        onClickValue={location?.state?.onClickValue ?? ""}
        carryParentState={location?.state}
        role={location?.state?.role}
        mid={location?.state?.role ? location?.state?.onClickValue?._id : ""}
      />
    </StaffMemberConfig>
  );
};

export default FinanceConfig;
