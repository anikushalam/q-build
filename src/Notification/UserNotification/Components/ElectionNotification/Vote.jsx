import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { idChangeAction } from "../../../../redux/store/department-slice";
import { imageShowUrl } from "../../../../services/BaseUrl";
import style from "./ElectionNotification.module.css";
const Vote = ({
  election,
  electionDetail,
  setElectionShow,
  setOnClickValue,
  election_position,
}) => {
  // console.info("sdgakss", electionDetail);

  const onSelectCandidate = (candidate) => {
    setOnClickValue({
      candidate: candidate,
      election_position: electionDetail?.election_position,
      aid: election?._id,
      eid: electionDetail?._id,
    });
    setElectionShow("VOTING_CANDIDATE");
  };

  const dispatch = useDispatch();
  const searchProfileHandler = (userId) => {
    dispatch(
      idChangeAction.searchId({
        id: userId,
        type: "ID",
        searchAs: "user",
      })
    );
  };
  return (
    <div>
      {election?.election_type === "Open for vote" && (
        <div className={style.vote_result_wrapper}>
          <div className={style.vote_result_heading}>
            <h6>{electionDetail?.election_position}</h6>
            <p>Vote</p>
          </div>
          <p className={style.vote_time}>{election?.notifyContent}</p>
          <hr />
          <h6 className={style.vote_candidate} style={{ marginBottom: "1rem" }}>
            Candidates
          </h6>
          {electionDetail?.election_candidate?.map((candidate) => (
            <div
              className={style.vote_member}
              onClick={() => onSelectCandidate(candidate)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={`${imageShowUrl}/${candidate?.student?.studentProfilePhoto}`}
                style={{ borderRadius: "50%", width: "2.7vw", height: "2.7vw" }}
                alt="candidate avatar"
              />
              <div>
                <h6 className={style.vote_candidate}>
                  {" "}
                  {`${candidate?.student?.studentFirstName} ${
                    candidate?.student?.studentMiddleName || ""
                  } ${candidate?.student?.studentLastName}`}
                </h6>
                <p className={style.vote_tagline}>
                  {candidate?.election_tag_line}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {election?.election_type === "Election Vote Casted" && (
        <div className={style.vote_result_wrapper}>
          <h6 className={style.vote_result_heading}>{election_position}</h6>
          <p className={style.vote_time}>Voting form 00:00 to 23:59 today</p>
          <hr />
          <p className={style.vote_casted}>Your vote have been casted</p>
        </div>
      )}
      {election?.election_type === "Result Declared" && (
        <div
          className={style.vote_result_wrapper}
          style={{ backgroundColor: "#52DE8A" }}
        >
          <h6 className={style.vote_result_heading}>{election_position}</h6>
          <div className={style.vote_member}>
            <img
              src={`${imageShowUrl}/${election?.election_winner?.studentProfilePhoto}`}
              style={{ borderRadius: "50%", width: "2.7vw", height: "2.7vw" }}
              alt="candidate avatar"
            />
            <div style={{ marginTop: "0.5rem" }}>
              <h6 className={style.vote_candidate}>{`${
                election?.election_winner?.studentFirstName
              } ${election?.election_winner?.studentMiddleName || ""} ${
                election?.election_winner?.studentLastName
              }`}</h6>
              <p className={style.vote_tagline}>
                <Link
                  to={`/q/${election?.election_winner?.user?.username}/profile`}
                  onClick={() =>
                    searchProfileHandler(election?.election_winner?.user?._id)
                  }
                >
                  {election?.election_winner?.user?._id}
                </Link>
              </p>
            </div>
          </div>
          <hr />
          <p className={style.vote_casted} style={{ margin: "0" }}>
            {election?.notifyContent}
          </p>
        </div>
      )}
    </div>
  );
};

export default Vote;
