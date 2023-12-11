import React, { useEffect, useState } from "react";
import style from "./SportsHeadEvents.module.css";
import {
  useOngoingEventList,
  useSportsEventDetail,
} from "../../../../../../../hooks/sports/sports-api";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../../../Loader/QvipleLoading";

function EventCard({ event, setEventId, setProfile }) {
  const { t } = useTranslation();
  const { sportsEventDetails } = useSportsEventDetail({
    eid: event?._id,
    skip: !event?._id,
  });

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
    <div
      className={style.card}
      onClick={() => {
        setEventId(event?._id);
        setProfile(false);
      }}
    >
      <img
        src={
          sportsEventDetails?.event?.sportEventProfilePhoto
            ? `${imageShowUrl}/${sportsEventDetails?.event?.sportEventProfilePhoto}`
            : "/images/ins-image.jpg"
        }
        alt=""
      />
      <div className={style.texttt}>
        <p>
          <span className={style.span1}>
            {sportsEventDetails?.event?.sportEventName}
          </span>{" "}
          ({sportsEventDetails?.event?.sportEventCategory} {t("event")})
        </p>
        <p>
          <span className={style.span2}> {t("date")} : </span>{" "}
          {days[new Date(sportsEventDetails?.event?.sportEventDate).getDay()]},{" "}
          {sportsEventDetails?.event?.sportEventDate}
        </p>
        <p>
          <span className={style.span2}> {t("Place")} : </span>
          {sportsEventDetails?.event?.sportEventPlace}
        </p>
      </div>
    </div>
  );
}

function OngoingEvents({
  sportEvent,
  setEventId,
  setProfile,
  sid,
  refetchStatus,
  setRefetchStatus,
  editRefetchStatus,
  setEditRefetchStatus,
  showingDataLoading,
  setShowingDataLoading,
}) {
  const [ref, inView] = useInView();
  const [events, setEvents] = useState([]);
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);

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
  }, [page, sid, ongoingEventListRefetch]);

  useEffect(() => {
    if (refetchStatus) {
      setEvents((prevState) =>
        [
          ...new Set(
            [...ongoingEventList?.event, ...prevState]?.map(JSON.stringify)
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else if (editRefetchStatus) {
      setEvents((prevState) =>
        [...new Set([...ongoingEventList?.event]?.map(JSON.stringify))]?.map(
          JSON.parse
        )
      );
      setShowingDataLoading(false);
      setEditRefetchStatus(false);
    } else {
      if (ongoingEventList?.event) {
        setEvents((prevState) =>
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

    if (ongoingEventList?.event?.length === 10) setState(true);
    else setState(false);
  }, [ongoingEventList?.event]);

  const onRefetchWhenEventCreated = () => {
    setPage(1);
    setEditRefetchStatus(true);
    setShowingDataLoading(true);
    ongoingEventListRefetch();
  };

  useEffect(() => {
    if (refetchStatus) {
      onRefetchWhenEventCreated();
    }
  }, [refetchStatus]);

  return (
    <div className={style.ongoingEvents}>
      {events?.map((event, index) =>
        events?.length === index + 1 ? (
          <div key={index} ref={ref}>
            <EventCard
              key={index}
              event={event}
              setEventId={setEventId}
              setProfile={setProfile}
            />
          </div>
        ) : (
          <div key={index} ref={ref}>
            <EventCard
              key={index}
              event={event}
              setEventId={setEventId}
              setProfile={setProfile}
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
