import React from "react";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import style from "./DepartmentMiddleHead.module.css";
import { useTranslation } from "react-i18next";

const DepartmentMiddleHead = ({ profile }) => {
  const { t } = useTranslation();
  return (
    <div className={style.main}>
      <img
        className={profile?.coverId !== "2" ? style.coverImgg : style.coverImg}
        src={
          profile?.coverId !== "2"
            ? `${imageShowUrl}/${profile?.cover}`
            : "/images/profileAndCover/finance-cover.svg"
        }
        alt=""
      />

      <div className={style.deptPhoto}>
        <img
          src={
            profile?.photoId !== "1"
              ? `${imageShowUrl}/${profile?.photo}`
              : "/images/profileAndCover/fiance-profile-img.svg"
          }
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className={style.textContainer}>
        <div className={style.textTop}>
          <h6>{t("finace_manager")}</h6>
        </div>
        {/* <div className={style.textBottom}>
          <div className={style.textBottomitem}>
            <h6>{headData?.queryCount}</h6>
            <p>Inquiries</p>
          </div>

          <div className={style.textBottomitem}>
            <h6>{headData?.newAppCount}</h6>
            <p>Ongoing</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DepartmentMiddleHead;
