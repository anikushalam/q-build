import React from "react";
import style from "./Feedbackform.module.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import DisabledButton from "../../../../../Custom/Button/DisabledButton";
import { useCreatePoll } from "../../../../../hooks/member_tab/alumni-api";
import { TextInput } from "../../../../../Authentication/Auth_New_Flow/InputWithoutIcon/InputWithoutIcon";
import QLoader from "../../../../../Loader/QLoader";

function Feedbackform({ aid, setForm, onRefetchWhenPollCreate }) {
  const { t } = useTranslation();
  const [createPoll] = useCreatePoll();
  const [disabled, setDisabled] = useState(false);
  const [optionCount, setOptionCount] = useState(2);
  const [pollAnswer, setPollAnswer] = useState({
    op1: "",
    op2: "",
    op3: "",
    op4: "",
    op5: "",
  });
  const [feedbackdata, setFeedback] = useState({
    poll_question: "",
    duration_date: "",
    duration_time: "",
    trend_category: "",
    day: "",
    pollAnswer: [
      {
        content: "",
      },
      {
        content: "",
      },
    ],
  });
  const handleAddOption = (e) => {
    if (optionCount < 5) {
      setOptionCount(optionCount + 1);
    }
  };

  const handleCreateEvent = () => {
    setDisabled(true);

    let pollAnswerr = [
      {
        content: pollAnswer.op1,
      },
      {
        content: pollAnswer.op2,
      },
    ];

    if (pollAnswer.op3 !== "") {
      pollAnswerr.push({
        content: pollAnswer.op3,
      });
    }
    if (pollAnswer.op4 !== "") {
      pollAnswerr.push({
        content: pollAnswer.op4,
      });
    }
    if (pollAnswer.op5 !== "") {
      pollAnswerr.push({
        content: pollAnswer.op5,
      });
    }

    createPoll({
      aid: aid,
      // pollData: feedbackdata,
      pollData: {
        poll_question: feedbackdata.poll_question,
        duration_date: feedbackdata.duration_date,
        duration_time: feedbackdata.duration_time,
        trend_category: feedbackdata.trend_category,
        day: feedbackdata.day,
        pollAnswer: pollAnswerr,
      },
    })
      .then((res) => {
        setDisabled(false);

        onRefetchWhenPollCreate();
        setForm(false);
      })
      .catch((err) => {
        setDisabled(false);
      });
  };

  return (
    <div className={style.prominentform}>
      <div className={style.addbooktop}>
        <img src="/images/back.svg" onClick={() => setForm(false)} />
        <h6>{t("add_question_")}</h6>
        <div />
      </div>

      <div className={style.addbookform}>
        <div className={style.peventinputContainer}>
          <TextInput
            type="text"
            label={t("add_question")}
            placeholder={t("write_your_question")}
            value={feedbackdata.poll_question}
            handleChange={(e) =>
              setFeedback({
                ...feedbackdata,
                poll_question: e.target.value,
              })
            }
            customStyleInput={{
              width: "100%",
              padding: "0.6rem",
            }}
          />
        </div>

        <div className={style.peventinputContainer}>
          <TextInput
            type="text"
            label={t("option1")}
            placeholder={t("add_first_option")}
            value={pollAnswer.op1}
            handleChange={(e) =>
              setPollAnswer({
                ...pollAnswer,
                op1: e.target.value,
              })
            }
            customStyleInput={{
              width: "100%",
              padding: "0.6rem",
            }}
          />
        </div>

        <div className={style.peventinputContainer}>
          <TextInput
            type="text"
            label={t("option2")}
            placeholder={t("add_second_option")}
            value={pollAnswer.op2}
            handleChange={(e) =>
              setPollAnswer({
                ...pollAnswer,
                op2: e.target.value,
              })
            }
            customStyleInput={{
              width: "100%",
              padding: "0.6rem",
            }}
          />
        </div>

        {optionCount >= 3 && (
          <div className={style.peventinputContainer}>
            <TextInput
              type="text"
              label={t("option3")}
              placeholder={t("add_third_option")}
              value={pollAnswer.op3}
              handleChange={(e) =>
                setPollAnswer({
                  ...pollAnswer,
                  op3: e.target.value,
                })
              }
              customStyleInput={{
                width: "100%",
                padding: "0.6rem",
              }}
            />
          </div>
        )}

        {optionCount >= 4 && (
          <div className={style.peventinputContainer}>
            <TextInput
              type="text"
              label={t("option4")}
              placeholder={t("add_fourth_option")}
              value={pollAnswer.op4}
              handleChange={(e) =>
                setPollAnswer({
                  ...pollAnswer,
                  op4: e.target.value,
                })
              }
              customStyleInput={{
                width: "100%",
                padding: "0.6rem",
              }}
            />
          </div>
        )}

        {optionCount === 5 && (
          <div className={style.peventinputContainer}>
            <TextInput
              type="text"
              label={t("option5")}
              placeholder={t("add_fifth_option")}
              value={pollAnswer.op5}
              handleChange={(e) =>
                setPollAnswer({
                  ...pollAnswer,
                  op5: e.target.value,
                })
              }
              customStyleInput={{
                width: "100%",
                padding: "0.6rem",
              }}
            />
          </div>
        )}

        {optionCount < 5 && (
          <div className={style.addbtn}>
            <img
              src="/images/alumni/addbtn.svg"
              alt="add"
              onClick={handleAddOption}
            />
          </div>
        )}

        {feedbackdata.poll_question !== "" &&
        pollAnswer.op1 !== "" &&
        pollAnswer.op2 !== "" ? (
          <div
            className={style.button_main}
            style={{
              marginTop: "2rem",
              width: "100%",
              cursor: "pointer",
            }}
            onClick={handleCreateEvent}
          >
            <span>{t("add_question_")}</span>

            {/* {disabled && (
                  <div style={{ marginTop: "0.7vw" }}>
                    <LoaderButton />
                  </div>
                )} */}
          </div>
        ) : (
          <DisabledButton
            buttonText={t("add_question_")}
            customStyleButton={{ marginTop: "2rem", width: "100%" }}
          />
        )}
      </div>

      {disabled && <QLoader />}
    </div>
  );
}

export default Feedbackform;
