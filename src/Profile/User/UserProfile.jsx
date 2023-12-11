import React from "react";
import style from "./UserProfile.module.css";
import Navbar from "../../Dashboard/UserDashboard/Components/Navbar/Navbar";
// import Main from "./Pages/Main";
import InsMain from "../Institute/Pages/Main";
// import InsMain from "../Institute/Pages/Main";
import UserMain from "./Pages/UserMain";
import { useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
import { useGetOneUserProfileQuery } from "../../services/qvipleAPI";

function UserProfile() {
  const userId = localStorage.getItem("user");
  const ids = useSelector((state) => state.idChange.searchProfile);
  const { data: profileData } = useGetOneUserProfileQuery(userId);
  // const location = useLocation();
  // console.info("this is location", location.state);
  return (
    <div className={style.Profile}>
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

      {ids?.searchAs === "institute" ? (
        <InsMain applicantUserName={profileData?.user?.username} />
      ) : (
        // <Main profileData={profileData?.user} />
        <UserMain profileData={profileData?.user} />
      )}
    </div>
  );
}

export default UserProfile;
