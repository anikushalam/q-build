import React, { useEffect } from "react";
import { useState } from "react";
import "./Calender.css";
import useCalendar from "./Hooks/useCalender";
import Previous from "./Prev/Prev";
import Next from "./Next/Next";

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 10,
};

const Calendar = ({
  range,
  onClose,
  dateInput,
  setDateInput,
  datePickerPosition,
  isClose,
}) => {
  const {
    calendarRows,
    selectedDate,
    todayFormatted,
    daysShort,
    monthNames,
    getNextMonth,
    getPrevMonth,
    setSelectedDate,
  } = useCalendar();

  const [blueArray, setBlueArray] = useState([]);
  const [index, setIndex] = useState(0);
  const [selectedData, setSelectedData] = useState({
    date: "",
    month: monthNames[selectedDate.getMonth()],
    year: selectedDate.getFullYear().toString(),
  });
  const [dateSelected, setDateSelected] = useState([]);

  const today = new Date();
  const toDate = `${
    today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()
  }/${
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1
  }/${today.getFullYear()}`;

  function convertToDate(dateString) {
    return new Date(dateString.split("/").reverse().join("/"));
  }

  const removeDateArrayMultiple = (arr) => {
    setDateSelected(arr);
  };

  const addDateArrayMultiple = (date) => {
    // if (+convertToDate(date) >= +convertToDate(toDate))
    setDateSelected((prev) => [...prev, date]);
  };

  function generateArrayOfYears() {
    var max = new Date().getFullYear();
    var min = max - 70;
    var years = [];

    for (var i = max + 30; i >= min; i--) {
      years.push(i);
    }
    return years;
  }
  const years = generateArrayOfYears();

  const dateClickHandler = (date) => {
    if (range) {
      if (dateSelected.length > 0 && dateSelected.includes(date)) {
        const arr = dateSelected.filter(function (item) {
          return item !== date;
        });

        removeDateArrayMultiple(arr);
        setBlueArray(arr);
      } else {
        addDateArrayMultiple(date);
        setBlueArray((prev) => [...prev, date]);
      }
      // setDateInput(dateSelected);
    } else {
      setDateSelected(date);
      setDateInput(date);
      if (isClose) {
      } else {
        setTimeout(() => {
          !range && onClose();
        }, 100);
      }
    }
  };

  // ---------------Paginated Years------------------

  const currentYear = new Date().getFullYear();
  const slides = Math.ceil(years.length / 12);
  const indexofCurrentYear = years.indexOf(currentYear);
  const indexofCurrentSlide = Math.ceil(indexofCurrentYear / 12);
  const [currentSlide, setCurrentSlide] = useState(indexofCurrentSlide);
  const indexOfLastSlideYear = currentSlide * 12;
  const indexOfFirstSlideYear = indexOfLastSlideYear - 12;
  const currentYears = years.slice(indexOfFirstSlideYear, indexOfLastSlideYear);

  const getPreviousYear = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const getNextYear = () => {
    if (currentSlide < slides) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  useEffect(() => {
    if (range) {
      setDateInput(dateSelected);
    }
  }, [dateSelected]);

  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      <div className="datepickercontainer" style={{ ...datePickerPosition }}>
        <div className="calenderheader">
          <div className="calenderheaderleft">
            <h6 className="month" onClick={() => setIndex(1)}>{`${
              monthNames[selectedDate.getMonth()]
            }`}</h6>

            <div className="yearcontainer" onClick={() => setIndex(2)}>
              <h6 className="year">{`${selectedDate.getFullYear()}`}</h6>
              <img
                className="arrow"
                src="/images/Input/dropdown-icon.svg"
                alt=""
              />
            </div>
          </div>

          {index === 0 && (
            <div className="calenderheaderright">
              <Previous handleClick={getPrevMonth} />
              <Next handleClick={getNextMonth} />
            </div>
          )}

          {index === 2 && (
            <div className="calenderheaderright">
              <Previous handleClick={getPreviousYear} />
              <Next handleClick={getNextYear} />
            </div>
          )}
        </div>

        {index === 1 && (
          <div className="monthscontainer">
            {monthNames.map((month, index) => (
              <div
                key={index}
                className="monththh"
                onClick={() => {
                  setSelectedData({ ...selectedData, month: month });
                  setSelectedDate(new Date(`${month} ${selectedData.year}`));
                  setIndex(0);
                }}
              >
                {month}
              </div>
            ))}
          </div>
        )}

        {index === 0 && (
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
                          onClick={() => {
                            dateClickHandler(
                              `${
                                col.value < 10 ? `0${col.value}` : col.value
                              }/${
                                selectedDate.getMonth() + 1 < 10
                                  ? `0${selectedDate.getMonth() + 1}`
                                  : selectedDate.getMonth() + 1
                              }/${selectedDate.getFullYear()}`
                            );
                          }}
                        >
                          <div
                            className={
                              dateSelected.includes(
                                `${
                                  col.value < 10 ? `0${col.value}` : col.value
                                }/${
                                  selectedDate.getMonth() + 1 < 10
                                    ? `0${selectedDate.getMonth() + 1}`
                                    : selectedDate.getMonth() + 1
                                }/${selectedDate.getFullYear()}`
                              ) ||
                              dateInput ===
                                `${
                                  col.value < 10 ? `0${col.value}` : col.value
                                }/${
                                  selectedDate.getMonth() + 1 < 10
                                    ? `0${selectedDate.getMonth() + 1}`
                                    : selectedDate.getMonth() + 1
                                }/${selectedDate.getFullYear()}`
                                ? `${col.classes} datediv  active`
                                : `${col.classes} datediv aaji`
                            }
                          >
                            {col.value}
                          </div>
                        </td>
                      ) : col.classes === "in-prev-month" ||
                        col.classes === "in-next-month" ? (
                        <td key={col.date} className={`${col.classes} date`}>
                          <div
                            className={
                              // dateSelected.includes(

                              //   `${
                              //     col.value < 10 ? `0${col.value}` : col.value
                              //   }/${
                              //     selectedDate.getMonth() + 1 < 10
                              //       ? `0${selectedDate.getMonth() + 1}`
                              //       : selectedDate.getMonth() + 1
                              //   }/${selectedDate.getFullYear()}`
                              // )
                              //   ? `${col.classes} datediv active`
                              //   :
                              `${col.classes} datediv `
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
                              `${
                                col.value < 10 ? `0${col.value}` : col.value
                              }/${
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
                                `${
                                  col.value < 10 ? `0${col.value}` : col.value
                                }/${
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
        )}

        {index === 2 && (
          <div className="monthscontainer">
            {currentYears.map((year, index) => (
              <div
                key={index}
                className={currentYear === year ? " monthactive" : " monththh"}
                onClick={() => {
                  setSelectedData({ ...selectedData, year: year });
                  setSelectedDate(new Date(`${year} ${selectedData.month}`));
                  setIndex(0);
                }}
              >
                {year}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Calendar;
