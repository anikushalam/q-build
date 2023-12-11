import React from "react";
import { useLocation } from "react-router-dom";
import IdCardSection from "../Mainbody/IdCardSection/IdCardSection";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";

const IdConfig = () => {
  const location = useLocation();

  return (
    <StaffMemberConfig
      index="26"
      sid={location?.state?.sid ?? ""}
      onClickValue={location?.state?.onClickValue ?? ""}
    >
      <IdCardSection
        onClickValue={location?.state?.onClickValue ?? ""}
        carryParentState={location?.state}
        instituteId={location?.state?.onClickValue?.institute}
      />
    </StaffMemberConfig>
  );
};

export default IdConfig;
