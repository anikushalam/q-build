import React from "react";
import style from "./AdmisionAdmin.module.css";
import Navbar from "../Dashboard/InsDashboard/Components/Navbar/Navbar";
import Mainbody from "./Mainbody";
import { useLocation } from "react-router-dom";
import AdmissionSiteInfo from "../MembersTab/staff/Mainbody/StaffAdmisionAdmin/AdmissionSiteInfo/AdmissionSiteInfo";

function AdmisionAdmin() {
  const getQuery = useLocation();

  return (
    <div className={style.insChat}>
      <div className={style.navbarr}>
        <Navbar status="home" />
      </div>

      {getQuery.search?.substring(3) === "site" ? (
        <AdmissionSiteInfo aid={getQuery.state?.aid} viewAs="INSTITUTE" />
      ) : (
        <div className={style.admission_ins_container}>
          <Mainbody />
        </div>
      )}
    </div>
  );
}

export default AdmisionAdmin;
