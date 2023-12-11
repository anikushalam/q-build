import React from "react";
import style from "./Middle.module.css";
import MiddleHead from "./MiddleHead";

import MiddleBody from "./MiddleBody";
import MiddleHeadBottom from "./MiddleHeadBottom";
const Middle = ({ profileData, setDetailView, insData, setOpenIns }) => {
  return (
    <div className={style.middlewidth}>
      <MiddleHead
        profileHead={profileData && profileData}
        setDetailView={setDetailView}
        headSection={insData?.institute}
        setOpenIns={setOpenIns}
      />
      <MiddleHeadBottom bottomSection={insData?.institute}/>
      <MiddleBody profileBody={profileData && profileData} bodySection={insData?.institute}/>
    </div>
  );
};

export default Middle;
