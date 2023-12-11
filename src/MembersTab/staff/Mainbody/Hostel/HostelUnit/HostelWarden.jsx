import React from "react";
import HostelUnitInfo from "./HostelUnitInfo/HostelUnitInfo";
import HostelAnnouncement from "../HostelAnnouncement.jsx/HostelAnnouncement";
import style from "../Hostel.module.css";
import { useLocation } from "react-router-dom";
import UnitRoomInfo from "./HostelUnitInfo/UnitRoomInfo/UnitRoomInfo";
const HostelWarden = ({ huid, carryParentState }) => {
  const getQuery = useLocation();
  return (
    <>
      {(!getQuery?.search ||
        getQuery?.search?.substring(3) === "hostelites" ||
        getQuery?.search?.substring(3) === "menu&n=room") && (
        <HostelUnitInfo
          huid={huid}
          carryParentState={carryParentState}
          viewAs={"DESIGNATION"}
        />
      )}

      {getQuery?.search?.substring(3) === "unit&n=room" && (
        <UnitRoomInfo carryParentState={carryParentState} />
      )}
      {getQuery?.search?.substring(3, 10) === "notice" && (
        <div className={style.hostel_container}>
          <HostelAnnouncement
            // hid={role ? onClickValue?.hostel : onClickValue}
            carryParentState={carryParentState}
          />
        </div>
      )}
    </>
  );
};

export default HostelWarden;
