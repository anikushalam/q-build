import React, { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import SaveButton from "./SaveButton";
import useCalendar from "../../ClassTeacher/ClassCatalog/Attendence/Hooks/useCalender";
import style from "../../ClassTeacher/ClassCatalog/Attendence/Attendence.module.css";
import Item from "../../ClassTeacher/ClassCatalog/Attendence/Item/Item";
import PresentItem from "../../ClassTeacher/ClassCatalog/Attendence/Item/PresentItem";
import AbsentItem from "../../ClassTeacher/ClassCatalog/Attendence/Item/AbsentItem";
import {
  useGetExtraLectureOneAttendace,
  useSubjectAllStudent,
  useSubjectExtraLecture,
  useSubjectStudentCurrentAttendance,
} from "../../../../../hooks/member_tab/subject-api";
import { useGetClassBatchAllStudent } from "../../../../../hooks/member_tab/class-api";
import { useSelector } from "react-redux";
import ExrtaLecture from "./ExrtaLecture/ExrtaLecture";
import { useLocation } from "react-router-dom";
function SubjectAttendance({
  sid,
  bid,
  isDepartment,
  subjectName,
  carryParentState,
}) {
  const {
    calendarData,
    selectedDate,
    todayFormatted,
    switchMonth,
    monthNames,
    getNextMonth,
    getPrevMonth,
  } = useCalendar();
  const getQuery = useLocation();
  const [today, setToday] = useState(todayFormatted);
  const dates = today.split("-");
  const day = dates[0] > 9 ? dates[0] : `0${dates[0]}`;
  const month = dates[1] > 9 ? dates[1] : `0${dates[1]}`;
  const { t } = useTranslation();
  const storeAttendance = useSelector(
    (state) => state.attendanceStore.subjectTeacher
  );
  const [getTodayAttendance, setGetTodayAddtendance] = useState("");
  const [isRefetch, setIsRefetch] = useState(false);
  const [subjectExtraLecture] = useSubjectExtraLecture();
  const { subjectAllStudent, subjectAllStudentRefetch } = useSubjectAllStudent({
    data: {
      sid: sid,
    },
    skip: bid ? !bid : !sid,
  });
  const {
    subjectStudentCurrentAttendance,
    subjectStudentCurrentAttendanceRefetch,
  } = useSubjectStudentCurrentAttendance({
    data: {
      sid: sid,
      date: `${day}/${month}/${dates[2]}`,
    },
    skip: !sid
      ? !sid
      : getQuery.state?.attendaceView === "EXTRA_MARK"
      ? true
      : false,
  });

  const { getExtraLectureOneAttendace, getExtraLectureOneAttendaceRefetch } =
    useGetExtraLectureOneAttendace({
      data: {
        sid: sid,
        aid: getQuery.state?.attendaceViewId,
      },
      skip: !sid
        ? !sid
        : getQuery.state?.attendaceView === "EXTRA_MARK"
        ? !getQuery.state?.attendaceViewId
        : !getQuery.state?.attendaceViewId,
    });

  const { getClassBatchAllStudent, getClassBatchAllStudentRefetch } =
    useGetClassBatchAllStudent({
      data: {
        bid: bid,
        page: 1,
        limit: 1000,
        search: "",
      },
      skip: !bid,
    });

  useEffect(() => {
    if (storeAttendance?.length > 0) {
      const dates1 = today.split("-");
      const day1 = dates1[0] > 9 ? dates1[0] : `0${dates1[0]}`;
      const month1 = dates1[1] > 9 ? dates1[1] : `0${dates1[1]}`;
      let obj = "";
      for (let sub of storeAttendance) {
        if (sub?.ldate === `${day1}/${month1}/${dates1[2]}`) {
          if (sub?.subjectId === sid) {
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
  }, [storeAttendance, today, sid, isRefetch]);

  useEffect(() => {
    if (bid) {
      getClassBatchAllStudentRefetch();
    }
  }, [bid, getClassBatchAllStudentRefetch]);

  useEffect(() => {
    if (sid) {
      subjectAllStudentRefetch();
      subjectStudentCurrentAttendanceRefetch();
    }
  }, [sid, subjectStudentCurrentAttendanceRefetch, subjectAllStudentRefetch]);

  useEffect(() => {
    if (sid && getQuery.state?.attendaceViewId) {
      getExtraLectureOneAttendaceRefetch();
    }
  }, [
    sid,
    getQuery.state?.attendaceViewId,
    getExtraLectureOneAttendaceRefetch,
  ]);

  // const { absentData, handleAbsent, handlePresent } = useSubject();

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
          onClick={() =>
            getQuery.state?.attendaceView === "EXTRA_MARK"
              ? null
              : setToday(cal.date)
          }
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

  //  -------------Dummy Subject Data--------------------------

  const [clickedIndex, setClickedIndex] = useState(0);
  const [present, setPresent] = useState([]);
  const [absent, setAbsent] = useState([]);
  const [idPresentArray, setIdPresentArray] = React.useState([]);
  const [idAbsentArray, setIdAbsentArray] = React.useState([]);
  const [selectMonth, setSelectMonth] = useState(false);
  const [extraLectureList, setExtraLectureList] = useState([]);
  const [extra, setExtra] = useState(false);
  const [extraLoading, setExtraLoading] = useState(false);
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
    if (bid) {
      setPresent(getClassBatchAllStudent?.all_students);
      setAbsent(getClassBatchAllStudent?.all_students);
    } else {
      setPresent(subjectAllStudent?.students);
      setAbsent(subjectAllStudent?.students);
    }
  }, [bid, subjectAllStudent?.students, getClassBatchAllStudent?.all_students]);

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

  const onExtraAction = () => {
    setExtra(true);
    setExtraLoading(true);
    const dates1 = today.split("-");
    const day1 = dates1[0] > 9 ? dates1[0] : `0${dates1[0]}`;
    const month1 = dates1[1] > 9 ? dates1[1] : `0${dates1[1]}`;
    subjectExtraLecture({
      sid: sid,
      extraBody: {
        date: `${day1}/${month1}/${dates1[2]}`,
        flow: "Extra_Lecture",
      },
    })
      .then((res) => {
        setExtraLectureList(res?.data?.attendance_all);
        setExtraLoading(false);
      })
      .catch({});
  };

  const onExtraClose = () => {
    setExtra(false);
    setExtraLectureList([]);
  };

  // console.info("getExtraLectureOneAttendace", getExtraLectureOneAttendace);
  return (
    <>
      <div className={style.Subject}>
        <div className={style.Subjecthead}>
          <div className={style.attendenceBtns}>
            {getQuery.state?.attendaceView === "EXTRA_MARK" ? (
              <div className={style.changemonth}>
                <h6>
                  {monthNames[selectedDate.getMonth()]}{" "}
                  {selectedDate.getFullYear()}
                </h6>
                <img alt="not found" src="/images/dropdown-icon.svg" />

                {selectMonth && (
                  <div className={style.selectMonthList}>
                    {monthNamesArr.map((month, index) => (
                      <div key={index} className={style.month}>
                        {month}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
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
            )}

            <SaveButton
              alreadyMark={
                getQuery.state?.attendaceView === "EXTRA_MARK"
                  ? { _id: getQuery.state?.attendaceViewId }
                  : getTodayAttendance
                  ? {
                      _id: getTodayAttendance?.alreadyMark,
                    }
                  : subjectStudentCurrentAttendance?.subjects?.attendance?.[0]
              }
              today={today}
              allIdsArray={
                bid
                  ? getClassBatchAllStudent?.all_students
                  : subjectAllStudent?.students
              }
              subjectStudentCurrentAttendanceRefetch={
                subjectStudentCurrentAttendanceRefetch
              }
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
              idPresentArray={idPresentArray}
              idAbsentArray={idAbsentArray}
              setIdPresentArray={setIdPresentArray}
              setIdAbsentArray={setIdAbsentArray}
              sid={sid}
              isDepartment={isDepartment}
              subjectName={subjectName}
              setIsRefetch={setIsRefetch}
              onExtraAction={onExtraAction}
              attendaceView={getQuery.state?.attendaceView}
            />
          </div>
          {getQuery.state?.attendaceView === "EXTRA_MARK" ? (
            <div className={style.calender}>
              <div className={style.arrowbtn}>
                <img alt="not found" src="/images/members/left-icon.svg" />
              </div>
              <div className={style.dates}>{displayUsers}</div>
              <div className={style.arrowbtn}>
                <img alt="not found" src="/images/members/right-icon.svg" />
              </div>
            </div>
          ) : (
            <div className={style.calender}>
              <div className={style.arrowbtn} onClick={decPage}>
                <img alt="not found" src="/images/members/left-icon.svg" />
              </div>
              <div className={style.dates}>{displayUsers}</div>
              <div className={style.arrowbtn} onClick={incPage}>
                <img alt="not found" src="/images/members/right-icon.svg" />
              </div>
            </div>
          )}
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
            {t("total")}{" "}
            {bid
              ? getClassBatchAllStudent?.all_students?.length
              : subjectAllStudent?.students?.length}
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
              : getQuery.state?.attendaceView === "EXTRA_MARK"
              ? getExtraLectureOneAttendace?.subjects?.attendance?.[0]
                  ?.presentTotal ?? 0
              : subjectStudentCurrentAttendance?.subjects?.attendance?.[0]
                  ?.presentTotal ?? 0}
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
              : getQuery.state?.attendaceView === "EXTRA_MARK"
              ? getExtraLectureOneAttendace?.subjects?.attendance?.[0]
                  ?.absentTotal ?? 0
              : subjectStudentCurrentAttendance?.subjects?.attendance?.[0]
                  ?.absentTotal ?? 0}
          </div>
        </div>
        {getQuery.state?.attendaceView === "EXTRA_MARK" ? (
          <div className={style.list}>
            {clickedIndex === 0 &&
              (bid
                ? getClassBatchAllStudent?.all_students?.map((item, index) => {
                    if (getTodayAttendance) {
                      if (
                        getTodayAttendance?.presentStudent?.includes(item._id)
                      ) {
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
                        getExtraLectureOneAttendace?.subjects?.attendance?.[0]?.presentStudent?.includes(
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
                        getExtraLectureOneAttendace?.subjects?.attendance?.[0]?.absentStudent?.includes(
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
                  })
                : subjectAllStudent?.students?.map((item, index) => {
                    if (getTodayAttendance) {
                      if (
                        getTodayAttendance?.presentStudent?.includes(item._id)
                      ) {
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
                        getExtraLectureOneAttendace?.subjects?.attendance?.[0]?.presentStudent?.includes(
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
                        getExtraLectureOneAttendace?.subjects?.attendance?.[0]?.absentStudent?.includes(
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
                  }))}

            {clickedIndex === 1 &&
              present?.length > 0 &&
              present?.map((item, index) =>
                getTodayAttendance ? (
                  getTodayAttendance.presentStudent?.includes(item._id) ? (
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
                ) : getExtraLectureOneAttendace?.subjects?.attendance?.[0]?.presentStudent?.includes(
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
                    getExtraLectureOneAttendace?.subjects?.attendance?.[0]?.absentStudent?.includes(
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
        ) : (
          <div className={style.list}>
            {clickedIndex === 0 &&
              (bid
                ? getClassBatchAllStudent?.all_students?.map((item, index) => {
                    if (getTodayAttendance) {
                      if (
                        getTodayAttendance?.presentStudent?.includes(item._id)
                      ) {
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
                        subjectStudentCurrentAttendance?.subjects?.attendance?.[0]?.presentStudent?.includes(
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
                        subjectStudentCurrentAttendance?.subjects?.attendance?.[0]?.absentStudent?.includes(
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
                  })
                : subjectAllStudent?.students?.map((item, index) => {
                    if (getTodayAttendance) {
                      if (
                        getTodayAttendance?.presentStudent?.includes(item._id)
                      ) {
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
                        subjectStudentCurrentAttendance?.subjects?.attendance?.[0]?.presentStudent?.includes(
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
                        subjectStudentCurrentAttendance?.subjects?.attendance?.[0]?.absentStudent?.includes(
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
                  }))}

            {clickedIndex === 1 &&
              present?.length > 0 &&
              present?.map((item, index) =>
                getTodayAttendance ? (
                  getTodayAttendance.presentStudent?.includes(item._id) ? (
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
                ) : subjectStudentCurrentAttendance?.subjects?.attendance?.[0]?.presentStudent?.includes(
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
                    subjectStudentCurrentAttendance?.subjects?.attendance?.[0]?.absentStudent?.includes(
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
        )}
      </div>
      {extra && (
        <ExrtaLecture
          onClose={onExtraClose}
          extraLoading={extraLoading}
          extraLectureList={extraLectureList}
          carryParentState={carryParentState}
        />
      )}
    </>
  );
}

export default SubjectAttendance;
