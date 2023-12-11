import React, { useEffect } from "react";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { admissionChangeAction } from "../../../redux/store/admission-slice";
import StaffAdmisionAdmin from "../Mainbody/StaffAdmisionAdmin/StaffAdmisionAdmin";
import AdmissionSiteInfo from "../Mainbody/StaffAdmisionAdmin/AdmissionSiteInfo/AdmissionSiteInfo";

const AdmissionConfig = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  // console.info("this is finance loactio", location?.state?.onClickValue);
  useEffect(() => {
    dispatch(
      admissionChangeAction.admissionQuery({
        aid: location?.state?.role
          ? location?.state?.onClickValue?.admission
          : location?.state?.onClickValue,
      })
    );
  }, []);
  return (
    <>
      {location?.search?.substring(3) === "site" ? (
        <AdmissionSiteInfo aid={location?.state?.onClickValue} />
      ) : (
        <StaffMemberConfig
          index={location?.state?.role ? "25" : "5"}
          sid={location?.state?.sid ?? ""}
          onClickValue={location?.state?.onClickValue ?? ""}
        >
          <StaffAdmisionAdmin
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

export default AdmissionConfig;
