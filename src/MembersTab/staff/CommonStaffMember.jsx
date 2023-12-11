import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetOneUserProfileQuery } from "../../services/qvipleAPI";
import style from "./MembersTab.module.css";
import Navbar from "../../Dashboard/UserDashboard/Components/Navbar/Navbar";
const CommonStaffMember = ({ children }) => {
  const id = useSelector((state) => state.idChange.id);
  const { data: profileData, refetch: profileDataRefetch } =
    useGetOneUserProfileQuery(id, { skip: !id });

  useEffect(() => {
    if (id) profileDataRefetch();
  }, [id, profileDataRefetch]);
  return (
    <div className={style.insChat}>
      <div className={style.navbar}>
        <Navbar
          status="members"
          profileData={profileData?.user}
          username={profileData?.user?.username}
          name={profileData?.user?.userLegalName}
          photoId={profileData?.user?.photoId}
          profilePhoto={profileData?.user?.profilePhoto}
        />
      </div>
      {children}
    </div>
  );
};

export default CommonStaffMember;
