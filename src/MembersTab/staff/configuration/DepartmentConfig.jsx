import React from "react";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";
import { useLocation } from "react-router-dom";
import DepartmentHead from "../Mainbody/DepartmentHead/DepartmentHead";
import DeaprtmentSiteInfo from "../Mainbody/DepartmentHead/DepartmentSiteInfo/DeaprtmentSiteInfo";

const DepartmentConfig = () => {
  const location = useLocation();
  return (
    <>
      {location?.search?.substring(3) === "site" ? (
        <DeaprtmentSiteInfo did={location?.state?.onClickValue?._id} />
      ) : (
        <StaffMemberConfig
          index="1"
          sid={location?.state?.sid ?? ""}
          onClickValue={location?.state?.onClickValue ?? ""}
        >
          <DepartmentHead
            onClickValue={location?.state?.onClickValue ?? ""}
            carryParentState={location?.state}
          />
        </StaffMemberConfig>
      )}
    </>
  );
};

export default DepartmentConfig;
