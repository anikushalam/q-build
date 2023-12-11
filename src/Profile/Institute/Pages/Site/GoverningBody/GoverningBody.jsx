import React from "react";
import style from "../../../../../AdmisionAdmin/AdmisionAdmin.module.css";
import Navbar from "../../../../../Dashboard/InsDashboard/Components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import GoverningBodySiteInfo from "./GoverningBodySiteInfo";

function GoverningBody() {
  const getQuery = useLocation();

  return (
    <div className={style.insChat}>
      <div className={style.navbarr}>
        <Navbar status="home" />
      </div>

      {getQuery.search?.substring(3) === "site" && (
        <GoverningBodySiteInfo gid={getQuery.state?.gid} viewAs="INSTITUTE" />
      )}
    </div>
  );
}

export default GoverningBody;
