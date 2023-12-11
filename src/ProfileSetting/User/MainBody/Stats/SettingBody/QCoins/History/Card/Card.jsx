import React from "react";
import style from "./Card.module.css";

function Card() {
  return (
    <div className={style.card}>
      <div className={style.cardLeft}>
        <div className={style.lLeft}>
          <img src="/images/setting/pHistory-icon.svg" alt="" />
        </div>
        <div className={style.lRight}>
          <h5>Realise Coins 50</h5>
          <h6>Total amount Rs. 5000</h6>
          <p>Date : 12 Mar 2022</p>
        </div>
      </div>
      <div className={style.cardRight}>Time : 02: 15 PM</div>
    </div>
  );
}

export default Card;
