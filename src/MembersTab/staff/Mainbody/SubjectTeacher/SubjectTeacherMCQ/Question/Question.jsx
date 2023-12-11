import React from "react";
import { useSubjectMcqOneQuestion } from "../../../../../../hooks/member_tab/subject-api";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import McqCommonHeader from "../McqCommonHeader";
import { useTranslation } from "react-i18next";

import style from "./AllQuestion.module.css";
const Question = ({ topLevelIndex, backIndex, questionId }) => {
  const { t } = useTranslation();
  const { subjectMcqOneQuestion, subjectMcqOneQuestionRefetch } =
    useSubjectMcqOneQuestion({
      qid: questionId,
      skip: !questionId,
    });
  React.useEffect(() => {
    if (questionId) subjectMcqOneQuestionRefetch();
  }, [questionId]);
  // console.info("Tis is one queshtsm", subjectMcqOneQuestion);
  return (
    <>
      <McqCommonHeader
        name="Questions"
        tabEventName="TEST_SET_LIST"
        backIndex={backIndex}
        tabHandler={() => {}}
        topLevelIndex={topLevelIndex}
      />
      <div className={style.view_question}>
        <div className={style.view_question_header}>
          <h6>
            {" "}
            {t("add_question")} {+subjectMcqOneQuestion?.question?.questionSNO}.
          </h6>
          <h6>
            {subjectMcqOneQuestion?.question?.questionNumber > 9
              ? subjectMcqOneQuestion?.question?.questionNumber
              : `0${subjectMcqOneQuestion?.question?.questionNumber}`}
          </h6>
        </div>
        <textarea
          className={style.show_question}
          readOnly
          rows={
            subjectMcqOneQuestion?.question?.questionDescription.split("\n")
              .length
          }
          defaultValue={subjectMcqOneQuestion?.question?.questionDescription}
        />

        {subjectMcqOneQuestion?.question?.questionImage?.length ? (
          <img
            src={`${imageShowUrl}/${subjectMcqOneQuestion?.question?.questionImage[0].documentKey}`}
            className={style.view_question_answer_image}
            alt=""
          />
        ) : (
          ""
        )}

        <div className={style.option_container}>
          {subjectMcqOneQuestion?.question?.options?.map((opt, index) => (
            <div
              className={
                subjectMcqOneQuestion?.question?.correctAnswer[0]
                  ?.optionNumber === opt?.optionNumber
                  ? style.option_each_correct
                  : style.option_each
              }
            >
              <div
                className={
                  subjectMcqOneQuestion?.question?.correctAnswer[0]
                    ?.optionNumber === opt?.optionNumber
                    ? `${style.option_each_count} ${style.option_each_count_correct}`
                    : style.option_each_count
                }
              >
                {index === 0
                  ? "A"
                  : index === 1
                  ? "B"
                  : index === 2
                  ? "C"
                  : index === 3
                  ? "D"
                  : "E"}
              </div>
              <p className={style.view_question_option_text}>{opt.option}</p>
            </div>
          ))}
        </div>

        <h6> {t("solution")} :</h6>
        <textarea
          readOnly
          className={style.show_question}
          rows={
            subjectMcqOneQuestion?.question?.answerDescription.split("\n")
              .length
          }
          defaultValue={subjectMcqOneQuestion?.question?.answerDescription}
        />
        {/* <p className={style.view_question_content}>
          {subjectMcqOneQuestion?.question?.answerDescription}
        </p> */}
        {subjectMcqOneQuestion?.question?.answerImage?.length ? (
          <img
            src={`${imageShowUrl}/${subjectMcqOneQuestion?.question?.answerImage[0].documentKey}`}
            className={style.view_question_answer_image}
            alt=""
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Question;
