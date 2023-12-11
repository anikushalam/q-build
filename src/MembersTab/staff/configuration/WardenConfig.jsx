import React from "react";
import { useLocation } from "react-router-dom";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";
import Warden from "../Mainbody/Warden/Warden";

const WardenConfig = () => {
  const location = useLocation();
  return (
    <>
      <StaffMemberConfig
        index="29"
        sid={location?.state?.sid ?? ""}
        onClickValue={location?.state?.onClickValue ?? ""}
      >
        <Warden
          onClickValue={location?.state?.onClickValue ?? ""}
          carryParentState={location?.state}
        />
      </StaffMemberConfig>
    </>
  );
};

export default WardenConfig;
