import { useState } from "react";

const daysShortArr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

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

const useCalendar = (daysShort = daysShortArr, monthNames = monthNamesArr) => {
  const today = new Date();
  const todayFormatted = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;
  const daysInWeek = [1, 2, 3, 4, 5, 6, 0];
  const [selectedDate, setSelectedDate] = useState(today);
  const selectedMonthLastDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  );

  const daysInMonth = selectedMonthLastDate.getDate();
  const firstDayInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  ).getDay();
  const startingPoint = daysInWeek.indexOf(firstDayInMonth) + 1;
  let currentMonthCounter = 1;
  const rows = 6;
  const cols = 7;
  const calendarRows = {};

  const calendarData = [];

  for (let i = 1; i < rows + 1; i++) {
    for (let j = 1; j < cols + 1; j++) {
      if (!calendarRows[i]) {
        calendarRows[i] = [];
      }

      if (i === 1) {
        if (j < startingPoint) {
        } else {
          calendarRows[i] = [
            ...calendarRows[i],
            {
              classes: "",
              date: `${currentMonthCounter}-${
                selectedDate.getMonth() + 1
              }-${selectedDate.getFullYear()}`,
              value: currentMonthCounter,
            },
          ];

          currentMonthCounter++;
        }
      } else if (i > 1 && currentMonthCounter < daysInMonth + 1) {
        calendarRows[i] = [
          ...calendarRows[i],
          {
            classes: "",
            date: `${currentMonthCounter}-${
              selectedDate.getMonth() + 1
            }-${selectedDate.getFullYear()}`,
            value: currentMonthCounter,
          },
        ];

        currentMonthCounter++;
      } else {
      }
    }

    calendarRows[i].map((c) => {
      const date = c.date.split("-")[0];
      const day = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        date
      ).getDay();

      calendarData.push({ date: c.date, day: day });
      return "";
    });
  }

  const getPrevMonth = () => {
    setSelectedDate(
      (prevValue) =>
        new Date(prevValue.getFullYear(), prevValue.getMonth() - 1, 1)
    );
  };

  const getNextMonth = () => {
    setSelectedDate(
      (prevValue) =>
        new Date(prevValue.getFullYear(), prevValue.getMonth() + 1, 1)
    );
  };

  const switchMonth = (month) => {
    setSelectedDate(
      (prevValue) =>
        new Date(
          prevValue.getFullYear(),
          prevValue.getMonth() + (month - selectedDate.getMonth()),
          1
        )
    );
  };

  return {
    daysShort,
    monthNames,
    todayFormatted,
    calendarData,
    selectedDate,
    getPrevMonth,
    getNextMonth,
    switchMonth,
  };
};

export default useCalendar;
