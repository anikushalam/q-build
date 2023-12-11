import React from "react";
import { imageShowUrl } from "../../../services/BaseUrl";
import style from "./MiddleHead.module.css";

const MiddleHead = ({ profileHead }) => {
  return (
    <div className={style.main}>
      <div className={style.imageJustify}>
        <img
          src="/images/profile-white.svg"
          alt=""
          className={style.justifyWhite}
        />
        <img
          src="/images/profile-blue.svg"
          alt=""
          className={style.imageJustify1}
        />
        <div className={style.nameAndAbout}>
          <p className={style.name}>{profileHead && profileHead.insName}</p>
          <div className={style.about}>
            {profileHead && profileHead.insAbout}
          </div>
        </div>
      </div>
      <img
        src={
          profileHead?.coverId !== "2"
            ? `${imageShowUrl}/${profileHead?.insProfileCoverPhoto}`
            : "/images/Institute-cover.svg"
        }
        alt=""
        className={style.imageJustify2}
        style={profileHead?.coverId !== "2" ? { right: "0" } : { right: "0" }}
      />
    </div>
  );
};

export default MiddleHead;
