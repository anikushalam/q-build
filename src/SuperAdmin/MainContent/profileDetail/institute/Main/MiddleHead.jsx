import React from "react";
import { imageShowUrl } from "../../../../../services/BaseUrl";

import style from "./MiddleHead.module.css";

const MiddleHead = ({ profileHead, setDetailView, headSection, setOpenIns }) => {
  return (
    <>
      <div className={style.top} onClick={() => {
        setDetailView(false)
        setOpenIns('')
      }}>
        Back To page
      </div>
      <div className={style.main}>
        <div className={style.imageJustify}>
          <img
            src="/images/profile-white1.svg"
            alt=""
            className={style.justifyWhite}
          />
          <img
            src="/images/profile-blue1.svg"
            alt=""
            className={style.imageJustify1}
          />
          <div className={style.nameAndAbout}>
            <p className={style.name}>
              {headSection?.insName}
            </p>
            <div className={style.about}>
              {headSection?.insAbout}
            </div>
          </div>
        </div>
        <img
          src={
            headSection?.coverId !== '2' 
            ? `${imageShowUrl}/${headSection?.insProfileCoverPhoto}`
            : '/images/profile-cover-icon.svg'
          }
          alt="Institute Cover"
          className={style.imageJustify2}
        />
      </div>
    </>
  );
};

export default MiddleHead;
