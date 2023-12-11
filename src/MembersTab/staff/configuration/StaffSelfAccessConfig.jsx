import React from "react";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";
import { useLocation } from "react-router-dom";
import ViewProfile from "../Mainbody/ViewProfile/ViewProfile";
import Complaints from "../Mainbody/Complaints/Complaints";
import Transfers from "../Mainbody/Transfers/Transfers";
import SwitchAccount from "../Mainbody/SwitchAccount/SwitchAccount";
import StaffLeaveConfig from "../Mainbody/Leaves/StaffLeaveConfig";

const StaffSelfAccessConfig = () => {
  const location = useLocation();
  return (
    <StaffMemberConfig
      index={
        location?.search?.substring(3) === "profile"
          ? "20"
          : location?.search?.substring(3) === "complaint"
          ? "21"
          : location?.search?.substring(3) === "leave"
          ? "22"
          : location?.search?.substring(3) === "transfer"
          ? "23"
          : "24"
      }
      sid={location?.state?.sid ?? ""}
    >
      {location?.search?.substring(3) === "profile" && (
        <ViewProfile staffData={location?.state?.sid ?? ""} />
      )}
      {location?.search?.substring(3) === "complaint" && (
        <Complaints staffId={location?.state?.sid ?? ""} />
      )}
      {location?.search?.substring(3, 8) === "leave" && (
        <StaffLeaveConfig
          staffId={location?.state?.sid ?? ""}
          carryParentState={location.state}
        />
      )}
      {location?.search?.substring(3) === "transfer" && (
        <Transfers staffId={location?.state?.sid ?? ""} />
      )}
      {location?.search?.substring(3) === "switch" && <SwitchAccount />}
    </StaffMemberConfig>
  );
};

export default StaffSelfAccessConfig;
