import React, { useCallback, useState } from "react";
import { useSubjectMcqQuestion } from "../../../../../../hooks/member_tab/subject-api";
import McqCommonHeader from "../McqCommonHeader";
import SearchQuestion from "../SearchQuestion";
import style from "./AllQuestion.module.css";
import Question from "./Question";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { debounce } from "lodash";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import EmptyInfo from "../../../../../../Loader/EmptyInfo";

const AllQuestion = ({
  tabHandler,
  topLevelIndex,
  tabEventName,
  backIndex,
  smid,
  cmid,
  usmid,
  ucmid,
  setCreateTestSet,
  createTestSet,
  setTestIndex,
  setSelectedQuestion,
}) => {
  const { t } = useTranslation();
  const [viewQuestionIndex, setViewQuestionIndex] = React.useState(0);
  const [questionId, setQuestionId] = React.useState("");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [allQuestion, setAllQuestion] = React.useState([]);
  const [ref, inView] = useInView();
  const [state, setState] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { subjectMcqQuestion, subjectMcqQuestionRefetch } =
    useSubjectMcqQuestion({
      data: {
        smid: smid,
        cmid: cmid,
        page: page,
        limit: 10,
        usmid: usmid ? usmid : "",
        ucmid: ucmid ? ucmid : "",
        search: searchQuery,
      },
      skip: !smid && !cmid,
    });

  React.useEffect(() => {
    if (smid && cmid) subjectMcqQuestionRefetch();
  }, [smid, cmid, page, searchQuery, subjectMcqQuestionRefetch]);

  React.useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  React.useEffect(() => {
    if (searchQuery) {
      setAllQuestion(subjectMcqQuestion?.questions);
      setShowingDataLoading(false);
    } else {
      if (subjectMcqQuestion?.questions) {
        if (page === 1) {
          setAllQuestion(subjectMcqQuestion?.questions);
        } else {
          setAllQuestion((prev) =>
            [
              ...new Set(
                [...prev, ...subjectMcqQuestion?.questions].map(JSON.stringify)
              ),
            ].map(JSON.parse)
          );
        }
        setShowingDataLoading(false);
      }
      //for next api is call or not dashboard
      if (subjectMcqQuestion?.questions.length === 10) setState(true);
      else setState(false);
    }
  }, [subjectMcqQuestion?.questions]);

  const onQuestionClick = (val) => {
    if (tabEventName === "SEARCH_QUESTION_SET") {
      setCreateTestSet((prevState) => ({
        ...prevState,
        testTotalQuestion: prevState.testTotalQuestion + 1,
        testTotalNumber: prevState.testTotalNumber + val?.questionNumber,
        questions: [...prevState.questions, val?._id],
      }));
      setSelectedQuestion((prev) => [...prev, val]);
      setTestIndex(4);
    } else if (tabEventName === "TEST_SET_LIST") {
      setQuestionId(val?._id);
      setViewQuestionIndex(1);
    } else {
    }
  };

  const onDebounce = useCallback(
    debounce((val) => setSearchQuery(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
    if (!e.target.value) {
      setPage(1);
    }
  };
  // console.info("THis is all question ", searchQuery);
  return (
    <>
      {viewQuestionIndex === 0 && (
        <>
          <div style={{ marginBottom: "1.5vw" }}>
            <McqCommonHeader
              name="Questions"
              tabEventName={tabEventName}
              backIndex={backIndex}
              tabHandler={tabHandler}
              topLevelIndex={topLevelIndex}
            />
          </div>
          <SearchQuestion
            width="100%"
            type={true}
            onSearchEvent={onSearchEvent}
          />
          <div className={style.question_container}>
            {allQuestion?.map((question, index) =>
              allQuestion?.length === index + 1 ? (
                <div
                  className={
                    createTestSet?.questions?.includes(question?._id)
                      ? `${style.one_question} ${style.one_question_active}`
                      : style.one_question
                  }
                  onClick={() => onQuestionClick(question)}
                  key={question?._id}
                  ref={ref}
                >
                  <div>
                    <h6>
                      {" "}
                      {t("add_question")} {+question?.questionSNO}
                    </h6>
                    <p style={{ wordBreak: "break-all" }}>
                      {question?.questionDescription}
                    </p>
                  </div>
                  <p>
                    {question?.questionNumber > 9
                      ? question?.questionNumber
                      : `0${question?.questionNumber}`}
                  </p>
                </div>
              ) : (
                <div
                  className={
                    createTestSet?.questions?.includes(question?._id)
                      ? `${style.one_question} ${style.one_question_active}`
                      : style.one_question
                  }
                  onClick={() => onQuestionClick(question)}
                  key={question?._id}
                >
                  <div>
                    <h6>
                      {" "}
                      {t("add_question")} {+question?.questionSNO}
                    </h6>
                    <p style={{ wordBreak: "break-all" }}>
                      {question?.questionDescription}
                    </p>
                  </div>
                  <p>
                    {question?.questionNumber > 9
                      ? question?.questionNumber
                      : `0${question?.questionNumber}`}
                  </p>
                </div>
              )
            )}
            {!showingDataLoading && !allQuestion.length && (
              <EmptyInfo
                customStyleContainer={{
                  marginTop: "9rem",
                }}
                title={"No question or search found. "}
              />
            )}
            {showingDataLoading && <QvipleLoading status="white" />}
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
    </>
  );
};

export default AllQuestion;
