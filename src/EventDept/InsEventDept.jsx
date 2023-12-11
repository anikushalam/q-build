import React from "react";
import Navbar from "../Dashboard/InsDashboard/Components/Navbar/Navbar";
import style from "./InsEventDept.module.css";
import Main from "./InsEventMain";

function InsEventDept() {
  return (
    <div className={style.bgContainer}>
      <div className={style.navbar}>
        <Navbar status="home" />
      </div>
      <div className={style.editContainer}>
        <Main />
      </div>
    </div>
  );
}

export default InsEventDept;
