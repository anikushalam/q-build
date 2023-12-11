import React, { useState } from "react";
import style from "./SuperAdmin.module.css";
import SideBar from "./SideBar/SideBar";
import MainContent from "./MainContent/MainContent";

function SuperAdmin() {
  const [index, setIndex] = useState(1);
  return (
    <div className={style.SuperAdmin}>
      <div className={style.sidebar}>
        <SideBar index={index} changeIndex={(w) => setIndex(w)} />
      </div>
      <div className={style.content}>
        <MainContent index={index} />
      </div>
    </div>
  );
}

export default SuperAdmin;
