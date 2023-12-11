import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { idChangeAction } from "../../../../../../../redux/store/department-slice";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import style from "./Suggestion.module.css";
const SuggestionCard = ({ suggest }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const searchProfileHandler = () => {
    dispatch(
      idChangeAction.searchId({
        id: suggest?._id,
        type: "ID",
        searchAs: "user",
      })
    );
  };

  return (
    <Link to={`/q/${suggest?.username}/profile`} onClick={searchProfileHandler}>
      <div className={style.suggestion_card} title="View profile">
        <img src="/images/suggestion-bg-icon.svg" alt="bg-card icon" />
        <div className={style.suggestion_card_text}>
          <img
            src={
              suggest?.profilePhoto
                ? `${imageShowUrl}/${suggest?.profilePhoto}`
                : "/images/user-icon.svg"
            }
            loading="lazy"
            alt="bg-card icon"
          />
          <h6>{suggest?.userLegalName}</h6>
          <p>
            {suggest?.one_line_about ??
              ` ${t(suggest?.followerCount < 2 ? "follower_" : "followers_")} ${
                suggest?.followerCount
              }` ??
              ""}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SuggestionCard;
