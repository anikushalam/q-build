import React from "react";
import style from "./InsCareer.module.css";
import Navbar from "../Dashboard/InsDashboard/Components/Navbar/Navbar";
import InsCareerStats from "./InsCareerStats";
import { useLocation } from "react-router";

function InsCareer() {
  const getQuery = useLocation();

  return (
    <div className={style.insDashboard}>
      <div className={style.navbar}>
        <Navbar status="home" />
      </div>
      <InsCareerStats lcid={getQuery?.state?.lcid} />
    </div>
  );
}

export default InsCareer;
