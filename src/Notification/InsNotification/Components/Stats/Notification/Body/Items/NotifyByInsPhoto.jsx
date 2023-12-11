import React from "react";
import style from "./Item.module.css";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import moment from "moment";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NotifyByInsPhoto = ({ notification }) => {
  const loginProfile = useSelector((state) => state.idChange.loginProfile);

  return (
    <Link
      to={`/q/${loginProfile.username}/following`}
      style={{ width: "100%" }}
      // state={{
      //   openType: {
      //     openId: notification?.notifyByStaffPhoto?._id,
      //     asOpen: "staff",
      //   },
      // }}
    >
      <div className={style.eachItem}>
        <div className={style.eachItemleft}>
          <img
            src={
              notification?.notifyByInsPhoto?.photoId !== "1"
                ? `${imageShowUrl}/${notification?.notifyByInsPhoto?.insProfilePhoto}`
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

export default NotifyByInsPhoto;
