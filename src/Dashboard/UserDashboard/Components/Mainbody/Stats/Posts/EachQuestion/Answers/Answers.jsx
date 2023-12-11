import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useOnePostAllAnswerQuestion } from "../../../../../../../../Post/Institute/Components/post-api";
import { imageShowUrl } from "../../../../../../../../services/BaseUrl";
import style from "./Answers.module.css";
import { format } from "timeago.js";
import { userAs } from "../../../../../../../../constant/constant_value";
import UpVote from "../UpVote";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { postChangeAction } from "../../../../../../../../redux/store/post-slice";
import AnswerSave from "./AnswerSave";
function Answers({ pid }) {
  //for setting the next page to fetch data
  const [page, setPage] = useState(1);

  //for the infinite scroll
  const [ref, inView] = useInView();

  //for the fetch more or not after seeing all post
  const [state, setState] = useState(true);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const allAnswer = useSelector((state) => state.postChange.answers);
  const ids = useSelector((state) => state.idChange);

  const { allPostAnswerQuestion, allPostAnswerQuestionRefetch } =
    useOnePostAllAnswerQuestion({
      data: { pid: pid ? pid : "", page: page, limit: 10, viewAs: userAs },
      skip: !pid,
    });

  //for the infinite scroll then change the page
  useEffect(() => {
    // if (load) {
    if (inView && state) setPage((page) => page + 1);
    // }
  }, [inView, state]);

  //for the refteching after the page is reset
  useEffect(() => {
    if (pid) allPostAnswerQuestionRefetch();
    // console.log("run load reftech");
  }, [pid, page, allPostAnswerQuestionRefetch]);

  //for the action perform each time when the new data is comming from api
  useEffect(() => {
    //dispatch actions
    if (allPostAnswerQuestion?.answer)
      dispatch(
        postChangeAction.addAnswer({
          postId: pid,
          answer: allPostAnswerQuestion?.answer,
        })
      );

    //for next api is call or not dashboard
    if (allPostAnswerQuestion?.answer.length === 10) setState(true);
    else setState(false);
  }, [page, allPostAnswerQuestion?.answer, pid, dispatch]);

  // console.info("this  is nrmale answer is change", pid);
  return (
    <>
      {allAnswer?.map((ans) =>
        ans.postId === pid ? (
          ans?.length === 0 ? (
            <p>{t("no_ans")}</p>
          ) : (
            ans?.answer?.map((val, index) =>
              ans?.answer.length === index + 1 ? (
                <div className={style.answerSection} key={index} ref={ref}>
                  <div className={style.eachposthead}>
                    <div className={style.imgcontainer}>
                      <img
                        alt="not found"
                        src={
                          val?.authorPhotoId !== "1"
                            ? `${imageShowUrl}/${val?.authorProfilePhoto}`
                            : "/images/ins_default_profile.svg"
                        }
                        className={val?.authorPhotoId !== "1" ? "" : style.iimg}
                      />
                    </div>

                    <div className={style.eachpostUserName}>
                      <h6>{val?.authorUserName}</h6>
                      <div
                        className={style.eachpostUserTime}
                        style={{
                          display: "flex",
                          gap: "0.5vw",
                          alignItems: "center",
                        }}
                      >
                        <p>{format(val?.createdAt)}</p>
                      </div>
                    </div>
                  </div>
                  <div className={style.answerMainContainer}>
                    <h5 className={style.answerTitle}>{val.answerContent}</h5>
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
                  <div className={style.questionBottom}>
                    <div
                      className={
                        ids?.loggedinAs !== "institute"
                          ? `${style.questionBottomBorder} ${style.questionBottomBorderUser}`
                          : style.questionBottomBorder
                      }
                    >
                      <p className={style.needCount}>
                        {val.upVoteCount} {t("find_helpful")}
                      </p>
                    </div>
                    {ids?.loggedinAs !== "institute" ? (
                      <div className={style.questionBottomIcon}>
                        <div className={style.questionBottomIconOne}>
                          <UpVote
                            parentStyle={style.questionBottomIconOne}
                            upVote={val?.upVote}
                            aid={val?._id}
                            rpid=""
                            pid={pid}
                          />
                        </div>
                        <div className={style.questionBottomIconOne}>
                          <AnswerSave
                            endUserSave={val?.answerSave}
                            aid={val?._id}
                            parentStyle={style.questionBottomIconOne}
                          />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ) : (
                <div className={style.answerSection} key={index}>
                  <div className={style.eachposthead}>
                    <div className={style.imgcontainer}>
                      <img
                        alt="not found"
                        src={
                          val?.authorPhotoId !== "1"
                            ? `${imageShowUrl}/${val?.authorProfilePhoto}`
                            : "/images/ins_default_profile.svg"
                        }
                        className={val?.authorPhotoId !== "1" ? "" : style.iimg}
                      />
                    </div>

                    <div className={style.eachpostUserName}>
                      <h6>{val?.authorUserName}</h6>
                      <div
                        className={style.eachpostUserTime}
                        style={{
                          display: "flex",
                          gap: "0.5vw",
                          alignItems: "center",
                        }}
                      >
                        <p>{format(val?.createdAt)}</p>
                      </div>
                    </div>
                  </div>

                  <div className={style.answerMainContainer}>
                    <h5 className={style.answerTitle}>{val.answerContent}</h5>
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

                  <div className={style.questionBottom}>
                    <div
                      className={
                        ids?.loggedinAs !== "institute"
                          ? `${style.questionBottomBorder} ${style.questionBottomBorderUser}`
                          : style.questionBottomBorder
                      }
                    >
                      <p className={style.needCount}>
                        {val.upVoteCount} {t("find_helpful")}
                      </p>
                    </div>
                    {ids?.loggedinAs !== "institute" ? (
                      <div className={style.questionBottomIcon}>
                        <div className={style.questionBottomIconOne}>
                          <UpVote
                            parentStyle={style.questionBottomIconOne}
                            upVote={val?.upVote}
                            aid={val?._id}
                            rpid=""
                            pid={pid}
                          />
                        </div>
                        <div className={style.questionBottomIconOne}>
                          <AnswerSave
                            endUserSave={val?.answerSave}
                            aid={val?._id}
                            parentStyle={style.questionBottomIconOne}
                          />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              )
            )
          )
        ) : (
          ""
        )
      )}
    </>
  );
}

export default Answers;
