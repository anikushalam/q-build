import React from "react";
import Header from "./Header/Header";
import style from "./Stats.module.css";
import SettingBody from "./SettingBody/SettingBody";

function Stats({ changeItem, clickItem }) {
  return (
    <div className={style.stats}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.body}>
        <SettingBody changeItem={changeItem} clickItem={clickItem} />
      </div>
    </div>
  );
}

export default Stats;
