import React from "react";
import { imageShowUrl } from "../../../services/BaseUrl";
import style from "./Events.module.css";
import moment from "moment";

function EventItem({
  cardRef,
  event,
  setViewStatus,
  setEid,
  eid,
  onRefetchWhenEventCreate,
}) {
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
          event?.event_banner && event?.event_banner !== "1"
            ? `${imageShowUrl}/${event?.event_banner}`
            : "/images/events/event-card-cover.png"
        }
        alt="event"
      />
      <div className={style.eventItemDetails}>
        <h6>{event?.event_name}</h6>
        <p className={style.guest}>{event?.event_guest}</p>
        {/* <p className={style.dept}>Computer Science</p> */}
        <p className={style.date}>
          {moment(event?.event_date).format("Do MMM YYYY")},{" "}
          {moment(event?.event_time).format("hh:mm")}
        </p>
      </div>
    </div>
  );
}

export default EventItem;
