import React from "react";
import style from "./ClassCover.module.css";

const ClassCover = () => {
  return (
    <div className={style.coverMain}>
      <img
        className={style.coverImg}
        src={"/images/profileAndCover/department-cover.svg"}
        alt=""
      />
    </div>
  );
};

export default ClassCover;
