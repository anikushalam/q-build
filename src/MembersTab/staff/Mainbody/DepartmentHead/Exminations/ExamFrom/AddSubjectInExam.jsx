import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../SeatingArrangement/SeatingArrangement.module.css";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInputView from "../../../../../../JoiningForm/Student/Form/JoinFormInputView";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import JoinFormCalender from "../../../../../../JoiningForm/Student/Form/JoinFormCalender";
import { useFileUpload } from "../../../../../../hooks/authentication-api";
import QLoader from "../../../../../../Loader/QLoader";
import JoinFormFile from "../../../../../../JoiningForm/Student/Form/JoinFormFile";
// import { withCurrentDate } from "../../../../../../Functions/timeComparison/timeComparison";

const AddSubjectInExam = ({
  onBack,
  clsName,
  subjectName,
  onGrabSubjectInfo,
  createdBy,
}) => {
  const { t } = useTranslation();
  const [subjectInfo, setSubjectInfo] = useState({
    totalMarks: "",
    date: "",
    startTime: "",
    endTime: "",
    subject_attachment: [],
  });
  const [filled, setFilled] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [oneFileUpload] = useFileUpload();

  const onSelectDate = (val) => {
    // const dobCorrect = withCurrentDate(val);
    // if (!dobCorrect) {
    setSubjectInfo((prevState) => ({
      ...prevState,
      date: val,
    }));
    // }
  };

  const onInputChange = (e) => {
    setSubjectInfo((prev) => ({
      ...prev,
      totalMarks: +e.target.value,
    }));
  };

  const onInputChangeTime = (e) => {
    setSubjectInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (obj === "subject_attachment") {
      } else {
        if (!data[obj]) errors[obj] = `${obj} is required!`;
      }
    }
    return errors;
  };

  const onAddSubjectInfo = () => {
    const validation = onValidation(subjectInfo);
    let flag = false;
    for (let errField in validation) {
      if (errField) {
        flag = true;
        break;
      }
    }
    if (flag) {
      setFilled(validation);
    } else {
      onGrabSubjectInfo(subjectInfo);
    }
  };
  const onFileUpload = (e) => {
    if (e.target.files[0]) {
      setDisabled((pre) => !pre);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      oneFileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          setDisabled((pre) => !pre);
          setSubjectInfo((prev) => ({
            ...prev,
            subject_attachment: [
              {
                documentName: e.target.files[0]?.name,
                documentKey: res.data?.imageKey,
                documentType: e.target.files[0]?.type,
              },
            ],
          }));
        })
        .catch(() => {
          setDisabled((pre) => !pre);
        });
    }
  };

  return (
    <div className={style.seating_modal}>
      <section
        className={style.seating_modal_title_left}
        style={{
          position: "relative",
        }}
      >
        <img
          src="/images/arrow-left-fees-icon.svg"
          onClick={onBack}
          alt="back"
        />
        <h6>{t("subject_details")}</h6>
        <button
          className={style.next_btn}
          title="Next"
          onClick={onAddSubjectInfo}
        >
          {t("next")}
        </button>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
        }}
      />
      {createdBy === "SUBJECT_TEACHER" ? null : (
        <>
          <JoinFormInputView labelText={t("standard")} value={clsName} />
          <JoinFormInputView
            labelText={t("subject_exam")}
            value={subjectName}
          />
        </>
      )}

      <JoinFormInput
        labelText={t("marks")}
        placeholder={t("enter_the_marks")}
        name={"totalMarks"}
        value={subjectInfo?.totalMarks}
        type={"number"}
        onChange={onInputChange}
        errorShow={filled["totalMarks"]}
      />
      <JoinFormCalender
        labelText={t("date")}
        placeholder={t("date")}
        name={"date"}
        value={subjectInfo.date}
        onDateFunction={onSelectDate}
        customStyleContainer={{
          position: "relative",
          width: "100%",
        }}
        datePickerPosition={{
          top: "-5rem",
          left: "2rem",
        }}
        errorShow={filled["date"]}
      />
      <JoinFormInput
        labelText={t("start_time")}
        name={"startTime"}
        value={subjectInfo?.startTime}
        type={"time"}
        onChange={onInputChangeTime}
        errorShow={filled["startTime"]}
      />
      <JoinFormInput
        labelText={t("end_time")}
        name={"endTime"}
        value={subjectInfo?.endTime}
        type={"time"}
        onChange={onInputChangeTime}
        errorShow={filled["endTime"]}
      />
      {createdBy === "SUBJECT_TEACHER" ? (
        <JoinFormFile
          labelText={t("upload_file")}
          name="question_file"
          value={
            subjectInfo?.subject_attachment?.length
              ? {
                  originalName:
                    subjectInfo?.subject_attachment?.[0]?.documentName,
                }
              : ""
          }
          onChange={onFileUpload}
          customStyleContainer={{
            width: "100%",
          }}
        />
      ) : null}
      {disabled && <QLoader />}
    </div>
  );
};

export default AddSubjectInExam;
