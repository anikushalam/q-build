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
import { useTranslation } from "react-i18next";
import { idChangeAction } from "../../redux/store/department-slice";
import { useOneQuestion } from "../Institute/Components/post-api";
const RightQuestion = ({ viewIns, setViewIns, type, backHandler }) => {
  const ids = useSelector((state) => state.idChange);
  const dispatch = useDispatch();
  const [dotsClicked, setDotsClicked] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  // "Report Post",
  const [report, setReport] = useState(false);
  const [reportId, setReportId] = useState(false);

  const { oneQuestion, oneQuestionReftech } = useOneQuestion({
    pid: ids.repostQuestion.post,
    skip: !ids.repostQuestion.post,
  });

  useEffect(() => {
    if (ids.repostQuestion.post) oneQuestionReftech();
  }, [ids.repostQuestion.post, oneQuestionReftech]);
  useEffect(() => {
    if (!viewIns) {
      document.getElementById("scrollView")?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [viewIns, ids.repostQuestion.post]);
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

  const { t } = useTranslation();

  // console.info("THis is question data", oneQuestion);

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

  return (
    <>
      {!viewIns && type === "question" && (
        <>
          <section className={style.questionSection}>
            <div className={style.eachposthead} id="scrollView">
              <div className={style.imgcontainer}>
                {oneQuestion?.one_query?.author === ids?.id ? (
                  <Link
                    to={`/q/${oneQuestion?.one_query?.authorUserName}/profile`}
                    onClick={backHandler}
                  >
                    <img
                      alt="not found"
                      src={
                        oneQuestion?.one_query?.authorPhotoId !== "1"
                          ? `${imageShowUrl}/${oneQuestion?.one_query?.authorProfilePhoto}`
                          : "/images/ins_default_profile.svg"
                      }
                      className={
                        oneQuestion?.one_query?.authorPhotoId !== "1"
                          ? ""
                          : style.iimg
                      }
                    />
                  </Link>
                ) : (
                  <Link
                    to={`/q/${oneQuestion?.one_query?.authorUserName}/profile`}
                    onClick={() =>
                      onPostSearchProfile(
                        oneQuestion?.one_query?.author,
                        oneQuestion?.one_query?.isInstitute ||
                          oneQuestion?.one_query?.isUser
                      )
                    }
                  >
                    <img
                      alt="not found"
                      src={
                        oneQuestion?.one_query?.authorPhotoId !== "1"
                          ? `${imageShowUrl}/${oneQuestion?.one_query?.authorProfilePhoto}`
                          : "/images/ins_default_profile.svg"
                      }
                      className={
                        oneQuestion?.one_query?.authorPhotoId !== "1"
                          ? ""
                          : style.iimg
                      }
                    />
                  </Link>
                )}
              </div>

              <div className={style.eachpostUserName}>
                {oneQuestion?.one_query?.author === ids?.id ? (
                  <Link
                    to={`/q/${oneQuestion?.one_query?.authorUserName}/profile`}
                    onClick={backHandler}
                  >
                    <h6>{oneQuestion?.one_query?.authorUserName}</h6>
                  </Link>
                ) : (
                  <Link
                    to={`/q/${oneQuestion?.one_query?.authorUserName}/profile`}
                    onClick={() =>
                      onPostSearchProfile(
                        oneQuestion?.one_query?.author,
                        oneQuestion?.one_query?.isInstitute ||
                          oneQuestion?.one_query?.isUser
                      )
                    }
                  >
                    <h6>{oneQuestion?.one_query?.authorUserName}</h6>
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
                  <p>{format(oneQuestion?.one_query?.createdAt)}</p>
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
                  pid={oneQuestion?.one_query?._id}
                  authorId={oneQuestion?.one_query?.author}
                  profilePost={ids?.repostQuestion?.otherOption?.profilePost}
                  status={oneQuestion?.one_query?.postStatus}
                  closeMenu={closeMenu}
                  allPosts={[]}
                  popup={false}
                  postType={oneQuestion?.one_query?.postType}
                  reportType={
                    oneQuestion?.one_query?.isInstitute ||
                    oneQuestion?.one_query?.isUser
                  }
                />
              </CheckOutsideClick>
            )}
            <div className={style.questionMainContainer}>
              <h5 className={style.questionTitle}>
                {oneQuestion?.one_query?.postQuestion}
              </h5>
            </div>
            <div className={style.questionBottom}>
              <div className={style.questionBottomBorder}>
                <p className={style.needCount}>
                  {oneQuestion?.one_query?.needCount} {t("needs_help")}
                </p>
                <p>
                  {oneQuestion?.one_query?.commentCount} {t("comments_")} |{" "}
                  {oneQuestion?.one_query?.answerCount} {t("Answers")}
                </p>
              </div>
              <div className={style.questionBottomIcon}>
                <div className={style.questionBottomIconOne}>
                  <NeedHelp
                    answerIcon={style.answerIcon}
                    needUser={oneQuestion?.one_query?.needUser}
                    pid={oneQuestion?.one_query?._id}
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
                  onClick={onAnswerHandler}
                >
                  <img src="/images/repeat.svg" alt="" />
                  <p>{t("answer")}</p>
                </div>
                <div className={style.questionBottomIconOne}>
                  <Save
                    endUserSave={oneQuestion?.one_query?.endUserSave}
                    pid={oneQuestion?.one_query?._id}
                    status="yes"
                    parentStyle={style.questionBottomIconOne}
                  />
                </div>
              </div>
            </div>
            {commentOpen && (
              <div className={style.comment}>
                <Comment
                  pid={oneQuestion?.one_query?._id}
                  commentCount={oneQuestion?.one_query?.commentCount}
                  setCommentOpen={setCommentOpen}
                  commentOpen={commentOpen}
                />
              </div>
            )}
          </section>
          <Answers pid={oneQuestion?.one_query?._id} />
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
          pid={oneQuestion?.one_query?._id}
          setViewIns={setViewIns}
          answerPostType="notRepost"
          questionTitle={oneQuestion?.one_query?.postQuestion}
        />
      )}
    </>
  );
};

export default RightQuestion;
