import React from "react";
import { useLocation } from "react-router-dom";
import Hostel from "../Mainbody/Hostel/Hostel";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";
import HostelSiteInfo from "../Mainbody/Hostel/HostelSiteInfo/HostelSiteInfo";

const HostelConfig = () => {
  const location = useLocation();
  return (
    <>
      {location?.search?.substring(3) === "site" ? (
        <HostelSiteInfo hid={location?.state?.onClickValue} />
      ) : (
        <StaffMemberConfig
          index={location?.state?.role ? "31" : "28"}
          sid={location?.state?.sid ?? ""}
          onClickValue={location?.state?.onClickValue ?? ""}
        >
          <Hostel
            onClickValue={location?.state?.onClickValue ?? ""}
            role={location?.state?.role}
            mid={
              location?.state?.role ? location?.state?.onClickValue?._id : ""
            }
            carryParentState={location?.state}
          />
        </StaffMemberConfig>
      )}
    </>
  );
};

export default HostelConfig;
