import React from "react";
import { useState, useEffect } from "react";
import {
  useSubjectMcqUpdateTestset,
  useSubjectMcqTestsetDetail,
} from "../../../../../../hooks/member_tab/subject-api";
import QLoader from "../../../../../../Loader/QLoader";
import CreateMCQQuestion from "../CreateQuestion/CreateMCQQuestion";
import QuestionAndSet from "./QuestionAndSet";
import SaveTestSet from "./SaveTestSet";
import TestSetName from "./TestSetName";
import TestSetQuestion from "./TestSetQuestion";
const EditTestSet = ({
  tabHandler,
  topLevelIndex,
  smid,
  cmid,
  usmid,
  ucmid,
  editTestSetId,
}) => {
  const [testIndex, setTestIndex] = React.useState(1);
  const [disabled, setDisabled] = React.useState(false);
  const [createTestSet, setCreateTestSet] = React.useState({
    testName: editTestSetId?.testName ? editTestSetId?.testName : "",
    testTotalQuestion: editTestSetId?.testTotalQuestion
      ? editTestSetId?.testTotalQuestion
      : 0,
    testTotalNumber: editTestSetId?.testTotalNumber
      ? editTestSetId?.testTotalNumber
      : 0,
    questions: [],
    deletedQuestions: [],
  });
  const [selectedQuestion, setSelectedQuestion] = React.useState([]);
  const [testSetId, setTestSetId] = useState("");
  const [subjectMcqUpdateTestset] = useSubjectMcqUpdateTestset();

  const { subjectMcqTestsetDetail, subjectMcqTestsetDetailRefetch } =
    useSubjectMcqTestsetDetail({
      data: {
        tsid: editTestSetId?._id,
        page: 1,
        limit: 10,
      },
      skip: !editTestSetId?._id,
    });

  useEffect(() => {
    if (editTestSetId?._id) subjectMcqTestsetDetailRefetch();
  }, [editTestSetId?._id, subjectMcqTestsetDetailRefetch]);

  useEffect(() => {
    if (editTestSetId?.testTotalQuestion) {
      setCreateTestSet((prev) => ({
        ...prev,
        testName: editTestSetId?.testName,
        testTotalQuestion: editTestSetId?.testTotalQuestion,
        testTotalNumber: editTestSetId?.testTotalNumber,
      }));
    }
  }, [
    editTestSetId?.testTotalQuestion,
    editTestSetId?.testTotalNumber,
    editTestSetId?.testName,
  ]);

  useEffect(() => {
    if (subjectMcqTestsetDetail?.testSetAllQuestions) {
      const arrId = [...createTestSet.questions];
      const arrQue = [...selectedQuestion];
      for (let queId of subjectMcqTestsetDetail?.testSetAllQuestions) {
        if (arrId?.includes(queId?._id)) {
        } else {
          arrId.push(queId?._id);
          arrQue.push(queId);
        }
      }
      setCreateTestSet((prev) => ({
        ...prev,
        questions: arrId,
      }));
      setSelectedQuestion(arrQue);
    }
  }, [subjectMcqTestsetDetail?.testSetAllQuestions]);

  const onRemoveQuestion = (data) => {
    setCreateTestSet((prev) => ({
      ...prev,
      testTotalQuestion: prev.testTotalQuestion - 1,
      testTotalNumber: prev.testTotalNumber - data?.questionNumber,
      questions: prev.questions?.filter((val) => val !== data?._id),
      deletedQuestions: [...prev.deletedQuestions, data?._id],
    }));
    setSelectedQuestion((prevQue) =>
      prevQue?.filter((val) => val._id !== data?._id)
    );
  };
  // console.info("THis is testset function", createTestSet);
  const onSaveTestSet = () => {
    setDisabled(true);
    subjectMcqUpdateTestset({
      tsid: editTestSetId?._id,
      updateTestSet: createTestSet,
    })
      .then((res) => {
        // console.info(res);
        tabHandler("TEST_SET_LIST");
        topLevelIndex("3");
        setDisabled(false);
      })
      .catch({});
  };
  const onSelectQuestion = (data) => {
    setCreateTestSet((prev) => ({
      ...prev,
      testTotalQuestion: prev.testTotalQuestion + data?.questionId?.length,
      testTotalNumber: prev.testTotalNumber + data?.totalMarks,
      questions: [...prev.questions, ...data?.questionId],
    }));
    setSelectedQuestion((prevQue) => [...prevQue, ...data?.questionObject]);
  };

  // console.info(sid);
  return (
    <>
      {testIndex === 1 && (
        <TestSetName
          tabHandler={tabHandler}
          topLevelIndex={topLevelIndex}
          setCreateTestSet={setCreateTestSet}
          createTestSet={createTestSet}
          setTestIndex={setTestIndex}
        />
      )}
      {testIndex === 2 && (
        <QuestionAndSet
          setTestIndex={setTestIndex}
          createTestSet={createTestSet}
          setCreateTestSet={setCreateTestSet}
          smid={smid}
          cmid={cmid}
          usmid={usmid}
          ucmid={ucmid}
          setSelectedQuestion={setSelectedQuestion}
          setTestSetId={setTestSetId}
        />
      )}
      {testIndex === 3 && (
        <CreateMCQQuestion
          setTestIndex={setTestIndex}
          smid={smid}
          cmid={cmid}
          setCreateTestSet={setCreateTestSet}
          setSelectedQuestion={setSelectedQuestion}
        />
      )}
      {testIndex === 4 && (
        <SaveTestSet
          setTestIndex={setTestIndex}
          selectedQuestion={selectedQuestion}
          onRemoveQuestion={onRemoveQuestion}
          createTestSet={createTestSet}
          onSaveTestSet={onSaveTestSet}
        />
      )}
      {testIndex === 5 && (
        <TestSetQuestion
          testIndex={testIndex}
          setTestIndex={setTestIndex}
          testSetId={testSetId}
          onSelectQuestion={onSelectQuestion}
          alreadySelectedQuestion={createTestSet.questions}
          onRemoveQuestion={onRemoveQuestion}
        />
      )}
      {disabled && <QLoader />}
    </>
  );
};

export default EditTestSet;
