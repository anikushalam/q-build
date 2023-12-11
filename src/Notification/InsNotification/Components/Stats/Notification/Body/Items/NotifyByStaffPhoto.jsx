import React from "react";
import style from "./Item.module.css";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import moment from "moment";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NotifyByStaffPhoto = ({ notification }) => {
  const loginProfile = useSelector((state) => state.idChange.loginProfile);

  return (
    <Link
      to={`/q/${loginProfile.username}/staff`}
      style={{ width: "100%" }}
      state={{
        openType: {
          openId: notification?.notifyByStaffPhoto?._id,
          asOpen: "staff",
          activeTab:
            notification?.notifyCategory === "Approve Staff"
              ? "Approve Staff"
              : "Request Staff",
        },
      }}
    >
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
    </Link>
  );
};

export default NotifyByStaffPhoto;
