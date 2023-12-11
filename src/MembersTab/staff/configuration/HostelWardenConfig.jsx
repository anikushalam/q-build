import React from "react";
import { useLocation } from "react-router-dom";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";
import HostelWarden from "../Mainbody/Hostel/HostelUnit/HostelWarden";

const HostelWardenConfig = () => {
  const location = useLocation();
  return (
    <>
      <StaffMemberConfig
        index={"32"}
        sid={location?.state?.sid ?? ""}
        onClickValue={location?.state?.onClickValue ?? ""}
      >
        <div
          style={{
            marginTop: "1rem",
          }}
        >
          <HostelWarden
            huid={location?.state?.huid ?? ""}
            carryParentState={location?.state}
          />
        </div>
      </StaffMemberConfig>
    </>
  );
};

export default HostelWardenConfig;
