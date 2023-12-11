import React from "react";
import style from "./ClassPhoto.module.css";

const ClassPhoto = () => {
  return (
    <div className={style.photoMain}>
      <img
        src={"/images/profileAndCover/subject-profile.svg"}
        alt=""
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default ClassPhoto;
