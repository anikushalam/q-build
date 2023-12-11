import React, { memo } from "react";
import style from "../Feed.module.css";
const UserFeedConnectionCard = ({ title, subTitle, count }) => {
  return (
    <section className={style.f_left_connection_card}>
      <div className={style.f_left_connection_card_text}>
        <h6>{title ?? ""}</h6>
        <p>{subTitle ?? ""}</p>
        {/* <p className={style.f_left_connection_card_text_blue}>{subTitle??""}</p> */}
      </div>
      <div className={style.f_left_connection_card_count}>{count ?? 0}</div>
    </section>
  );
};

export default memo(UserFeedConnectionCard);
