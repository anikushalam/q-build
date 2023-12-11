import React, { useEffect, useState } from "react";
import style from "./SportsHeadEvents.module.css";
import {
  useSportsEventDetail,
  useCompletedEventList,
} from "../../../../../../../hooks/sports/sports-api";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import QvipleLoading from "../../../../../../../Loader/QvipleLoading";

function EventCard({ event, eid, setEventId, setProfile }) {
  const { t } = useTranslation();
  const { sportsEventDetails } = useSportsEventDetail({
    eid: eid,
    skip: !eid,
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
        setEventId(eid);
        setProfile(false);
      }}
    >
      {/* setEventId(eid) */}
      <img
        src={
          sportsEventDetails?.event?.photoId !== "1"
            ? `${imageShowUrl}/${event?.sportEventProfilePhoto}`
            : "/images/ins-image.jpg"
        }
        alt=""
      />
      <div className={style.texttt}>
        <p>
          <span className={style.span1}>{event?.sportEventName}</span> (
          {event?.sportEventCategory} {t("event")})
        </p>
        <p>
          <span className={style.span2}>{t("date")} : </span>{" "}
          {days[new Date(event?.sportEventDate).getDay()]},{" "}
          {event?.sportEventDate}
        </p>
        <p>
          <span className={style.span2}> {t("Place")} : </span>
          {event?.sportEventPlace}
        </p>
      </div>
    </div>
  );
}

function CompletedEvents({
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
  const { t } = useTranslation();
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [state, setState] = useState(true);

  const { completedEventList, completedEventListRefetch } =
    useCompletedEventList({
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
      completedEventListRefetch();
    }
  }, [page, sid, completedEventListRefetch]);

  useEffect(() => {
    if (refetchStatus) {
      setEvents((prevState) =>
        [
          ...new Set(
            [...completedEventList?.event, ...prevState]?.map(JSON.stringify)
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else if (editRefetchStatus) {
      setEvents((prevState) =>
        [...new Set([...completedEventList?.event]?.map(JSON.stringify))]?.map(
          JSON.parse
        )
      );
      setShowingDataLoading(false);
      setEditRefetchStatus(false);
    } else {
      if (completedEventList?.event) {
        setEvents((prevState) =>
          [
            ...new Set(
              [...prevState, ...completedEventList?.event]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (completedEventList?.event?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }

    if (completedEventList?.event?.length === 10) setState(true);
    else setState(false);
  }, [completedEventList?.event]);

  const onRefetchWhenEventCreated = () => {
    setPage(1);
    setEditRefetchStatus(true);
    setShowingDataLoading(true);
    completedEventListRefetch();
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
              eid={event?._id}
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
      {!showingDataLoading && completedEventList?.event?.length === 0 && (
        <div className={style.noData}>{t("no_event_found")}</div>
      )}
    </div>
  );
}

export default CompletedEvents;
