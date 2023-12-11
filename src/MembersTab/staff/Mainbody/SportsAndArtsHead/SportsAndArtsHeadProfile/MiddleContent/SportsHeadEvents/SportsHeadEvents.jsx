import React from "react";
import { useState } from "react";
import CompletedEvents from "./CompletedEvents";
import OngoingEvents from "./OngoingEvents";
import style from "./SportsHeadEvents.module.css";
import CreateEventModal from "./CreateEventModal/CreateEventModal";
import { useTranslation } from "react-i18next";

function SportsHeadEvents({
  sid,
  sportEvent,
  setEventId,
  setProfile,
  sportClass,
  sportArtsDetailsRefetch,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [editRefetchStatus, setEditRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { t } = useTranslation();

  return (
    <div className={style.sportsHeadEvents}>
      <div className={style.eventstop}>
        <div
          className={
            activeIndex === 0
              ? `${style.eventstopTab} ${style.activeTab}`
              : style.eventstopTab
          }
          onClick={() => setActiveIndex(0)}
        >
          {t("ongoing")}
        </div>
        <div
          className={
            activeIndex === 1
              ? `${style.eventstopTab} ${style.activeTab}`
              : style.eventstopTab
          }
          onClick={() => setActiveIndex(1)}
        >
          {t("completed")}
        </div>
        <div
          className={`${style.eventstopTab} ${style.eventBlue}`}
          onClick={() => setOpenModal(true)}
        >
          {t("create_new_event")}
        </div>
      </div>

      <div className={style.eventsbody}>
        {activeIndex === 0 && (
          <OngoingEvents
            sportEvent={sportEvent}
            setEventId={setEventId}
            setProfile={setProfile}
            sid={sid}
            refetchStatus={refetchStatus}
            editRefetchStatus={editRefetchStatus}
            showingDataLoading={showingDataLoading}
            setShowingDataLoading={setShowingDataLoading}
            setEditRefetchStatus={setEditRefetchStatus}
            setRefetchStatus={setRefetchStatus}
          />
        )}
        {activeIndex === 1 && (
          <CompletedEvents
            sportEvent={sportEvent}
            setEventId={setEventId}
            setProfile={setProfile}
            sid={sid}
            refetchStatus={refetchStatus}
            editRefetchStatus={editRefetchStatus}
            showingDataLoading={showingDataLoading}
            setShowingDataLoading={setShowingDataLoading}
            setEditRefetchStatus={setEditRefetchStatus}
            setRefetchStatus={setRefetchStatus}
          />
        )}
      </div>

      {openModal && (
        <CreateEventModal
          openModal={openModal}
          sid={sid}
          hideModal={() => setOpenModal(false)}
          sportArtsDetailsRefetch={sportArtsDetailsRefetch}
          refetchStatus={refetchStatus}
          setRefetchStatus={setRefetchStatus}
        />
      )}
    </div>
  );
}

export default SportsHeadEvents;
