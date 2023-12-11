import React from "react";
import style from "./Middle.module.css";
import MiddleHead from "./MiddleHead";

import MiddleBody from "./MiddleBody";

const Middle = ({ profileData, setDetailView, middleData, setOpenUser, upVote }) => {
  return (
    <div className={style.middlewidth}>
      <MiddleHead
        profileHead={profileData && profileData}
        setDetailView={setDetailView}
        headSection={middleData?.user}
        setOpenUser={setOpenUser}
      />
      {/* <MiddleHeadBottom /> */}
      <MiddleBody profileBody={profileData && profileData} bodySection={middleData?.user} upVote={upVote}/>
    </div>
  );
};

export default Middle;
