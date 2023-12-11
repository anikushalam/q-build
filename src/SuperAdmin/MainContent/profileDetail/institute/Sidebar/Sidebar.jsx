import React from "react";
import style from "./Sidebar.module.css";
import SidebarTop from "./SidebarTop";
import Sidebarbottom from "./Sidebarbottom";

function Sidebar({ status, userData, data, fetch }) {
  return (
    <div className={style.sidebar}>
      <SidebarTop data={userData && userData} status={status} topData={data && data?.institute} fetch={fetch}/>
      {(status === "post" || status === "profile") && (
        <Sidebarbottom userData={userData} bottomData={data && data?.institute}/>
      )}
    </div>
  );
}

export default Sidebar;
