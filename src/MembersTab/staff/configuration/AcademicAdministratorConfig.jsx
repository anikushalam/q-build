import React from "react";
import { useLocation } from "react-router-dom";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";
import AcademicAdministrator from "../Mainbody/AcademicAdministrator/AcademicAdministrator";

const AcademicAdministratorConfig = () => {
  const location = useLocation();

  return (
    <StaffMemberConfig
      index="26"
      sid={location?.state?.sid ?? ""}
      onClickValue={location?.state?.onClickValue ?? ""}
    >
      <AcademicAdministrator onClickValue={location?.state ?? ""} />
    </StaffMemberConfig>
  );
};

export default AcademicAdministratorConfig;
