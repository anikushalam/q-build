import React from "react";
import style from "../Feed.module.css";
import UserFeedProfile from "./UserFeedProfile";
import UserFeedConnection from "./UserFeedConnection";

const UserFeedLeft = () => {
  return (
    <div className={style.feed_left_side}>
      <UserFeedProfile />
      <UserFeedConnection />
    </div>
  );
};

export default UserFeedLeft;
