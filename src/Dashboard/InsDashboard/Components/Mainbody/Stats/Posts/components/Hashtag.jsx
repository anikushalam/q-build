import React from "react";
import style from "./Hashtag.module.css";

function Hashtag({ text }) {
  return (
    <div className={style.hashtag}>
      <img className={style.symbol} src="/images/hashtag-icon.svg" />
      <div className={style.text}>{text}</div>
    </div>
  );
}

export default Hashtag;
