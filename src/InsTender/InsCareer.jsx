import React from "react";
import style from "./InsCareer.module.css";
import Navbar from "../Dashboard/InsDashboard/Components/Navbar/Navbar";
import InsCareerStats from "./InsCareerStats";

function InsCareer() {
  return (
    <div className={style.insDashboard}>
      <div className={style.navbar}>
        <Navbar status="home" />
      </div>
      <InsCareerStats />
    </div>
  );
}

export default InsCareer;
