import React, { useEffect, useState } from "react";
import style from "../StaffAdmisionAdmin/AdmissionApplicationRequest/AdmissionApplicationRequest.module.css";
import { useTranslation } from "react-i18next";
import QvipleLoading from "../../../../Loader/QvipleLoading";
import { useInView } from "react-intersection-observer";
import { useGetAllMeetingByMentor } from "../../../../hooks/member_tab/department-api";
import StaffMentorAddMeeting from "./StaffMentorAddMeeting";
import MeetingCard from "../DepartmentHead/DepartmentMentor/DepartmentQueries/MeetingCard";

const StaffMentorMeeting = ({ mid, carryParentState, queryFlow }) => {
  const { t } = useTranslation();
  const [addMeeting, setAddMeeting] = useState(false);
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView({ skip: search });
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [meetingList, setMeetingList] = useState([]);

  const { getAllMeetingByMentor, getAllMeetingByMentorRefetch } =
    useGetAllMeetingByMentor({
      data: {
        mid: mid,
        limit: 10,
        search: search,
        page: page,
      },
      skip: !mid,
    });

  useEffect(() => {
    if (mid) {
      setShowingDataLoading(true);
      getAllMeetingByMentorRefetch();
    }
  }, [mid, page, search, getAllMeetingByMentorRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setMeetingList(getAllMeetingByMentor?.all_meet);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (search) {
        setMeetingList(getAllMeetingByMentor?.all_meet);
        setShowingDataLoading(false);
      } else {
        if (getAllMeetingByMentor?.all_meet) {
          setMeetingList((prevState) =>
            [
              ...new Set(
                [...prevState, ...getAllMeetingByMentor?.all_meet]?.map(
                  JSON.stringify
                )
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getAllMeetingByMentor?.all_meet?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getAllMeetingByMentor?.all_meet?.length === 10) setState(true);
    else setState(false);
  }, [getAllMeetingByMentor?.all_meet]);

  const onClose = () => {
    setAddMeeting((pre) => !pre);
  };
  const onRefetchWhenCreate = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getAllMeetingByMentorRefetch();
  };
  return (
    <>
      {queryFlow === "By_Student" ? null : (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <p className={style.add_new_category} onClick={onClose}>
            {t("add_new_meeting")}
          </p>
        </div>
      )}
      {meetingList?.map((meeting_detail, index) =>
        meetingList?.length === index + 1 ? (
          <div ref={ref} key={meeting_detail?._id}>
            <MeetingCard
              queryFlow={queryFlow}
              meeting_detail={meeting_detail}
              carryParentState={carryParentState}
            />
          </div>
        ) : (
          <MeetingCard
            key={meeting_detail?._id}
            queryFlow={queryFlow}
            meeting_detail={meeting_detail}
            carryParentState={carryParentState}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}

      {addMeeting && (
        <StaffMentorAddMeeting
          onClose={onClose}
          mid={mid}
          onRefetch={onRefetchWhenCreate}
        />
      )}
    </>
  );
};

export default StaffMentorMeeting;
