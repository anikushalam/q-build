import React, { useEffect } from "react";
import { useState } from "react";
import DailyUpdateCard from "./DailyUpdateCard";
import style from "./StudentDailyUpdates.module.css";
import Tabs from "./Tabs/DailyUpdatesTabs";
import { useStudentDailyUpdates } from "../../../../../hooks/member_tab/student-api";
import { useInView } from "react-intersection-observer";

function StudentDailyUpdates({ studentId }) {
  // -----------------------------------------------------------
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [updateList, setUpdateist] = useState([]);
  const [timeeOut, setTimeeOut] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const { studentDailyUpdate, studentDailyUpdateRefetch } =
    useStudentDailyUpdates({
      data: {
        sid: studentId,
        page: page,
        limit: 10,
      },
      skip: !studentId,
    });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (page) studentDailyUpdateRefetch();
  }, [page, studentDailyUpdateRefetch]);
  useEffect(() => {
    if (studentDailyUpdate?.dailyUpdate)
      setUpdateist([
        ...new Set([...updateList, ...studentDailyUpdate?.dailyUpdate]),
      ]);
    if (studentDailyUpdate?.dailyUpdate?.length === 10) setState(true);
    else setState(false);
  }, [studentDailyUpdate?.dailyUpdate]);

  useEffect(() => {
    setTimeout(() => {
      setTimeeOut(!timeeOut);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.dailyUpdate}>
      <div className={style.tabs}>
        <Tabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
      <div className={style.dailyUpdateCards}>
        {updateList?.length > 0 ? (
          updateList?.map((update, index) => (
            <div ref={ref} key={index} className={style.itemref}>
              <DailyUpdateCard update={update} />
            </div>
          ))
        ) : updateList?.length === 0 && timeeOut === true ? (
          <div className={style.noData}>
            <img src="/images/nodata.jpg" alt="" />
          </div>
        ) : (
          <div className={style.loader}>
            <img src="/images/loader-transperant.svg" alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentDailyUpdates;
