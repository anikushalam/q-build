import React, { useState } from "react";
import style from "./UserDashboard.module.css";
import Navbar from "./Components/Navbar/Navbar";
import Mainbody from "./Components/Mainbody/Mainbody";

import { useGetOneUserProfileQuery } from "../../services/qvipleAPI";
import { useScrollbar } from "../../Scroll/use-scroll";

function UserDashboard() {
  const userid = localStorage.getItem("user");

  const { data: profileData, refetch: onRefetchUser } =
    useGetOneUserProfileQuery(userid);
  const { showScrollbar } = useScrollbar();
  React.useEffect(() => {
    showScrollbar();
  }, []);
  return (
    <div className={style.insDashboard}>
      <div className={style.navbar}>
        <Navbar
          status="dashboard"
          profileId={profileData ? profileData?.user?._id : ""}
          username={profileData?.user?.username}
          name={profileData?.user?.userLegalName}
          photoId={profileData?.user?.photoId}
          profilePhoto={profileData?.user?.profilePhoto}
          profileData={profileData?.user}
        />
      </div>

      <Mainbody profileData={profileData?.user} onRefetchUser={onRefetchUser} />
    </div>
  );
}

export default UserDashboard;
