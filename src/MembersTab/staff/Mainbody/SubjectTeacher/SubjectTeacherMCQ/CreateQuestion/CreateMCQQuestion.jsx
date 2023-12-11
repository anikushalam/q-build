import React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  useSubjectMcqCreateQuestion,
  useSubjectMcqQuestionCount,
} from "../../../../../../hooks/member_tab/subject-api";
import LoaderButton from "../../../../../../Loader/LoaderButton";
import QLoader from "../../../../../../Loader/QLoader";
import style from "./CreateMCQQuestion.module.css";
import DragAndDrop from "./DragAndDrop";

function CreateMCQQuestion({
  setTestIndex,
  smid,
  cmid,
  setCreateTestSet,
  setSelectedQuestion,
}) {
  const { t } = useTranslation();
  const { subjectMcqQuestionCount, subjectMcqQuestionCountRefetch } =
    useSubjectMcqQuestionCount({
      data: {
        smid: smid,
        cmid: cmid,
      },
      skip: !smid && !cmid,
    });

  const [createQuestion, setCreateQuestion] = useState({
    questionSNO: subjectMcqQuestionCount?.subjectMaster?.questionCount
      ? subjectMcqQuestionCount?.subjectMaster?.questionCount + 1 > 9
        ? subjectMcqQuestionCount?.subjectMaster?.questionCount + 1
        : `0${subjectMcqQuestionCount?.subjectMaster?.questionCount + 1}`
      : "01",
    questionNumber: 1,
    questionDescription: "",
    options: [
      {
        option: "",
        optionNumber: "01",
        image: "",
      },
      {
        option: "",
        optionNumber: "02",
        image: "",
      },
    ],
    correctAnswer: [],
    answerDescription: "",
  });

  const [questionImage, setQuestionImage] = useState(null);
  const [answerImage, setAnswerImage] = useState(null);
  const [questionImageUrl, setQuestionImageUrl] = useState(null);
  const [answerImageUrl, setAnswerImageUrl] = useState(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (smid && cmid) subjectMcqQuestionCountRefetch();
  }, [smid, cmid, subjectMcqQuestionCountRefetch]);

  useEffect(() => {
    if (subjectMcqQuestionCount?.subjectMaster?.questionCount)
      setCreateQuestion((prev) => ({
        ...prev,
        questionSNO:
          subjectMcqQuestionCount?.subjectMaster?.questionCount + 1 > 9
            ? subjectMcqQuestionCount?.subjectMaster?.questionCount + 1
            : `0${subjectMcqQuestionCount?.subjectMaster?.questionCount + 1}`,
      }));
  }, [subjectMcqQuestionCount?.subjectMaster?.questionCount]);
  // console.info("THis is coysfsdnvfsn", subjectMcqQuestionCount);

  const [subjectMcqCreateQuestion] = useSubjectMcqCreateQuestion();

  const textarea = document.querySelector("textarea");
  textarea?.addEventListener("keyup", (e) => {
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;

    textarea.style.height = `${scHeight}px`;
  });

  const handleQuestionImgUpload = (file) => {
    setQuestionImageUrl(URL.createObjectURL(file));
    setQuestionImage(file);
  };

  const handleInc = () => {
    setCreateQuestion({
      ...createQuestion,
      questionNumber: createQuestion.questionNumber + 1,
    });
  };

  const handleDec = () => {
    if (createQuestion.questionNumber === 0) {
      setCreateQuestion({ ...createQuestion, questionNumber: 0 });
    } else {
      setCreateQuestion({
        ...createQuestion,
        questionNumber: createQuestion.questionNumber - 1,
      });
    }
  };

  const handleSolutionImgUpload = (file) => {
    setAnswerImageUrl(URL.createObjectURL(file));
    setAnswerImage(file);
  };

  const onAddQuestionOption = () => {
    const optionLength = createQuestion.options.length;
    if (optionLength < 5)
      setCreateQuestion((prev) => ({
        ...prev,
        options: [
          ...prev.options,
          {
            option: "",
            optionNumber: `0${optionLength + 1}`,
            image: "",
          },
        ],
      }));
  };
  const onOptionChange = (index, e) => {
    const values = [...createQuestion.options];
    values[index][e.target.name] = e.target.value;
    setCreateQuestion({ ...createQuestion, options: values });
  };
  const onCorrectMark = (val) => {
    setCreateQuestion({ ...createQuestion, correctAnswer: [val] });
  };
  const onCreateQuestion = () => {
    // console.info("this is all question adta", createQuestion);
    setDisabled(true);
    const formDataType = new FormData();
    formDataType.append("questionSNO", createQuestion.questionSNO);
    formDataType.append("questionNumber", createQuestion.questionNumber);
    formDataType.append(
      "questionDescription",
      createQuestion.questionDescription
    );
    formDataType.append("options", JSON.stringify(createQuestion.options));
    formDataType.append(
      "correctAnswer",
      JSON.stringify(createQuestion.correctAnswer)
    );
    formDataType.append("answerDescription", createQuestion.answerDescription);
    formDataType.append("questionImage", questionImage);
    formDataType.append("answerImage", answerImage);
    subjectMcqCreateQuestion({
      smid: smid,
      cmid: cmid,
      createQuestion: formDataType,
    })
      .then((res) => {
        // console.info(res);
        if (res.data?.question) {
          setDisabled(false);
          setCreateTestSet((prevState) => ({
            ...prevState,
            testTotalQuestion: prevState.testTotalQuestion + 1,
            testTotalNumber:
              prevState.testTotalNumber + res.data.question?.questionNumber,
            questions: [...prevState.questions, res.data.question?._id],
          }));
          setSelectedQuestion((prev) => [...prev, res.data.question]);
          setTestIndex(4);
        }
      })
      .catch({});
  };
  return (
    <>
      <div className={style.createMCQQuestionTop}>
        <img
          src="/images/members/arrow-left.svg"
          alt=""
          onClick={() => {
            setTestIndex(2);
          }}
        />
        <h6>{t("create_question")}</h6>
        <img
          className={style.createMCQQuestionTopMenu}
          src="/images/menu-dots-dark-icon.svg"
          alt=""
        />
      </div>
      <div className={style.createMCQQuestionBody}>
        <div className={style.question_with_drop}>
          <div style={{ width: "90%" }}>
            <h6>
              {t("question")} {createQuestion.questionSNO}.
            </h6>
            <textarea
              className={style.postTextareaa}
              type="text"
              name="question"
              placeholder={t("write_down_the_question")}
              value={createQuestion.questionDescription}
              onChange={(e) =>
                setCreateQuestion({
                  ...createQuestion,
                  questionDescription: e.target.value,
                })
              }
              style={{ width: "95%" }}
            />
            {/* <input
              type="text"
              placeholder="Write down the question"
              value={createQuestion.questionDescription}
              onChange={(e) =>
                setCreateQuestion({
                  ...createQuestion,
                  questionDescription: e.target.value,
                })
              }
            /> */}
          </div>
          <DragAndDrop
            imageContain={handleQuestionImgUpload}
            showImage={questionImageUrl}
          />
        </div>

        <div className={style.option_header}>
          <h6>{t("options")}</h6>
        </div>
        {createQuestion.options.map((opt, index) => (
          <div key={index} className={style.option_each}>
            <span className={style.option_each_span}>
              {index === 0
                ? "A"
                : index === 1
                ? "B"
                : index === 2
                ? "C"
                : index === 3
                ? "D"
                : "E"}
              .
            </span>
            <input
              className={style.optionInput}
              type="text"
              placeholder={
                index === 0
                  ? t("first_option")
                  : index === 1
                  ? t("second_option")
                  : index === 2
                  ? t("third_option")
                  : index === 3
                  ? t("fourth_option")
                  : t("fifth_option")
              }
              value={opt.option}
              name="option"
              onChange={(e) => onOptionChange(index, e)}
            />
          </div>
        ))}
        <div className={style.option_with_weight}>
          <p onClick={onAddQuestionOption}>{t("add_option")}</p>
          <div
            className={style.weightage}
            style={{ marginTop: "2vw", marginBottom: "2vw" }}
          >
            <h6> {t("weightage_of_question")} :</h6>
            <div className={style.weightage}>
              <div className={`${style.wbox}`} onClick={handleInc}>
                <img src="/images/members/up-icon.svg" alt="" />
              </div>
              <h6>{createQuestion.questionNumber}</h6>
              <div className={`${style.wbox}`} onClick={handleDec}>
                <img src="/images/members/down-icon.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <h6>{t("select_correct_answer")}</h6>
        <div className={style.singleOption}>
          {createQuestion.options?.map((opt, index) => (
            <div
              onClick={() => onCorrectMark(opt)}
              className={
                opt.optionNumber ===
                createQuestion.correctAnswer?.[0]?.optionNumber
                  ? `${style.op} ${style.opcorrect}`
                  : style.op
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
          ))}
        </div>

        <h6>{t("add_solution")}</h6>

        <div className={style.question_with_drop}>
          <textarea
            className={style.postTextareaa}
            type="text"
            required
            // ref={announcementDescriptionRef}
            name="CreateInsPost"
            // placeholder="Enter Reason"
            value={createQuestion.answerDescription}
            onChange={(e) =>
              setCreateQuestion({
                ...createQuestion,
                answerDescription: e.target.value,
              })
            }
            style={{ width: "80%" }}
          />
          <DragAndDrop
            imageContain={handleSolutionImgUpload}
            showImage={answerImageUrl}
          />
        </div>
        {/* <div className={style.createButton} onClick={onCreateQuestion}>
          Create Question
        </div> */}
        <button
          className={style.createButton}
          onClick={onCreateQuestion}
          disabled={disabled}
        >
          <span>{t("create_question")}</span>
          {disabled && (
            <div>
              <LoaderButton />
            </div>
          )}
        </button>
        {disabled && <QLoader />}
      </div>
    </>
  );
}

export default CreateMCQQuestion;
