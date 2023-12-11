import React from "react";
import style from "../../../../../AdmisionAdmin/AdmisionAdmin.module.css";
import Navbar from "../../../../../Dashboard/InsDashboard/Components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import FacilitiesSiteInfo from "./FacilitiesSiteInfo";

function AdmisionAdmin() {
  const getQuery = useLocation();

  return (
    <div className={style.insChat}>
      <div className={style.navbarr}>
        <Navbar status="home" />
      </div>

      {getQuery.search?.substring(3) === "site" && (
        <FacilitiesSiteInfo fid={getQuery.state?.fid} viewAs="INSTITUTE" />
      )}
    </div>
  );
}

export default AdmisionAdmin;
