import React from "react";
import style from "../Feed.module.css";
import { useTranslation } from "react-i18next";

const UserFeedQuestion = () => {
  const { t } = useTranslation();
  return (
    <div className={style.f_right_question_container}>
      <h6 className={style.f_right_question_heading}>
        {t("trending_questions")}
      </h6>
      <p className={style.f_right_question_label}>{t("see_more")}</p>

      {/* {!seeMore && (
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
            <div className={style.seemore} onClick={() => setSeeMore(false)}>
              <p>{t("seen_less_")}</p>
              <img src="/images/dashboard/arrow-below.svg" alt="" />
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default UserFeedQuestion;
