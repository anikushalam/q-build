import React from "react";
import style from "./Stats.module.css";

import Notification from "./Notification/Notification";
import Announcement from "./Announcement/Announcement";
import Activity from "../Activity/Activity";
import { useLocation } from "react-router-dom";
import StudentMessage from "../Activity/StudentMessage";

function Stats() {
  const getQuery = useLocation();

  return (
    <div className={style.stats}>
      {!getQuery.search && <Notification />}
      {getQuery.search?.substring(3) === "announcement" && <Announcement />}
      {getQuery.search?.substring(3) === "activity" && <Activity />}
      {getQuery.search?.substring(3) === "student-messaage" && (
        <StudentMessage />
      )}
      {/* {clickItem === 3 && <Announcement clickItem={clickItem}/>}
      {clickItem === 4 && <Announcement clickItem={clickItem}/>} */}
    </div>
  );
}

export default Stats;
