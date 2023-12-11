import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
// import { useSelector } from "react-redux";
import { useTrendingPlateformQuestion } from "../../../../../hooks/plateform/plateform-api";
import style from "./SidebarRight.module.css";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { idChangeAction } from "../../../../../redux/store/department-slice";
import LinksContainter from "../../../../LinksContainter/LinksContainter";

function SidebarRight() {
  // const ids = useSelector((state) => state.idChange);
  const heightRef = useRef();
  // for the infinit scroll
  const [ref, inView] = useInView();
  const dispatch = useDispatch();
  const ids = useSelector((state) => state.idChange);
  const [seeMore, setSeeMore] = useState(false);

  //for the fetch more or not after seeing all post
  // const [state, setState] = useState(true);
  //for setting the next page to fetch data
  // const [page, setPage] = useState(1);
  const [stickey, setStickey] = useState(false);
  const [trendingQuestion, setTrendingQuestion] = useState([]);

  const { trendingPlateformQuestion, trendingPlateformQuestionRefetch } =
    useTrendingPlateformQuestion({
      page: 1,
      limit: 10,
    });

  useEffect(() => {
    if (inView) {
      setStickey(true);
    }
  }, [inView]);

  useEffect(() => {
    trendingPlateformQuestionRefetch();
  }, [trendingPlateformQuestionRefetch]);

  useEffect(() => {
    if (trendingPlateformQuestion?.filteredQuestion) {
      const uniqueList = [
        ...trendingQuestion,
        ...trendingPlateformQuestion?.filteredQuestion,
      ];
      const uniqueRefind = [...new Set(uniqueList.map(JSON.stringify))].map(
        JSON.parse
      );
      setTrendingQuestion(uniqueRefind);
    }

    // //for next api is call or not dashboard
    // if (trendingPlateformQuestion?.filteredQuestion.length === 10)
    //   setState(true);
    // else setState(false);
  }, [trendingPlateformQuestion?.filteredQuestion]);

  const onAnswerHandler = (directAnswer) => {
    dispatch(
      idChangeAction.openQuestionWithAnswer({
        repost: "repost",
        post: directAnswer,
        type: "question",
        otherOption: {
          profilePost: false,
          selectOptions:
            ids?.id !== directAnswer ? ["Report"] : ["Edit", "Delete"],
          directAnswer: false,
          question: "right question",
        },
        search: ids?.searchProfile?.id !== "" ? "search" : "not search",
      })
    );
  };
  const { t } = useTranslation();
  // const items = trendingQuestion?.slice(0, 5)?.map((item, index)=> (

  // ))

  return (
    <>
      <div className={style.sidebarrightt}>
        <div className={style.trendingquestions}>
          <h6 className={style.trendingquestionsheader}>
            {t("trending_questions")}
          </h6>
          <p className={style.trendingquestionspara}>{t("see_if")}</p>

          {!seeMore && (
            <div>
              <ul className={style.trendingquestionslist}>
                {trendingQuestion?.slice(0, 5)?.map((item, index) => (
                  <li key={index} onClick={() => onAnswerHandler(item._id)}>
                    <h6 className={style.trendingquestionh}>
                      {item?.postQuestion}
                    </h6>
                    <p className={style.trendingquestionp}>
                      {item?.needCount} {t("Needs")} | {item?.answerCount}{" "}
                      {t("Answers")}
                    </p>
                  </li>
                ))}
              </ul>

              <div className={style.trendingquestionsfooter}>
                <div className={style.seemore} onClick={() => setSeeMore(true)}>
                  <p>{t("seen_less")}</p>
                  <img src="/images/dashboard/arrow-below.svg" alt="" />
                </div>
              </div>
            </div>
          )}

          {seeMore && (
            <div>
              <ul className={style.trendingquestionslist}>
                {trendingQuestion?.slice(0, 10)?.map((item, index) => (
                  <li>
                    <h6 className={style.trendingquestionh}>
                      {item?.postQuestion}
                    </h6>
                    <p className={style.trendingquestionp}>
                      {item?.needCount} {t("Needs")} | {item?.answerCount}{" "}
                      {t("Answers")}
                    </p>
                  </li>
                ))}
              </ul>

              <div className={style.trendingquestionsfooter}>
                <div
                  className={style.seemore}
                  onClick={() => setSeeMore(false)}
                >
                  <p>{t("seen_less_")}</p>
                  <img src="/images/dashboard/arrow-below.svg" alt="" />
                </div>
              </div>
            </div>
          )}
        </div>

        <LinksContainter />
      </div>
    </>
  );
}

export default SidebarRight;
