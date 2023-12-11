import React from "react";
import style from "./Tab.module.css";

function TabDark({ name, imgDark }) {
  return (
    <div className={style.tabBackground}>
      <img src={imgDark} alt="user" />
      <p>{name}</p>
    </div>
  );
}

export default TabDark;
