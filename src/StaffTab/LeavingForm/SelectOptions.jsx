import React from "react";
import style from "../../Authentication/Auth_New_Flow/SignUpForm/SelectOptions.module.css";
import { useTranslation } from "react-i18next";
import {
  casteCategory,
  religion,
  nationality,
} from "../../constant/constant_value";

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

function SelectOptions({ open, onClose, setleavingData, leavingData, status }) {
  const { t } = useTranslation();
  const behavioural = [
    t("excellent"),
    t("very_good"),
    t("good"),
    t("bad"),
    t("very_bad"),
  ];
  const progressLevel = [t("beginer"), t("intermediate"), t("advanced")];
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      {status === "caste" && (
        <div style={MODAL_STYLES} className={style.options}>
          {casteCategory.map((caste, index) => (
            <div
              className={style.option}
              onClick={() => {
                setleavingData({
                  ...leavingData,
                  castCategory: caste,
                });
                onClose();
              }}
            >
              {caste}
            </div>
          ))}
        </div>
      )}

      {status === "religon" && (
        <div style={MODAL_STYLES} className={style.options}>
          {religion.map((rel, index) => (
            <div
              className={style.option}
              onClick={() => {
                setleavingData({
                  ...leavingData,
                  religon: rel,
                });
                onClose();
              }}
            >
              {t(rel)}
            </div>
          ))}
        </div>
      )}

      {status === "nationality" && (
        <div style={MODAL_STYLES} className={style.options}>
          {nationality.map((nat, index) => (
            <div
              className={style.option}
              onClick={() => {
                setleavingData({
                  ...leavingData,
                  nationality: nat,
                });
                onClose();
              }}
            >
              {nat}
            </div>
          ))}
        </div>
      )}

      {status === "progress" && (
        <div style={MODAL_STYLES} className={style.options}>
          {progressLevel.map((progress, index) => (
            <div
              key={index}
              className={style.option}
              onClick={() => {
                setleavingData({
                  ...leavingData,
                  study: progress,
                });
                onClose();
              }}
            >
              {progress}
            </div>
          ))}
        </div>
      )}

      {status === "behaviour" && (
        <div style={MODAL_STYLES} className={style.options}>
          {behavioural.map((behave, index) => (
            <div
              key={index}
              className={style.option}
              onClick={() => {
                setleavingData({
                  ...leavingData,
                  behaviour: behave,
                });
                onClose();
              }}
            >
              {behave}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SelectOptions;

{
  /* <div
className={style.option}
onClick={() => {
  setleavingData({
    ...leavingData,
    gender: "female",
  });
  onClose();
}}
>
{t("female")}
</div>
<div
className={style.option}
onClick={() => {
  setleavingData({
    ...leavingData,
    gender: "other",
  });
  onClose();
}}
>
{t("other")}
</div> */
}
