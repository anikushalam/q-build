import React from "react";
import style from "./History.module.css";
import Card from "./Card/Card";

function History() {
  return (
    <div className={style.history}>
      <h6>All Payment Received History</h6>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default History;
