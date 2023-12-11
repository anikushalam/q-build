import React, { useState } from "react";
import style from "./EachQuestion.module.css";
import { format } from "timeago.js";
import CheckOutsideClick from "../EachPost/CheckOutsideClick";
import Menu from "../EachPost/Menu";
import Save from "./Save/Save";
import { imageShowUrl } from "../../../../../../services/BaseUrl";

function EachQuestion({ post }) {
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
        <p className={style.text}>{post?.postQuestion}</p>
      </div>

      <div className={style.reactions}>
        <div className={style.reactionsLeft}>
          <div className={style.repostCount}>
            <img
              className={style.answerIcon}
              src="/images/repostt-icon.svg"
              alt="answer-text"
            />
            {post?.answerCount > 0 ? <p>{post?.answerCount} +</p> : ""}
          </div>
        </div>

        <div className={style.reactionsRight}>
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

export default EachQuestion;
