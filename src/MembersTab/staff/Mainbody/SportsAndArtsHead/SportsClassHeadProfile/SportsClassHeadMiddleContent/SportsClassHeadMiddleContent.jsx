import React, { useState } from "react";
import style from "./SportsClassHeadMiddleContent.module.css";
import Tabs from "./Tabs";
import SportsClassMembers from "./SportsClassMembers/SportsClassMembers";
import SportsClassTeams from "./SportsClassTeams/SportsClassTeams";
import { useLocation } from "react-router-dom";
function SportsClassHeadMiddleContent({
  cid,
  classTeams,
  insId,
  classProfileRefetch,
  carryParentState,
}) {
  const getQuery = useLocation();

  return (
    <div className={style.MiddleContent}>
      <div className={style.MiddleContentLeft}>
        <div className={style.tabs}>
          <Tabs
            activeUrl={getQuery?.search}
            carryParentState={carryParentState}
          />
        </div>

        {!getQuery?.search && (
          <SportsClassMembers
            cid={cid}
            insId={insId}
            classProfileRefetch={classProfileRefetch}
          />
        )}

        {getQuery?.search && (
          <SportsClassTeams cid={cid} classTeams={classTeams} insId={insId} />
        )}
      </div>
    </div>
  );
}

export default SportsClassHeadMiddleContent;
