import React from "react";
import { useState } from "react";
import style from "./StudentMCQ.module.css";
import SubmitExamModal from "./SubmitExamModal/SubmitExamModal";
import { useLocation } from "react-router-dom";
import {
  useStudentMcqQuestionGiven,
  useStudentMcqTestsetExamDetail,
  useStudentMcqTestsetExamSubmit,
} from "../../../../../../hooks/member_tab/student-api";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import Duration from "./Duration";
const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

function StudentMCQ() {
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [autoSubmit, setAutoSubmit] = useState(false);
  //new state
  const [allQuestion, setAllQuestion] = useState([]);
  const [givenQuestionId, setGivenQuestionId] = useState([]);
  const [givenQuestionAnswer, setGivenQuestionAnswer] = useState([]);
  const [oneQuestion, setOneQuestion] = useState("");
  const [indexCount, setIndexCount] = useState(0);
  const [studentMcqQuestionGiven] = useStudentMcqQuestionGiven();
  const [studentMcqTestsetExamSubmit] = useStudentMcqTestsetExamSubmit();

  const { studentMcqTestsetExamDetail, studentMcqTestsetExamDetailRefetch } =
    useStudentMcqTestsetExamDetail({
      tsid: location.state.tsid,
      skip: !location.state.tsid,
    });

  React.useEffect(() => {
    if (location.state.tsid) studentMcqTestsetExamDetailRefetch();
  }, [location.state.tsid, studentMcqTestsetExamDetailRefetch]);

  // console.info("thghsdgfs", studentMcqTestsetExamDetail);

  React.useEffect(() => {
    if (studentMcqTestsetExamDetail?.studentTestSet) {
      setAllQuestion(studentMcqTestsetExamDetail?.studentTestSet?.questions);
      setOneQuestion(studentMcqTestsetExamDetail?.studentTestSet?.questions[0]);
      let arr = [];
      for (let args of studentMcqTestsetExamDetail?.studentTestSet?.questions) {
        arr.push({
          _id: args?._id,
          givenAnswer: args.givenAnswer,
        });
        if (args.givenAnswer?.length) {
          setGivenQuestionId((prev) => [...prev, args?._id]);
        }
      }
      setGivenQuestionAnswer((answer) => [...answer, ...arr]);
    }
  }, [studentMcqTestsetExamDetail?.studentTestSet]);

  React.useEffect(() => {
    setOneQuestion(
      studentMcqTestsetExamDetail?.studentTestSet?.questions[indexCount]
    );
  }, [indexCount]);

  React.useEffect(() => {
    if (autoSubmit) onSubmitAnswer();
  }, [autoSubmit]);

  const onCorrectAnswer = (val, val2) => {
    // console.info("this sdffg set", oneQuestion);

    if (val2) {
      setOneQuestion((quest) => ({
        ...quest,
        givenAnswer: [val],
      }));
      if (givenQuestionId?.includes(oneQuestion?._id)) {
        const alreadyAnswer = givenQuestionAnswer;
        for (let ans of alreadyAnswer) {
          if (ans?._id === oneQuestion?._id) {
            ans.givenAnswer = [val];
          }
        }
        setGivenQuestionAnswer(alreadyAnswer);
      } else {
        setGivenQuestionId((given) => [...given, oneQuestion?._id]);
        setGivenQuestionAnswer((answer) => [
          ...answer,
          {
            _id: oneQuestion?._id,
            givenAnswer: [val],
          },
        ]);
      }
    } else {
      setOneQuestion((quest) => ({
        ...quest,
        givenAnswer: [],
      }));
      setGivenQuestionId(
        givenQuestionId?.filter((val) => val !== oneQuestion?._id)
      );
      setGivenQuestionAnswer(
        givenQuestionAnswer?.filter((val) => val?._id !== oneQuestion?._id)
      );
    }

    studentMcqQuestionGiven({
      tsid: location.state.tsid,
      correctAnswer: {
        // "testSetLeftTime": 0,
        questionSNO: oneQuestion?.questionSNO,
        givenAnswer: [val],
        // notSelect:val2
      },
    })
      .then(() => {
        // console.info("sghgfsgfssd  s  g s g sd gs", res);
      })
      .catch({});
  };

  const onSubmitAnswer = () => {
    studentMcqTestsetExamSubmit({
      tsid: location.state.tsid,
      submitTestset: {
        testSetComplete: true,
      },
    })
      .then(() => {
        setOpenModal(true);
        // console.info("sghgfsgfssd  s  g s g sd gs", res);
      })
      .catch({});
  };
  // console.info("setOneQuestion", oneQuestion);
  // console.info("setGivenQuestionAnswer", givenQuestionAnswer);
  // console.info("setGivenQuestionId", givenQuestionId);
  // console.info("studentMcqTestsetExamDetail", studentMcqTestsetExamDetail);

  return (
    <div className={style.studentMCQ}>
      <div className={style.studentMCQTop}>
        {studentMcqTestsetExamDetail?.studentTestSet?.testDuration && (
          <Duration
            totalTime={
              studentMcqTestsetExamDetail?.studentTestSet?.testDuration * 60
            }
            setAutoSubmit={setAutoSubmit}
          />
        )}
      </div>

      <div className={style.studentMCQBody}>
        <div className={style.studentMCQBodyLeft}>
          <div className={style.qTop}>
            <h6>Question {oneQuestion?.questionSNO}</h6>
            <h6>
              {oneQuestion?.questionNumber > 9
                ? oneQuestion?.questionNumber
                : `0${oneQuestion?.questionNumber}`}
            </h6>
          </div>

          <textarea
            className={style.show_question}
            readOnly
            rows={oneQuestion?.questionDescription?.split("\n").length}
            defaultValue={oneQuestion?.questionDescription}
          />

          {/* <p className={style.qtext}>{oneQuestion?.questionDescription}</p> */}
          {oneQuestion?.questionImage?.length ? (
            <img
              src={`${imageShowUrl}/${oneQuestion?.questionImage[0].documentKey}`}
              alt=""
              className={style.qImg}
            />
          ) : (
            ""
          )}

          <div className={oneQuestion?.qImg ? style.qOptions : style.noQImg}>
            {oneQuestion?.options?.map((opt, index) => (
              <div
                className={
                  oneQuestion?.givenAnswer[0]?.optionNumber ===
                    opt?.optionNumber &&
                  givenQuestionAnswer?.filter(
                    (quest) =>
                      quest?._id === oneQuestion?._id &&
                      quest?.givenAnswer[0]?.optionNumber === opt?.optionNumber
                  )?.length
                    ? style.qOptionActive
                    : style.qOption
                }
              >
                <div
                  className={
                    oneQuestion?.givenAnswer[0]?.optionNumber ===
                      opt?.optionNumber &&
                    givenQuestionAnswer?.filter(
                      (quest) =>
                        quest?._id === oneQuestion?._id &&
                        quest?.givenAnswer[0]?.optionNumber ===
                          opt?.optionNumber
                    )?.length
                      ? style.qButtonActive
                      : style.qButton
                  }
                  onClick={() =>
                    onCorrectAnswer(
                      opt,
                      oneQuestion?.givenAnswer[0]?.optionNumber ===
                        opt?.optionNumber &&
                        givenQuestionAnswer?.filter(
                          (quest) =>
                            quest?._id === oneQuestion?._id &&
                            quest?.givenAnswer[0]?.optionNumber ===
                              opt?.optionNumber
                        )?.length
                        ? ""
                        : "another"
                    )
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
                <p className={style.qOptionp}>{opt?.option}</p>
              </div>
            ))}
          </div>

          <div className={style.prevNextBtns}>
            <p onClick={() => setIndexCount((count) => count - 1)}>Previous</p>
            <p onClick={() => setIndexCount((count) => count + 1)}>Next</p>
          </div>
          {indexCount === allQuestion?.length - 1 && (
            <div className={style.submitMCQButtonContainer}>
              <div
                className={style.submitMCQButtons}
                onClick={onSubmitAnswer}
                style={BUTTON_WRAPPER_STYLES}
              >
                Submit Exam
              </div>
            </div>
          )}
        </div>
        <div className={style.studentMCQBodyRight}>
          <div className={style.studentMCQProfile}>
            <div className={style.studentMCQProfileLeft}>
              <img
                src={
                  studentMcqTestsetExamDetail?.studentTestSet?.student
                    ?.studentProfilePhoto
                    ? `${imageShowUrl}/${studentMcqTestsetExamDetail?.studentTestSet?.student?.studentProfilePhoto}`
                    : "/images/certificate/userImg.jpg"
                }
                alt="profile icon"
              />
            </div>
            <div className={style.studentMCQProfileRight}>
              <h6 className={style.studentMCQProfileRighth6}>
                Name:{" "}
                {`${
                  studentMcqTestsetExamDetail?.studentTestSet?.student
                    ?.studentFirstName
                } ${
                  studentMcqTestsetExamDetail?.studentTestSet?.student
                    ?.studentMiddleName
                    ? studentMcqTestsetExamDetail?.studentTestSet?.student
                        ?.studentMiddleName
                    : ""
                } ${
                  studentMcqTestsetExamDetail?.studentTestSet?.student
                    ?.studentLastName
                }`}
              </h6>
              <p className={style.studentMCQProfileRightp}>
                Roll No.{" "}
                {
                  studentMcqTestsetExamDetail?.studentTestSet?.student
                    ?.studentROLLNO
                }
              </p>
            </div>
          </div>
          <div className={style.studentMCQButtons}>
            {allQuestion?.map((q, index) => (
              <div
                className={
                  givenQuestionId?.includes(q?._id) || indexCount === index
                    ? indexCount === index
                      ? style.qButtonActiveBlue
                      : style.qButtonActive
                    : style.qButton
                }
                onClick={() => setIndexCount((count) => (count = index))}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
      {openModal && (
        <SubmitExamModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          tsid={studentMcqTestsetExamDetail?.studentTestSet?._id}
        />
      )}
    </div>
  );
}

export default StudentMCQ;
