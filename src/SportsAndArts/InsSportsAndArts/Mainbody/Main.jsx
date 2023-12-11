import style from "./Main.module.css";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Head from "./stats/Head";
import Content from "./stats/Content";
import { useParams } from "react-router-dom";
import { useState } from "react";
import EachEvent from "./stats/EachEvent/EachEvent";
import CommonTab from "../../../Sidebar/CommonTab";
import { useTranslation } from "react-i18next";
import Events from "./stats/Events/Events";
import SportClasses from "./stats/SportsClasses/SportClasses";

function Main({
  sportsData,
  fetchSportsArtsRefetch,
  insName,
  insCover,
  insNamee,
}) {
  const [clickEvent, setClickEvent] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  const params = useParams();
  return (
    <div className={style.main}>
      <div className={style.sidebar}>
        <Sidebar
          sideDetail={sportsData}
          insName={insName}
          username={params.username}
          sportsData={sportsData}
        />
      </div>

      <div className={style.rightbody}>
        {!clickEvent && (
          <div>
            <div className={style.admission_tab_tabs}>
              <CommonTab
                tabLevel={t("events")}
                onTabAction={() => setActiveIndex(0)}
                customStyleContainer={{
                  width: "50%",
                  marginRight: "2px",
                  borderTopLeftRadius: "6px",
                }}
                customStyleLevel={{ borderTopLeftRadius: "6px" }}
                tabValue={0}
                currentValue={activeIndex}
              />
              <CommonTab
                tabLevel={t("sports")}
                onTabAction={() => setActiveIndex(1)}
                customStyleContainer={{
                  width: "50%",
                  borderTopRightRadius: "6px",
                }}
                customStyleLevel={{ borderTopLeftRadius: "6px" }}
                tabValue={1}
                currentValue={activeIndex}
              />
            </div>
            {activeIndex === 0 && (
              <Events
                setClickEvent={setClickEvent}
                sportEventArr={sportsData?.sportEvent}
                sid={sportsData?._id}
              />
            )}
            {activeIndex === 1 && (
              <SportClasses
                sportClassArr={sportsData?.sportClass}
                sportDeptId={sportsData?._id}
                fetchSportsArtsRefetch={fetchSportsArtsRefetch}
                sid={sportsData?._id}
              />
            )}
          </div>
        )}

        {clickEvent && <EachEvent />}
      </div>
    </div>
  );
}

export default Main;
