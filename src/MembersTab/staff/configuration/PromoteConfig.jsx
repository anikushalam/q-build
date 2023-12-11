import React from "react";
import { useLocation } from "react-router-dom";
import PromoteDepartment from "../Mainbody/PromoteDepartment/PromoteDepartment";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";

const PromoteConfig = () => {
  const location = useLocation();
  return (
    <>
      <StaffMemberConfig
        index="26"
        sid={location?.state?.sid ?? ""}
        onClickValue={location?.state?.onClickValue ?? ""}
      >
        <PromoteDepartment
          onClickValue={location?.state?.onClickValue ?? ""}
          carryParentState={location?.state}
        />
      </StaffMemberConfig>
    </>
  );
};

export default PromoteConfig;
