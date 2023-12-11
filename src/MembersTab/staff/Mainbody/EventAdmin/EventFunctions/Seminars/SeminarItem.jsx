import React, { useState } from "react";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import style from "./Seminars.module.css";
import moment from "moment";
import EventMenu from "../Events/EventMenu";
import { useSeminarDelete } from "../../../../../../hooks/member_tab/event-api";
import QLoader from "../../../../../../Loader/QLoader";

function SeminarItem({
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
  const [seminarDelete] = useSeminarDelete();

  const handleDelete = (id) => {
    setDisabled(true);

    seminarDelete({
      smid: id,
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
          {event?.seminar_time?.split("T")[1]?.substring(0, 5)}
        </p>
      </div>
      <div className={style.eventItemDetailsright}>
        <img
          className={style.dots}
          src="/images/menu-dots-icon.svg"
          alt="menu"
          onClick={() => setIsOpen(!isOpen)}
        />
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
      <EventMenu
        open={isOpen}
        onClose={() => setIsOpen(false)}
        handleDelete={() => handleDelete(event?._id)}
        setViewStatus={setViewStatus}
      />
    </div>
  );
}

export default SeminarItem;
