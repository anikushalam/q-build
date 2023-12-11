import React from "react";
import style from "./UserNotification.module.css";
import Navbar from "../../Dashboard/UserDashboard/Components/Navbar/Navbar";
import Mainbody from "./Components/Mainbody";
import { useGetOneUserProfileQuery } from "../../services/qvipleAPI";

function UserNotification() {
  const userid = localStorage.getItem("user");
  const { data: profileData } = useGetOneUserProfileQuery(userid);

  return (
    <div className={style.insNotification}>
      <div className={style.navbar}>
        <Navbar
          profileId={profileData ? profileData?.user?._id : ""}
          status="notification"
          username={profileData?.user?.username}
          name={profileData?.user?.userLegalName}
          photoId={profileData?.user?.photoId}
          profilePhoto={profileData?.user?.profilePhoto}
        />
      </div>
      <Mainbody />
    </div>
  );
}

export default UserNotification;
