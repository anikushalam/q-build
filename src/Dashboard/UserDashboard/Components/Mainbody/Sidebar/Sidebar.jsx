import React from "react";
import style from "./Sidebar.module.css";
import SidebarTop from "./components/SidebarTop";
import ProfileSidebarBottom from "./components/ProfileSidebarBottom";
import PostInstruction from "./components/PostInstruction";
// import Sidebarbottom from "./components/Sidebarbottom";

function Sidebar({ status, userData }) {
  return (
    <div className={style.sidebar}>
      <SidebarTop data={userData && userData} status={status} />
      {status === "post" && <ProfileSidebarBottom userData={userData} />}
      {status === "profile" && <ProfileSidebarBottom userData={userData} />}

      {status === "newPost" && <PostInstruction />}
      {status === "newAnnouncement" && <PostInstruction />}
    </div>
  );
}

export default Sidebar;
