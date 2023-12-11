import React from "react";
import style from "../Feed.module.css";
import UserFeedQuestion from "./UserFeedQuestion";
import FeedQvipleAbout from "../FeedQvipleAbout";

const UserFeedRight = () => {
  return (
    <div className={style.frs_sticky_container}>
      <div className={style.feed_right_side}>
        <UserFeedQuestion />
        <FeedQvipleAbout />
      </div>
    </div>
  );
};

export default UserFeedRight;
