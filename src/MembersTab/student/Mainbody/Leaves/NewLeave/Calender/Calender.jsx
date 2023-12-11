import React, { Fragment } from "react";
import { useState } from "react";
import "./Calender.css";
import useCalendar from "./Hooks/useCalender";

const Calendar = ({
  dateSelected,
  setSelectedDate,
  removeDateArray,
  addDateArray,
}) => {
  const {
    calendarRows,
    selectedDate,
    todayFormatted,
    daysShort,
    monthNames,
    getNextMonth,
    getPrevMonth,
  } = useCalendar();

  const [blueArray, setBlueArray] = useState([]);

  // const handleClick = (date) => {
  //   if (dateSelected.includes(date)) {
  //     const index = dateSelected.indexOf(date);
  //     dateSelected.splice(index, 1);
  //   } else {
  //     setSelectedDate((current) => [...current, date]);
  //   }
  // };

  const dateClickHandler = (date) => {
    if (dateSelected.length > 0 && dateSelected.includes(date)) {
      const arr = dateSelected.filter(function (item) {
        return item !== date;
      });

      removeDateArray(arr);
      setBlueArray(arr);
    } else {
      addDateArray(date);
      setBlueArray((prev) => [...prev, date]);
    }
  };

  // console.info(dateSelected);
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
                    <td
                      key={col.date}
                      className={`${col.classes} date`}
                      onClick={() =>
                        // dateClickHandler(
                        //   `${selectedDate.getFullYear()}/${
                        //     selectedDate.getMonth() + 1
                        //   }/${col.value}`
                        // )

                        dateClickHandler(
                          `${col.value < 10 ? `0${col.value}` : col.value}/${
                            selectedDate.getMonth() + 1 < 10
                              ? `0${selectedDate.getMonth() + 1}`
                              : selectedDate.getMonth() + 1
                          }/${selectedDate.getFullYear()}`
                        )
                      }
                    >
                      <div
                        className={
                          dateSelected.includes(
                            // `${selectedDate.getFullYear()}/${
                            //   selectedDate.getMonth() + 1
                            // }/${col.value}`

                            `${col.value < 10 ? `0${col.value}` : col.value}/${
                              selectedDate.getMonth() + 1 < 10
                                ? `0${selectedDate.getMonth() + 1}`
                                : selectedDate.getMonth() + 1
                            }/${selectedDate.getFullYear()}`
                          )
                            ? `${col.classes} datediv aaji active`
                            : `${col.classes} datediv aaji`
                        }
                      >
                        {col.value}
                      </div>
                    </td>
                  ) : (
                    <td
                      key={col.date}
                      className={`${col.classes} date`}
                      onClick={() =>
                        dateClickHandler(
                          // `${selectedDate.getFullYear()}/${
                          //   selectedDate.getMonth() + 1
                          // }/${col.value}`

                          `${col.value < 10 ? `0${col.value}` : col.value}/${
                            selectedDate.getMonth() + 1 < 10
                              ? `0${selectedDate.getMonth() + 1}`
                              : selectedDate.getMonth() + 1
                          }/${selectedDate.getFullYear()}`
                        )
                      }
                    >
                      <div
                        //  className={`datediv`}
                        className={
                          dateSelected.includes(
                            // `${selectedDate.getFullYear()}/${
                            //   selectedDate.getMonth() + 1
                            // }/${col.value}`

                            `${col.value < 10 ? `0${col.value}` : col.value}/${
                              selectedDate.getMonth() + 1 < 10
                                ? `0${selectedDate.getMonth() + 1}`
                                : selectedDate.getMonth() + 1
                            }/${selectedDate.getFullYear()}`
                          )
                            ? `${col.classes} datediv  active`
                            : `${col.classes} datediv `
                        }
                      >
                        {col.value}
                      </div>
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
