import React from "react";
import style from "./Referal.module.css";

function Card() {
  return (
    <div className={style.cardContainer}>
      <div className={style.card}>
        <div className={style.cardLeft}>
          <div className={style.lLeft}>
            <img src="/images/setting/pHistory-icon.svg" alt="" />
          </div>
          <div className={style.lRight}>
            <h5>Qviple Institute</h5>
            <h6>
              Amount <span>Rs. 5000</span>
            </h6>
            <p>Date : 12 Mar 2022</p>
          </div>
        </div>
        <div className={style.cardRight}>Time : 02: 15 PM</div>
      </div>

      <div className={style.cardBtn}>Earned & Received</div>
    </div>
  );
}

function Referal() {
  return (
    <div className={style.referal}>
      <div className={style.top}>
        <div className={style.topItem}>
          <h6> Total Commission Earned</h6>
          <h6>Rs. 1000</h6>
        </div>
        <div className={style.topItem}>
          <h6>Total Commission Received</h6>
          <h6>Rs. 500</h6>
        </div>
      </div>
      <div className={style.mid}>
        <Card />
      </div>
      <div className={style.bottom}>
        <div className={style.earneddBtn}>Earend But Not Received</div>
      </div>
    </div>
  );
}

export default Referal;
