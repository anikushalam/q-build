import React from "react";
import style from "./Head.module.css";
import { useTranslation } from "react-i18next";

const Head = ({ headDetail }) => {
  const { t } = useTranslation();
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
          <h3 className={style.name}>{t("sport_art_dept")}</h3>
          <p className={style.about}>
            K. K. Wagh Institute of Engineering Education and Research Centre.
          </p>

          <div className={style.counts}>
            <div className={style.count}>
              <h6>230</h6>
              <p>{t("members")}</p>
            </div>
            <div className={style.count}>
              <h6>7</h6>
              <p>{t("teams")}</p>
            </div>
            <div className={style.count}>
              <h6>5</h6>
              <p>{t("classes")}</p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/images/profile-cover-icon.svg"
        alt=""
        className={style.imageJustify2}
        // style={
        //   headDetail?.coverId !== "2" ? { right: "0" } : { right: "-2.27vw" }
        // }
      />
    </div>
  );
};

export default Head;
