import React from "react";
import style from "./DesignationOption.module.css";

function SingleDesig({ text, img, setJoin, option, setIndex, clickOtopn }) {
  return (
    <div className={style.singleOption} onClick={clickOtopn}>
      <img src={img} alt="" />
      <h6>{text}</h6>
    </div>
  );
}

export default SingleDesig;
