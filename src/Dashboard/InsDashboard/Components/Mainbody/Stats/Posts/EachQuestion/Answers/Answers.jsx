import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useOnePostAllAnswerQuestion } from "../../../../../../../../Post/Institute/Components/post-api";
import { imageShowUrl } from "../../../../../../../../services/BaseUrl";
import style from "./Answers.module.css";
import { format } from "timeago.js";
import { instituteAs } from "../../../../../../../../contant_value";
function Answers({ pid }) {
  //for setting the next page to fetch data
  const [page, setPage] = useState(1);

  //for the infinite scroll
  const [ref, inView] = useInView();

  //for the fetch more or not after seeing all post
  const [state, setState] = useState(true);

  const { allPostAnswerQuestion, allPostAnswerQuestionRefetch } =
    useOnePostAllAnswerQuestion({
      data: { pid: pid ? pid : "", page: page, limit: 10, viewAs: instituteAs },
      skip: false,
    });

  //for the infinite scroll then change the page
  useEffect(() => {
    // if (load) {
    if (inView && state) setPage((page) => page + 1);
    // }
  }, [inView, state]);

  //for the refteching after the page is reset
  useEffect(() => {
    allPostAnswerQuestionRefetch();
    // console.log("run load reftech");
  }, [page, allPostAnswerQuestionRefetch]);

  //for the action perform each time when the new data is comming from api
  useEffect(() => {
    //for next api is call or not dashboard
    if (allPostAnswerQuestion?.answer.length === 10) setState(true);
    else setState(false);
  }, [page, allPostAnswerQuestion?.answer]);

  return (
    <>
      {allPostAnswerQuestion?.answer?.length === 0 ? (
        <p>No answers found</p>
      ) : (
        <div className={style.eachCommentContainer}>
          {allPostAnswerQuestion?.answer?.map((val, index) =>
            allPostAnswerQuestion?.answer.length === index + 1 ? (
              <div className={style.eachComment} key={index} ref={ref}>
                <div className={style.commentHead}>
                  <div className={style.imgcontainer}>
                    <img
                      alt="profile icon"
                      src={
                        val.authorPhotoId !== 0
                          ? `${imageShowUrl}/${val.authorProfilePhoto}`
                          : "/images/member_tab/class/default_avatar.svg"
                      }
                    />
                  </div>
                  <div className={style.altUserrr}>
                    <h6>{val.authorUserName}</h6>
                    <p>{format(val.createdAt)}</p>
                  </div>
                </div>

                <div className={style.commentText}>
                  <h6>{val.answerContent}</h6>
                </div>

                {val.answerImage?.length ? (
                  <div className={style.postImg}>
                    <img
                      alt=" answer icon"
                      src={`${imageShowUrl}/${val.answerImage[0]}`}
                    />
                  </div>
                ) : (
                  ""
                )}
                <div className={style.reactions}>
                  <div className={style.reactionLeft}>
                    <div className={style.reactDark}>
                      <img alt="up count" src="/images/up-dark-icon.svg" />
                      <p>{val.upVoteCount}</p>
                    </div>
                    <div className={style.reactDark}>
                      <img alt="down conut" src="/images/down-dark-icon.svg" />
                      <p>{val.downVoteCount}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={style.eachComment} key={index}>
                <div className={style.commentHead}>
                  <div className={style.imgcontainer}>
                    <img
                      alt="profile icon"
                      src={
                        val.authorPhotoId !== 0
                          ? `${imageShowUrl}/${val.authorProfilePhoto}`
                          : "/images/member_tab/class/default_avatar.svg"
                      }
                    />
                  </div>
                  <div className={style.altUserrr}>
                    <h6>{val.authorUserName}</h6>
                    <p>{format(val.createdAt)}</p>
                  </div>
                </div>

                <div className={style.commentText}>
                  <h6>{val.answerContent}</h6>
                </div>

                {val.answerImage?.length ? (
                  <div className={style.postImg}>
                    <img
                      alt=" answer icon"
                      src={`${imageShowUrl}/${val.answerImage[0]}`}
                    />
                  </div>
                ) : (
                  ""
                )}
                <div className={style.reactions}>
                  <div className={style.reactionLeft}>
                    <div className={style.reactDark}>
                      <img alt="up count" src="/images/up-dark-icon.svg" />
                      <p>{val.upVoteCount}</p>
                    </div>
                    <div className={style.reactDark}>
                      <img alt="down conut" src="/images/down-dark-icon.svg" />
                      <p>{val.downVoteCount}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
}

export default Answers;
