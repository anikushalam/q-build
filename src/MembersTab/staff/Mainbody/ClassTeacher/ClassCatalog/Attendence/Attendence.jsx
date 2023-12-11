import React, { useEffect, useState } from "react";
import style from "./Attendence.module.css";
import useCalendar from "./Hooks/useCalender";
import { Divider } from "@mui/material";
import Item from "./Item/Item";
import PresentItem from "./Item/PresentItem";
import AbsentItem from "./Item/AbsentItem";
import { useTranslation } from "react-i18next";
import SaveButton from "./Item/SaveButton";
import {
  useClassAllStudent,
  useClassStudentCurrentAttendance,
} from "../../../../../../hooks/member_tab/class-api";
import { useSelector } from "react-redux";

function Attendence({ cid, isDepartment, className }) {
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
  const { t } = useTranslation();
  const storeAttendance = useSelector(
    (state) => state.attendanceStore.classTeacher
  );
  const [getTodayAttendance, setGetTodayAddtendance] = useState("");
  const [isRefetch, setIsRefetch] = useState(false);
  const { classAllStudent, classAllStudentRefetch } = useClassAllStudent({
    data: {
      cid: cid,
      page: 1,
      limit: 30,
    },
    skip: !cid,
  });
  const {
    classStudentCurrentAttendance,
    classStudentCurrentAttendanceRefetch,
  } = useClassStudentCurrentAttendance({
    cid: cid,
    date: `${day}/${month}/${dates[2]}`,
  });

  useEffect(() => {
    if (storeAttendance?.length > 0) {
      const dates1 = today.split("-");
      const day1 = dates1[0] > 9 ? dates1[0] : `0${dates1[0]}`;
      const month1 = dates1[1] > 9 ? dates1[1] : `0${dates1[1]}`;
      let obj = "";
      for (let sub of storeAttendance) {
        if (sub?.ldate === `${day1}/${month1}/${dates1[2]}`) {
          if (sub?.clsId === cid) {
            obj = sub;
            break;
          } else {
            setIsRefetch(false);
          }
        } else {
          setIsRefetch(false);
        }
      }
      setGetTodayAddtendance(obj);
    }
  }, [storeAttendance, today, cid, isRefetch]);

  useEffect(() => {
    if (cid) {
      classAllStudentRefetch();
      classStudentCurrentAttendanceRefetch();
    }
  }, [cid, classStudentCurrentAttendanceRefetch, classAllStudentRefetch]);
  // const { absentData, handleAbsent, handlePresent } = useAttendence();

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

  //  -------------Dummy Attendence Data--------------------------

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
    setPresent(classAllStudent?.classes?.ApproveStudent);
    setAbsent(classAllStudent?.classes?.ApproveStudent);
  }, [classAllStudent?.classes?.ApproveStudent]);

  React.useEffect(() => {
    setIdPresentArray([]);
    setIdAbsentArray([]);
  }, [clickedIndex]);
  const presentTabHandler = (id) => {
    const removeDublicat = [...idPresentArray];
    if (removeDublicat?.includes(id)) {
      const index = removeDublicat.indexOf(id);
      removeDublicat.splice(index, 1);
      setIdPresentArray(() => [...removeDublicat]);
    } else {
      setIdPresentArray((idPresentArray) => [...idPresentArray, id]);
    }
  };

  const absentTabHandler = (id) => {
    const removeDublicat = [...idAbsentArray];
    if (removeDublicat?.includes(id)) {
      const index = removeDublicat.indexOf(id);
      removeDublicat.splice(index, 1);
      setIdAbsentArray(() => [...removeDublicat]);
    } else {
      setIdAbsentArray((idAbsentArray) => [...idAbsentArray, id]);
    }
  };

  return (
    <>
      <div
        className={style.attendence}
        style={{
          border: isDepartment ? "none" : "0.5px solid #cacaca",
        }}
      >
        <div className={style.attendencehead}>
          <div className={style.attendenceBtns}>
            <div
              className={style.changemonth}
              onClick={() => setSelectMonth(!selectMonth)}
            >
              <h6>
                {monthNames[selectedDate.getMonth()]}{" "}
                {selectedDate.getFullYear()}
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
            <SaveButton
              alreadyMark={
                getTodayAttendance
                  ? {
                      _id: getTodayAttendance?.alreadyMark,
                    }
                  : classStudentCurrentAttendance?.classes?.attendenceDate?.[0]
              }
              today={today}
              allIdsArray={classAllStudent?.classes?.ApproveStudent}
              classStudentCurrentAttendanceRefetch={
                classStudentCurrentAttendanceRefetch
              }
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
              idPresentArray={idPresentArray}
              idAbsentArray={idAbsentArray}
              setIdPresentArray={setIdPresentArray}
              setIdAbsentArray={setIdAbsentArray}
              cid={cid}
              isDepartment={isDepartment}
              className={className}
              setIsRefetch={setIsRefetch}
            />
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
            {t("total")} {classAllStudent?.classes?.ApproveStudent?.length}
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
            {getTodayAttendance
              ? getTodayAttendance?.presentCount ?? 0
              : classStudentCurrentAttendance?.classes?.attendenceDate[0]
                  ?.presentTotal}
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
            {getTodayAttendance
              ? getTodayAttendance?.absentCount ?? 0
              : classStudentCurrentAttendance?.classes?.attendenceDate[0]
                  ?.absentTotal}
          </div>
        </div>

        <div className={style.list}>
          {clickedIndex === 0 &&
            classAllStudent?.classes?.ApproveStudent?.map((item, index) => {
              if (getTodayAttendance) {
                if (getTodayAttendance?.presentStudent?.includes(item._id)) {
                  return (
                    <>
                      <Item key={index} student={item} status="present" />
                      <div className={style.divider} />
                    </>
                  );
                } else if (
                  getTodayAttendance?.absentStudent?.includes(item._id)
                ) {
                  return (
                    <>
                      <Item key={index} student={item} status="absent" />
                      <div className={style.divider} />
                    </>
                  );
                } else {
                  return (
                    <>
                      <Item key={index} student={item} status="initial" />
                      <div className={style.divider} />
                    </>
                  );
                }
              } else {
                if (
                  classStudentCurrentAttendance?.classes?.attendenceDate[0]?.presentStudent?.includes(
                    item._id
                  )
                ) {
                  return (
                    <>
                      <Item key={index} student={item} status="present" />
                      <div className={style.divider} />
                    </>
                  );
                } else if (
                  classStudentCurrentAttendance?.classes?.attendenceDate[0]?.absentStudent?.includes(
                    item._id
                  )
                ) {
                  return (
                    <>
                      <Item key={index} student={item} status="absent" />
                      <div className={style.divider} />
                    </>
                  );
                } else {
                  return (
                    <>
                      <Item key={index} student={item} status="initial" />
                      <div className={style.divider} />
                    </>
                  );
                }
              }
            })}

          {clickedIndex === 1 &&
            present?.length > 0 &&
            present?.map((item, index) =>
              getTodayAttendance ? (
                getTodayAttendance?.presentStudent?.includes(item._id) ? (
                  <>
                    <PresentItem
                      key={index}
                      student={item}
                      status="present"
                      presentTabHandler={presentTabHandler}
                    />
                    <div className={style.divider} />
                  </>
                ) : (
                  <>
                    <PresentItem
                      key={index}
                      student={item}
                      presentTabHandler={presentTabHandler}
                      status="absent"
                    />
                    <div className={style.divider} />
                  </>
                )
              ) : classStudentCurrentAttendance?.classes?.attendenceDate[0]?.presentStudent?.includes(
                  item._id
                ) ? (
                <>
                  <PresentItem
                    key={index}
                    student={item}
                    status="present"
                    presentTabHandler={presentTabHandler}
                  />
                  <div className={style.divider} />
                </>
              ) : (
                <>
                  <PresentItem
                    key={index}
                    student={item}
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
              if (getTodayAttendance) {
                if (getTodayAttendance?.absentStudent?.includes(item._id)) {
                  return (
                    <>
                      <AbsentItem
                        key={index}
                        student={item}
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
                        student={item}
                        status="present"
                        absentTabHandler={absentTabHandler}
                      />
                      <div className={style.divider} />
                    </>
                  );
                }
              } else {
                if (
                  classStudentCurrentAttendance?.classes?.attendenceDate[0]?.absentStudent?.includes(
                    item._id
                  )
                ) {
                  return (
                    <>
                      <AbsentItem
                        key={index}
                        student={item}
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
                        student={item}
                        status="present"
                        absentTabHandler={absentTabHandler}
                      />
                      <div className={style.divider} />
                    </>
                  );
                }
              }
            })}
        </div>
      </div>
    </>
  );
}

export default Attendence;
