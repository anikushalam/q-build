import { t } from "i18next";
import React from "react";
import { useEffect } from "react";
import { useSubjectMcqTestsetDetail } from "../../../../../../hooks/member_tab/subject-api";
import McqCommonHeader from "../McqCommonHeader";
import Question from "../Question/Question";
import style from "./CreateSet.module.css";
import TakeTestForm from "./TakeTestForm";
import { useTranslation } from "react-i18next";

const TestSetQuestion = ({
  tabHandler,
  testIndex,
  setTestIndex,
  type,
  testSetId,
  onSelectQuestion,
  alreadySelectedQuestion,
  onRemoveQuestion,
  sid,
}) => {
  const [takeTestIndex, setTakeTestIndex] = React.useState(0);
  const { t } = useTranslation();
  const [questionId, setQuestionId] = React.useState("");
  const [questionSelectionProcess, setQuestionSelectionProcess] =
    React.useState({
      questionObject: [],
      questionId: [],
      totalMarks: 0,
    });

  const { subjectMcqTestsetDetail, subjectMcqTestsetDetailRefetch } =
    useSubjectMcqTestsetDetail({
      data: {
        tsid: testSetId?._id,
        page: 1,
        limit: 10,
      },
      skip: !testSetId?._id,
    });

  useEffect(() => {
    if (testSetId?._id) subjectMcqTestsetDetailRefetch();
  }, [testSetId?._id, subjectMcqTestsetDetailRefetch]);

  // console.info("thissvfgns", testSetId, subjectMcqTestsetDetail);

  const onQuestionHandler = (quest) => {
    if (type === "TEST_SET_VIEW") {
      setQuestionId(quest?._id);
      setTakeTestIndex(2);
    } else {
      if (
        questionSelectionProcess.questionId?.includes(quest?._id) ||
        alreadySelectedQuestion?.includes(quest?._id)
      )
        if (alreadySelectedQuestion?.includes(quest?._id))
          onRemoveQuestion(quest);
        else
          setQuestionSelectionProcess((prevState) => ({
            ...prevState,
            questionObject: prevState.questionObject?.filter(
              (val) => val?._id !== quest?._id
            ),
            questionId: prevState.questionId?.filter(
              (val) => val !== quest?._id
            ),
            totalMarks: prevState.totalMarks - quest?.questionNumber,
          }));
      else
        setQuestionSelectionProcess((prevState) => ({
          ...prevState,
          questionObject: [...prevState.questionObject, quest],
          questionId: [...prevState.questionId, quest?._id],
          totalMarks: prevState.totalMarks + quest?.questionNumber,
        }));
    }
  };
  // console.info("thissvfgns", questionSelectionProcess);
  // const onSelectAllQuestion = () => {
  //   for (let quest of subjectMcqTestsetDetail?.testSetAllQuestions) {
  //     if (
  //       questionSelectionProcess.questionId?.includes(quest?._id) ||
  //       alreadySelectedQuestion?.includes(quest?._id)
  //     ) {
  //     } else
  //       setQuestionSelectionProcess((prevState) => ({
  //         ...prevState,
  //         questionObject: [...prevState.questionObject, quest],
  //         questionId: [...prevState.questionId, quest?._id],
  //         totalMarks: prevState.totalMarks + quest?.questionNumber,
  //       }));
  //   }
  // };

  const onSelectSubmit = () => {
    onSelectQuestion(questionSelectionProcess);
    setTestIndex(4);
  };
  return (
    <>
      {takeTestIndex === 0 && (
        <>
          {type !== "TEST_SET_VIEW" && (
            <div className={style.create_set_header} style={{ border: "none" }}>
              <div className={style.create_set_header_left}>
                <img
                  src="/images/members/arrow-left.svg"
                  alt=""
                  onClick={() => {
                    setTestIndex(2);
                  }}
                />
                <h6>{t("select_questions")}</h6>
              </div>
              <p className={style.save_test_set} onClick={onSelectSubmit}>
                {t("select")}
              </p>
            </div>
          )}
          {type === "TEST_SET_VIEW" && (
            <>
              <McqCommonHeader
                name="Test Set"
                tabEventName="TEST_SET_LIST"
                backIndex="3"
                tabHandler={tabHandler}
                topLevelIndex={setTestIndex}
                editType="yes"
              />
            </>
          )}

          <div className={style.test_set_info}>
            <h6>{testSetId?.testName}</h6>
            <div className={style.test_set_info_footer}>
              <p>
                {" "}
                {t("total_number_of_questions")} :{" "}
                {testSetId?.testTotalQuestion}
              </p>
              <p>
                Total test set marks :{" "}
                {testSetId?.testTotalNumber > 9
                  ? testSetId?.testTotalNumber
                  : `0${testSetId?.testTotalNumber}`}
              </p>
            </div>
          </div>
          {type !== "TEST_SET_VIEW" && (
            <div className={style.select_information}>
              <div className={style.select_information_count}>
                <p>
                  {questionSelectionProcess.questionId?.length}/
                  {subjectMcqTestsetDetail?.testSetAllQuestions?.length}
                  {t("are_selected")}
                </p>
                <p>
                  {questionSelectionProcess.totalMarks} {t("marks")}{" "}
                </p>
              </div>
              {/* <p
                className={style.select_information_all_select}
                onClick={onSelectAllQuestion}
              >
                Select All
              </p> */}
            </div>
          )}
          <div className={style.all_added_question}>
            {subjectMcqTestsetDetail?.testSetAllQuestions?.map(
              (quest, index) => (
                <div
                  className={
                    questionSelectionProcess?.questionId?.includes(
                      quest?._id
                    ) || alreadySelectedQuestion?.includes(quest?._id)
                      ? `${style.one_question} ${style.one_question_active}`
                      : style.one_question
                  }
                  onClick={() => onQuestionHandler(quest)}
                  key={index}
                >
                  <div className={style.one_question_header}>
                    <div className={style.one_question_header_left}>
                      <h6>Question {+quest?.questionSNO}</h6>
                    </div>
                    <h6>
                      {quest?.questionNumber > 9
                        ? quest?.questionNumber
                        : `0${quest?.questionNumber}`}
                    </h6>
                  </div>
                  <p
                    className={style.one_question_detail}
                    style={{ wordBreak: "break-all" }}
                  >
                    {quest?.questionDescription}
                  </p>
                </div>
              )
            )}
          </div>

          {type === "TEST_SET_VIEW" && (
            <div
              className={style.take_test_set}
              onClick={() => setTakeTestIndex(1)}
            >
              {t("take_test")}
            </div>
          )}
        </>
      )}
      {takeTestIndex === 1 && (
        <TakeTestForm
          setTakeTestIndex={setTakeTestIndex}
          tsid={testSetId?._id}
          sid={sid}
          tabHandler={tabHandler}
          setTestIndex={setTestIndex}
        />
      )}
      {takeTestIndex === 2 && (
        <Question
          topLevelIndex={setTakeTestIndex}
          backIndex={0}
          questionId={questionId}
        />
      )}
    </>
  );
};

export default TestSetQuestion;
