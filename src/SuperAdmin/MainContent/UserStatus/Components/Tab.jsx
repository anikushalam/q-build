import React from "react";
import style from "./Tab.module.css";

function Tab({ name, img, imgDark, imgType }) {
  return (
    <div className={imgType === "user" ? style.tab_no_gap : style.tab}>
      <img
        className={
          imgType === "user" ? `${style.imgUser} ${style.img}` : style.img
        }
        src={img}
        alt="tab"
      />
      <img className={style.imgdark} src={imgDark} alt="tab" />
      <p>{name}</p>
    </div>
  );
}

export default Tab;
