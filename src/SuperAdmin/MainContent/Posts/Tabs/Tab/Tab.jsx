import React from "react";
import style from "./Tab.module.css";

function Tab({ img, nbr }) {
  return (
    <div className={style.tab}>
      <img src={img} alt="" />
      <h5>{nbr}</h5>
    </div>
  );
}

export default Tab;
