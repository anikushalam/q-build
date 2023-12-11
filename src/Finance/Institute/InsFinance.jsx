import React from "react";
import style from "./InsFinance.module.css";
import Main from "./Mainbody/Main";
import Navbar from "../../Dashboard/InsDashboard/Components/Navbar/Navbar";
function InsFinance() {
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

export default InsFinance;
