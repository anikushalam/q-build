import React from "react";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import style from "./ElectionCard.module.css";

const ViewResult = ({ oneApplyDetail }) => {
  return (
    <div className={style.result_container}>
      <div className={style.result_container_box}>
        <div className={style.result_container_box_item}>
          <h6 className={style.result_count}>{oneApplyDetail?.totalVoter}</h6>
          <p className={style.result_count_paragraph}>Total Voter</p>
        </div>
        <div className={style.result_container_box_vertical} />
        <div className={style.result_container_box_item}>
          <h6 className={style.result_count}>
            {oneApplyDetail?.totalVoteCasted}
          </h6>
          <p className={style.result_count_paragraph}>Voter Casted</p>
        </div>
      </div>

      <h6 className={style.result_candidate}>Candidate</h6>
      {oneApplyDetail?.candidateList?.map((candidate) => (
        <div
          className={`${style.candidate_member_result}`}
          key={candidate?._id}
        >
          <img
            src={
              candidate?.student?.studentProfilePhoto
                ? `${imageShowUrl}/${candidate?.student?.studentProfilePhoto}`
                : "/images/members/competition.svg"
            }
            alt="elections static icon"
          />
          <div className={style.candidate_name}>
            <div className={style.candidate_alignment}>
              <h6 className={style.candidate} style={{ margin: "0" }}>
                {`${candidate?.student?.studentFirstName} ${
                  candidate?.student?.studentMiddleName || ""
                } ${candidate?.student?.studentLastName}`}
                <img
                  src="/images/members/election-winner.svg"
                  alt="winner icon"
                />
              </h6>
              <p className={style.result_vote_count}>
                {candidate?.election_vote_receieved}
              </p>
            </div>
            <div className={style.candidate_alignment}>
              <p className={style.candidate_gr}>
                GRNO. {candidate?.student?.studentGRNO}
              </p>
              <p className={style.candidate_gr}>Vote Received </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewResult;
