import React, { useEffect, useState } from "react";
import style from "./ParticipateEvents.module.css";
import ParticipateEventDetail from "./ParticipateEventDetail";
import ParticipativeEventForm from "./ParticipativeEventForm";
import { useInView } from "react-intersection-observer";

import { useParticipateEventList } from "../../../../../../hooks/member_tab/department-api";
import ParticipateEventCard from "./ParticipateEventCard";

function ParticipateEvents({ did, bid, viewAs, instituteId }) {
  const [detailView, setDetailView] = useState(false);
  const [pid, setPid] = useState("");
  // --------------------------------------
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [eventList, setEventList] = useState([]);
  const [state, setState] = useState(true);
  const [timeeOut, setTimeeOut] = useState(false);

  const { participativeEventList, participativeEventListRefetch } =
    useParticipateEventList({
      data: {
        viewAs: viewAs ?? "",
        did: did,
        page: page,
        limit: 10,
      },
      skip: !did,
    });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (page) participativeEventListRefetch();
  }, [page, participativeEventListRefetch]);

  useEffect(() => {
    if (viewAs === "EVENT_MANAGER") {
      if (participativeEventList?.all_participate)
        setEventList([
          ...new Set([
            ...eventList,
            ...participativeEventList?.all_participate,
          ]),
        ]);
      if (participativeEventList?.all_participate?.length === 10)
        setState(true);
      else setState(false);
    } else {
      if (participativeEventList?.part)
        setEventList([
          ...new Set([...eventList, ...participativeEventList?.part]),
        ]);
      if (participativeEventList?.part?.length === 10) setState(true);
      else setState(false);
    }
  }, [
    participativeEventList?.part,
    participativeEventList?.all_participate,
    viewAs,
  ]);

  useEffect(() => {
    setTimeout(() => {
      setTimeeOut(!timeeOut);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {detailView ? (
        <ParticipateEventDetail pid={pid} />
      ) : (
        <div className={style.elections_container}>
          {viewAs === "EVENT_MANAGER" && (
            <ParticipativeEventForm
              did={did}
              bid={bid}
              participativeEventListRefetch={participativeEventListRefetch}
              handleSetPage={() => {
                setPage(1);
                setEventList([]);
                setTimeeOut(false);
              }}
              instituteId={instituteId}
            />
          )}
          <div className={`${style.peventright} ${style.itemsContainer}`}>
            {eventList?.length > 0 ? (
              eventList?.map((event, index) => (
                <div key={index} ref={ref} className={style.itemsRef}>
                  <ParticipateEventCard
                    cardRef={ref}
                    event={event}
                    setDetailView={setDetailView}
                    setPid={setPid}
                  />
                </div>
              ))
            ) : eventList?.length === 0 && timeeOut === true ? (
              <div className={style.noData}>
                <img src="/images/nodata.jpg" alt="" />
              </div>
            ) : (
              <div className={style.loader}>
                <img src="/images/loader-transperant.svg" alt="" />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ParticipateEvents;
