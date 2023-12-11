import React from "react";
import style from "./Events.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import OngoingEvents from "./OngoingEvents";
import CompletedEvents from "./CompletedEvents";

function Events({ setClickEvent, sportEventArr, sid }) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={style.events}>
      <div className={style.eventstop}>
        <div className={style.eventTab} onClick={() => setActiveIndex(0)}>
          <h6
            className={
              activeIndex === 0
                ? `${style.etab} ${style.etabactive}`
                : style.etab
            }
          >
            {t("ongoing")}
          </h6>
        </div>
        <div className={style.eventTab} onClick={() => setActiveIndex(1)}>
          <h6
            className={
              activeIndex === 1
                ? `${style.etab} ${style.etabactive}`
                : style.etab
            }
          >
            {t("completed")}
          </h6>
        </div>
      </div>

      <div className={style.eventsbody}>
        {activeIndex === 0 && (
          <OngoingEvents sid={sid} setClickEvent={setClickEvent} />
        )}
        {activeIndex === 1 && (
          <CompletedEvents sid={sid} setClickEvent={setClickEvent} />
        )}
      </div>
    </div>
  );
}

export default Events;
