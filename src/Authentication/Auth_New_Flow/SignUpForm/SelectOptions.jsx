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
  const { t } = useTranslation();
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className={style.options}>
        <div
          className={style.option}
          onClick={() => {
            setFormData({
              ...formData,
              gender: "male",
            });
            onClose();
          }}
        >
          {t("male")}
        </div>
        <div
          className={style.option}
          onClick={() => {
            setFormData({
              ...formData,
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
            setFormData({
              ...formData,
              gender: "other",
            });
            onClose();
          }}
        >
          {t("other")}
        </div>
      </div>
    </>
  );
}

export default SelectOptions;
