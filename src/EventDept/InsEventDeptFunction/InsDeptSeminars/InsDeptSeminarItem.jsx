import React, { useState } from "react";
import { imageShowUrl } from "../../../services/BaseUrl";
import style from "./Seminars.module.css";
import moment from "moment";

function SeminarItem({ cardRef, event, setViewStatus, setEid, eid }) {
  return (
    <div
      className={
        eid === event?._id
          ? `${style.eventItem} ${style.eventItemActive}`
          : style.eventItem
      }
      ref={cardRef}
      onClick={() => {
        setViewStatus("eventView");
        setEid(event?._id);
      }}
    >
      <img
        className={style.eventItemimg}
        src={
          event?.seminar_banner && event?.seminar_banner !== "1"
            ? `${imageShowUrl}/${event?.seminar_banner}`
            : "/images/events/event-card-cover.png"
        }
        alt="event"
      />
      <div className={style.eventItemDetails}>
        <h6>{event?.seminar_name}</h6>
        <p className={style.guest}>{event?.seminar_guest}</p>
        {/* <p className={style.dept}>Computer Science</p> */}
        <p className={style.date}>
          {moment(event?.seminar_date).format("Do MMM YYYY")},{" "}
          {moment(event?.seminar_time).format("hh:mm")}
        </p>
      </div>
      <div className={style.eventItemDetailsright}>
        {event?.seminar_mode === "Online" && (
          <div className={`${style.mode} ${style.online}`}>
            {event?.seminar_mode}
          </div>
        )}
        {event?.seminar_mode === "Offline" && (
          <div className={`${style.mode} ${style.offline}`}>
            {event?.seminar_mode}
          </div>
        )}
      </div>
    </div>
  );
}

export default SeminarItem;
