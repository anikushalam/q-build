import React from "react";
import { format } from "timeago.js";
import { imageShowUrl } from "../../../../../../../../services/BaseUrl";
import style from "./EachNestedComment.module.css";

function EachNestedComment({ comment }) {
  return (
    <div className={style.eachCommentContainer}>
      <div className={style.eachComment}>
        <div className={style.imgcontainer}>
          <img
            src={
              comment?.authorPhotoId !== "1"
                ? `${imageShowUrl}/${comment.authorProfilePhoto}`
                : "/images/dummy-avatar-icon.svg"
            }
            alt=""
          />
        </div>

        <div className={style.commentText}>
          <h6>{comment?.authorUserName}</h6>
          <p>{comment?.repliedComment}</p>
        </div>
      </div>

      {/* <div className={style.likeReply}>
        <p>Like</p>
      </div> */}

      <div className={style.dots}>
        <p className={style.time}>{format(comment?.createdAt)}</p>
      </div>
    </div>
  );
}

export default EachNestedComment;
