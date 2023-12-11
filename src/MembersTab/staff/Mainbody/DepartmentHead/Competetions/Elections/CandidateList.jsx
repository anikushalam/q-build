import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { idChangeAction } from "../../../../../../redux/store/department-slice";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import style from "./ElectionCard.module.css";

const CandidateList = ({
  name,
  profileKey,
  grNumber,
  showActive,
  asUser,
  username,
  userId,
}) => {
  const dispatch = useDispatch();
  const searchProfileHandler = () => {
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
      {asUser ? (
        <div
          className={
            showActive
              ? `${style.candidate_member_active_normal} ${style.candidate_member_normal}`
              : style.candidate_member_normal
          }
          style={{ cursor: "pointer" }}
        >
          <img
            src={`${imageShowUrl}/${profileKey}`}
            alt="elections static icon"
          />
          <div>
            <h6 className={style.candidate} style={{ margin: "0" }}>
              {name}
            </h6>
            <p className={style.candidate_gr}>
              <Link
                to={`/q/${username}/profile`}
                onClick={searchProfileHandler}
              >
                {username}
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <div
          className={
            showActive
              ? `${style.candidate_member_active_normal} ${style.candidate_member_normal}`
              : style.candidate_member_normal
          }
        >
          <img
            src={`${imageShowUrl}/${profileKey}`}
            alt="elections static icon"
          />
          <div>
            <h6 className={style.candidate} style={{ margin: "0" }}>
              {name}
            </h6>
            <p className={style.candidate_gr}>GRNO. {grNumber}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CandidateList;
