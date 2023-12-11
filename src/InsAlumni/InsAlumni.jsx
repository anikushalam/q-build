import React from "react";
import style from "./InsAlumni.module.css";
import { useLocation } from "react-router";
import Navbar from "../Dashboard/InsDashboard/Components/Navbar/Navbar";
import InsAlumniStats from "./InsAlumniStats";

function InsAlumni() {
  const getQuery = useLocation();

  return (
    <div className={style.insDashboard}>
      <div className={style.navbar}>
        <Navbar status="home" />
      </div>
      <InsAlumniStats aid={getQuery?.state?.aid} />
    </div>
  );
}

export default InsAlumni;
