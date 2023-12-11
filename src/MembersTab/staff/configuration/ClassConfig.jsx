import React from "react";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";
import { useLocation } from "react-router-dom";
import ClassTeacher from "../Mainbody/ClassTeacher/ClassTeacher";

const ClassConfig = () => {
  const location = useLocation();

  return (
    <StaffMemberConfig
      index="2"
      sid={location?.state?.sid ?? ""}
      onClickValue={location?.state?.onClickValue ?? ""}
    >
      <ClassTeacher
        onClickValue={location?.state?.onClickValue ?? ""}
        carryParentState={location?.state}
      />
    </StaffMemberConfig>
  );
};

export default ClassConfig;
