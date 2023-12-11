import React from "react";
import style from "./Edit.module.css";
import Navbar from "../../../Dashboard/InsDashboard/Components/Navbar/Navbar";
// import EditSide from "../../../Sidebar/Institute/Edit/EditSide";
// import Head from "./EditHead/Head";
import MainProfile from "./EditHead/MainProfile";

const InsEdit = () => {
  return (
    <div className={style.bgContainer}>
      <div className={style.navbar}>
        <Navbar status="profile" />
      </div>
      <MainProfile />
    </div>
  );
};

export default InsEdit;
