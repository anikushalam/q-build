import React, { useEffect } from "react";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import AlumniCellManager from "../Mainbody/AlumniCellManager/AlumniCellManager";
import { alumniChangeAction } from "../../../redux/store/alumni-slice";
import { useState } from "react";

const AlumniConfig = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      alumniChangeAction.alumniQuery({
        sid: location?.state?.sid,
        insId: location?.state?.insId,
        aid: location?.state?.alumniId,
      })
    );
  }, []);

  return (
    <StaffMemberConfig
      index={
        location.search?.substring(3) === "register&alumni" ||
        location.search?.substring(3) === "prominent" ||
        location.search?.substring(3) === "feedback"
          ? "17"
          : "16"
      }
      sid={location?.state?.sid ?? ""}
      onClickValue={{
        sid: location?.state?.sid,
        insId: location?.state?.insId,
        alumniId: location?.state?.alumniId,
      }}
    >
      <AlumniCellManager
        onclickVal={location.state}
        carryParentState={location?.state}
      />
    </StaffMemberConfig>
  );
};

export default AlumniConfig;
