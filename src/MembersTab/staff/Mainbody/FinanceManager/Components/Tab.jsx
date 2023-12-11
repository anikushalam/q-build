import React from "react";
import style from "./Tab.module.css";

function Tab({ name, img, imgDark }) {
  return (
    <div className={style.tab}>
      <img className={style.img} src={img} alt="" />
      <img className={style.imgdark} src={imgDark} alt="" />
      <p>{name}</p>
    </div>
  );
}

export default Tab;
