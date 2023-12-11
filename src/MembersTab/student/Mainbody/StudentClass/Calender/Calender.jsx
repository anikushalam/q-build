import React, { Fragment } from "react";
import "./Calender.css";
import useCalendar from "./Hooks/useCalender";

const Calendar = ({
  presentArr,
  absentArr,
  holidayArr,
  leavesArr,
  timeData,
  setTimeData,
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

  const changeFormat = (date) => {
    const localChange = date.split("-");
    const day = localChange[0] > 9 ? localChange[0] : `0${localChange[0]}`;
    const month = localChange[1] > 9 ? localChange[1] : `0${localChange[1]}`;
    const year = localChange[2];
    return `${day}/${month}/${year}`;
  };

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
                    leavesArr?.includes(changeFormat(col.date)) ? (
                      <td
                        onClick={() =>
                          setTimeData({
                            ...timeData,

                            date: `${col.date?.split("-")[2]}-${
                              col.date?.split("-")[1]
                            }-${col.date?.split("-")[0]}`,
                          })
                        }
                        key={col.date}
                        className={`${col.classes} date `}
                      >
                        <div className={`datediv aaji leave`}>{col.value}</div>
                      </td>
                    ) : presentArr?.includes(changeFormat(col.date)) ? (
                      <td
                        onClick={() =>
                          setTimeData({
                            ...timeData,

                            date: `${col.date?.split("-")[2]}-${
                              col.date?.split("-")[1]
                            }-${col.date?.split("-")[0]}`,
                          })
                        }
                        key={col.date}
                        className={`${col.classes} date `}
                      >
                        <div className={`datediv aaji`}>{col.value}</div>
                      </td>
                    ) : absentArr?.includes(changeFormat(col.date)) ? (
                      <td
                        onClick={() =>
                          setTimeData({
                            ...timeData,

                            date: `${col.date?.split("-")[2]}-${
                              col.date?.split("-")[1]
                            }-${col.date?.split("-")[0]}`,
                          })
                        }
                        key={col.date}
                        className={`${col.classes} date `}
                      >
                        <div className={`datediv aaji absent`}>{col.value}</div>
                      </td>
                    ) : holidayArr?.includes(changeFormat(col.date)) ? (
                      <td
                        onClick={() =>
                          setTimeData({
                            ...timeData,

                            date: `${col.date?.split("-")[2]}-${
                              col.date?.split("-")[1]
                            }-${col.date?.split("-")[0]}`,
                          })
                        }
                        key={col.date}
                        className={`${col.classes} date `}
                      >
                        <div className={`datediv aaji holiday`}>
                          {col.value}
                        </div>
                      </td>
                    ) : (
                      <td
                        onClick={() =>
                          setTimeData({
                            ...timeData,

                            date: `${col.date?.split("-")[2]}-${
                              col.date?.split("-")[1]
                            }-${col.date?.split("-")[0]}`,
                          })
                        }
                        key={col.date}
                        className={`${col.classes} date `}
                      >
                        <div className={`datediv aaji`}>{col.value}</div>
                      </td>
                    )
                  ) : presentArr?.includes(changeFormat(col.date)) ? (
                    <td
                      onClick={() =>
                        setTimeData({
                          ...timeData,

                          date: `${col.date?.split("-")[2]}-${
                            col.date?.split("-")[1]
                          }-${col.date?.split("-")[0]}`,
                        })
                      }
                      className={`${col.classes} date`}
                      key={col.date}
                    >
                      <div className={`datediv present`}>{col.value}</div>
                    </td>
                  ) : absentArr?.includes(changeFormat(col.date)) ? (
                    <td
                      onClick={() =>
                        setTimeData({
                          ...timeData,

                          date: `${col.date?.split("-")[2]}-${
                            col.date?.split("-")[1]
                          }-${col.date?.split("-")[0]}`,
                        })
                      }
                      className={`${col.classes} date`}
                      key={col.date}
                    >
                      <div className={`datediv absent`}>{col.value}</div>
                    </td>
                  ) : holidayArr?.includes(changeFormat(col.date)) ? (
                    <td
                      onClick={() =>
                        setTimeData({
                          ...timeData,

                          date: `${col.date?.split("-")[2]}-${
                            col.date?.split("-")[1]
                          }-${col.date?.split("-")[0]}`,
                        })
                      }
                      className={`${col.classes} date`}
                      key={col.date}
                    >
                      <div className={`datediv holiday`}>{col.value}</div>
                    </td>
                  ) : leavesArr?.includes(changeFormat(col.date)) ? (
                    <td
                      onClick={() =>
                        setTimeData({
                          ...timeData,

                          date: `${col.date?.split("-")[2]}-${
                            col.date?.split("-")[1]
                          }-${col.date?.split("-")[0]}`,
                        })
                      }
                      className={`${col.classes} date`}
                      key={col.date}
                    >
                      <div className={`datediv leave`}>{col.value}</div>
                    </td>
                  ) : (
                    <td
                      onClick={() =>
                        setTimeData({
                          ...timeData,

                          date: `${col.date?.split("-")[2]}-${
                            col.date?.split("-")[1]
                          }-${col.date?.split("-")[0]}`,
                        })
                      }
                      key={col.date}
                      className={`${col.classes} date`}
                    >
                      <div className={`datediv`}>{col.value}</div>
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
