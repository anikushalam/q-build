import React from "react";
import { useLocation } from "react-router-dom";
import ExamDepartment from "../Mainbody/ExamDepartment/ExamDepartment";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";

const ExamConfig = () => {
  const location = useLocation();
  return (
    <>
      <StaffMemberConfig
        index="26"
        sid={location?.state?.sid ?? ""}
        onClickValue={location?.state?.onClickValue ?? ""}
      >
        <ExamDepartment
          onClickValue={location?.state?.onClickValue ?? ""}
          carryParentState={location?.state}
        />
      </StaffMemberConfig>
    </>
  );
};

export default ExamConfig;
