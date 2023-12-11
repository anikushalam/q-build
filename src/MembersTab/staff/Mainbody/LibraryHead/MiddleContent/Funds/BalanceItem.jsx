import React from "react";
import style from "./Funds.module.css";

function BalanceItem({ bal, value }) {
  return (
    <div className={style.balanceItem}>
      <p>{bal}:</p>
      <p>Rs. {value}</p>
    </div>
  );
}

export default BalanceItem;
