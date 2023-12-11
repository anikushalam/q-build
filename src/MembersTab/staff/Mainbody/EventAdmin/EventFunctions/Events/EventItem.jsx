import React from "react";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import style from "./Events.module.css";
import moment from "moment";
import { useState } from "react";
import EventMenu from "./EventMenu";
import { useEventDelete } from "../../../../../../hooks/member_tab/event-api";
import QLoader from "../../../../../../Loader/QLoader";

function EventItem({
  cardRef,
  event,
  setViewStatus,
  setEid,
  eid,
  onRefetchWhenEventCreate,
  eventMgtRefetch,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [disabled, setDisabled] = useState(false);
  const [eventDelete] = useEventDelete();
  const handleDelete = (id) => {
    setDisabled(true);

    eventDelete({
      eid: id,
    })
      .then((res) => {
        setIsOpen(false);
        setViewStatus("");
        onRefetchWhenEventCreate();
        eventMgtRefetch();
        setDisabled(false);
      })
      .catch((err) => {
        setIsOpen(false);
        setViewStatus("");

        setDisabled(false);
      });
  };
  const handleEdit = (id) => {};
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
          {event?.event_time?.split("T")[1]?.substring(0, 5)}
        </p>
      </div>
      <img
        className={style.dots}
        src="/images/menu-dots-icon.svg"
        alt="menu"
        onClick={() => setIsOpen(!isOpen)}
      />

      <EventMenu
        open={isOpen}
        onClose={() => setIsOpen(false)}
        handleDelete={() => handleDelete(event?._id)}
        handleEdit={handleEdit}
      />
      {disabled && <QLoader />}
    </div>
  );
}

export default EventItem;
