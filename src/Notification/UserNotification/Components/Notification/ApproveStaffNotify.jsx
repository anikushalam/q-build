import React from "react";
import style from "./Item.module.css";
import moment from "moment";
import { imageShowUrl } from "../../../../services/BaseUrl";

const ApproveStaffNotify = ({ notification }) => {
  return (
    <div className={style.eachItem}>
      <div className={style.eachItemleft}>
        <img
          src={
            notification?.notifyByStaffPhoto?.photoId !== "1"
              ? `${imageShowUrl}/${notification?.notifyByStaffPhoto?.staffProfilePhoto}`
              : "/images/ins_default_profile.svg"
          }
          alt=""
        />
        <p>{notification?.notifyContent}</p>
      </div>
      <div className={style.text}>
        <p>{moment(notification?.notifyTime).format("LT")}</p>
      </div>
    </div>
  );
};

export default ApproveStaffNotify;
