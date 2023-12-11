import React from "react";
import { useLocation } from "react-router-dom";
import StudentHostel from "../../student/Mainbody/StudentHostel/StudentHostel";
import StudentMemberConfig from "../Mainbody/StudentMemberConfig";

const StudentHostelConfig = () => {
  const location = useLocation();

  return (
    <StudentMemberConfig
      index="2"
      sid={location?.state?.sid ?? ""}
      onClickValue={location?.state?.onClickValue ?? ""}
    >
      <StudentHostel
        onClickValue={location?.state?.onClickValue ?? ""}
        carryParentState={location?.state}
        studentId={location?.state?.sid ?? ""}
        studentRollNo={location?.state?.onClickValue?.studentROLLNO}
      />
    </StudentMemberConfig>
  );
};

export default StudentHostelConfig;
