import React from "react";
import style from "./ElectionCard.module.css";
const ElectionCard = ({ customStyle, children }) => {
  return (
    <div className={style.election_card_container} style={{ ...customStyle }}>
      {children}
    </div>
  );
};

export default ElectionCard;
