import React, { useEffect, useState } from "react";
import useCalendar from "../../../ClassTeacher/ClassCatalog/Attendence/Hooks/useCalender";
import style from "../../../ClassTeacher/ClassCatalog/Attendence/Attendence.module.css";

const AdmissionApplicationCalender = ({ setValidDate }) => {
  const {
    calendarData,
    selectedDate,
    todayFormatted,
    switchMonth,
    monthNames,
    getNextMonth,
    getPrevMonth,
  } = useCalendar();

  const [today, setToday] = useState(todayFormatted);
  const [selectMonth, setSelectMonth] = useState(false);

  useEffect(() => {
    if (today) {
      const dates = today.split("-");
      const day = dates[0] > 9 ? dates[0] : `0${dates[0]}`;
      const month = dates[1] > 9 ? dates[1] : `0${dates[1]}`;
      const year = dates[2];
      setValidDate(`${year}-${month}-${day}`);
    }
  }, [today]);
  // console.info("today", today);
  const weekArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const itemsPerPage = 7;
  const pageIndex = Math.floor(
    calendarData
      .map(function (e) {
        return e.date;
      })
      .indexOf(today) / itemsPerPage
  );
  const [pageNumber, setPageNumber] = useState(pageIndex);
  const itemsVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(calendarData.length / itemsPerPage);

  const displayUsers = calendarData
    .slice(itemsVisited, itemsVisited + itemsPerPage)
    .map((cal, index) => {
      return (
        <div
          key={index}
          className={
            cal.date === today
              ? `${style.date} ${style.clickedDate}`
              : style.date
          }
          onClick={() => setToday(cal.date)}
        >
          <h6>{cal.date.split("-")[0]}</h6>
          <p>{weekArr[cal.day]}</p>
        </div>
      );
    });

  const incPage = () => {
    if (pageNumber + 1 < pageCount) {
      setPageNumber((prev) => prev + 1);
    } else {
      setPageNumber(0);
      getNextMonth();
    }
  };

  const decPage = () => {
    if (pageNumber > 0) {
      setPageNumber((prev) => prev - 1);
    } else {
      setPageNumber(pageCount - 1);

      getPrevMonth();
    }
  };
  const monthNamesArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <div className={style.changemonth}>
        <h6 onClick={() => setSelectMonth(!selectMonth)}>
          {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
        </h6>
        <img
          alt="not found"
          src="/images/dropdown-icon.svg"
          onClick={() => setSelectMonth(!selectMonth)}
        />

        {selectMonth && (
          <div className={style.selectMonthList}>
            {monthNamesArr.map((month, index) => (
              <div
                key={index}
                className={style.month}
                onClick={() => {
                  switchMonth(index);
                  setSelectMonth(false);
                }}
              >
                {month}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={style.calender}>
        <div className={style.arrowbtn} onClick={decPage}>
          <img alt="not found" src="/images/members/left-icon.svg" />
        </div>
        <div className={style.dates}>{displayUsers}</div>
        <div className={style.arrowbtn} onClick={incPage}>
          <img alt="not found" src="/images/members/right-icon.svg" />
        </div>
      </div>
    </>
  );
};

export default AdmissionApplicationCalender;
