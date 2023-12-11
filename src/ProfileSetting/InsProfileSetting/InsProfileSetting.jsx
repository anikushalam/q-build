import style from "./InsProfileSetting.module.css";
import React from "react";
import Navbar from "../../Dashboard/InsDashboard/Components/Navbar/Navbar";
import MainBody from "./Components/MainBody";

function InsProfileSetting() {
  return (
    <div className={style.insprofilesetting}>
      <div className={style.navbar}>
        <Navbar status="profile" />
      </div>
      <MainBody />
    </div>
  );
}

export default InsProfileSetting;
