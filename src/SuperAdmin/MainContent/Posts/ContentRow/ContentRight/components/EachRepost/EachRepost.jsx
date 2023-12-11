import React, { useState } from "react";
import style from "./EachRepost.module.css";
import CheckOutsideClick from "../../EachPost/CheckOutsideClick";
import Menu from "../../EachPost/Menu";
import moment from 'moment'
import { imageShowUrl } from "../../../../../../../services/BaseUrl";

function EachRepost({ post }) {
  const [dotsClicked, setDotsClicked] = useState(false);
  const closeMenu = () => {
    setDotsClicked(false);
  };

  return (
    <div className={style.eachComment}>
      <div className={style.top}>
        <div className={style.topLeft}>
          <img alt="" src={
            post?.rePostAnswer?.post?.authorPhotoId !== '1' 
            ? `${imageShowUrl}/${post?.rePostAnswer?.post?.authorProfilePhoto}`
            : '/images/user_default_img.svg'
          } />
          <p>{post?.rePostAnswer?.post?.authorUserName} ’s</p>
        </div>
        <div className={style.topRight}>
          <img alt="Question" src="/images/q-text-icon.svg" />
        </div>
      </div>
      <div className={style.commentHead}>
        <div className={style.imgcontainer}>
          <img alt="profile icon" src={
            post?.authorPhotoId !== '1' 
            ? `${imageShowUrl}/${post?.authorProfilePhoto}`
            : '/images/user_default_img.svg'
          } />
        </div>
        <div className={style.altUserrr}>
          <h6>{post?.authorUserName} {post?.postBlockStatus === 'Not Block' ? '' : ` (${post?.postBlockStatus})`}</h6>
          <p>{moment(post?.createdAt).fromNow()}</p>
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

      <div className={style.commentText}>
        <h6>{post?.rePostAnswer?.post?.postQuestion}</h6>
      </div>

      {post?.rePostAnswer?.answerImage?.map((at, index) => (
      <div className={style.postImg} key={index}>
        <img alt=" answer icon" src={
          post?.rePostAnswer?.imageId !== '1'
          ? `${imageShowUrl}/${at}`
          : '/images/qvipleUserBG.png'
        } />
      </div>
      ))}

      <div className={style.reactions}>
        <div className={style.reactionLeft}>
          <div className={style.reactDark}>
            <img alt="up count" src="/images/up-icon.svg" />
            <p>{post?.rePostAnswer?.upVoteCount}</p>
          </div>
          <div className={style.reactDark}>
            <img alt="down conut" src="/images/down-iconn.svg" />
            <p>{post?.rePostAnswer?.downVoteCount}</p>
          </div>
        </div>
        <div className={style.reactionLeft}>
          <div className={style.repostCount}>
            <img
              className={style.answerIcon}
              src="/images/bluethooth-icon.svg"
              alt="answer-text"
            />

            <p>0</p>

            {/* {post?.answerCount > 0 ? <p>{post?.answerCount} +</p> : ""} */}
          </div>
          <div className={style.repostCount}>
            <img
              className={style.answerIcon}
              src="/images/repeat-icon.svg"
              alt="answer-text"
            />

            <p>0</p>

            {/* {post?.answerCount > 0 ? <p>{post?.answerCount} +</p> : ""} */}
          </div>
          <div className={style.repostCount}>
            <img
              className={style.answerIcon}
              src="/images/comment-icon.svg"
              alt="Comment Avatar"
            />

            <p>{post?.rePostAnswer?.answerReplyCount}</p>

            {/* {post?.answerCount > 0 ? <p>{post?.answerCount} +</p> : ""} */}
          </div>
          <div className={style.repostCount}>
            <img
              src="/images/bookmark-icon.svg"
              alt="Bookmark Avatar"
              className={style.answerIcon}
            />

            {/* <img
          src="/images/bookmark-icon.svg"
          alt=""
          className={style.answerIcon}
          
        /> */}

            {/* {post?.answerCount > 0 ? <p>{post?.answerCount} +</p> : ""} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EachRepost;
