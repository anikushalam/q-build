import React, { useState, useCallback } from "react";
import style from "./Events.module.css";
import { useTranslation } from "react-i18next";
import EventItem from "./InsEventItem";
import { debounce } from "lodash";
import { useInView } from "react-intersection-observer";
import { useGetEventlist } from "../../../hooks/member_tab/event-api";
import { useEffect } from "react";
import QvipleLoading from "../../../Loader/QvipleLoading";
import EventDetail from "./InsEventDetail";

function Events({ onclickVal, eventCount, deptId }) {
  const { t } = useTranslation();
  const [viewStatus, setViewStatus] = useState("");
  const [eid, setEid] = useState("");
  // --------------------------------------
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [eventList, setEventList] = useState([]);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [editRefetchStatus, setEditRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { getEventlist, getEventListRefetch } = useGetEventlist({
    data: {
      eid: deptId,
      page: page,
      limit: 10,
      search: search,
    },
    skip: !deptId,
  });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (deptId) {
      setShowingDataLoading(true);
      getEventListRefetch();
    }
  }, [page, deptId, search, getEventListRefetch]);

  useEffect(() => {
    if (search) {
      setEventList(getEventlist?.all_events);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setEventList((prevState) =>
          [
            ...new Set(
              [...getEventlist?.all_events, ...prevState]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
        setRefetchStatus(false);
      } else if (editRefetchStatus) {
        setEventList((prevState) =>
          [...new Set([...getEventlist?.all_events]?.map(JSON.stringify))]?.map(
            JSON.parse
          )
        );
        setShowingDataLoading(false);
        setEditRefetchStatus(false);
      } else {
        if (getEventlist?.all_events) {
          setEventList((prevState) =>
            [
              ...new Set(
                [...prevState, ...getEventlist?.all_events]?.map(JSON.stringify)
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getEventlist?.all_events?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getEventlist?.all_events?.length === 10) setState(true);
    else setState(false);
  }, [getEventlist?.all_events]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );
  const onSearch = (val) => {
    onDebounce(val);
    setShowingDataLoading(true);
  };
  const onRefetchWhenEventCreate = () => {
    setPage(1);
    setEditRefetchStatus(true);
    setShowingDataLoading(true);
    getEventListRefetch();
  };

  const onRefetchWhenEventEdited = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getEventListRefetch();
  };

  return (
    <div className={style.events}>
      <div className={style.eventsleft}>
        <div className={style.searchContainerr}>
          <div className={style.searchContainer}>
            <img alt="" src="/images/search-dept-icon.svg" />
            <input
              type="text"
              onChange={(e) => onSearch(e.target.value)}
              placeholder={t("search-label")}
              required
            />
          </div>
        </div>

        <div className={style.eventsContainer}>
          {eventList?.map((event, index) =>
            eventList?.length === index + 1 ? (
              <div ref={ref} key={index} className={style.itemref}>
                <EventItem
                  cardRef={ref}
                  event={event}
                  setViewStatus={setViewStatus}
                  setEid={setEid}
                  eid={eid}
                  onRefetchWhenEventCreate={onRefetchWhenEventCreate}
                />
              </div>
            ) : (
              <div key={index} className={style.itemref}>
                <EventItem
                  cardRef={ref}
                  event={event}
                  setViewStatus={setViewStatus}
                  setEid={setEid}
                  eid={eid}
                  onRefetchWhenEventCreate={onRefetchWhenEventCreate}
                />
              </div>
            )
          )}
          {showingDataLoading && <QvipleLoading />}

          {!showingDataLoading && getEventlist?.all_events?.length === 0 && (
            <div className={style.noevent}>
              <h6>{t("no_event_found")}</h6>
            </div>
          )}
        </div>
      </div>
      {viewStatus === "eventView" ? (
        <EventDetail eid={eid} setViewStatus={setViewStatus} />
      ) : (
        <div className={style.eventsright}>
          <div className={style.eventsrightimgConrainer}>
            <img
              className={style.eventRightimg}
              src="/images/events/event-default.png"
              alt="event"
            />
            <div className={style.eventCount}>
              <h6>{t("events")}</h6>
              <h6>
                {eventCount} <span>{t("upcoming")}</span>
              </h6>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
