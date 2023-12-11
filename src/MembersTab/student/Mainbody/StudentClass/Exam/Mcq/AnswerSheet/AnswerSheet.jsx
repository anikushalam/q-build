import React, { useState } from "react";
import style from "./AnswerSheet.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useStudentMcqTestsetExamResult } from "../../../../../../../hooks/member_tab/student-api";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";

function EachQuestion({ index, quest }) {
  const [viewSolution, setViewSolution] = useState(false);

  return (
    <div key={index} className={style.eachQuestion}>
      <div className={style.qTop}>
        <h6>Question {quest?.questionSNO}</h6>
        <h6>
          {quest?.questionNumber > 9
            ? quest?.questionNumber
            : `0${quest?.questionNumber}`}
        </h6>
      </div>
      <textarea
        className={style.show_question}
        readOnly
        rows={quest?.questionDescription?.split("\n").length}
        defaultValue={quest?.questionDescription}
      />

      {/* <p className={style.qtext}>{quest?.questionDescription}</p> */}
      {quest?.questionImage?.length ? (
        <img
          src={`${imageShowUrl}/${quest?.questionImage[0].documentKey}`}
          alt=""
          className={style.qImg}
        />
      ) : (
        ""
      )}

      <div className={style.qOptions}>
        {quest?.options?.map((opt, index) => (
          <div
            className={
              quest?.givenAnswer?.[0]?.optionNumber === opt?.optionNumber
                ? quest?.correctAnswer?.[0]?.optionNumber ===
                  quest?.givenAnswer?.[0]?.optionNumber
                  ? style.qOptionActive
                  : style.qOptionRed
                : quest?.correctAnswer?.[0]?.optionNumber === opt?.optionNumber
                ? style.qOptionBlue
                : style.qOption
            }
            // className={
            //   quest?.correctAnswer?.[0]?.optionNumber ===
            //     quest?.givenAnswer?.[0]?.optionNumber &&
            //   quest?.givenAnswer?.[0]?.optionNumber === opt?.optionNumber
            //     ? style.qOptionActive
            //     : // : q?.correct === String.fromCharCode(64 + index + 1)
            //       // ? style.qOptionBlue
            //       // : q?.attempted === String.fromCharCode(64 + index + 1)
            //       style.qOptionRed
            //   // : style.qOption

            //   // : q?.correct === String.fromCharCode(64 + index + 1)
            //   // ? style.qOptionBlue
            //   // : q?.attempted === String.fromCharCode(64 + index + 1)
            //   // ? style.qOptionRed
            //   // : style.qOption
            // }
          >
            <div
              // className={
              //   quest?.correctAnswer?.[0]?.optionNumber ===
              //     quest?.givenAnswer?.[0]?.optionNumber &&
              //   quest?.givenAnswer?.[0]?.optionNumber === opt?.optionNumber
              //     ? style.qButtonActive
              //     : style.qButtonRed
              // }
              className={
                quest?.givenAnswer?.[0]?.optionNumber === opt?.optionNumber
                  ? quest?.correctAnswer?.[0]?.optionNumber ===
                    quest?.givenAnswer?.[0]?.optionNumber
                    ? style.qButtonActive
                    : style.qButtonRed
                  : quest?.correctAnswer?.[0]?.optionNumber ===
                    opt?.optionNumber
                  ? style.qButtonBlue
                  : style.qButton
              }
              // className={
              //   q.attempted === q.correct &&
              //   q.attempted === String.fromCharCode(64 + index + 1)
              //     ? style.qButtonActive
              //     : q?.correct === String.fromCharCode(64 + index + 1)
              //     ? style.qButtonBlue
              //     : q?.attempted === String.fromCharCode(64 + index + 1)
              //     ? style.qButtonRed
              //     : style.qButton
              // }
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

      <div className={style.bottom}>
        <div
          className={style.bottomLeft}
          onClick={() => setViewSolution(!viewSolution)}
        >
          <p>Solution</p>
          <img src="/images/dropdown-icon.svg" alt="" />
        </div>
        {quest?.correctAnswer?.[0]?.optionNumber ===
        quest?.givenAnswer?.[0]?.optionNumber ? (
          <div className={`${style.bottomRight} ${style.green}`}>
            Right Answer
          </div>
        ) : (
          <div className={`${style.bottomRight} ${style.red}`}>
            Wrong Answer
          </div>
        )}
      </div>

      {viewSolution && (
        <div>
          <p className={style.solution}>{quest?.answerDescription}</p>

          {quest?.answerImage?.length ? (
            <img
              src={`${imageShowUrl}/${quest?.answerImage[0].documentKey}`}
              alt=""
              className={style.qImg}
            />
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}

function AnswerSheet() {
  const location = useLocation();
  const navigate = useNavigate();
  const { studentMcqTestsetExamResult, studentMcqTestsetExamResultRefetch } =
    useStudentMcqTestsetExamResult({
      tsid: location.state.tsid,
      skip: !location.state.tsid,
    });

  React.useEffect(() => {
    if (location.state.tsid) studentMcqTestsetExamResultRefetch();
  }, [location.state.tsid, studentMcqTestsetExamResultRefetch]);

  // console.info(
  //   "THis ssdfss",
  //   studentMcqTestsetExamResult?.studentTestSet?.questions
  // );
  const onClose = () => {
    navigate(-1);
  };
  return (
    <>
      <div className={style.studentMCQTop}>
        <h6 className={style.examName}>Test View</h6>
        <img
          className={style.examTime}
          src="/images/close-post-icon.svg"
          alt=""
          onClick={onClose}
        />
      </div>
      <div className={style.studentMCQBody}>
        {studentMcqTestsetExamResult?.studentTestSet?.questions?.map(
          (quest, index) => (
            <EachQuestion quest={quest} index={index} key={quest?._id} />
          )
        )}
      </div>
    </>
  );
}

export default AnswerSheet;
