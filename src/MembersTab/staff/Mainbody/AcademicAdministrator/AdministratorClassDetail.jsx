import React from "react";
import AcademicAdministratorTab from "./AcademicAdministratorTab";
import { useLocation, useSearchParams } from "react-router-dom";
import AdministratorSubject from "./AdministratorSubject";
import AdministratorClassTimetable from "./Timetable/AdministratorClassTimetable";

const AdministratorClassDetail = ({ carryParentState }) => {
  const getQuery = useLocation();
  const [searchParams] = useSearchParams();
  return (
    <>
      <AcademicAdministratorTab carryParentState={carryParentState} />

      {searchParams.get("n") === "time-table" ? (
        <AdministratorClassTimetable clsId={getQuery.state?.cid} />
      ) : (
        <AdministratorSubject
          carryParentState={carryParentState}
          clsId={getQuery.state?.cid}
        />
      )}
    </>
  );
};

export default AdministratorClassDetail;
