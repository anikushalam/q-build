import React from "react";
import style from "./Reactions.module.css";
import "./Reactions.css";
import Like from "./PostBottom/Like";
import Save from "./PostBottom/Save";

function Reactions({ likeCount, commentCount, marginTop }) {
  return (
    <div className={style.reactions} style={{ marginTop: marginTop }}>
      <div className={style.reactionsleft}>
        <Like likeCount={likeCount} />
      </div>
      <div className={style.reactionsright}>
        <div className={style.repostCount}>
          <img
            className={style.answerIcon}
            src="/images/bluethooth-icon.svg"
            alt="answer-text"
          />
          {/* <p>25 +</p> */}
        </div>
        <div className={style.repostCount}>
          <img
            className={style.answerIcon}
            src="/images/comment-icon.svg"
            alt=""
          />

          <p>{commentCount} +</p>
        </div>

        <Save endUserSave={[]} />
      </div>
    </div>
  );
}

export default Reactions;
