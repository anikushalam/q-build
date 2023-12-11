import React from "react";
import { imageShowUrl } from "../../../services/BaseUrl";
import style from "./MiddleHead.module.css";

const MiddleHead = ({ profileHead }) => {
  // console.info("this is profle cover photot", profileHead);
  return (
    <div className={style.main}>
      <div className={style.imageJustify}>
        <img
          src="/images/profile-white.svg"
          alt=""
          style={{ height: "100%" }}
        />
        <img
          src="/images/profile-blue.svg"
          alt=""
          className={style.imageJustify1}
        />
        <div className={style.nameAndAbout}>
          <p className={style.name}>
            {profileHead && profileHead.userLegalName}
          </p>
          <div className={style.about}>
            {profileHead && profileHead.userBio}
          </div>
        </div>
      </div>
      <img
        src={
          profileHead?.coverId !== "2"
            ? `${imageShowUrl}/${profileHead?.profileCoverPhoto}`
            : "/images/user-cover.svg"
        }
        alt=""
        className={style.imageJustify2}
        style={
          profileHead?.coverId !== "2" ? { right: "0" } : { right: "-2.27vw" }
        }
      />
    </div>
  );
};

export default MiddleHead;
