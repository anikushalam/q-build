import React from "react";
import moment from "moment";
import style from "./Activity.module.css";
const AssignmentActivity = ({ activity }) => {
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
              //     activity?.notifyByDepartPhoto?.photoId !== "1"
              //       ? `${imageShowUrl}/${activity?.notifyByDepartPhoto?.}`
              //   :
              "/images/profileAndCover/subject-profile.svg"
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

export default AssignmentActivity;
