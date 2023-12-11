import React from "react";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "./MiddleHead.module.css";

const MiddleHead = ({ profileHead, setDetailView, headSection, setOpenUser }) => {
  return (
    <>
      <div className={style.top} onClick={() => {
        setDetailView(false)
        setOpenUser('')
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
            <p className={style.name}>{headSection?.userLegalName}</p>
            <div className={style.about}>
              {headSection?.userAbout}
            </div>
          </div>
        </div>
        <img
          src={
            headSection?.photoId !== '2'
            ? `${imageShowUrl}/${headSection?.profileCoverPhoto}`
            : '/images/profile-cover-icon.svg'
          }
          alt="User Cover"
          className={style.imageJustify2}
        />
      </div>
    </>
  );
};

export default MiddleHead;
