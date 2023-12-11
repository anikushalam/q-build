import React from "react";
import style from "../CertificateDetail.module.css";
import { useTranslation } from "react-i18next";

const MODAL_STYLES = {
  position: "absolute",
  left: "0",
  top: "3.2vw",
  zIndex: 10,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  zIndex: 10,
};

const SelectOption = ({ onClose, setLeavingData, status }) => {
  const { t } = useTranslation();
  const behavioural = [
    t("excellent"),
    t("very_good"),
    t("good"),
    t("bad"),
    t("very_bad"),
  ];
  const progressLevel = [t("beginer"), t("intermediate"), t("advanced")];

  const onBehaviourHandler = (value) => {
    setLeavingData((previous) => ({
      ...previous,
      behaviour: value,
    }));
    onClose();
  };
  const onProgressLevelHandler = (value) => {
    setLeavingData((previous) => ({
      ...previous,
      study: value,
    }));
    onClose();
  };
  return (
    <>
      <div>
        <div onClick={onClose} style={OVERLAY_STYLES} />
        <div style={MODAL_STYLES} className={style.options}>
          {status === "behaviour" &&
            behavioural?.map((behav, index) => (
              <div
                key={index}
                className={style.option}
                onClick={() => onBehaviourHandler(behav)}
              >
                {behav}
              </div>
            ))}
          {status === "progress" &&
            progressLevel?.map((level, index) => (
              <div
                key={index}
                className={style.option}
                onClick={() => onProgressLevelHandler(level)}
              >
                {level}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SelectOption;
