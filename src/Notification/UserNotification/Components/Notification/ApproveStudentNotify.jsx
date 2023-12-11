import React from "react";
import style from "./Item.module.css";
import moment from "moment";

const ApproveStudentNotify = ({ notification }) => {
  return (
    <div className={style.eachItem}>
      <div className={style.eachItemleft}>
        <img
          src={
            // notification?.notifyByInsPhoto?.photoId !== "1"
            //   ? `${imageShowUrl}/${notification?.notifyByInsPhoto?.insProfilePhoto}`
            //   :
            "/images/profileAndCover/classroom-profile-img.svg"
          }
          alt="class room avatar"
        />
        <p>{notification?.notifyContent}</p>
      </div>
      <div className={style.text}>
        <p>{moment(notification?.notifyTime).format("LT")}</p>
      </div>
    </div>
  );
};

export default ApproveStudentNotify;
