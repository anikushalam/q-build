import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { imageShowUrl } from "../../services/BaseUrl";
import style from "./RepostAnswer.module.css";
import { format } from "timeago.js";
import CheckOutsideClick from "../../Dashboard/UserDashboard/Components/Mainbody/Stats/Posts/EachPost/CheckOutsideClick";
import Menu from "../../Dashboard/UserDashboard/Components/Mainbody/Stats/Posts/EachPost/Menu";
import NeedHelp from "../../Dashboard/UserDashboard/Components/Mainbody/Stats/Posts/EachQuestion/NeedHelp";
import Save from "../../Dashboard/UserDashboard/Components/Mainbody/Stats/Posts/EachQuestion/Save/Save";
import Comment from "../../Dashboard/UserDashboard/Components/Mainbody/Stats/Posts/components/Comment";
import Answers from "../../Dashboard/UserDashboard/Components/Mainbody/Stats/Posts/EachQuestion/Answers/Answers";
import Report from "../../Dashboard/UserDashboard/Modals/Report";
import CreateAns from "../../Dashboard/UserDashboard/Components/Mainbody/Stats/Posts/EachQuestion/Answers/CreateAns";
import { useDispatch, useSelector } from "react-redux";
import { idChangeAction } from "../../redux/store/department-slice";
import CommentIns from "../../Dashboard/InsDashboard/Components/Mainbody/Stats/Posts/components/Comment";
import SaveIns from "../../Dashboard/InsDashboard/Components/Mainbody/Stats/Posts/components/PostBottom/Save";
import { useTranslation } from "react-i18next";
const RepostDashAnswer = ({
  post,
  viewIns,
  setViewIns,
  allPosts,
  type,
  backHandler,
}) => {
  const ids = useSelector((state) => state.idChange);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [dotsClicked, setDotsClicked] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  // "Report Post",
  const [report, setReport] = useState(false);
  const [reportId, setReportId] = useState(false);

  useEffect(() => {
    if (!viewIns) {
      document.getElementById("scrollView")?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [viewIns]);
  const closeMenu = () => {
    setDotsClicked(false);
  };

  const switchOption = (option) => {
    if (option?.status === "Report") {
      setReportId(option?.data);
      setReport(true);
    }
  };
  const onCommentHandler = () => {
    setCommentOpen((open) => !open);
    setViewIns(false);
  };

  const onAnswerHandler = () => {
    setCommentOpen(false);
    setViewIns((viewIns) => !viewIns);
  };

  const onPostSearchProfile = (saerchId, searchAs) => {
    dispatch(
      idChangeAction.searchId({
        id: saerchId,
        type: "ID",
        searchAs: searchAs,
      })
    );
    backHandler();
  };

  // console.info("THis is question data", post);

  return (
    <>
      {!viewIns && type === "question" && (
        <>
          <section className={style.questionSection}>
            <div className={style.eachposthead} id="scrollView">
              <div className={style.imgcontainer}>
                {post?.author === ids?.id ? (
                  <Link to={`/q/${post?.authorUserName}/profile`}>
                    <img
                      alt="not found"
                      src={
                        post?.authorPhotoId !== "1"
                          ? `${imageShowUrl}/${post?.authorProfilePhoto}`
                          : "/images/ins_default_profile.svg"
                      }
                      className={post?.authorPhotoId !== "1" ? "" : style.iimg}
                    />
                  </Link>
                ) : (
                  <Link
                    to={`/q/${post?.authorUserName}/profile`}
                    onClick={() => {
                      dispatch(
                        idChangeAction.searchId({
                          id: post?.author,
                        })
                      );
                    }}
                  >
                    <img
                      alt="not found"
                      src={
                        post?.authorPhotoId !== "1"
                          ? `${imageShowUrl}/${post?.authorProfilePhoto}`
                          : "/images/ins_default_profile.svg"
                      }
                      className={post?.authorPhotoId !== "1" ? "" : style.iimg}
                    />
                  </Link>
                )}
              </div>

              <div className={style.eachpostUserName}>
                {post?.author === ids?.id ? (
                  <Link to={`/q/${post?.authorUserName}/profile`}>
                    <h6>{post?.authorUserName}</h6>
                  </Link>
                ) : (
                  <Link
                    to={`/q/${post?.authorUserName}/profile`}
                    onClick={() => {
                      dispatch(
                        idChangeAction.searchId({
                          id: post?.author,
                        })
                      );
                    }}
                  >
                    <h6>{post?.authorUserName}</h6>
                  </Link>
                )}

                <div
                  className={style.eachpostUserTime}
                  style={{
                    display: "flex",
                    gap: "0.5vw",
                    alignItems: "center",
                  }}
                >
                  <p>{format(post?.createdAt)}</p>
                </div>
              </div>
            </div>

            <img
              src="/images/menu-dots-icon.svg"
              alt=""
              className={style.menu}
              onClick={() => setDotsClicked((dotsClicked) => !dotsClicked)}
            />
            {dotsClicked && (
              <CheckOutsideClick closeMenu={closeMenu}>
                <Menu
                  setDotsClicked={setDotsClicked}
                  options={ids?.repostQuestion?.otherOption?.selectOptions}
                  switchOption={switchOption}
                  pid={post?._id}
                  authorId={post?.author}
                  profilePost={ids?.repostQuestion?.otherOption?.profilePost}
                  status={post?.postStatus}
                  closeMenu={closeMenu}
                  allPosts={allPosts}
                  popup={false}
                  postType={post?.postType}
                  reportType={post?.isInstitute || post?.isUser}
                />
              </CheckOutsideClick>
            )}
            <div className={style.questionMainContainer}>
              <h5 className={style.questionTitle}>{post?.postQuestion}</h5>
            </div>
            <div className={style.questionBottom}>
              <div className={style.questionBottomBorder}>
                <p className={style.needCount}>
                  {post?.needCount} {t("need_help")}{" "}
                </p>
                <p>
                  {post?.commentCount} {t("comments_")} | {post?.answerCount}{" "}
                  {t("Answers")}
                </p>
              </div>
              <div className={style.questionBottomIcon}>
                {ids?.loggedinAs !== "institute" ? (
                  <div className={style.questionBottomIconOne}>
                    <NeedHelp
                      answerIcon={style.answerIcon}
                      needUser={post?.needUser}
                      pid={post?._id}
                      parentStyle={style.questionBottomIconOne}
                    />
                  </div>
                ) : (
                  ""
                )}

                <div
                  className={style.questionBottomIconOne}
                  onClick={onCommentHandler}
                >
                  <img src="/images/comment-icon.svg" alt="" />
                  <p>{t("comment")}</p>
                </div>
                {ids?.loggedinAs !== "institute" ? (
                  <div
                    className={style.questionBottomIconOne}
                    onClick={onAnswerHandler}
                  >
                    <img src="/images/repeat.svg" alt="" />
                    <p>{t("answer")}</p>
                  </div>
                ) : (
                  ""
                )}

                <div className={style.questionBottomIconOne}>
                  {ids?.loggedinAs !== "institute" ? (
                    <Save
                      endUserSave={post?.endUserSave}
                      pid={post?._id}
                      status="yes"
                      parentStyle={style.questionBottomIconOne}
                    />
                  ) : (
                    <SaveIns
                      endUserSave={post?.endUserSave}
                      pid={post?._id}
                      parentStyle={style.questionBottomIconOne}
                    />
                  )}
                </div>
              </div>
            </div>
            {commentOpen && ids?.loggedinAs !== "institute" ? (
              <div className={style.comment}>
                <Comment
                  pid={post?._id}
                  commentCount={post?.commentCount}
                  setCommentOpen={setCommentOpen}
                  commentOpen={commentOpen}
                />
              </div>
            ) : (
              <CommentIns
                pid={post?._id}
                commentCount={post?.commentCount}
                setCommentOpen={setCommentOpen}
                commentOpen={commentOpen}
                type="not repost"
                comment_turned={post?.comment_turned}
              />
            )}
          </section>
          <Answers pid={post?._id} />
        </>
      )}
      {report && (
        <Report
          report={report}
          hideModal={(w) => setReport(w)}
          id={ids?.id}
          reportId={reportId}
        />
      )}
      {viewIns && (
        <CreateAns
          pid={post?._id}
          setViewIns={setViewIns}
          answerPostType="notRepost"
          questionTitle={post?.postQuestion}
        />
      )}
      {!viewIns && type === "repost" && (
        <>
          <section className={style.questionSection}>
            <div className={style.eachposthead} id="scrollView">
              <div className={style.imgcontainer}>
                {post?.author === ids?.id ? (
                  <Link
                    to={`/q/${post?.authorUserName}/profile`}
                    onClick={backHandler}
                  >
                    <img
                      alt="not found"
                      src={
                        post?.authorPhotoId !== "1"
                          ? `${imageShowUrl}/${post?.authorProfilePhoto}`
                          : "/images/ins_default_profile.svg"
                      }
                      className={post?.authorPhotoId !== "1" ? "" : style.iimg}
                    />
                  </Link>
                ) : (
                  <Link
                    to={`/q/${post?.authorUserName}/profile`}
                    onClick={() => {
                      dispatch(
                        idChangeAction.searchId({
                          id: post?.author,
                        })
                      );
                    }}
                  >
                    <img
                      alt="not found"
                      src={
                        post?.rePostAnswer?.post?.authorPhotoId !== "1"
                          ? `${imageShowUrl}/${post?.rePostAnswer?.post?.authorProfilePhoto}`
                          : "/images/ins_default_profile.svg"
                      }
                      className={
                        post?.rePostAnswer?.post?.authorPhotoId !== "1"
                          ? ""
                          : style.iimg
                      }
                    />
                  </Link>
                )}
              </div>

              <div className={style.eachpostUserName}>
                {post?.author === ids?.id ? (
                  <Link
                    to={`/q/${post?.authorUserName}/profile`}
                    onClick={backHandler}
                  >
                    <h6>{post?.authorUserName}</h6>
                  </Link>
                ) : (
                  <Link
                    to={`/q/${post?.rePostAnswer?.post?.authorUserName}/profile`}
                    // onClick={() =>
                    //   onPostSearchProfile(
                    //     post?.author,
                    //     post?.isInstitute || post?.isUser
                    //   )
                    // }
                  >
                    <h6>{post?.rePostAnswer?.post?.authorUserName}</h6>
                  </Link>
                )}

                <div
                  className={style.eachpostUserTime}
                  style={{
                    display: "flex",
                    gap: "0.5vw",
                    alignItems: "center",
                  }}
                >
                  <p>{format(post?.rePostAnswer?.post?.createdAt)}</p>
                </div>
              </div>
            </div>

            <img
              src="/images/menu-dots-icon.svg"
              alt=""
              className={style.menu}
              onClick={() => setDotsClicked((dotsClicked) => !dotsClicked)}
            />
            {dotsClicked && (
              <CheckOutsideClick closeMenu={closeMenu}>
                <Menu
                  setDotsClicked={setDotsClicked}
                  options={ids?.repostQuestion?.otherOption?.selectOptions}
                  switchOption={switchOption}
                  pid={post?.rePostAnswer?.post?._id}
                  authorId={post?.author}
                  profilePost={ids?.repostQuestion?.otherOption?.profilePost}
                  status={post?.postStatus}
                  closeMenu={closeMenu}
                  allPosts={allPosts}
                  popup={false}
                  postType={post?.postType}
                  reportType={post?.isInstitute || post?.isUser}
                />
              </CheckOutsideClick>
            )}
            <div className={style.questionMainContainer}>
              <h5 className={style.questionTitle}>
                {post?.rePostAnswer?.post?.postQuestion}
              </h5>
            </div>
            <div className={style.questionBottom}>
              <div className={style.questionBottomBorder}>
                <p className={style.needCount}>
                  {post?.needCount} {t("needs_help")}{" "}
                </p>
                <p>
                  {post?.commentCount} {t("comments_")} | {post?.answerCount}{" "}
                  {t("Answers")}
                </p>
              </div>
              <div className={style.questionBottomIcon}>
                <div className={style.questionBottomIconOne}>
                  <NeedHelp
                    answerIcon={style.answerIcon}
                    needUser={post?.needUser}
                    pid={post?._id}
                    parentStyle={style.questionBottomIconOne}
                  />
                </div>
                <div
                  className={style.questionBottomIconOne}
                  onClick={onCommentHandler}
                >
                  <img src="/images/comment-icon.svg" alt="commnt icon" />
                  <p>{t("comment")}</p>
                </div>
                <div
                  className={style.questionBottomIconOne}
                  onClick={onAnswerHandler}
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
              <div className={style.comment}>
                <Comment
                  pid={post?._id}
                  commentCount={post?.commentCount}
                  setCommentOpen={setCommentOpen}
                  commentOpen={commentOpen}
                />
              </div>
            )}
          </section>
          <Answers pid={post?._id} />
        </>
      )}
    </>
  );
};

export default RepostDashAnswer;
