import React, { useEffect } from "react";
import StaffMemberConfig from "../Mainbody/StaffMemberConfig";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import EventAdmin from "../Mainbody/EventAdmin/EventAdmin";
import { eventAdminChangeAction } from "../../../redux/store/event-slice";

const EventAdminConfig = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      eventAdminChangeAction.eventAdminQuery({
        sid: location?.state?.sid,
        insId: location?.state?.insId,
        eventDeptId: location?.state?.eventDeptId,
      })
    );
  }, []);

  return (
    <StaffMemberConfig
      index="15"
      sid={location?.state?.sid ?? ""}
      onClickValue={{
        sid: location?.state?.sid,
        insId: location?.state?.insId,
        eventDeptId: location?.state?.eventDeptId,
      }}
    >
      <EventAdmin
        onclickVal={location.state}
        carryParentState={location?.state}
      />
    </StaffMemberConfig>
  );
};

export default EventAdminConfig;
