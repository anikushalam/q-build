import React from "react";
import moment from "moment";
import style from "../Mentor.module.css";
import MentorTabChangeLink from "../../../StaffMentor/MentorTabChangeLink";
import { Link, useParams } from "react-router-dom";
const MeetingCard = ({ meeting_detail, carryParentState, queryFlow }) => {
  const params = useParams();

  return (
    <>
      {queryFlow === "By_Mentor" ? (
        <MentorTabChangeLink
          carryParentState={{
            ...carryParentState,
            meid: meeting_detail?._id,
          }}
          activeTab={"meeting-detail"}
        >
          <div
            className={style.mentor_card_container}
            style={{
              marginBottom: "0.7rem",
            }}
          >
            <img
              src="/images/member_tab/student/student-query-icon.svg"
              style={{
                borderRadius: "50%",
              }}
              alt="mentor avatar"
            />
            <div
              className={style.mentor_container_inner}
              style={{
                gap: "0.6rem",
              }}
            >
              <h6>{meeting_detail?.agenda ?? ""}</h6>
              <p>
                {moment(meeting_detail?.created_at).format("DD MMM yyyy")},
                {moment(meeting_detail?.created_at).format("LT")}
              </p>
            </div>
          </div>
        </MentorTabChangeLink>
      ) : (
        <Link
          to={`/q/${params.username}/member/student/class?a=mentor&n=meeting-detail`}
          state={{
            ...carryParentState,
            meid: meeting_detail?._id,
          }}
          activeTab={"mentor&n=queries&query"}
        >
          <div
            className={style.mentor_card_container}
            style={{
              marginBottom: "0.7rem",
            }}
          >
            <img
              src="/images/member_tab/student/student-query-icon.svg"
              style={{
                borderRadius: "50%",
              }}
              alt="mentor avatar"
            />
            <div
              className={style.mentor_container_inner}
              style={{
                gap: "0.6rem",
              }}
            >
              <h6>{meeting_detail?.agenda ?? ""}</h6>
              <p>
                {moment(meeting_detail?.created_at).format("DD MMM yyyy")},
                {moment(meeting_detail?.created_at).format("LT")}
              </p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default MeetingCard;
