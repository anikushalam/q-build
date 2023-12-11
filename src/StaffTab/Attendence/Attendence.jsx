import React, { useState } from "react";
import style from "./Attendence.module.css";
import useCalendar from "./Hooks/useCalender";
import { Divider } from "@mui/material";
import Item from "./Item/Item";
import PresentItem from "./Item/PresentItem";
import AbsentItem from "./Item/AbsentItem";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAllStaffAttendance } from "../../hooks/attendance-api";
import { useApproveStaffList } from "../../hooks/institute/institute-staff-student-api";
import SaveButton from "./Item/SaveButton";
import QvipleLoading from "../../Loader/QvipleLoading";

function Attendence({ instituteId, viewBy }) {
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
  const dates = today.split("-");
  const day = dates[0] > 9 ? dates[0] : `0${dates[0]}`;
  const month = dates[1] > 9 ? dates[1] : `0${dates[1]}`;
  const ids = useSelector((state) => state.idChange);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { approveStaffList, approveStaffListRefetch } = useApproveStaffList({
    data: {
      id: instituteId ? instituteId : ids?.id,
      page: "",
      limit: "",
      date: `${day}/${month}/${dates[2]}`,
    },
    skip: instituteId ? !instituteId : !ids?.id,
  });
  const { allAttendance, allAttendanceRefetch } = useAllStaffAttendance({
    id: instituteId ? instituteId : ids?.id,
    date: `${day}/${month}/${dates[2]}`,
  });
  const weekArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const itemsPerPage = 10;
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
  const [clickedIndex, setClickedIndex] = useState(0);
  const [present, setPresent] = useState([]);
  const [absent, setAbsent] = useState([]);
  const [idPresentArray, setIdPresentArray] = React.useState([]);
  const [idAbsentArray, setIdAbsentArray] = React.useState([]);
  const [selectMonth, setSelectMonth] = useState(false);
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
  React.useEffect(() => {
    if (ids?.id || instituteId) {
      setShowingDataLoading(true);
      approveStaffListRefetch();
    }
  }, [ids?.id, instituteId, approveStaffListRefetch]);

  React.useEffect(() => {
    if (approveStaffList?.staffIns?.length) {
      setPresent(approveStaffList?.staffIns);
      setAbsent(approveStaffList?.staffIns);
      setShowingDataLoading(false);
    }
  }, [approveStaffList?.staffIns]);

  React.useEffect(() => {
    setIdPresentArray([]);
    setIdAbsentArray([]);
  }, [clickedIndex]);
  const presentTabHandler = (id) => {
    if (viewBy === "LEAVE_AND_TRANSFER") {
    } else {
      const removeDublicat = [...idPresentArray];
      if (removeDublicat?.includes(id)) {
        const index = removeDublicat.indexOf(id);
        removeDublicat.splice(index, 1);
        setIdPresentArray(() => [...removeDublicat]);
      } else {
        setIdPresentArray((idPresentArray) => [...idPresentArray, id]);
      }
    }
  };

  const absentTabHandler = (id) => {
    if (viewBy === "LEAVE_AND_TRANSFER") {
    } else {
      const removeDublicat = [...idAbsentArray];
      if (removeDublicat?.includes(id)) {
        const index = removeDublicat.indexOf(id);
        removeDublicat.splice(index, 1);
        setIdAbsentArray(() => [...removeDublicat]);
      } else {
        setIdAbsentArray((idAbsentArray) => [...idAbsentArray, id]);
      }
    }
  };

  const { t } = useTranslation();

  // console.log("this is attendacne", allStaff);
  return (
    <div className={style.attendence}>
      <div className={style.attendencehead}>
        <div className={style.attendenceBtns}>
          <div
            className={style.changemonth}
            onClick={() => setSelectMonth(!selectMonth)}
          >
            <h6>
              {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
            </h6>
            <img alt="not found" src="/images/dropdown-icon.svg" />

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
          {viewBy === "LEAVE_AND_TRANSFER" ? (
            <SaveButton
              alreadyMark={allAttendance?.institute?.staffAttendance?.[0]}
              today={today}
              allIdsArray={approveStaffList?.staffIns}
              allAttendanceRefetch={allAttendanceRefetch}
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
              idPresentArray={idPresentArray}
              idAbsentArray={idAbsentArray}
              setIdPresentArray={setIdPresentArray}
              setIdAbsentArray={setIdAbsentArray}
            />
          ) : null}
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
      </div>
      <Divider />

      <div className={style.tabs}>
        <div
          className={
            clickedIndex === 0
              ? `${style.tab} ${style.purple}`
              : `${style.tab} ${style.grey}`
          }
          onClick={() => setClickedIndex(0)}
        >
          {t("total")} {approveStaffList?.staffIns?.length}
        </div>
        <div
          className={
            clickedIndex === 1
              ? `${style.tab} ${style.tabgreen}`
              : `${style.tab} ${style.light}`
          }
          onClick={() => setClickedIndex(1)}
        >
          {t("present")}{" "}
          {allAttendance?.institute?.staffAttendance[0]?.presentTotal}
        </div>
        <div
          className={
            clickedIndex === 2
              ? `${style.tab} ${style.red}`
              : `${style.tab} ${style.rose}`
          }
          onClick={() => setClickedIndex(2)}
        >
          {t("absent")}{" "}
          {allAttendance?.institute?.staffAttendance[0]?.absentTotal}
        </div>
      </div>

      <div className={style.list}>
        {clickedIndex === 0 &&
          approveStaffList?.staffIns?.map((item, index) => {
            if (
              allAttendance?.institute?.staffAttendance[0]?.presentStaff?.includes(
                item._id
              )
            ) {
              return (
                <>
                  <Item key={index} staff={item} status="present" />
                  <div className={style.divider} />
                </>
              );
            } else if (
              allAttendance?.institute?.staffAttendance[0]?.absentStaff?.includes(
                item._id
              )
            ) {
              return (
                <>
                  <Item key={index} staff={item} status="absent" />
                  <div className={style.divider} />
                </>
              );
            } else {
              return (
                <>
                  <Item key={index} staff={item} status="initial" />
                  <div className={style.divider} />
                </>
              );
            }
          })}

        {clickedIndex === 1 &&
          present?.length > 0 &&
          present?.map((item, index) =>
            allAttendance?.institute?.staffAttendance[0]?.presentStaff?.includes(
              item._id
            ) ? (
              <>
                <PresentItem
                  key={index}
                  staff={item}
                  status="present"
                  presentTabHandler={presentTabHandler}
                />
                <div className={style.divider} />
              </>
            ) : (
              <>
                <PresentItem
                  key={index}
                  staff={item}
                  presentTabHandler={presentTabHandler}
                  status="absent"
                />
                <div className={style.divider} />
              </>
            )
          )}

        {clickedIndex === 2 &&
          absent?.length > 0 &&
          absent?.map((item, index) => {
            if (
              allAttendance?.institute?.staffAttendance[0]?.absentStaff?.includes(
                item._id
              )
            ) {
              return (
                <>
                  <AbsentItem
                    key={index}
                    staff={item}
                    status="absent"
                    absentTabHandler={absentTabHandler}
                  />
                  <div className={style.divider} />
                </>
              );
            } else {
              return (
                <>
                  <AbsentItem
                    key={index}
                    staff={item}
                    status="present"
                    absentTabHandler={absentTabHandler}
                  />
                  <div className={style.divider} />
                </>
              );
            }
          })}
      </div>
      {showingDataLoading && <QvipleLoading />}
    </div>
  );
}

export default Attendence;
