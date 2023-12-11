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

function SelectOptions({ open, onClose, setFormData, formData }) {
  const langs = [
    "College/Polytechnic",
    "School",
    "Coaching/Tuition",
    "Online Educating Institute",
    "Content Creator",
    "Other",
  ];
  const { t } = useTranslation();

  if (!open) return null;
  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className={style.options}>
        {langs.map((lang, index) => (
          <div
            className={style.option}
            key={index}
            onClick={() => {
              setFormData({
                ...formData,
                insType: lang,
              });
              onClose();
            }}
          >
            {lang}
          </div>
        ))}
      </div>
    </>
  );
}

export default SelectOptions;
