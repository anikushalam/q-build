import React from "react";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";
import { useLocation } from "react-router-dom";
import style from "../Mainbody/SportsAndArtsHead/SportsAndArtsHead.module.css";
import SportsClassHeadProfile from "../Mainbody/SportsAndArtsHead/SportsClassHeadProfile/SportsClassHeadProfile";

const SportClassConfig = () => {
  const location = useLocation();

  return (
    <StaffMemberConfig
      index="7"
      sid={location?.state?.sid ?? ""}
      onClickValue={location?.state?.onClickValue ?? ""}
    >
      <div className={style.departmenthead}>
        <SportsClassHeadProfile
          sportClassId={location?.state?.onClickValue?._id ?? ""}
          carryParentState={location?.state}
        />
      </div>
    </StaffMemberConfig>
  );
};

export default SportClassConfig;
