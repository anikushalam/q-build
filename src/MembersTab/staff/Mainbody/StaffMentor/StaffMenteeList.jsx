import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import {
  useGetOneMentorDetail,
  useGetOneMentorMenteeList,
} from "../../../../hooks/member_tab/department-api";
import MentorCard from "../DepartmentHead/DepartmentMentor/Mentor/MentorCard";
import StaffMenteeCard from "./StaffMenteeCard";
import QvipleLoading from "../../../../Loader/QvipleLoading";

const StaffMenteeList = ({ mid }) => {
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [studentList, setStudentList] = useState([]);
  const { getOneMentorDetail, getOneMentorDetailRefetch } =
    useGetOneMentorDetail({
      mid: mid,
      skip: !mid,
    });

  useEffect(() => {
    if (mid) {
      getOneMentorDetailRefetch();
    }
  }, [mid, getOneMentorDetailRefetch]);
  const { getOneMentorMenteeList, getOneMentorMenteeListRefetch } =
    useGetOneMentorMenteeList({
      data: {
        mid: mid,
        page: page,
        limit: 10,
      },
      skip: !mid,
    });
  useEffect(() => {
    if (mid) {
      setShowingDataLoading(true);
      getOneMentorMenteeListRefetch();
    }
  }, [mid, page, getOneMentorMenteeListRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getOneMentorMenteeList?.all_mentees) {
      setStudentList((prevState) =>
        [
          ...new Set(
            [...prevState, ...getOneMentorMenteeList?.all_mentees]?.map(
              JSON.stringify
            )
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (getOneMentorMenteeList?.all_mentees?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (getOneMentorMenteeList?.all_mentees?.length === 10) setState(true);
    else setState(false);
  }, [getOneMentorMenteeList?.all_mentees]);

  return (
    <>
      <MentorCard viewAs="MENTOR_DETAIL" mentor={getOneMentorDetail?.mentor} />
      {studentList?.map((mentee, index) =>
        studentList?.length === index + 1 ? (
          <div ref={ref} key={mentee?._id}>
            <StaffMenteeCard mentee={mentee} />
          </div>
        ) : (
          <StaffMenteeCard mentee={mentee} key={mentee?._id} />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default StaffMenteeList;
