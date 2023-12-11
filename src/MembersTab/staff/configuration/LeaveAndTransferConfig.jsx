import React from "react";
import { useLocation } from "react-router-dom";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";
import LeaveAndTransferAuthority from "../Mainbody/LeaveAndTransferAuthority/LeaveAndTransferAuthority";

const LeaveAndTransferConfig = () => {
  const location = useLocation();

  return (
    <StaffMemberConfig
      index="26"
      sid={location?.state?.sid ?? ""}
      onClickValue={location?.state?.onClickValue ?? ""}
    >
      <LeaveAndTransferAuthority
        instituteId={location?.state?.onClickValue?.institute}
        carryParentState={location?.state}
      />
    </StaffMemberConfig>
  );
};

export default LeaveAndTransferConfig;
