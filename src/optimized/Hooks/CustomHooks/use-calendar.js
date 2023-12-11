import { useState, useCallback, useMemo } from "react";

export const dayName = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export const monthName = [
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

export const getYearList = () => {
  let max = new Date().getFullYear();
  let min = max - 70;
  let years = [];

  for (let i = max + 30; i >= min; i--) {
    years.push(i);
  }
  return years.reverse();
};

const dayCountInWeek = [1, 2, 3, 4, 5, 6, 0];

export const getToday = () => {
  let d = new Date();
  return d;
};

export const getDateFormat = (args) => {
  let argsSplit = args?.split("-");
  return new Date(`${argsSplit[2]}-${argsSplit[1]}-${argsSplit[0]}`);
};
export const getCompareToday = (args) => {
  let argsSplit = args?.split("-");
  let argDate = new Date(`${argsSplit[2]}-${argsSplit[1]}-${argsSplit[0]}`);
  let dDate = new Date();
  if (argDate.getTime() < dDate.getTime()) {
    return false;
  } else if (argDate.getTime() > dDate.getTime()) {
    return false;
  } else {
    return true;
  }
};

export const getCompareDate = (args, args1) => {
  let argDate = new Date(args);
  let args1Split = args1?.split("-");
  let arg1Date = new Date(`${args1Split[2]}-${args1Split[1]}-${args1Split[0]}`);
  if (argDate.getTime() < arg1Date.getTime()) {
    return false;
  } else if (argDate.getTime() > arg1Date.getTime()) {
    return false;
  } else {
    return true;
  }
};

const currentMonthLastDate = (args) => {
  let argDate = new Date(args);
  return new Date(argDate.getFullYear(), argDate.getMonth() + 1, 0);
};
const previousMonthLastDate = (args) => {
  let argDate = new Date(args);
  return new Date(argDate.getFullYear(), argDate.getMonth(), 0);
};
const currentDaysInMonth = (args) => {
  return currentMonthLastDate(args).getDate();
};
const previousDaysInMonth = (args) => {
  return previousMonthLastDate(args).getDate();
};
const currentFirstDayInMonth = (args) => {
  let argDate = new Date(args);
  let d = new Date(argDate.getFullYear(), argDate.getMonth(), 1);
  return d.getDay();
};
const getStartingPoint = (args) => {
  return dayCountInWeek.indexOf(currentFirstDayInMonth(args)) + 1;
};
const getPreviousMonthStartingPoint = (args) => {
  return previousDaysInMonth(args) - getStartingPoint(args);
};

const cRows = 7;
const cCols = 8;

const getCalendarRows = (args, argsPrevPoint) => {
  let cCounter = 1;
  let nCounter = 1;
  let argDate = new Date(args);

  const calendarRows = {};

  for (let i = 1; i < cRows; i++) {
    for (let j = 1; j < cCols; j++) {
      if (!calendarRows[i]) calendarRows[i] = [];

      if (i === 1) {
        if (j < getStartingPoint(args)) {
          calendarRows[i] = [
            ...calendarRows[i],
            {
              type: "PREVIOUS",
              date: `${argsPrevPoint}-${
                argDate.getMonth() === 0 ? 12 : argDate.getMonth()
              }-${
                argDate.getMonth() === 0
                  ? argDate.getFullYear() - 1
                  : argDate.getFullYear()
              }`,
              value: argsPrevPoint,
            },
          ];
          argsPrevPoint++;
        } else {
          calendarRows[i] = [
            ...calendarRows[i],
            {
              classes: "",
              date: `${cCounter}-${
                argDate.getMonth() + 1
              }-${argDate.getFullYear()}`,
              value: cCounter,
            },
          ];
          cCounter++;
        }
      } else if (i > 1 && cCounter < currentDaysInMonth(args) + 1) {
        calendarRows[i] = [
          ...calendarRows[i],
          {
            type: "CURRENT",
            date: `${cCounter}-${
              argDate.getMonth() + 1
            }-${argDate.getFullYear()}`,
            value: cCounter,
          },
        ];
        cCounter++;
      } else {
        calendarRows[i] = [
          ...calendarRows[i],
          {
            type: "NEXT_MONTH",
            date: `${nCounter}-${
              argDate.getMonth() + 2 === 13 ? 1 : argDate.getMonth() + 2
            }-${
              argDate.getMonth() + 2 === 13
                ? argDate.getFullYear() + 1
                : argDate.getFullYear()
            }`,
            value: nCounter,
          },
        ];
        nCounter++;
      }
    }
  }
  return calendarRows;
};

export const useCalendar = (defaultDate) => {
  const [selectedDate, setSelectedDate] = useState(defaultDate ?? getToday());
  const argsPrevPoint = getPreviousMonthStartingPoint(selectedDate);
  const generateCalendar = useMemo(
    () => getCalendarRows(selectedDate, argsPrevPoint),
    [selectedDate, argsPrevPoint]
  );

  const getPreviousMonth = useCallback(() => {
    setSelectedDate(
      (prevValue) =>
        new Date(prevValue.getFullYear(), prevValue.getMonth() - 1, 1)
    );
  }, []);
  const getNextMonth = useCallback(() => {
    setSelectedDate(
      (prevValue) =>
        new Date(prevValue.getFullYear(), prevValue.getMonth() + 1, 1)
    );
  }, []);
  const getSelectedDate = useCallback((data) => {
    let d_f = data?.split("-");
    let argDate = new Date(`${d_f[2]}-${d_f[1]}-${d_f[0]}`);
    setSelectedDate(argDate);
  }, []);

  return {
    selectedDate,
    setSelectedDate,
    getPreviousMonth,
    getNextMonth,
    getSelectedDate,
    generateCalendar,
  };
};
