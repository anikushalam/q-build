import React, { useState } from "react";
import style from "../AcademicAdministrator.module.css";
import DayWsieTimetable from "./DayWsieTimetable";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Firday",
  "Saturday",
];
const AdministratorClassTimetable = ({ clsId }) => {
  const [day, setDay] = useState("Monday");
  const onDay = (val) => {
    setDay((pre) => (pre = val));
  };
  return (
    <>
      <div className={style.days_container}>
        {days?.map((dy) => (
          <h5
            className={
              day === dy
                ? `${style.days_container_child} ${style.days_container_child_active}`
                : style.days_container_child
            }
            key={dy}
            onClick={() => onDay(dy)}
          >
            {dy ?? ""}
          </h5>
        ))}
      </div>
      <DayWsieTimetable day={day} clsId={clsId} />
    </>
  );
};

export default AdministratorClassTimetable;
