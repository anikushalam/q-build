import React, { useState } from "react";
import style from "./EachQuestion.module.css";
import { format } from "timeago.js";
import Answers from "./Answers/Answers";
import { idChangeAction } from "../../../../../../../redux/store/department-slice";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import { Link, useParams } from "react-router-dom";
import CheckOutsideClick from "../EachPost/CheckOutsideClick";
import Menu from "../EachPost/Menu";
import { useTranslation } from "react-i18next";
import Save from "./Save/Save";
import NeedHelp from "./NeedHelp";
import Comment from "../components/Comment";
import { useDispatch, useSelector } from "react-redux";

function EachQuestion({
  post,
  profilePost,
  allPosts,
  selectOptions,
  switchOption,
  dotsClicked,
  setDotsClicked,
  closeMenu,
  viewAs,
}) {
  const [viewIns, setViewIns] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const dispatchRepost = useDispatch();
  const { t } = useTranslation();
  const ids = useSelector((state) => state.idChange);
  const params = useParams();
  // console.info("this is all posts", post);
  const onAnswerHandler = (directAnswer) => {
    setCommentOpen(false);
    // console.info("THis is questio ", ids?.searchProfile?.id);
    dispatchRepost(
      idChangeAction.openQuestionWithAnswer({
        repost: "repost",
        post: post._id,
        type: "question",
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
    <div className={style.eachpost}>
      <div className={style.eachposthead}>
        <div className={style.imgcontainer}>
          {post?.author === ids?.id ? (
            <Link
              to={`/q/${post?.authorUserName}/profile`}
              onClick={onPostSearchProfile}
            >
              <img
                alt="not found"
                src={
                  post.authorPhotoId !== "1"
                    ? `${imageShowUrl}/${post.authorProfilePhoto}`
                    : "/images/ins_default_profile.svg"
                }
                className={post.authorPhotoId !== "1" ? "" : style.iimg}
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
                alt="not found"
                src={
                  post.authorPhotoId !== "1"
                    ? `${imageShowUrl}/${post.authorProfilePhoto}`
                    : "/images/ins_default_profile.svg"
                }
                className={post.authorPhotoId !== "1" ? "" : style.iimg}
              />
            </Link>
          )}
        </div>

        <div className={style.eachpostUserName}>
          {post?.author === ids?.id ? (
            <Link to={`/q/${post.authorUserName}/profile`}>
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

          <div
            className={style.eachpostUserTime}
            style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}
          >
            <p>{format(post?.createdAt)}</p>
            {/* <img
              className={style.public}
              src={
                post?.postStatus === "Anyone"
                  ? "/images/privacy-icon.svg"
                  : "/images/post-private-icon.svg"
              }
              alt="privacy"
            /> */}
          </div>
        </div>
      </div>

      <div className={style.postText}>
        <p
          className={style.text}
          data-toggle="tooltip"
          data-placement="top"
          title="See All Answers..."
        >
          {post?.postQuestion?.split(" ")?.map((txt, index) =>
            txt.startsWith("#", 0) ? (
              <Link
                to={`/q/${params?.username}/hashtag/${txt.slice(
                  1,
                  txt.length
                )}`}
                onClick={() => onPostSearchProfile(txt.slice(1, txt.length))}
                style={{ color: "#436DFA" }}
                key={index}
                state={{
                  hid: post?.hash_tag?.filter((val) =>
                    val?.hashtag_name === txt ? val : ""
                  )?.[0]?._id,
                }}
              >{` ${txt} `}</Link>
            ) : (
              <span onClick={() => onAnswerHandler(false)}  key={index}>{` ${txt} `}</span>
            )
          )}
        </p>
      </div>

      <div className={style.questionBottom}>
        <div className={style.questionBottomBorder}>
          <p className={style.needCount}>
            {post?.needCount} {t("needs_help")}{" "}
          </p>
          <p>
            {post?.commentCount} {t("comments")} | {post?.answerCount}{" "}
            {t("Answers")}
          </p>
        </div>
        <div className={style.questionBottomIcon}>
          <div className={style.questionBottomIconOne}>
            <NeedHelp
              answerIcon={style.answerIcon}
              needCount={post?.needCount}
              needUser={post?.needUser}
              pid={post?._id}
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
              status="yes"
              parentStyle={style.questionBottomIconOne}
            />
          </div>
        </div>
      </div>

      {commentOpen && (
        <Comment
          pid={post?._id}
          commentCount={post?.commentCount}
          setCommentOpen={setCommentOpen}
          commentOpen={commentOpen}
          type="not repost"
        />
      )}
      {viewIns && (
        <div className={style.comment}>
          <Answers
            pid={post?._id}
            setViewIns={setViewIns}
            answerPostType="notRepost"
          />
        </div>
      )}
      {viewAs === "HASHTAG" ? (
        ""
      ) : (
        <img
          src="/images/menu-dots-icon.svg"
          alt=""
          className={style.menu}
          onClick={() => setDotsClicked(!dotsClicked)}
        />
      )}

      {dotsClicked && (
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
      )}
    </div>
  );
}

export default EachQuestion;
