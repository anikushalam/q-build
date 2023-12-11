import React, { useState } from "react";
import style from "./Mainbody.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Stats from "./Stats/Stats";

function Mainbody() {
  return (
    <div className={style.mainbody}>
      <div className={style.sidebar}>
        <div style={{ position: "sticky", top: "88px" }}>
          <Sidebar />
        </div>
      </div>
      <div className={style.stats}>
        <Stats />
      </div>
    </div>
  );
}

export default Mainbody;
