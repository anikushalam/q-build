import React from "react";
import { useLocation } from "react-router-dom";
import StudentClass from "../../student/Mainbody/StudentClass/StudentClass";
import StudentMemberConfig from "../Mainbody/StudentMemberConfig";

const StudentConfig = () => {
  const location = useLocation();

  return (
    <StudentMemberConfig
      index="1"
      sid={location?.state?.sid ?? ""}
      onClickValue={location?.state?.onClickValue ?? ""}
    >
      <StudentClass
        onClickValue={location?.state?.onClickValue ?? ""}
        carryParentState={location?.state}
        studentId={location?.state?.sid ?? ""}
        studentRollNo={location?.state?.onClickValue?.studentROLLNO}
      />
    </StudentMemberConfig>
  );
};

export default StudentConfig;
