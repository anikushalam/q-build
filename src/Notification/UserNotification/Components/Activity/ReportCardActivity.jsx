import React from "react";
// import { imageShowUrl } from "../../../../services/BaseUrl";
import moment from "moment";
import style from "./Activity.module.css";
const ReportCardActivity = ({ activity }) => {
  return (
    <div
      className={
        activity?.notifyReadStatus === "Unread"
          ? `${style.item} ${style.item_active}`
          : style.item
      }
    >
      <div className={style.eachItem}>
        <div className={style.eachItemleft}>
          <img
            src={
              //   activity?.notifyByClassPhoto?.photoId !== "1"
              //     ? `${imageShowUrl}/${activity?.notifyByClassPhoto?.}`
              // :
              "/images/profileAndCover/classroom-profile-img.svg"
            }
            alt="student avatar"
          />
          <p>{activity?.notifyContent}</p>
        </div>
        <div className={style.text}>
          <p>{moment(activity?.notifyTime).format("LT")}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportCardActivity;
