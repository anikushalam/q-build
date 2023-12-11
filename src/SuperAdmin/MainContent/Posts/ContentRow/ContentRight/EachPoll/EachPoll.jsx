import React, { useState } from "react";
import Like from "../components/PostBottom/Like";
import Save from "../components/PostBottom/Save";
import style from "./EachPoll.module.css";
import { format } from "timeago.js";
import CheckOutsideClick from "../EachPost/CheckOutsideClick";
import Menu from "../EachPost/Menu";
import { imageShowUrl } from "../../../../../../services/BaseUrl";

function EachPoll({ post }) {
  const [dotsClicked, setDotsClicked] = useState(false);
  const closeMenu = () => {
    setDotsClicked(false);
  };

  return (
    <div className={style.eachpost}>
      <div className={style.eachposthead}>
        <div className={style.imgcontainer}>
          <img
            alt="not found"
            src={
              post.authorPhotoId !== "1"
                ? `${imageShowUrl}/${post.authorProfilePhoto}`
                : "/images/ins_default_profile.svg"
            }
            className={style.iimg}
          />
        </div>

        <div className={style.eachpostUserName}>

          <h6>{post.authorUserName} {post?.postBlockStatus === 'Not Block' ? '' : ` (${post?.postBlockStatus})`}</h6>

          <div
            className={style.eachpostUserTime}
            style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}
          >
            <p>{format(post?.createdAt)}</p>
            <img
              className={style.public}
              src={
                post?.postStatus === "Anyone"
                  ? "/images/privacy-icon.svg"
                  : "/images/post-private-icon.svg"
              }
              alt="privacy"
            />
          </div>
        </div>
      </div>

      <div className={style.postText}>
        <p className={style.text}>{post?.poll_query?.poll_question}</p>
      </div>

      <div className={style.bars}>
        {post?.poll_query?.poll_answer?.map((answer) => (
          <div className={style.barContainer}>
            <h6>{answer?.content}</h6>
            <p>{answer?.percent_vote?.toFixed(0)}%</p>
            <div
              className={style.bar}
              style={{
                width: `${answer?.percent_vote}%`,
                backgroundColor: answer?.color_type
                  ? `${answer?.color_type}`
                  : `#F2F2F2`,
              }}
            ></div>
          </div>
        ))}

        <div className={style.barContainer2}>
          <p>{format(post?.poll_query?.duration_date)} left</p>
          <h6>{post?.poll_query?.total_votes} Votes</h6>
        </div>
      </div>

      <div className={style.reactions} style={{ marginBottom: "-20px" }}>
        <div className={style.reactionsleft}>
          <Like likeCount={post?.likeCount} />
        </div>
        <div className={style.reactionsright}>
          <div className={style.repostCount}>
            <img
              className={style.answerIcon}
              src="/images/bluethooth-icon.svg"
              alt="answer-text"
            />
          </div>
          <div className={style.repostCount}>
            <img
              className={style.answerIcon}
              src="/images/comment-icon.svg"
              alt=""
            />
            <p>{post?.commentCount} +</p>
          </div>
          <Save />
        </div>
      </div>

      <img
        src="/images/menu-dots-icon.svg"
        alt=""
        className={style.menu}
        onClick={() => setDotsClicked(!dotsClicked)}
      />

      {dotsClicked && (
        <CheckOutsideClick closeMenu={closeMenu}>
          <Menu
            setDotsClicked={setDotsClicked}
            options={post?.postBlockStatus === 'Not Block' ? ["Block"] : ['UnBlock']}
            closeMenu={closeMenu}
            popup={false}
            postId={post?._id}
          />
        </CheckOutsideClick>
      )}
    </div>
  );
}

export default EachPoll;
