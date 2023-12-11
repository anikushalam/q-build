import React from "react";
import style from "./Sidebar.module.css";
import SidebarTop from "./SidebarTop";
import Sidebarbottom from "./Sidebarbottom";

function Sidebar({ status, userData, sideData, fetch }) {
  return (
    <div className={style.sidebar}>
      <SidebarTop data={userData && userData} status={status} topData={sideData?.user} fetch={fetch}/>
      {(status === "post" || status === "profile") && (
        <Sidebarbottom userData={userData} bottomData={sideData?.user}/>
      )}
    </div>
  );
}

export default Sidebar;
