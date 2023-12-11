import React from "react";
import style from "./StudentAbout.module.css";
import StaffItem from "../MiddleContent/StaffItem/StaffItem";
import { useGetMentorsList } from "../../../../../hooks/member_tab/student-api";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useEffect } from "react";
import StudentMentorCard from "../MiddleContent/StudentMentorCard";

function StudentAbout({
  sid,
  classHeadTitle,
  classTeacher,
  studentMentor,
  carryParentState,
}) {
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [mentorList, setMentorList] = useState([]);
  const [timeeOut, setTimeeOut] = useState(false);

  const { getMentorList, getMentorListRefetch } = useGetMentorsList({
    data: {
      sid: sid,
    },
    skip: !sid,
  });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (page) getMentorListRefetch();
  }, [page, getMentorListRefetch]);
  useEffect(() => {
    if (getMentorList?.all_subjects)
      setMentorList([
        ...new Set([...mentorList, ...getMentorList?.all_subjects]),
      ]);
    if (getMentorList?.all_subjects?.length === 10) setState(true);
    else setState(false);
  }, [getMentorList?.all_subjects]);

  useEffect(() => {
    setTimeout(() => {
      setTimeeOut(!timeeOut);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.aboutContainer}>
      <StaffItem
        classHeadTitle={classHeadTitle}
        member={classTeacher}
        status="classTeacher"
      />
      {studentMentor ? (
        <StudentMentorCard
          studentMentor={studentMentor?.mentor_head}
          mid={studentMentor?._id}
          carryParentState={carryParentState}
        />
      ) : null}
      {mentorList?.length > 0 ? (
        mentorList?.map((member, index) => (
          <div ref={ref} key={index} className={style.itemref}>
            <StaffItem member={member} status="about" />
          </div>
        ))
      ) : mentorList?.length === 0 && timeeOut === true ? (
        <div className={style.noData}>
          <img src="/images/nodata.jpg" alt="" />
        </div>
      ) : (
        <div className={style.loader}>
          <img src="/images/loader-transperant.svg" alt="" />
        </div>
      )}
    </div>
  );
}

export default StudentAbout;
