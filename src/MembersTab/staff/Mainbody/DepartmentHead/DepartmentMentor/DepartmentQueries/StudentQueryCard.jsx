import moment from "moment";
import React from "react";
import { Link, useParams } from "react-router-dom";
import style from "../Mentor.module.css";
import { useTranslation } from "react-i18next";

const StudentQueryCard = ({
  carryParentState,
  query_detail,
  customStyleContainer,
}) => {
  const params = useParams();
  const { t } = useTranslation();
  return (
    <Link
      to={`/q/${params.username}/member/student/class?a=mentor&n=query-detail`}
      state={{ ...carryParentState, qid: query_detail?._id }}
    >
      <div className={style.mentor_card_container} style={customStyleContainer}>
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
          <h6>{moment(query_detail?.created_at).format("Do MMM yyyy")}</h6>
          {query_detail?.query_status === "UnSolved" ? (
            <p
              style={{
                color: "#EE3833",
              }}
            >
              {t("not_solved")}
            </p>
          ) : query_detail?.query_status === "Solved" ? (
            <p
              style={{
                color: "#20B038",
              }}
            >
              {t("solved")}
            </p>
          ) : (
            <p
              style={{
                color: "#E2C318",
              }}
            >
              {t("reported")}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default StudentQueryCard;
