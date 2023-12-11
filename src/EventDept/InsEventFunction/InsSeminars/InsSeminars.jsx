import React, { useState, useCallback } from "react";
import style from "./Seminars.module.css";
import { useTranslation } from "react-i18next";
import SeminarItem from "./InsSeminarItem";
import { debounce } from "lodash";

import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import {
  useGetSeminarlist,
  useGetOneEventDetail,
} from "../../../hooks/member_tab/event-api";
import { useEffect } from "react";
import QvipleLoading from "../../../Loader/QvipleLoading";
import SeminarDetail from "./InsSeminarDetail";

function Seminars({ onclickVal, eventCount, deptId }) {
  const { t } = useTranslation();

  const [viewStatus, setViewStatus] = useState("");
  const [eid, setEid] = useState("");
  // --------------------------------------
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [seminarList, setSeminarList] = useState([]);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [editRefetchStatus, setEditRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { getSeminarlist, getSeminarListRefetch } = useGetSeminarlist({
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
      getSeminarListRefetch();
    }
  }, [page, deptId, search, getSeminarListRefetch]);

  useEffect(() => {
    if (search) {
      setSeminarList(getSeminarlist?.all_seminars);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setSeminarList((prevState) =>
          [
            ...new Set(
              [...getSeminarlist?.all_seminars, ...prevState]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
        setRefetchStatus(false);
      } else if (editRefetchStatus) {
        setSeminarList((prevState) =>
          [
            ...new Set([...getSeminarlist?.all_seminars]?.map(JSON.stringify)),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
        setEditRefetchStatus(false);
      } else {
        if (getSeminarlist?.all_seminars) {
          setSeminarList((prevState) =>
            [
              ...new Set(
                [...prevState, ...getSeminarlist?.all_seminars]?.map(
                  JSON.stringify
                )
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getSeminarlist?.all_seminars?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getSeminarlist?.all_seminars?.length === 10) setState(true);
    else setState(false);
  }, [getSeminarlist?.all_seminars]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );
  const onSearch = (val) => {
    onDebounce(val);
  };
  const onRefetchWhenEventCreate = () => {
    setPage(1);
    setEditRefetchStatus(true);
    setShowingDataLoading(true);
    getSeminarListRefetch();
  };
  const onRefetchWhenEventEdited = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getSeminarListRefetch();
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
          {seminarList?.map((event, index) =>
            seminarList?.length === index + 1 ? (
              <div ref={ref} key={index} className={style.itemref}>
                <SeminarItem
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
                <SeminarItem
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
          {!showingDataLoading &&
            getSeminarlist?.all_seminars?.length === 0 && (
              <div className={style.noevent}>
                <h6>{t("no_event_found")}</h6>
              </div>
            )}
        </div>
      </div>
      {viewStatus === "eventView" ? (
        <SeminarDetail eid={eid} setViewStatus={setViewStatus} />
      ) : (
        <div className={style.eventsright}>
          <div className={style.eventsrightimgConrainer}>
            <img
              className={style.eventRightimg}
              src="/images/events/event-default.png"
              alt="event"
            />
            <div className={style.eventCount}>
              <h6>{t("seminars")}</h6>
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

export default Seminars;
