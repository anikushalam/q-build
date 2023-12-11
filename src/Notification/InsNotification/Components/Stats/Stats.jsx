import React from "react";
import style from "./Stats.module.css";
import CustomSuspense from "../../../../Custom/SuspenseLoading/CustomSuspense";
import { useLocation } from "react-router-dom";
const Notification = React.lazy(() => import("./Notification/Notification"));
const Announcement = React.lazy(() => import("./Announcement/Announcement"));
const GrQuery = React.lazy(() => import("./GrQuery/GrQuery"));

function Stats() {
  const getQuery = useLocation();

  return (
    <div className={style.stats}>
      <CustomSuspense>
        {!getQuery?.search && <Notification />}
        {getQuery?.search?.substring(3) === "announcement" && <Announcement />}
        {getQuery?.search?.substring(3) === "grquery" && <GrQuery />}
      </CustomSuspense>
      {/* {clickItem === 3 && <Announcement clickItem={clickItem}/>}
      {clickItem === 4 && <Announcement clickItem={clickItem}/>} */}
    </div>
  );
}

export default Stats;
