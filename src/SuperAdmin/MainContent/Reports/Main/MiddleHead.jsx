import React from "react";

import style from "./MiddleHead.module.css";

const MiddleHead = ({ profileHead }) => {
  return (
    <>
      <div className={style.top}>Back To page</div>
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
              K. K. Wagh Institute of Engineering Education and Research
            </p>
            <div className={style.about}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus Lorem ipsum dolor sit amet,
              consectetur Lorem ipsum dolor sit amet, consectetur adipiscing
              elit ut aliquam, purus sit
            </div>
          </div>
        </div>
        <img
          src="/images/profile-cover-icon.svg"
          alt=""
          className={style.imageJustify2}
        />
      </div>
    </>
  );
};

export default MiddleHead;
