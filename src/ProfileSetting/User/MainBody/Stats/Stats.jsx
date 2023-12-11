import React from "react";
import Header from "./Header/Header";
import style from "./Stats.module.css";
import SettingBody from "./SettingBody/SettingBody";

function Stats({ changeItem, clickItem, dashboardData, dashboardDataRefetch }) {
  return (
    <div className={style.stats}>
      <div className={style.header}>
        <Header dashboardData={dashboardData} />
      </div>
      <div className={style.body}>
        <SettingBody
          changeItem={changeItem}
          clickItem={clickItem}
          dashboardData={dashboardData}
          dashboardFetch={dashboardDataRefetch}
        />
      </div>
    </div>
  );
}

export default Stats;
