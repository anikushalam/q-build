import style from "./Item.module.css";
import React from "react";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import moment from "moment";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NotifyByPhoto = ({ notification }) => {
  const loginProfile = useSelector((state) => state.idChange.loginProfile);

  return (
    <Link
      to={`/q/${loginProfile.username}/following`}
      style={{ width: "100%" }}
    >
      <div className={style.eachItem}>
        <div className={style.eachItemleft}>
          <img
            src={
              notification?.notifyByPhoto?.photoId !== "1"
                ? `${imageShowUrl}/${notification?.notifyByPhoto?.profilePhoto}`
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
    </Link>
  );
};

export default NotifyByPhoto;
