import React, { useState } from "react";
import style from "./MiddleContent.module.css";
import Tabs from "./Tabs";
import "./Tabs.css";
import SportsHeadEvents from "./SportsHeadEvents/SportsHeadEvents";
import SportsHeadSports from "./SportsHeadSports/SportsHeadSports";
import { useTranslation } from "react-i18next";

function MiddleContent({
  setProfile,
  setEventId,
  sid,
  sportEvent,
  sportClass,
  sportArtsDetailsRefetch,
}) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={style.MiddleContent}>
      <div className={style.MiddleContentLeft}>
        <div className={style.tabs}>
          <Tabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>

        {activeIndex === 0 && (
          <SportsHeadEvents
            sid={sid}
            sportEvent={sportEvent}
            setEventId={setEventId}
            setProfile={setProfile}
            sportClass={sportClass}
            sportArtsDetailsRefetch={sportArtsDetailsRefetch}
          />
        )}

        {activeIndex === 1 && (
          <SportsHeadSports sid={sid} sportClass={sportClass} />
        )}
      </div>
    </div>
  );
}

export default MiddleContent;
