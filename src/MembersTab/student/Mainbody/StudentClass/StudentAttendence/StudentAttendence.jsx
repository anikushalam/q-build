import React from "react";
import Calendar from "../Calender/Calender";
import style from "./StudentAttendence.module.css";
import { useStudentAttendanceCalenderQuery } from "../../../../../services/joining/joinApi";
import { useState } from "react";
import StudentTimeTable from "./StudentTimeTable";
import StudentSubjectList from "./StudentSubjectList";
import { useStudentSubjectAttendance } from "../../../../../hooks/member_tab/student-api";

function StudentAttendence({ studentId, cid }) {
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [timeData, setTimeData] = useState({
    status: week[new Date()?.getDay()],
    date: new Date().toISOString().split("T")[0],
  });
  const [filterAttendance, setFilterAttendance] = useState("");
  const currentDate = new Date();
  const currentDateLocalFormat = currentDate.toISOString().split("-");
  const month =
    +currentDateLocalFormat[1] > 9
      ? +currentDateLocalFormat[1]
      : `0${+currentDateLocalFormat[1]}`;

  const [monthState, setMonthState] = React.useState("Month");

  const {
    data: studentCalenderAttendance,
    refetch: studentCalenderAttendanceRefetch,
  } = useStudentAttendanceCalenderQuery(
    {
      sid: studentId,
      month: monthState === "Month" ? month : "",
      year: +currentDateLocalFormat[0],
    },
    { skip: !studentId }
  );

  const { studentSubjectAttendance, studentSubjectAttendanceRefetch } =
    useStudentSubjectAttendance({
      data: {
        sid: studentId,
        month: monthState === "Month" ? month : "",
        year: +currentDateLocalFormat[0],
        subjectId: filterAttendance?._id,
      },
      skip: !filterAttendance?._id || !studentId,
    });
  const [presentArr, setPresentArr] = React.useState([]);
  const [absentArr, setAbsentArr] = React.useState([]);
  const [leavesArr, setLeavesArr] = React.useState([]);

  const holidayArr = [];

  React.useEffect(() => {
    if (studentCalenderAttendance) {
      setPresentArr([...studentCalenderAttendance?.presentArray]);
      setAbsentArr([...studentCalenderAttendance?.absentArray]);
      if (studentCalenderAttendance?.leaves) {
        const leav = [];
        for (let dat of studentCalenderAttendance?.leaves) {
          leav.push(...dat.date);
        }
        setLeavesArr(leav);
      }
    }
    if (studentSubjectAttendance) {
      setPresentArr([...studentSubjectAttendance?.presentArray]);
      setAbsentArr([...studentSubjectAttendance?.absentArray]);
      if (studentSubjectAttendance?.leaves) {
        const leav = [];
        for (let dat of studentSubjectAttendance?.leaves) {
          leav.push(...dat.date);
        }
        setLeavesArr(leav);
      }
    }
  }, [studentCalenderAttendance, studentSubjectAttendance]);

  React.useEffect(() => {
    if (studentId) studentCalenderAttendanceRefetch();
  }, [studentId, monthState, studentCalenderAttendanceRefetch]);

  React.useEffect(() => {
    if (filterAttendance?._id) studentSubjectAttendanceRefetch();
  }, [filterAttendance?._id, monthState, studentSubjectAttendanceRefetch]);
  const radioChangeHandler = (data) => {
    setMonthState(data);
  };

  const onFilterAttendance = (val) => {
    if (filterAttendance?._id === val?._id) {
      setFilterAttendance("");
      if (studentCalenderAttendance) {
        setPresentArr([...studentCalenderAttendance?.presentArray]);
        setAbsentArr([...studentCalenderAttendance?.absentArray]);
        if (studentCalenderAttendance?.leaves) {
          const leav = [];
          for (let dat of studentCalenderAttendance?.leaves) {
            leav.push(...dat.date);
          }
          setLeavesArr(leav);
        }
      }
    } else setFilterAttendance(val);
  };

  return (
    <>
      <div className={style.staffAttendence}>
        <div className={style.calendar}>
          <Calendar
            presentArr={presentArr}
            absentArr={absentArr}
            holidayArr={holidayArr}
            leavesArr={leavesArr}
            timeData={timeData}
            setTimeData={setTimeData}
          />

          <div className={style.arrColors}>
            {/* <div className={`${style.clr} ${style.present}`}>Present</div> */}

            <div className={`${style.clr} ${style.absent}`}>Absent</div>

            <div className={`${style.clr} ${style.holiday}`}>Holiday</div>

            <div className={`${style.clr} ${style.leave}`}>Leave</div>
          </div>
          <StudentSubjectList
            sid={studentId}
            onFilterAttendance={onFilterAttendance}
            filterAttendance={filterAttendance}
          />
          <div className={style.colours}>
            <div
              className={style.monthColours}
              onClick={() => radioChangeHandler("Month")}
            >
              <p>Monthly</p>
              {monthState === "Month" ? (
                <img src="/images/radio-active.svg" alt="" />
              ) : (
                <img src="/images/radio-disabled.svg" alt="" />
              )}
            </div>
            <div
              className={style.monthColours}
              onClick={() => radioChangeHandler("Year")}
            >
              <p>Yearly</p>
              {monthState === "Year" ? (
                <img src="/images/radio-active.svg" alt="" />
              ) : (
                <img src="/images/radio-disabled.svg" alt="" />
              )}
            </div>
          </div>

          <div className={style.percentage}>
            <div className={style.presentcount}>
              <p>Present Count</p>
              <p>
                {filterAttendance
                  ? studentSubjectAttendance?.presentArray?.length
                  : studentCalenderAttendance?.presentArray?.length}{" "}
                days
              </p>
              <p>
                {filterAttendance
                  ? studentSubjectAttendance?.present === "NaN"
                    ? 0
                    : studentSubjectAttendance?.present
                  : studentCalenderAttendance?.present === "NaN"
                  ? 0
                  : studentCalenderAttendance?.present}{" "}
                %
              </p>
            </div>
            <div className={style.absentcount}>
              <p>Absent Count</p>
              <p>
                {filterAttendance
                  ? studentSubjectAttendance?.absentArray?.length
                  : studentCalenderAttendance?.absentArray?.length}{" "}
                days
              </p>
              <p>
                {filterAttendance
                  ? studentSubjectAttendance?.absent === "NaN"
                    ? 0
                    : studentSubjectAttendance?.absent
                  : studentCalenderAttendance?.absent === "NaN"
                  ? 0
                  : studentCalenderAttendance?.absent}
                %
              </p>
            </div>
          </div>
        </div>

        <div className={style.timeTableContainer}>
          <StudentTimeTable cid={cid} timeData={timeData} />
        </div>
      </div>
    </>
  );
}

export default StudentAttendence;
