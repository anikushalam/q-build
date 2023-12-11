import React from "react";
import style from "./Middle.module.css";
import MiddleHead from "./MiddleHead";

import MiddleBody from "./MiddleBody";
import MiddleHeadBottom from "./MiddleHeadBottom";
const Middle = ({ profileData }) => {
  return (
    <div className={style.middlewidth}>
      <MiddleHead profileHead={profileData && profileData} />
      <MiddleHeadBottom />
      <MiddleBody profileBody={profileData && profileData} />
    </div>
  );
};

export default Middle;
