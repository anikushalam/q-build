import React, { useState } from "react";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";
import { useLocation } from "react-router-dom";
import SubjectTeacher from "../Mainbody/SubjectTeacher/SubjectTeacher";

const SubjectConfig = () => {
  const location = useLocation();
  const [openMcq, setOpenMcq] = useState("");
  return (
    <StaffMemberConfig
      index="3"
      sid={location?.state?.sid ?? ""}
      onClickValue={location?.state?.onClickValue ?? ""}
      // openMcq={openMcq}
    >
      <SubjectTeacher
        onClickValue={location?.state?.onClickValue ?? ""}
        carryParentState={location?.state}
        setOpenMcq={setOpenMcq}
      />
    </StaffMemberConfig>
  );
};

export default SubjectConfig;
