import React from "react";
import style from "./MiddleBodyMain.module.css";

function MiddleBodyRight({ right }) {
  return (
    <div className={style.middleBodyMain}>
      <div className={style.title}>Referrals</div>
      <div className={style.item}>
        <h6>Total Institutes Referred : {right?.referralArray?.length}</h6>
        <h6>Total Commision Earned : Rs.{right?.userCommission}</h6>
        <h6>Total Commision received : Rs.{right?.userEarned}</h6>
      </div>
    </div>
  );
}

export default MiddleBodyRight;
