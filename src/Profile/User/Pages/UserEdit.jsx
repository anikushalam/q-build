import React from "react";
import { useSelector } from "react-redux";
import style from "./UserEdit.module.css";
import Navbar from "../../../Dashboard/UserDashboard/Components/Navbar/Navbar";
import { useGetOneUserProfileQuery } from "../../../services/qvipleAPI";
import EditSide from "../../../Sidebar/User/Edit/EditSide";
import Head from "./EditHead/Head";
import MainProfile from "./EditHead/MainProfile";
import UniversalProfileMiddle from "../../UniversalProfileMiddle/UniversalProfileMiddle";
import ProfileSidebarBottom from "../../../Dashboard/UserDashboard/Components/Mainbody/Sidebar/components/ProfileSidebarBottom";

function UserEdit() {
  const ids = useSelector((state) => state.idChange);
  const userId = localStorage.getItem("user");
  const resultId = ids.searchProfile.id !== "" ? ids.searchProfile.id : ids?.id;
  const { data: profileData } = useGetOneUserProfileQuery(userId);

  return (
    <div className={style.bgContainer}>
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

      <div className={style.editContainer}>
        <EditSide
          photoKey={profileData?.user?.profilePhoto}
          photoId={profileData?.user?.photoId}
          username={profileData?.user?.username}
        />
        <div>
          <Head
            coverKey={profileData?.user?.profileCoverPhoto}
            coverId={profileData?.user?.coverId}
          />
          <MainProfile />
        </div>
      </div>
    </div>
  );
}

export default UserEdit;
