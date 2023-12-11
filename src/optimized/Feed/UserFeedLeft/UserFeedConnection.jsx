import React, { memo } from "react";
import style from "../Feed.module.css";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import UserFeedConnectionCard from "./UserFeedConnectionCard";

const UserFeedConnection = ({
  answerQuestionCount,
  followerCount,
  circleCount,
}) => {
  const { t } = useTranslation();
  const params = useParams();
  return (
    <div className={style.f_left_connection_container}>
      <UserFeedConnectionCard
        title={t("knows")}
        subTitle={t("helpful_answer")}
        count={answerQuestionCount}
      />
      <Link to={`/q/${params.username}/connection?type=following`}>
        <UserFeedConnectionCard
          title={t("following")}
          subTitle={t("people_you_follow")}
          count={followerCount}
        />
      </Link>
      <Link to={`/q/${params.username}/connection?type=following`}>
        <UserFeedConnectionCard
          title={t("circle")}
          subTitle={t("circle_note")}
          count={circleCount}
        />
      </Link>
    </div>
  );
};

export default memo(UserFeedConnection);
