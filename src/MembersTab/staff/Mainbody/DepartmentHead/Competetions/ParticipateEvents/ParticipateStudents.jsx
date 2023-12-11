import React from "react";
import style from "./ParticipateEvents.module.css";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useParticipateStudentEventList } from "../../../../../../hooks/member_tab/department-api";
import { useState } from "react";
import { useEffect } from "react";
import ParticipateStudentItem from "./ParticipateStudentItem";

function ParticipateStudents({ pid, refetchStudents }) {
  const { t } = useTranslation();

  // --------------------------------------
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [studentList, setStudentList] = useState([]);
  const [state, setState] = useState(true);
  const [timeeOut, setTimeeOut] = useState(false);

  const {
    participativeEventStudentList,
    participativeEventStudentListRefetch,
  } = useParticipateStudentEventList({
    data: {
      pid: pid,
      page: page,
      limit: 10,
    },
    skip: !pid,
  });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (page) participativeEventStudentListRefetch();
  }, [page, participativeEventStudentListRefetch]);

  useEffect(() => {
    if (participativeEventStudentList?.all_students)
      setStudentList([
        ...new Set([
          ...studentList,
          ...participativeEventStudentList?.all_students,
        ]),
      ]);
    if (participativeEventStudentList?.all_students?.length === 10)
      setState(true);
    else setState(false);
  }, [participativeEventStudentList?.all_students]);

  useEffect(() => {
    setTimeout(() => {
      setTimeeOut(!timeeOut);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPage(1);
    setStudentList([]);
    setTimeeOut(false);
    participativeEventStudentListRefetch();
  }, [refetchStudents]);

  // console.info(studentList);

  return (
    <div>
      <div className={style.peventdetailsrighttop}>
        <p className={`${style.peventdetailsrighttopp} ${style.participant}`}>
          {t("participant")}{" "}
          {studentList?.length > 0 && `(${studentList.length})`}
        </p>
        <p className={`${style.peventdetailsrighttopp} ${style.fees}`}>
          {t("fees")}
        </p>
        <p className={`${style.peventdetailsrighttopp} ${style.checklist}`}>
          {t("checklist")}
        </p>
      </div>

      <div className={style.peventdetailsrightBody}>
        {studentList?.length > 0 ? (
          studentList?.map((student, index) => (
            <div key={index} ref={ref} className={style.itemsRef}>
              <ParticipateStudentItem
                student={student}
                pid={pid}
                handleSetPage={() => {
                  setPage(1);
                  setStudentList([]);
                  setTimeeOut(false);
                }}
                participativeEventStudentListRefetch={
                  participativeEventStudentListRefetch
                }
              />
            </div>
          ))
        ) : studentList?.length === 0 && timeeOut === true ? (
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

export default ParticipateStudents;
