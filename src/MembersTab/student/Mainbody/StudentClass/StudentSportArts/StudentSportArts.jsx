import React, { useState, useEffect } from "react";
import StaffItem from "../MiddleContent/StaffItem/StaffItem";
import style from "../StudentAbout/StudentAbout.module.css";
import { useGetClassListStudent } from "../../../../../hooks/sports/sports-api";
import { useInView } from "react-intersection-observer";

function StudentSportArts({ setIndexx, setActiveIndex, sid, setSportId }) {
  const sport = {
    photoId: "1",
    staffFirstName: "Birat",
    staffMiddleName: "Kumar",
    staffLastName: "Dhar",
    sportsClass: "Drama Class",
  };

  // -----------------------------------------------------------
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [classList, setClassist] = useState([]);
  const [timeeOut, setTimeeOut] = useState(false);

  const { getClassListStudent, getClassListStudentRefetch } =
    useGetClassListStudent({
      data: {
        sid: sid,
        page: page,
        limit: 10,
      },
      skip: !sid,
    });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (page) getClassListStudentRefetch();
  }, [page, getClassListStudentRefetch]);
  useEffect(() => {
    if (getClassListStudent?.classes)
      setClassist([
        ...new Set([...classList, ...getClassListStudent?.classes]),
      ]);
    if (getClassListStudent?.classes?.length === 10) setState(true);
    else setState(false);
  }, [getClassListStudent?.classes]);

  useEffect(() => {
    setTimeout(() => {
      setTimeeOut(!timeeOut);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={style.aboutContainer}>
        {classList?.length > 0 ? (
          classList?.map((sport, index) => (
            <div ref={ref} key={index} className={style.itemref}>
              <StaffItem
                sport={sport}
                status="sport"
                setIndexx={setIndexx}
                setActiveIndex={setActiveIndex}
                setSportId={setSportId}
              />
            </div>
          ))
        ) : classList?.length === 0 && timeeOut === true ? (
          <div className={style.noData}>
            <img src="/images/nodata.jpg" alt="" />
          </div>
        ) : (
          <div className={style.loader}>
            <img src="/images/loader-transperant.svg" alt="" />
          </div>
        )}
      </div>
    </>
  );
}

export default StudentSportArts;
