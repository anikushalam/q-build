import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { idChangeAction } from "../../../../../../../redux/store/department-slice";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import Comment from "../components/Comment";
import style from "./EachPoll.module.css";
import { format } from "timeago.js";
import { useTranslation } from "react-i18next";
import CheckOutsideClick from "../EachPost/CheckOutsideClick";
import Menu from "../EachPost/Menu";
import { usePollAnswer } from "../../../../../../../Post/Institute/Components/post-api";
import { useDispatch, useSelector } from "react-redux";
import { postChangeAction } from "../../../../../../../redux/store/post-slice";
import Report from "../../../../../Modals/Report";
import Reactions from "../components/Reactions";

function EachPoll({
  post,
  profilePost,
  allPosts,
  selectOptions,
  dotsClicked,
  setDotsClicked,
  closeMenu,
  viewAs,
}) {
  const params = useParams();
  const [commentOpen, setCommentOpen] = useState(false);
  const [report, setReport] = useState(false);
  const { t } = useTranslation();
  const [reportId, setReportId] = useState(false);
  const ids = useSelector((state) => state.idChange);
  const dispatch = useDispatch();
  const [pollAnswer] = usePollAnswer();
  const onClickPollHandler = (ans) => {
    if (ans && !post?.poll_query?.answeredUser?.includes(ids?.id)) {
      dispatch(
        postChangeAction.pollVote({
          pid: post?._id,
          aid: ans,
          id: ids?.id,
        })
      );
      pollAnswer({
        pid: post?._id,
        vote: {
          answerId: ans,
        },
      })
        .then((res) => {
          // console.info("thie is poll", res);
        })
        .catch({});
    }
  };

  const switchOption = (option) => {
    if (option?.status === "Report") {
      setReportId(option?.data);
      setReport(true);
    }
  };

  const onPostSearchProfile = (saerchId, searchAs) => {
    dispatch(
      idChangeAction.searchId({
        id: saerchId,
        type: "ID",
        searchAs: searchAs,
      })
    );
  };
  // console.info("hit poll", post);
  return (
    <div className={style.eachpost}>
      <div className={style.eachposthead}>
        <div className={style.imgcontainer}>
          {post?.author === ids?.id ? (
            <Link to={`/q/${post?.authorUserName}/profile`}>
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

      <p className={style.pollQuestion}>{t("poll_question")}</p>
      <div className={style.postText}>
        <p className={style.text}>
          {/* {post?.poll_query?.poll_question} */}

          {post?.poll_query?.poll_question?.split(" ")?.map((txt, index) =>
            txt.startsWith("#", 0) ? (
              <Link
                key={index}
                to={`/q/${params?.username}/hashtag/${txt.slice(
                  1,
                  txt.length
                )}`}
                onClick={() => onPostSearchProfile(txt.slice(1, txt.length))}
                style={{ color: "#436DFA" }}
                state={{
                  hid: post?.hash_tag?.filter((val) =>
                    val?.hashtag_name === txt ? val : ""
                  )?.[0]?._id,
                }}
              >{` ${txt} `}</Link>
            ) : (
              <span key={index}>{` ${txt} `}</span>
            )
          )}
        </p>
      </div>

      <div className={style.bars}>
        {post?.poll_query?.poll_answer?.map((answer, index) => (
          <div
            key={index}
            className={
              answer?.users?.includes(ids?.id)
                ? `${style.barContainerVote} ${style.barContainer}`
                : style.barContainer
            }
            onClick={() => onClickPollHandler(answer?._id)}
          >
            <h6>{answer?.content}</h6>
            <p>{answer?.percent_vote?.toFixed(0)}%</p>
            <div
              className={style.bar}
              style={{
                width: `${answer?.percent_vote}%`,
                backgroundColor: answer?.users?.includes(ids?.id)
                  ? `rgba(75, 26, 133, 0.1)`
                  : `#F2F2F2`,
              }}
            ></div>
          </div>
        ))}
      </div>
      <Reactions
        likeCount={post?.likeCount}
        endUserLike={post?.endUserLike}
        endUserSave={post?.endUserSave}
        pid={post?._id}
        setCommentOpen={setCommentOpen}
        commentOpen={commentOpen}
        commentCount={post?.commentCount}
        type="Poll"
        total_votes={post?.poll_query?.total_votes}
      />
      <Comment
        pid={post?._id}
        commentCount={post?.commentCount}
        setCommentOpen={setCommentOpen}
        commentOpen={commentOpen}
        type="not repost"
      />
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
      {report && (
        <Report
          report={report}
          hideModal={(w) => setReport(w)}
          id={ids?.id}
          reportId={reportId}
        />
      )}
    </div>
  );
}

export default EachPoll;
