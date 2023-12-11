import React from "react";
import { useLocation } from "react-router-dom";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";
import CertificateAuthority from "../Mainbody/CertificateAuthority/CertificateAuthority";

const CertificateConfig = () => {
  const location = useLocation();

  // console.info("location?.state?.onClickValue", location?.state?.onClickValue);
  return (
    <>
      <StaffMemberConfig
        index="26"
        sid={location?.state?.sid ?? ""}
        onClickValue={location?.state?.onClickValue ?? ""}
      >
        <CertificateAuthority
          instituteId={location?.state?.onClickValue?.institute}
          carryParentState={location?.state}
        />
      </StaffMemberConfig>
    </>
  );
};

export default CertificateConfig;
