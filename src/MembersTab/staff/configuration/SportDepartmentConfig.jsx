import React from "react";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";
import { useLocation } from "react-router-dom";
import SportsAndArtsHead from "../Mainbody/SportsAndArtsHead/SportsAndArtsHead";

const SportDepartmentConfig = () => {
  const location = useLocation();
  return (
    <StaffMemberConfig
      index="6"
      sid={location?.state?.sid ?? ""}
      onClickValue={location?.state?.onClickValue ?? ""}
    >
      <SportsAndArtsHead
        sportDepartId={location?.state?.onClickValue ?? ""}
        carryParentState={location?.state}
      />
    </StaffMemberConfig>
  );
};

export default SportDepartmentConfig;
