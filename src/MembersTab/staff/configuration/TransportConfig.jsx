import React from "react";
import { useLocation } from "react-router-dom";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";
import Transport from "../Mainbody/Transport/Transport";
import TransportSiteInfo from "../Mainbody/Transport/TransportSiteInfo/TransportSiteInfo";

const TransportConfig = () => {
  const location = useLocation();
  return (
    <>
      {location?.search?.substring(3) === "site" ? (
        <TransportSiteInfo tid={location?.state?.onClickValue?._id} />
      ) : (
        <StaffMemberConfig
          index="30"
          sid={location?.state?.sid ?? ""}
          onClickValue={location?.state?.onClickValue ?? ""}
        >
          <Transport
            onClickValue={location?.state?.onClickValue ?? ""}
            carryParentState={location?.state}
          />
        </StaffMemberConfig>
      )}
    </>
  );
};

export default TransportConfig;
