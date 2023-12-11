import React from "react";
import style from "./ThirdRow.module.css";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

function Third() {
  return (
    <div className={style.third}>
      <LineChart />
      <BarChart />
    </div>
  );
}

export default Third;
