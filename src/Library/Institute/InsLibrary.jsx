import React from "react";
import Navbar from "../../Dashboard/InsDashboard/Components/Navbar/Navbar";
import style from "../../Finance/Institute/InsFinance.module.css";
import Main from "./InsLibraryMain/InsLibraryMain";
import { useLocation } from "react-router-dom";
import LibrarySiteInfo from "../../MembersTab/staff/Mainbody/LibraryHead/LibrarySiteInfo/LibrarySiteInfo";

function InsLibrary() {
  const getQuery = useLocation();

  return (
    <div className={style.bgContainer}>
      <div className={style.navbar}>
        <Navbar status="home" />
      </div>
      {getQuery.search?.substring(3) === "site" ? (
        <LibrarySiteInfo lid={getQuery.state?.lid} viewAs="INSTITUTE" />
      ) : (
        <div className={style.editContainer}>
          <Main />
        </div>
      )}
    </div>
  );
}

export default InsLibrary;
