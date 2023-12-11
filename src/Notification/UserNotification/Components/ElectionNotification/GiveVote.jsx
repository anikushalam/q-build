import React, { useState } from "react";
import style from "./ElectionNotification.module.css";
import { useActivityElectionVote } from "../../../../hooks/member_tab/activity-api";
import { imageShowUrl } from "../../../../services/BaseUrl";
import ButtonWithAction from "../../../../Custom/Button/ButtonWithAction";
import QLoader from "../../../../Loader/QLoader";
import { useDispatch } from "react-redux";
import { idChangeAction } from "../../../../redux/store/department-slice";
import { Link } from "react-router-dom";

const GiveVote = ({ onClickValue, setElectionShow, onRefetch }) => {
  const [disabled, setDisabled] = useState(false);
  const [activityElectionVote] = useActivityElectionVote();
  // console.info("fgsgs", onClickValue);
  const onVoteGiving = () => {
    setDisabled((pre) => !pre);
    activityElectionVote({
      eid: onClickValue?.eid,
      apid: onClickValue?.candidate?._id,
      sid: onClickValue?.candidate?.student?._id,
      aid: onClickValue?.aid,
    })
      .then(() => {
        // console.info(res);
        onRefetch();
        setDisabled((pre) => !pre);
        setElectionShow("");
      })
      .catch({});
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
    <>
      <div className={style.election_apply_form_container}>
        <img
          style={{ position: "absolute", right: "3%", cursor: "pointer" }}
          src="/images/close-post-icon.svg"
          alt="close page"
          onClick={() => setElectionShow("")}
        />
        <h6 className={style.vote_candidate} style={{ marginBottom: "1rem" }}>
          Candidates
        </h6>
        <div className={style.vote_member}>
          <img
            // src="/imaes/user_default_img.svg"
            src={`${imageShowUrl}/${onClickValue?.candidate?.student?.studentProfilePhoto}`}
            style={{ borderRadius: "50%", width: "2.7vw", height: "2.7vw" }}
            alt="candidate avatar"
          />
          <div>
            <h6 className={style.vote_candidate}>{`${
              onClickValue?.candidate?.student?.studentFirstName
            } ${onClickValue?.candidate?.student?.studentMiddleName || ""} ${
              onClickValue?.candidate?.student?.studentLastName
            }`}</h6>
            <p className={style.vote_tagline}>
              <Link
                to={`/q/${onClickValue?.candidate?.student?.user?.username}/profile`}
                onClick={() =>
                  searchProfileHandler(
                    onClickValue?.candidate?.student?.user?._id
                  )
                }
              >
                {onClickValue?.candidate?.student?.user?.username}
              </Link>
            </p>
          </div>
        </div>
        <h6 className={style.vote_candidate}>Election Tagline</h6>
        <p className={style.vote_time}>
          {onClickValue?.candidate?.election_tag_line}
        </p>
        <h6 className={style.vote_candidate}>Description</h6>
        <p className={style.vote_time}>
          {onClickValue?.candidate?.election_description}
        </p>
        <h6>Supporting Members</h6>
        {onClickValue?.candidate?.election_supporting_member?.map((support) => (
          <div className={style.vote_member}>
            <img
              // src="/imaes/user_default_img.svg"
              src={`${imageShowUrl}/${support?.studentProfilePhoto}`}
              style={{ borderRadius: "50%", width: "2.7vw", height: "2.7vw" }}
              alt="candidate avatar"
            />
            <div>
              <h6 className={style.vote_candidate}>{`${
                support?.studentFirstName
              } ${support?.studentMiddleName || ""} ${
                support?.studentLastName
              }`}</h6>
              <p className={style.vote_tagline}>
                <Link
                  to={`/q/${support?.user?.username}/profile`}
                  onClick={() => searchProfileHandler(support?.user?._id)}
                >
                  {support?.user?.username}
                </Link>
              </p>
            </div>
          </div>
        ))}

        <ButtonWithAction
          buttonText={"Vote for me"}
          disabled={disabled}
          shwoLoader={false}
          onAction={onVoteGiving}
          customStyleButton={{
            backgroundColor: "#001A72",
            marginBottom: "1.5rem",
            marginTop: "1rem",
          }}
          customStyleButtonText={{ color: "#FFFFFF" }}
        />
      </div>
      {disabled && <QLoader />}
    </>
  );
};

export default GiveVote;
