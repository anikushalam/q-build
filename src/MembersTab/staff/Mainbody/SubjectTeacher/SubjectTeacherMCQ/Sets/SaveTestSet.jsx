import React from "react";
import { FileNotUpload } from "../../../../../../validation/Snackbar";
import Question from "../Question/Question";
import style from "./CreateSet.module.css";
import { useTranslation } from "react-i18next";

const SaveTestSet = ({
  setTestIndex,
  createTestSet,
  selectedQuestion,
  onRemoveQuestion,
  onSaveTestSet,
}) => {
  const [viewQuestionIndex, setViewQuestionIndex] = React.useState(0);
  const [questionId, setQuestionId] = React.useState("");
  const [run, setRun] = React.useState(false);
  const [msg, setMsg] = React.useState("");
  const { t } = useTranslation();

  const onSaveTest = () => {
    if (!selectedQuestion?.length) {
      setMsg("Please select atleast on question for create a set");
      setRun((run) => !run);
    } else onSaveTestSet(2);
  };
  const onQuestionOpen = (val) => {
    setQuestionId(val);
    setViewQuestionIndex(1);
  };

  const onQuestionRemoveHandler = (e, data) => {
    e.stopPropagation();
    onRemoveQuestion(data);
  };
  return (
    <>
      {viewQuestionIndex === 0 && (
        <>
          <div className={style.create_set_header} style={{ border: "none" }}>
            <img
              src="/images/members/arrow-left.svg"
              alt=""
              onClick={() => {
                setTestIndex(2);
              }}
            />
            <h6>{t("test_set")}</h6>
            <p className={style.save_test_set} onClick={onSaveTest}>
              {t("save_test")}
            </p>
          </div>
          <div className={style.test_set_info}>
            <h6>{createTestSet?.testName || "Std 6th Unit Test"}</h6>
            <div className={style.test_set_info_footer}>
              <p>
                {t("total_number_of_questions")} :{" "}
                {createTestSet?.testTotalQuestion || 0}
              </p>
              <p>
                {t("total_test_set_marks")} :{" "}
                {createTestSet?.testTotalNumber || 0}
              </p>
            </div>
          </div>

          <div className={style.add_text_question}>
            <p onClick={() => setTestIndex(2)}>{t("add_questions")}</p>
          </div>

          <div className={style.all_added_question}>
            {selectedQuestion?.map((question) => (
              <div
                key={question._id}
                className={style.one_question}
                onClick={() => onQuestionOpen(question._id)}
              >
                <div className={style.one_question_header}>
                  <div className={style.one_question_header_left}>
                    <h6>
                      {" "}
                      {t("add_question")} {+question?.questionSNO}
                    </h6>
                    <p
                      className={style.one_question_remove}
                      onClick={(e) => onQuestionRemoveHandler(e, question)}
                    >
                      {t("remove")}
                    </p>
                  </div>

                  <h6>
                    {" "}
                    {question?.questionNumber > 9
                      ? question?.questionNumber
                      : `0${question?.questionNumber}`}
                  </h6>
                </div>
                <p className={style.one_question_detail}>
                  {question?.questionDescription}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
      {viewQuestionIndex === 1 && (
        <Question
          topLevelIndex={setViewQuestionIndex}
          backIndex={0}
          questionId={questionId}
        />
      )}
      <FileNotUpload run={run} setRun={setRun} msg={msg} />
    </>
  );
};

export default SaveTestSet;
