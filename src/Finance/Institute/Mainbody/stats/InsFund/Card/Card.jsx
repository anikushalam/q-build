import React from "react";
import style from "./Card.module.css";
function Card({ img, amt, text }) {
  // const amount = amt.toFixed(2);

  return (
    <div className={style.card}>
      <img src={img} alt="" />
      <p>{text}</p>
      <h5>Rs. {amt}</h5>
    </div>
  );
}

export default Card;
