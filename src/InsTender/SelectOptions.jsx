import React from "react";
import style from "./SelectOptions.module.css";
import { useTranslation } from "react-i18next";

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  zIndex: 10,
};

const MODAL_STYLES = {
  position: "absolute",
  left: "0",
  top: "2.1rem",
  zIndex: 10,
};

function SelectOptions({
  open,
  onClose,
  setVacancyData,
  vacancyData,
  setInterviewData,
  interviewData,
  status,
}) {
  const options = ["Administrative Job", "Teaching Job", "Other"];
  const options2 = ["Virtual Interview", "In Person Interview"];
  const { t } = useTranslation();

  if (!open) return null;
  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      {status === "interview" ? (
        <div style={MODAL_STYLES} className={style.options}>
          {options2.map((option, index) => (
            <div
              className={style.option}
              key={index}
              onClick={() => {
                setInterviewData({
                  ...interviewData,
                  interviewType: option,
                });
                onClose();
              }}
            >
              {option === "Virtual Interview"
                ? t("virtual_interview")
                : t("in_person_interview")}
            </div>
          ))}
        </div>
      ) : (
        <div style={MODAL_STYLES} className={style.options}>
          {options.map((option, index) => (
            <div
              className={style.option}
              key={index}
              onClick={() => {
                setVacancyData({
                  ...vacancyData,
                  jobType: option,
                });
                onClose();
              }}
            >
              {option === "Administrative Job"
                ? t("admin_job")
                : option === "Teaching Job"
                ? t("teaching_job")
                : t("other")}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SelectOptions;
