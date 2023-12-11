import React from "react";
import style from "./MiddleBodyRight.module.css";
import moment from 'moment'


function MiddleBodyRight({ right }) {
  const text = "g elit ut aliquam";

  return (
    <div className={style.middleBodyRight}>
      <div className={style.topAbout}>
        About Institute
        <p className={style.topAboutLine}></p>
      </div>

      <div className={style.oneList}>
        <div className={style.oneListImage}>
          <img src="/images/mail-icon1.svg" alt="Email" />
        </div>
        <div className={style.oneListText}>
          <p className={style.oneListTextHeadingColor}>{right?.insEmail}</p>
          <p className={style.oneListTextDes}>Email Address</p>
        </div>
      </div>

      <div className={style.oneList}>
        <div className={style.oneListImage}>
          <img src="/images/call-icon1.svg" alt="Mobile" />
        </div>
        <div className={style.oneListText}>
          <p className={style.oneListTextHeadingColor}>{right?.insPhoneNumber}</p>
          <p className={style.oneListTextDes}>Contact Number</p>
        </div>
      </div>

      <div className={style.oneList}>
        <div className={style.oneListImage}>
          <img src="/images/calender-icon.svg" alt="Estd Date" />
        </div>
        <div className={style.oneListText}>
          <p className={style.oneListTextHeading}>{moment(right?.insEstdDate).format('YYYY-MM-DD')}</p>
          <p className={style.oneListTextDes}>Institute Establishment Date</p>
        </div>
      </div>
      <div className={style.oneList}>
        <div className={style.oneListImage}>
          <img src="/images/calender-icon.svg" alt="Registered Date" />
        </div>
        <div className={style.oneListText}>
          <p className={style.oneListTextHeading}>{moment(right?.createdAt).format('YYYY-MM-DD')}</p>
          <p className={style.oneListTextDes}>Institute Registered Date</p>
        </div>
      </div>
      <div className={style.oneList}>
        <div className={style.oneListImage}>
          <img src="/images/college-icon.svg" alt="Institute Type" />
        </div>
        <div className={style.oneListText}>
          <p className={style.oneListTextHeading}>{right?.insType}</p>
          <p className={style.oneListTextDes}>Institute Type</p>
        </div>
      </div>
      <div className={style.oneList}>
        <div className={style.oneListImage}>
          <img src="/images/achievement-icon.svg" alt="Achievements" />
        </div>
        <div className={style.oneListText}>
          <p className={style.oneListTextHeading} style={{ height: "auto" }}>
            {right?.insAchievements}
          </p>
          <p className={style.oneListTextDes}>Institute Achievements</p>
        </div>
      </div>
      <div className={style.oneList}>
        <div className={style.oneListImage}>
          <img src="/images/location-icon1.svg" alt="Location" />
        </div>
        <div className={style.oneListText}>
          <p className={style.oneListTextHeading2}>
            {right?.insAddress}
          </p>
          <p className={style.oneListTextDes}>Institute Address</p>
        </div>
      </div>
    </div>
  );
}

export default MiddleBodyRight;
