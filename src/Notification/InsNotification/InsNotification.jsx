import React from "react";
import style from "./InsNotification.module.css";
import Mainbody from "./Components/Mainbody";
import Navbar from "../../Dashboard/InsDashboard/Components/Navbar/Navbar";

function InsNotification() {
  return (
    <div className={style.insNotification}>
      <div className={style.navbar}>
        <Navbar status="notification" />
      </div>
      <Mainbody />
    </div>
  );
}

export default InsNotification;
