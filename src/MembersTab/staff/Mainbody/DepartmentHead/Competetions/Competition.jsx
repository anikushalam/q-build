import React from "react";
import { useState } from "react";
import style from "./Competition.module.css";
import UniversalTab from "./CompetitionTab/UniversalTab";
import Elections from "./Elections/Elections";
import { useTranslation } from "react-i18next";
import ParticipateEvents from "./ParticipateEvents/ParticipateEvents";

const Competition = ({ did, bid }) => {
  const { t } = useTranslation();
  const tabContent = [
    {
      name: t("events"),
      id: 0,
    },
    {
      name: t("elections"),
      id: 1,
    },
    {
      name: t("participative_event"),
      id: 2,
    },
  ];

  const [activeIndexTab, setActiveIndexTab] = useState(1);
  return (
    <div className={style.competition_container}>
      <div className={style.backFlex}>
        <UniversalTab
          tabList={tabContent}
          activeIndexTab={activeIndexTab}
          setActiveIndexTab={setActiveIndexTab}
        />
      </div>

      <hr className={style.competition_container_hr} />
      {activeIndexTab === 1 && <Elections did={did} />}
      {activeIndexTab === 2 && <ParticipateEvents did={did} bid={bid} />}
    </div>
  );
};

export default Competition;
