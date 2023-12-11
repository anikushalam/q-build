import React from "react";
import style from "./Head.module.css";
import { imageShowUrl } from "../../../../services/BaseUrl";

const Head = ({ headDetail, insCover, insName }) => {
  return (
    <div className={style.main}>
      <img
        src={
          insCover
            ? `${imageShowUrl}/${insCover}`
            : "/images/Institute-cover.svg"
        }
        alt=""
        // className={style.imageJustify2}
      />

      <div className={style.textcontainer}>
        <h6>{insName}</h6>
      </div>
    </div>
  );
};

export default Head;
