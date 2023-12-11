import React from "react";
import { useLocation } from "react-router-dom";
import Complaints from "../../student/Mainbody/Complaints/Complaints";
import Leaves from "../../student/Mainbody/Leaves/Leaves";
import PreviousYear from "../../student/Mainbody/PreviousReport/PreviousYear";
import Transfers from "../../student/Mainbody/Transfers/Transfers";
import ViewProfile from "../../student/Mainbody/ViewProfile/ViewProfile";
import StudentMemberConfig from "../Mainbody/StudentMemberConfig";
import SwitchAccount from "../Mainbody/SwitchAccount/SwitchAccount";
import StudentCertificate from "../../student/Mainbody/StudentCertificate/StudentCertificate";

const StudentSelfAccessConfig = () => {
  const location = useLocation();

  return (
    <StudentMemberConfig
      index={
        location?.search?.substring(3) === "profile"
          ? "20"
          : location?.search?.substring(3) === "complaint"
          ? "21"
          : location?.search?.substring(3) === "leave"
          ? "22"
          : location?.search?.substring(3) === "transfer"
          ? "23"
          : location?.search?.substring(3) === "report"
          ? "24"
          : location?.search?.substring(3) === "certificate"
          ? "26"
          : "25"
      }
      sid={location?.state?.sid ?? ""}
    >
      {location?.search?.substring(3) === "profile" && (
        <ViewProfile studentData={location?.state?.sid ?? ""} />
      )}
      {location?.search?.substring(3) === "complaint" && (
        <Complaints studentId={location?.state?.sid ?? ""} />
      )}
      {location?.search?.substring(3) === "leave" && (
        <Leaves studentId={location?.state?.sid ?? ""} />
      )}
      {location?.search?.substring(3) === "transfer" && (
        <Transfers studentId={location?.state?.sid ?? ""} />
      )}
      {location?.search?.substring(3) === "report" && (
        <PreviousYear studentId={location?.state?.sid ?? ""} />
      )}
      {location?.search?.substring(3) === "switch" && <SwitchAccount />}
      {location?.search?.substring(3) === "certificate" && (
        <StudentCertificate />
      )}
    </StudentMemberConfig>
  );
};

export default StudentSelfAccessConfig;
