import React from "react";
import style from "../../../../../AdmisionAdmin/AdmisionAdmin.module.css";
import Navbar from "../../../../../Dashboard/InsDashboard/Components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import AcademicSiteInfo from "./AcademicSiteInfo";

function AcademicSite() {
  const getQuery = useLocation();

  return (
    <div className={style.insChat}>
      <div className={style.navbarr}>
        <Navbar status="home" />
      </div>

      {getQuery.search?.substring(3) === "site" && (
        <AcademicSiteInfo aid={getQuery.state?.aid} viewAs="INSTITUTE" />
      )}
    </div>
  );
}

export default AcademicSite;
