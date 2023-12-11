import React from "react";

import style from "./Like.module.css";
const Like = ({ likeCount }) => {
  return (
    <div className={style.likke}>
      {/* <img
          src="/images/unlike-icon.svg"
          alt="unlike"
          className={style.likeImage}
        /> */}

      <img src="/images/like-icon.svg" alt="like" className={style.likeImage} />

      {likeCount > 0 ? (
        <span className={style.likecount}>{likeCount}+</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Like;
