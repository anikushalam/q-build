import React from "react";
import style from "./Reports.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Middle from "./Main/Middle";
import ComingSoon from "../../../StaffTab/StudentTab/MainContent/StudentAProfile/ComingSoon";

function Reports() {
  return (
    <div className={style.mainbody}>
      {/* <Sidebar status="profile" />
      <Middle /> */}
      <ComingSoon />
    </div>
  );
}

export default Reports;
