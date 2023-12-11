import React from "react";
import style from "./Sidebar.module.css";
import SidebarTop from "./SidebarTop";
import Sidebarbottom from "./Sidebarbottom";

function Sidebar({ status, userData }) {
  return (
    <div className={style.sidebar}>
      <SidebarTop data={userData && userData} status={status} />
      {(status === "post" || status === "profile") && (
        <Sidebarbottom userData={userData} />
      )}
    </div>
  );
}

export default Sidebar;
