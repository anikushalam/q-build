import React from "react";
import style from "./Mainbody.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Stats from "./Stats/Stats";

function Mainbody() {
  return (
    <div className={style.mainbody}>
      <div className={style.sidebar}>
        <Sidebar />
      </div>
      <div className={style.stats}>
        <Stats />
      </div>
    </div>
  );
}

export default Mainbody;
