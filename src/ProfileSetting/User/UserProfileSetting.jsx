import React from "react";
import style from "./UserProfileSetting.module.css";
import Navbar from "../../Dashboard/UserDashboard/Components/Navbar/Navbar";
import MainBody from "./MainBody/MainBody";
// import { useSelector } from "react-redux";
import { useGetOneUserProfileQuery } from "../../services/qvipleAPI";

function UserProfileSetting() {
  const userId = localStorage.getItem("user");
  //   const author = useSelector((state) => state.authChange);
  const { data: profileData, refetch: profileDataRefetch } =
    useGetOneUserProfileQuery(userId);

  // console.info(profileDataRefetch);

  return (
    <div className={style.insprofilesetting}>
      <div className={style.navbar}>
        <Navbar
          status="profile"
          profileData={profileData?.user}
          username={profileData?.user?.username}
          name={profileData?.user?.userLegalName}
          photoId={profileData?.user?.photoId}
          profilePhoto={profileData?.user?.profilePhoto}
        />
      </div>
      <MainBody
        profileData={profileData}
        profileDataRefetch={profileDataRefetch}
      />
    </div>
  );
}

export default UserProfileSetting;
