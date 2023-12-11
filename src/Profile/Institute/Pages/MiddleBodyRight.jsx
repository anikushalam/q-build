import React from "react";
import { useSelector } from "react-redux";
import style from "./MiddleBodyRight.module.css";
import { useTranslation } from "react-i18next";

const MiddleBodyRight = ({ profileRight }) => {
  const { t } = useTranslation();
  const searchId = useSelector((state) => state.idChange.searchProfile);

  return (
    <div className={style.middleBodyRight}>
      <div className={style.topAbout}>
        {t("about_ins")}
        <p className={style.topAboutLine}></p>
      </div>

      {searchId?.id && profileRight?.email_privacy !== "Every one" ? (
        ""
      ) : (
        <div className={style.oneList}>
          <div className={style.oneListImage}>
            <img src="/images/mail-icon1.svg" alt="" />
          </div>
          <div className={style.oneListText}>
            <p className={style.oneListTextHeadingColor}>
              {profileRight && profileRight.insEmail}
            </p>
            <p className={style.oneListTextDes}>{t("email_")}</p>
          </div>
        </div>
      )}
      {searchId?.id && profileRight?.contact_privacy !== "Every one" ? (
        ""
      ) : (
        <div className={style.oneList}>
          <div className={style.oneListImage}>
            <img src="/images/call-icon1.svg" alt="" />
          </div>
          <div className={style.oneListText}>
            <p className={style.oneListTextHeadingColor}>
              {profileRight && `+91 ${profileRight.insPhoneNumber}`}
            </p>
            <p className={style.oneListTextDes}>{t("contact")}</p>
          </div>
        </div>
      )}

      <div className={style.oneList}>
        <div className={style.oneListImage}>
          <img src="/images/calender-icon.svg" alt="" />
        </div>
        <div className={style.oneListText}>
          <p className={style.oneListTextHeading}>
            {profileRight?.insEstdDate
              ? profileRight?.insEstdDate
              : "Establishment Date"}
          </p>
          <p className={style.oneListTextDes}>
            {t("institute_establishment_date")}
          </p>
        </div>
      </div>
      <div className={style.oneList}>
        <div className={style.oneListImage}>
          <img src="/images/calender-icon.svg" alt="" />
        </div>
        <div className={style.oneListText}>
          <p className={style.oneListTextHeading}>
            {profileRight && profileRight?.createdAt?.substr(0, 10)}
          </p>
          <p className={style.oneListTextDes}>
            {t("institute_registered_date")}
          </p>
        </div>
      </div>
      <div className={style.oneList}>
        <div className={style.oneListImage}>
          <img src="/images/college-icon.svg" alt="" />
        </div>
        <div className={style.oneListText}>
          <p className={style.oneListTextHeading}>
            {profileRight && profileRight.insType}
          </p>
          <p className={style.oneListTextDes}>{t("institute_type")}</p>
        </div>
      </div>
      <div className={style.oneList}>
        <div className={style.oneListImage}>
          <img src="/images/achievement-icon.svg" alt="" />
        </div>
        <div className={style.oneListText}>
          <p
            className={style.oneListTextHeading}
            style={
              profileRight?.insAchievement?.length > 50
                ? { height: "4vw" }
                : { height: "auto" }
            }
          >
            {profileRight?.insAchievement
              ? profileRight?.insAchievement?.substr(0, 70)
              : "Institute Achievements"}
            {profileRight?.insAchievement?.length >= 70 ? "..." : ""}
          </p>
          <p className={style.oneListTextDes}>{t("institute_achievements")}</p>
        </div>
      </div>
      <div className={style.oneList}>
        <div className={style.oneListImage}>
          <img src="/images/location-icon1.svg" alt="" />
        </div>
        <div className={style.oneListText}>
          <p className={style.oneListTextHeading2}>
            {profileRight && profileRight.insAddress}
          </p>
          <p className={style.oneListTextDes}>{t("institute_address")}</p>
        </div>
      </div>
    </div>
  );
};

export default MiddleBodyRight;
