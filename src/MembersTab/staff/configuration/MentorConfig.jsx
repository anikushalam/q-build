import React from "react";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";
import { useLocation } from "react-router-dom";
import StaffMentor from "../Mainbody/StaffMentor/StaffMentor";

const MentorConfig = () => {
  const location = useLocation();

  return (
    <StaffMemberConfig
      index="33"
      sid={location?.state?.sid ?? ""}
      onClickValue={location?.state?.onClickValue ?? ""}
    >
      <StaffMentor
        onClickValue={location?.state?.onClickValue ?? ""}
        carryParentState={location?.state}
      />
    </StaffMemberConfig>
  );
};

export default MentorConfig;
