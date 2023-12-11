import React, { useEffect, useState } from "react";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import MentorCard from "../Mentor/MentorCard";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import MentorStudentCard from "./MentorStudentCard";
import AddStudent from "./AddStudent";
import style from "../../../Hostel/Hostel.module.css";
import { useLocation } from "react-router-dom";
import {
  useGetOneMentorDetail,
  useGetOneMentorMenteeList,
} from "../../../../../../hooks/member_tab/department-api";
import MentorStudentMenu from "./MentorStudentMenu";

const DepartmentMentorDetail = ({ did }) => {
  const getQuery = useLocation();
  const [add, setAdd] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [studentList, setStudentList] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [openMenteeMenu, setOpenMenteeMenu] = useState("");
  const { getOneMentorDetail, getOneMentorDetailRefetch } =
    useGetOneMentorDetail({
      mid: getQuery.state?.mid,
      skip: !getQuery.state?.mid,
    });

  useEffect(() => {
    if (getQuery.state?.mid) {
      getOneMentorDetailRefetch();
    }
  }, [getQuery.state?.mid, getOneMentorDetailRefetch]);
  const { getOneMentorMenteeList, getOneMentorMenteeListRefetch } =
    useGetOneMentorMenteeList({
      data: {
        mid: getQuery.state?.mid,
        page: page,
        limit: 10,
      },
      skip: !getQuery.state?.mid,
    });
  useEffect(() => {
    if (getQuery.state?.mid) {
      setShowingDataLoading(true);
      getOneMentorMenteeListRefetch();
    }
  }, [getQuery.state?.mid, page, getOneMentorMenteeListRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setStudentList(getOneMentorMenteeList?.all_mentees);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
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
    }
    if (getOneMentorMenteeList?.all_mentees?.length === 10) setState(true);
    else setState(false);
  }, [getOneMentorMenteeList?.all_mentees]);
  const onClose = () => {
    setAdd((pre) => !pre);
  };
  const onRefetchWhenCreate = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getOneMentorMenteeListRefetch();
  };

  // console.info("sdfhga,", getQuery.state);
  return (
    <>
      <div className={style.with_search}>
        <h6>{`${
          getOneMentorDetail?.mentor?.mentor_head?.staffFirstName ?? ""
        } ${getOneMentorDetail?.mentor?.mentor_head?.staffMiddleName ?? ""} ${
          getOneMentorDetail?.mentor?.mentor_head?.staffLastName ?? ""
        }`}</h6>
        <div className={style.search_container_filter}>
          <section className={style.search_container}>
            <div className={style.search_container_input}>
              <img
                className={style.searchIcon}
                alt="search icon"
                src="/images/search-dash-icon.svg"
              />
              <input
                type="text"
                placeholder="Search"
                // onChange={onSearchEvent}
              />
            </div>
          </section>
          <img
            src="/images/add-plus-blue-icon.svg"
            alt="back arrow"
            className={style.add_plus_icon}
            onClick={onClose}
            title="Add seating arrangements"
          />
        </div>
      </div>
      <BorderBottom
        customStyle={{
          marginTop: "0.5rem",
          marginBottom: "0.6rem",
          width: "100%",
        }}
      />
      <MentorCard viewAs="MENTOR_DETAIL" mentor={getOneMentorDetail?.mentor} />

      {studentList?.map((mentee, index) =>
        studentList?.length === index + 1 ? (
          <div ref={ref} key={mentee?._id}>
            <MentorStudentCard
              mentee={mentee}
              viewAs="MENTOR_DETAIL"
              setOpenMenteeMenu={setOpenMenteeMenu}
            />
          </div>
        ) : (
          <MentorStudentCard
            mentee={mentee}
            key={mentee?._id}
            viewAs="MENTOR_DETAIL"
            setOpenMenteeMenu={setOpenMenteeMenu}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}

      {add && (
        <AddStudent
          onClose={onClose}
          did={did}
          mid={getQuery.state?.mid}
          onRefetch={onRefetchWhenCreate}
        />
      )}
      {openMenteeMenu && (
        <MentorStudentMenu
          onClose={() => setOpenMenteeMenu("")}
          did={did}
          mid={getQuery.state?.mid}
          onRefetch={onRefetchWhenCreate}
          openMenteeMenu={openMenteeMenu}
        />
      )}
    </>
  );
};

export default DepartmentMentorDetail;
