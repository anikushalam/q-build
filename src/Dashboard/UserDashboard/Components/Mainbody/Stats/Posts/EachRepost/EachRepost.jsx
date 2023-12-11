import React, { useState } from "react";
import style from "./EachRepost.module.css";
// import CheckOutsideClick from "../EachPost/CheckOutsideClick";
// import Menu from "../EachPost/Menu";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import Comment from "../components/Comment";
import Answers from "../EachQuestion/Answers/Answers";
import UpVote from "../EachQuestion/UpVote";
import Save from "../components/PostBottom/Save";
import { useDispatch, useSelector } from "react-redux";
import { idChangeAction } from "../../../../../../../redux/store/department-slice";
import { Link } from "react-router-dom";
function EachRepost({
  post,
  profilePost,
  // allPosts,
  // dispatch,
  selectOptions,
  // switchOption,
  // validUser,
  // dotsClicked,
  // setDotsClicked,
  // closeMenu,
}) {
  const [commentOpen, setCommentOpen] = useState(false);
  const [viewIns, setViewIns] = useState(false);
  const dispatchRepost = useDispatch();
  const { t } = useTranslation();
  // console.info("this is answer post", post);
  const ids = useSelector((state) => state.idChange);
  const onAnswerHandler = (directAnswer) => {
    setCommentOpen(false);
    dispatchRepost(
      idChangeAction.openQuestionWithAnswer({
        repost: "repost",
        post: post._id,
        type: "repost",
        otherOption: {
          profilePost: profilePost,
          selectOptions: selectOptions,
          directAnswer: directAnswer,
        },
        search: ids?.searchProfile?.id !== "" ? "search" : "not search",
      })
    );
    setViewIns((viewIns) => !viewIns);
  };

  const onCommentHandler = () => {
    setCommentOpen((open) => !open);
    setViewIns(false);
  };

  const onPostSearchProfile = (saerchId, searchAs) => {
    dispatchRepost(
      idChangeAction.searchId({
        id: saerchId,
        type: "ID",
        searchAs: searchAs,
      })
    );
  };
  return (
    <div className={style.eachComment}>
      <div className={style.top}>
        <div className={style.topLeft}>
          <img
            alt=""
            src={
              post?.rePostAnswer?.post?.authorPhotoId !== "1"
                ? `${imageShowUrl}/${post?.rePostAnswer?.post?.authorProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            style={{ borderRadius: "50%" }}
          />
          <p>{post?.rePostAnswer?.post?.authorUserName} ’s</p>
        </div>
        <div className={style.topRight}>
          <img alt="Question" src="/images/q-text-icon.svg" />
        </div>
      </div>
      <div className={style.commentHead}>
        <div className={style.imgcontainer}>
          {post?.author === ids?.id ? (
            <Link to={`/q/${post?.authorUserName}/profile`}>
              <img
                alt="profile icon"
                src={
                  post?.authorPhotoId !== "1"
                    ? `${imageShowUrl}/${post?.authorProfilePhoto}`
                    : "/images/member_tab/class/default_avatar.svg"
                }
              />
            </Link>
          ) : (
            <Link
              to={`/q/${post?.authorUserName}/profile`}
              onClick={() =>
                onPostSearchProfile(
                  post?.author,
                  post?.isInstitute || post?.isUser
                )
              }
            >
              <img
                alt="profile icon"
                src={
                  post?.authorPhotoId !== "1"
                    ? `${imageShowUrl}/${post?.authorProfilePhoto}`
                    : "/images/member_tab/class/default_avatar.svg"
                }
              />
            </Link>
          )}
        </div>
        <div className={style.altUserrr}>
          {post?.author === ids?.id ? (
            <Link to={`/q/${post?.name}/profile`}>
              <h6>{post.authorUserName}</h6>
            </Link>
          ) : (
            <Link
              to={`/q/${post?.authorUserName}/profile`}
              onClick={() =>
                onPostSearchProfile(
                  post?.author,
                  post?.isInstitute || post?.isUser
                )
              }
            >
              <h6>{post.authorUserName}</h6>
            </Link>
          )}
          <p>{moment(post?.createdAt).fromNow()}</p>
        </div>
      </div>

      {/* <img
        src="/images/menu-dots-icon.svg"
        alt=""
        className={style.menu}
        onClick={() => setDotsClicked(!dotsClicked)}
      /> */}

      {/* {dotsClicked && (
        <CheckOutsideClick closeMenu={closeMenu}>
          <Menu
            setDotsClicked={setDotsClicked}
            options={selectOptions}
            switchOption={switchOption}
            pid={post?._id}
            authorId={post?.author}
            profilePost={profilePost}
            status={post?.postStatus}
            closeMenu={closeMenu}
            allPosts={allPosts}
            popup={false}
            postType={post?.postType}
            reportType={post?.isInstitute || post?.isUser}
          />
        </CheckOutsideClick>
      )} */}

      <div className={style.commentText}>
        <h6
          onClick={() => onAnswerHandler(false)}
          data-toggle="tooltip"
          data-placement="top"
          title="See All Answers..."
          style={{ cursor: "pointer" }}
        >
          {post?.rePostAnswer?.post?.postQuestion}
        </h6>
      </div>
      <p className={style.answerText}>{post?.rePostAnswer?.answerContent}</p>
      {post?.rePostAnswer?.answerImage?.map((at, index) => (
        <div
          className={style.postImg}
          key={index}
          style={{ marginBottom: "0.8vw" }}
        >
          <img
            alt="answer icon"
            src={
              post?.rePostAnswer?.imageId !== "1"
                ? `${imageShowUrl}/${at}`
                : "/images/qvipleUserBG.png"
            }
            loading="lazy"
          />
        </div>
      ))}
      <div className={style.questionBottom}>
        <div className={style.questionBottomBorder}>
          <p className={style.needCount}>
            {post?.rePostAnswer?.upVoteCount} {t("find_helpful")}
          </p>
          <p>
            {post?.commentCount} {t("comments_")} | {post?.answerCount}{" "}
            {t("Answers")}
          </p>
        </div>
        <div className={style.questionBottomIcon}>
          <div className={style.questionBottomIconOne}>
            <UpVote
              upVote={post?.rePostAnswer?.upVote}
              aid={post?.rePostAnswer?._id}
              rpid={post?._id}
              voteType={"voteRepostAnswer"}
              pid={""}
              parentStyle={style.questionBottomIconOne}
            />
          </div>
          <div
            className={style.questionBottomIconOne}
            onClick={onCommentHandler}
          >
            <img src="/images/comment-icon.svg" alt="" />
            <p>{t("comment")}</p>
          </div>
          <div
            className={style.questionBottomIconOne}
            onClick={() => onAnswerHandler(true)}
          >
            <img src="/images/repeat.svg" alt="" />
            <p>{t("answer")}</p>
          </div>
          <div className={style.questionBottomIconOne}>
            <Save
              endUserSave={post?.endUserSave}
              pid={post?._id}
              parentStyle={style.questionBottomIconOne}
            />
          </div>
        </div>
      </div>
      <Comment
        pid={post?._id}
        commentCount={post?.commentCount}
        setCommentOpen={setCommentOpen}
        commentOpen={commentOpen}
        type="repost"
      />
      {viewIns && (
        <div className={style.comment}>
          <Answers pid={post?._id} answerPostType="Repost" />
        </div>
      )}
    </div>
  );
}

export default EachRepost;
