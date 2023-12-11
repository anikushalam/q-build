import React from "react";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";
import { useLocation } from "react-router-dom";
import ApplicationStatus from "../../student/Mainbody/ApplicationStatus/ApplicationStatus";
import StudentMemberConfig from "../Mainbody/StudentMemberConfig";

const ApplicationStatusConfig = () => {
  const location = useLocation();
  return (
    <>
      {location.state?.openAs === "STUDENT" ? (
        <StudentMemberConfig index="0" sid={location?.state?.sid ?? ""}>
          <ApplicationStatus />
        </StudentMemberConfig>
      ) : (
        <StaffMemberConfig index="0" sid={location?.state?.sid ?? ""}>
          <ApplicationStatus />
        </StaffMemberConfig>
      )}
    </>
  );
};

export default ApplicationStatusConfig;
