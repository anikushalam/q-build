import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { InputDateWithoutIcon } from "../Custom/Input/InputDateField";
import { imageShowUrl2 } from "../services/BaseUrl";
import { FileNotUpload } from "../validation/Snackbar";
import style from "./OpenVacanciesForm.module.css";
import SelectOptions from "./SelectOptions";
import { checkPrevDate } from "../Functions/timeComparison/prevTimeComparision";
import DisabledButton from "../Custom/Button/DisabledButton";
import { TextInput } from "../Authentication/Auth_New_Flow/InputWithoutIcon/InputWithoutIcon";
import { useDispatch, useSelector } from "react-redux";
import { useScheduleInterview } from "../hooks/member_tab/career-api";
import QLoader from "../Loader/QLoader";
import { careerChangeAction } from "../redux/store/career-slice";

function InterviewForm({ setStatus }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const [scheduleInterview] = useScheduleInterview();
  const careerId = useSelector((state) => state.careerChange);
  const [dateInput, setDateInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [interviewData, setInterviewData] = useState({
    date: "",
    interviewType: "",
    time: "",
    place: "",
    instructions: "",
  });
  const onDateFunction = (val) => {
    const dobCorrect = checkPrevDate(val);

    if (dobCorrect[0]) {
      setDateInput(dobCorrect[1]);
      setInterviewData({
        ...interviewData,
        date: dobCorrect[1],
      });
    } else {
      setNotificationState({
        msg: "You cannot select upcoming date",
        run: true,
      });
    }
  };

  const textArea = document.querySelector("textarea");

  textArea?.addEventListener("keyup", (e) => {
    textArea.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textArea.style.height = `${scHeight}px`;
  });

  const handleSchedule = () => {
    setDisabled(true);
    if (interviewData.interviewType === "Virtual Interview") {
      scheduleInterview({
        acid: careerId.acid,
        applyData: {
          interview_type: interviewData.interviewType,
          interview_date: interviewData.date,
          interview_time: interviewData.time,
          interview_link: interviewData.place,
          // interview_place: interviewData.place,
          interview_guidelines: interviewData.instructions,
        },
      })
        .then((res) => {
          setDisabled(false);
          dispatch(
            careerChangeAction.careerQuery({
              acid: careerId?.acid,
              vid: careerId?.vid,
              lcid: careerId?.lcid,
            })
          );
          setStatus("vacancyDetail");
        })
        .catch((err) => {
          setDisabled(false);
        });
    } else {
      scheduleInterview({
        acid: careerId.acid,
        applyData: {
          interview_type: interviewData.interviewType,
          interview_date: interviewData.date,
          interview_time: interviewData.time,
          interview_place: interviewData.place,
          interview_guidelines: interviewData.instructions,
        },
      })
        .then((res) => {
          setDisabled(false);
          console.info(res.data);

          setStatus("vacancyDetail");
        })
        .catch((err) => {
          setDisabled(false);
        });
    }
  };

  return (
    <div className={style.openVacForm}>
      <div className={`${style.peventlefttop} ${style.peventlefttopflexleft}`}>
        <img src="/images/back.svg" alt="back" onClick={() => setStatus("")} />
        {t("schedule_interview_")}
      </div>
      <div className={style.peventleftbody}>
        <div className={style.peventinputContainer}>
          <h3 className={style.input_label}>{t("interview_type")}</h3>

          <div
            className={
              isOpen
                ? `${style.formselectactive} ${style.formselect}`
                : style.formselect
            }
            onClick={() => setIsOpen(!isOpen)}
          >
            {interviewData.interviewType &&
            interviewData.interviewType !== "" ? (
              <h6 className={style.genderh} onClick={() => setIsOpen(true)}>
                {interviewData.interviewType}
              </h6>
            ) : (
              <h6
                className={`${style.genderplaceholder} ${style.genderh}`}
                onClick={() => setIsOpen(true)}
              >
                {t("plz_interview_type")}
              </h6>
            )}

            {isOpen ? (
              <img
                className={`${style.updownIcon} ${style.downIcon}`}
                src={`${imageShowUrl2}/up-triangle-icon.svg`}
                alt=""
              />
            ) : (
              <img
                className={style.upIcon}
                src={`${imageShowUrl2}/downn-icon.svg`}
                alt=""
              />
            )}
            <SelectOptions
              open={isOpen}
              onClose={() => setIsOpen(false)}
              setInterviewData={setInterviewData}
              interviewData={interviewData}
              status="interview"
            />
          </div>
        </div>

        <div className={style.peventinputContainer}>
          <InputDateWithoutIcon
            customStyleInput={{
              width: "100%",
              height: "2.2rem",
              padding: "1rem 0.5rem",
            }}
            datePickerPosition={{
              top: "-1rem",
              left: "0",
              borderRadius: "0.375rem",
              paddingBottom: "0",
            }}
            dateItemStyle={{
              padding: "0.25rem",
            }}
            iconStyle={{
              position: "absolute",
              right: "0.9rem",
              bottom: "0.6rem",
              height: "1rem",
            }}
            range={false}
            label={t("select_date_")}
            placeholder={t("plz_select_date_")}
            dateInput={dateInput}
            setDateInput={onDateFunction}
          />
        </div>

        <div className={style.peventinputContainer}>
          <TextInput
            type="time"
            label={t("select_time")}
            placeholder={t("plz_select_time")}
            value={interviewData.time}
            handleChange={(e) =>
              setInterviewData({
                ...interviewData,
                time: e.target.value,
              })
            }
            customStyleInput={{
              width: "100%",
              padding: "0.6rem",
            }}
          />
        </div>

        {interviewData.interviewType === "In Person Interview" ? (
          <div className={style.peventinputContainer}>
            <TextInput
              type="text"
              label={t("interview_place_link")}
              placeholder={t("interview_place_plz")}
              value={interviewData.place}
              handleChange={(e) =>
                setInterviewData({
                  ...interviewData,
                  place: e.target.value,
                })
              }
              customStyleInput={{
                width: "100%",
                padding: "0.6rem",
              }}
            />
          </div>
        ) : (
          <div className={style.peventinputContainer}>
            <TextInput
              type="text"
              label={t("interview_link")}
              placeholder={t("interview_link_plz")}
              value={interviewData.place}
              handleChange={(e) =>
                setInterviewData({
                  ...interviewData,
                  place: e.target.value,
                })
              }
              customStyleInput={{
                width: "100%",
                padding: "0.6rem",
              }}
            />
          </div>
        )}

        <div className={style.peventinputContainer}>
          <h6 className={style.input_label}>
            {t("interview_instruction_optional")}
          </h6>
          <textarea
            className={style.pollTextarea}
            id="pollTextArea"
            type="text"
            required
            // maxlength="140"
            placeholder={t("interview_instruction_provide")}
            value={interviewData.instructions}
            onChange={(e) =>
              setInterviewData({
                ...interviewData,
                instructions: e.target.value,
              })
            }
          />
        </div>

        {interviewData.interviewType !== "" &&
        interviewData.date !== "" &&
        interviewData.time !== "" ? (
          <div
            className={style.button_main}
            style={{
              marginTop: "2rem",
              width: "100%",
              cursor: "pointer",
            }}
            onClick={handleSchedule}
          >
            <span>{t("schedule_")}</span>

            {/* {disabled && (
                  <div style={{ marginTop: "0.7vw" }}>
                    <LoaderButton />
                  </div>
                )} */}
          </div>
        ) : (
          <DisabledButton
            buttonText={t("schedule_")}
            customStyleButton={{ marginTop: "2rem", width: "100%" }}
          />
        )}

        {notificationState.run && (
          <FileNotUpload
            msg={notificationState.msg}
            run={notificationState.run}
            setRun={() => setNotificationState({ msg: "", run: false })}
            postiton="bottom"
            type="error"
          />
        )}
      </div>
      {disabled && <QLoader />}
    </div>
  );
}
export default InterviewForm;
