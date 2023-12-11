import React, { useState } from "react";
import style from "../../FinanceManager/FinanceManagerProfile/MiddleContent/MiddleContent.module.css";
import { useTranslation } from "react-i18next";
import Tabs from "./Tabs";
import EventsTabChangeLink from "./EventsTabChnageLink";
import DepartmentList from "./DepartmentList/DepartmentList";

function EventAdminMiddleContent({ carryParentState }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <div className={style.MiddleContent}>
      <div className={style.MiddleContentLeft}>
        <div className={style.tabs}>
          <Tabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>

        {activeIndex === 0 && (
          <div className={style.itemIconContainer}>
            <EventsTabChangeLink
              carryParentState={carryParentState}
              activeTab="event"
            >
              <div className={style.itemIcon}>
                <img src="/images/events/event.svg" alt="event" />
                <p>{t("events")}</p>
              </div>
            </EventsTabChangeLink>

            <EventsTabChangeLink
              carryParentState={carryParentState}
              activeTab="seminars"
            >
              <div className={style.itemIcon}>
                <img src="/images/events/seminar.svg" alt="seminars" />
                <p>{t("seminars")}</p>
              </div>
            </EventsTabChangeLink>

            <EventsTabChangeLink
              carryParentState={carryParentState}
              activeTab="election"
            >
              <div className={style.itemIcon}>
                <img src="/images/events/election.svg" alt="elections" />
                <p>{t("elections")}</p>
              </div>
            </EventsTabChangeLink>
            <EventsTabChangeLink
              carryParentState={carryParentState}
              activeTab="participative"
            >
              <div className={style.itemIcon}>
                <img src="/images/events/competition.svg" alt="competitions" />
                <p>{t("competitions")}</p>
              </div>
            </EventsTabChangeLink>

            <div className={style.itemIcon}>
              <img src="/images/events/pending-fees.svg" alt="pending_fees" />
              <p>{t("pending_fees")}</p>
            </div>

            <div className={style.itemIcon}>
              <img src="/images/events/moderator.svg" alt="moderator" />
              <p>{t("moderators")}</p>
            </div>
          </div>
        )}

        {activeIndex === 1 && (
          <DepartmentList carryParentState={carryParentState} />
        )}
      </div>
    </div>
  );
}

export default EventAdminMiddleContent;
