import React from "react";
import style from "./StaffProfile.module.css";
// import { useTranslation } from "react-i18next";

const OnlyStaffProfilePhoto = ({
  dynamicImage,
  indexNumber,
  designation,
  name,
  currentDesignation,
  // activeUrl,
  // sid,
  // viewAs,
}) => {
  // const { t } = useTranslation();

  return (
    <>
      <div
        className={style.staff_profile_photo_container}
        style={{
          minHeight: "5rem",
        }}
      >
        <img
          src={dynamicImage}
          alt="staff avatar"
          className={style.staff_profile_photo_image}
        />

        <div className={style.staff_profile_photo_info}>
          <h5 className={style.staff_profile_photo_name}>{name}</h5>
          <p className={style.staff_profile_photo_index}>{indexNumber}</p>

          <p className={style.staff_profile_photo_index}>{designation}</p>
          <p className={style.staff_profile_photo_index}>
            {currentDesignation}
          </p>
        </div>
      </div>
    </>
  );
};

export default OnlyStaffProfilePhoto;
