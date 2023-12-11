import React from "react";
import style from "./MiddleBodyRight.module.css";

function MiddleBodyRight() {
  return (
    <div className={style.middleBodyRight}>
      <div className={style.topAbout}>
        About Institute
        <p className={style.topAboutLine}></p>
      </div>

      <div className={style.oneList}>
        <div className={style.oneListImage}>
          <img src="/images/mail-icon1.svg" alt="" />
        </div>
        <div className={style.oneListText}>
          <p className={style.oneListTextHeadingColor}>bd@gmail.com</p>
          <p className={style.oneListTextDes}>Email Address</p>
        </div>
      </div>

      <div className={style.oneList}>
        <div className={style.oneListImage}>
          <img src="/images/call-icon1.svg" alt="" />
        </div>
        <div className={style.oneListText}>
          <p className={style.oneListTextHeadingColor}>9954322384</p>
          <p className={style.oneListTextDes}>Contact Number</p>
        </div>
      </div>

      <div className={style.oneList}>
        <div className={style.oneListImage}>
          <img src="/images/calender-icon.svg" alt="" />
        </div>
        <div className={style.oneListText}>
          <p className={style.oneListTextHeading}>27 August 1975</p>
          <p className={style.oneListTextDes}>Institute Establishment Date</p>
        </div>
      </div>
      <div className={style.oneList}>
        <div className={style.oneListImage}>
          <img src="/images/calender-icon.svg" alt="" />
        </div>
        <div className={style.oneListText}>
          <p className={style.oneListTextHeading}>27 August 1975</p>
          <p className={style.oneListTextDes}>Institute Registered Date</p>
        </div>
      </div>
      <div className={style.oneList}>
        <div className={style.oneListImage}>
          <img src="/images/college-icon.svg" alt="" />
        </div>
        <div className={style.oneListText}>
          <p className={style.oneListTextHeading}>College/ Polytechnic</p>
          <p className={style.oneListTextDes}>Institute Type</p>
        </div>
      </div>
      <div className={style.oneList}>
        <div className={style.oneListImage}>
          <img src="/images/achievement-icon.svg" alt="" />
        </div>
        <div className={style.oneListText}>
          <p className={style.oneListTextHeading} style={{ height: "auto" }}>
            Golden Era Award
          </p>
          <p className={style.oneListTextDes}>Institute Achievements</p>
        </div>
      </div>
      <div className={style.oneList}>
        <div className={style.oneListImage}>
          <img src="/images/location-icon1.svg" alt="" />
        </div>
        <div className={style.oneListText}>
          <p className={style.oneListTextHeading2}>
            Nashik-Puna highway aadwa phata, sinnar nashik
          </p>
          <p className={style.oneListTextDes}>Institute Address</p>
        </div>
      </div>
    </div>
  );
}

export default MiddleBodyRight;
