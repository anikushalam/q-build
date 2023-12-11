import React from "react";
import style from "./Card.module.css";

function Card({ img, name, customStyle }) {
  return (
    <div className={style.card} style={customStyle}>
      <img src={img} alt="" />
      <h6>{name}</h6>
    </div>
  );
}

export default Card;
