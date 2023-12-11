import React from "react";
import style from "./EventAdmin.module.css";
import EventAdminProfile from "./EventAdminProfile/EventAdminProfile";
import { useLocation } from "react-router-dom";
import EventFunctions from "./EventFunctions/EventFunctions";
import { useGeteventDeptDetail } from "../../../../hooks/member_tab/event-api";
import { useSelector } from "react-redux";

function EventAdminConfig({ onclickVal, carryParentState }) {
  const getQuery = useLocation();
  const author = useSelector((state) => state.eventAdminChange);
  const { getEventDeptDetail, getEventDeptDetailRefetch } =
    useGeteventDeptDetail({
      eid: author?.eventDeptId,
      skip: !author?.eventDeptId,
    });

  return (
    <div className={style.departmenthead}>
      {(!getQuery.search || getQuery.search === "") && (
        <EventAdminProfile
          carryParentState={carryParentState}
          eventMgt={getEventDeptDetail?.manager}
        />
      )}
      {getQuery.search && getQuery.search !== "" && (
        <EventFunctions
          onclickVal={onclickVal}
          carryParentState={carryParentState}
          eventMgt={getEventDeptDetail?.manager}
          eventMgtRefetch={getEventDeptDetailRefetch}
        />
      )}
    </div>
  );
}

export default EventAdminConfig;
