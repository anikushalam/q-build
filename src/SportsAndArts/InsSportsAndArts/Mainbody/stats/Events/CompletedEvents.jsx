import React from "react";
import style from "./Events.module.css";
import { useCompletedEventList } from "../../../../../hooks/sports/sports-api";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../services/BaseUrl";

function Card({ eid, sportEvent, setClickEvent }) {
  const { t } = useTranslation();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className={style.cardContainer} onClick={() => setClickEvent(true)}>
      <div className={style.card}>
        <img
          src={
            sportEvent?.photoId === "1"
              ? `${imageShowUrl}/${sportEvent?.sportEventProfilePhoto}`
              : "/images/ins-image.jpg"
          }
          alt=""
        />
        <div>
          <p>
            <span className={style.span1}>{sportEvent?.sportEventName}</span> (
            {sportEvent?.sportEventCategory} {t("event_")})
          </p>
          <p>
            <span className={style.span2}> {t("date")} : </span>{" "}
            {days[new Date(sportEvent?.sportEventDate).getDay()]},{" "}
            {sportEvent?.sportEventDate}
          </p>
          <p>
            <span className={style.span2}> {t("Place")} : </span>
            {sportEvent?.sportEventPlace}
          </p>
        </div>
      </div>
    </div>
  );
}

function CompletedEvents({ sid, setClickEvent }) {
  const [page, setPage] = useState(1);
  const [noMoreResults, setNoMoreResults] = useState(false);
  const [timeeout, setTimeeout] = useState(false);
  const [ref, inView] = useInView();
  const [eventList, setEventList] = useState([]);
  const { completedEventList } = useCompletedEventList({
    data: {
      id: sid,
      page: page,
    },
    skip: !sid,
  });

  useEffect(() => {
    if (completedEventList) {
      if (completedEventList?.event?.length) {
        setEventList([...eventList, ...completedEventList?.event]);
      } else if (page > 1) {
        setNoMoreResults(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completedEventList]);

  useEffect(() => {
    if (inView) {
      if (!noMoreResults) {
        setPage(page + 1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    setTimeout(() => {
      setTimeeout(!timeeout);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {eventList.length > 0 ? (
        eventList.map((sportEvent, index) => (
          <div key={index} ref={ref}>
            <Card
              key={index}
              sportEvent={sportEvent}
              setClickEvent={setClickEvent}
            />
          </div>
        ))
      ) : eventList.length === 0 && timeeout === true ? (
        <div className={style.noData}>
          <img src="/images/nodata.jpg" alt="" />
        </div>
      ) : (
        <div className={style.loader}>
          <img src="/images/loader-transperant.svg" alt="" />
        </div>
      )}
    </div>
  );
}

export default CompletedEvents;
