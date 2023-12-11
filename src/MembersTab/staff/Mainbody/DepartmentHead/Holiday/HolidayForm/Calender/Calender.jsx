import React, { Fragment, useEffect, useState } from "react";
import "./Calender.css";
import useCalendar from "./Hooks/useCalender";

const Calendar = ({ removeDateArray, addDateArray, dateArr, allHoliday }) => {
  const [blueArray, setBlueArray] = useState([...allHoliday]);
  const {
    calendarRows,
    selectedDate,
    todayFormatted,
    daysShort,
    monthNames,
    getNextMonth,
    getPrevMonth,
  } = useCalendar();

  useEffect(() => {
    setBlueArray([...blueArray, ...allHoliday]);
  }, [allHoliday]);
  const dateClickHandler = (date) => {
    if (dateArr.length > 0 && dateArr.includes(date)) {
      const arr = dateArr.filter(function (item) {
        return item !== date;
      });

      removeDateArray(arr);
      setBlueArray(arr);
    } else {
      addDateArray(date);
      setBlueArray((prev) => [...prev, date]);
    }
  };

  console.info(allHoliday);

  return (
    <Fragment>
      <div className="calenderheader">
        <div className="monthbtn" onClick={getPrevMonth}>
          <img alt="not found" src="/images/members/arrow-left.svg" />
        </div>
        <div className="yearmonth">
          <h6>{`${monthNames[selectedDate.getMonth()]}`}</h6>
          <p>{`${selectedDate.getFullYear()}`}</p>
        </div>
        <div className="monthbtn" onClick={getNextMonth}>
          <img alt="not found" src="/images/members/arrow-right.svg" />
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            {daysShort.map((day) => (
              <th className="day" key={day}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.values(calendarRows).map((cols) => {
            return (
              <tr key={cols[0].date}>
                {cols.map((col) =>
                  col.date === todayFormatted ? (
                    allHoliday?.includes(String(todayFormatted)) ? (
                      <td
                        key={col.date}
                        className={`${col.classes} date today`}
                        onClick={() => dateClickHandler(col.date)}
                      >
                        <div className="highlight blue"> {col.value}</div>
                      </td>
                    ) : (
                      <td
                        key={col.date}
                        className={`${col.classes} date today`}
                        onClick={() => dateClickHandler(col.date)}
                      >
                        <div className="highlight"> {col.value}</div>
                      </td>
                    )
                  ) : col.classes === "in-prev-month" ||
                    col.classes === "in-next-month" ? (
                    <td key={col.date} className={`${col.classes} date`}>
                      <div className="highlight"> {col.value}</div>
                    </td>
                  ) : dateArr.includes(col.date) ? (
                    <td
                      key={col.date}
                      className={`${col.classes} date`}
                      onClick={() => dateClickHandler(col.date)}
                    >
                      <div className="highlight clicked"> {col.value}</div>
                    </td>
                  ) : allHoliday.length > 0 && allHoliday.includes(col.date) ? (
                    <td key={col.date} className={`${col.classes} date`}>
                      <div className="highlight blue"> {col.value}</div>
                    </td>
                  ) : (
                    <td
                      key={col.date}
                      className={`${col.classes} date`}
                      onClick={() => dateClickHandler(col.date)}
                    >
                      <div className="highlight"> {col.value}</div>
                    </td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Calendar;
