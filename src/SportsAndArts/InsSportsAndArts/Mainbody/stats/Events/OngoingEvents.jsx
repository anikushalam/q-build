import React from "react";
import style from "./Events.module.css";
import { useOngoingEventList } from "../../../../../hooks/sports/sports-api";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import QvipleLoading from "../../../../../Loader/QvipleLoading";

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

function OngoingEvents({ sid, setClickEvent }) {
  // --------------------------------------
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [eventList, setEventList] = useState([]);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [editRefetchStatus, setEditRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [timeeOut, setTimeeOut] = useState(false);

  const { ongoingEventList, ongoingEventListRefetch } = useOngoingEventList({
    data: {
      id: sid,
      page: page,
    },
    skip: !sid,
  });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (sid) {
      setShowingDataLoading(true);
      ongoingEventListRefetch();
    }
  }, [page, sid, search, ongoingEventListRefetch]);

  useEffect(() => {
    if (search) {
      setEventList(ongoingEventList?.event);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setEventList((prevState) =>
          [
            ...new Set(
              [...ongoingEventList?.event, ...prevState]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
        setRefetchStatus(false);
      } else if (editRefetchStatus) {
        setEventList((prevState) =>
          [...new Set([...ongoingEventList?.event]?.map(JSON.stringify))]?.map(
            JSON.parse
          )
        );
        setShowingDataLoading(false);
        setEditRefetchStatus(false);
      } else {
        if (ongoingEventList?.event) {
          setEventList((prevState) =>
            [
              ...new Set(
                [...prevState, ...ongoingEventList?.event]?.map(JSON.stringify)
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (ongoingEventList?.event?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (ongoingEventList?.event?.length === 10) setState(true);
    else setState(false);
  }, [ongoingEventList?.event]);

  useEffect(() => {
    setTimeout(() => {
      setTimeeOut(!timeeOut);
      setShowingDataLoading(false);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.info(ongoingEvents);

  return (
    <div>
      {/* {eventList?.length === 0 && timeeOut ? (
        <div className={style.noData}>
          <img src="/images/nodata.jpg" alt="" />
        </div>
      ) : (
        <div className={style.alumnilist}>
          {eventList?.map((sportEvent, index) =>
            eventList?.length === index + 1 ? (
              <Card
                ref={ref}
                key={index}
                sportEvent={sportEvent}
                setClickEvent={setClickEvent}
              />
            ) : (
              <Card
                key={index}
                sportEvent={sportEvent}
                setClickEvent={setClickEvent}
              />
            )
          )}
        </div>
      )}

      {showingDataLoading && <QvipleLoading />} */}

      {eventList?.map((event, index) =>
        eventList?.length === index + 1 ? (
          <div key={index} ref={ref}>
            <Card
              key={index}
              sportEvent={event}
              setClickEvent={setClickEvent}
            />
          </div>
        ) : (
          <div key={index} ref={ref}>
            <Card
              key={index}
              sportEvent={event}
              setClickEvent={setClickEvent}
            />
          </div>
        )
      )}
      {showingDataLoading && <QvipleLoading />}
      {!showingDataLoading && ongoingEventList?.event?.length === 0 && (
        <div className={style.noData}>{t("no_event_found")}</div>
      )}
    </div>
  );
}

export default OngoingEvents;
