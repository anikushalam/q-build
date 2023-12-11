import React from "react";
import style from "./InsCareer.module.css";
import Navbar from "../Dashboard/InsDashboard/Components/Navbar/Navbar";
import InsTenderStats from "./InsTenderStats";
import { useLocation } from "react-router";

function InsTender() {
  const getQuery = useLocation();
  return (
    <div className={style.insDashboard}>
      <div className={style.navbar}>
        <Navbar status="home" />
      </div>
      <InsTenderStats ltid={getQuery?.state?.ltid} />
    </div>
  );
}

export default InsTender;
