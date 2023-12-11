import React from "react";
import style from "./Tab.module.css";

function Tab({ number, text }) {
  return (
    <div className={style.tabDark}>
      <h5>{number}</h5>
      <p>{text}</p>
    </div>
  );
}

export default Tab;
