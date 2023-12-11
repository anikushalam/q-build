import React from "react";
import moment from "moment";
import style from "../Mentor.module.css";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import DepartmentTabChangeLink from "../../DepartmentTabChangeLink";
import MentorTabChangeLink from "../../../StaffMentor/MentorTabChangeLink";
const QueriesCard = ({ query_detail, carryParentState, queryFlow }) => {
  return (
    <>
      {queryFlow === "By_Mentor" ? (
        <MentorTabChangeLink
          carryParentState={{
            ...carryParentState,
            qid: query_detail?._id,
          }}
          activeTab={"query-detail"}
        >
          <div
            className={style.mentor_card_container}
            style={{
              width: "95%",
              margin: "auto",
              marginBottom: "0.7rem",
            }}
          >
            <img
              src={
                query_detail?.student?.studentProfilePhoto
                  ? `${imageShowUrl}/${query_detail?.student?.studentProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
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
              <h6>{`${query_detail?.student?.studentFirstName ?? ""} ${
                query_detail?.student?.studentMiddleName ?? ""
              } ${query_detail?.student?.studentLastName ?? ""}`}</h6>
              <p>
                {moment(query_detail?.created_at).format("DD MMM")},
                {moment(query_detail?.created_at).format("LT")}
              </p>
            </div>
          </div>
        </MentorTabChangeLink>
      ) : (
        <DepartmentTabChangeLink
          carryParentState={{
            ...carryParentState,
            qid: query_detail?._id,
          }}
          activeTab={"mentor&n=queries&query"}
        >
          <div
            className={style.mentor_card_container}
            style={{
              width: "95%",
              margin: "auto",
              marginBottom: "0.7rem",
            }}
          >
            <img
              src={
                query_detail?.student?.studentProfilePhoto
                  ? `${imageShowUrl}/${query_detail?.student?.studentProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
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
              <h6>{`${query_detail?.student?.studentFirstName ?? ""} ${
                query_detail?.student?.studentMiddleName ?? ""
              } ${query_detail?.student?.studentLastName ?? ""}`}</h6>
              <p>
                {moment(query_detail?.created_at).format("DD MMM")},
                {moment(query_detail?.created_at).format("LT")}
              </p>
            </div>
          </div>
        </DepartmentTabChangeLink>
      )}
    </>
  );
};

export default QueriesCard;
