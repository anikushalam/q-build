import style from "./Item.module.css";
import React from "react";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import moment from "moment";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NotifyByStudentPhoto = ({ notification }) => {
  const loginProfile = useSelector((state) => state.idChange.loginProfile);

  return (
    <Link
      to={`/q/${loginProfile.username}/student`}
      style={{ width: "100%" }}
      state={{
        openType: {
          openId: notification?.notifyByStudentPhoto?._id,
          asOpen: "student",
        },
      }}
    >
      <div className={style.eachItem}>
        <div className={style.eachItemleft}>
          <img
            src={
              notification?.notifyByStudentPhoto?.photoId !== "1"
                ? `${imageShowUrl}/${notification?.notifyByStudentPhoto?.studentProfilePhoto}`
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

export default NotifyByStudentPhoto;
