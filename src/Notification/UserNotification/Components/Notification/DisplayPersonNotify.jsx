import React from "react";
import style from "./Item.module.css";
import { imageShowUrl } from "../../../../services/BaseUrl";
import moment from "moment";

const DisplayPersonNotify = ({ notification }) => {
  return (
    <div className={style.eachItem}>
      <div className={style.eachItemleft}>
        <img
          src={
            notification?.notifyByPhoto?.photoId !== "1"
              ? `${imageShowUrl}/${notification?.notifyByPhoto?.profilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
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

export default DisplayPersonNotify;
