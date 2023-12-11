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
  setFormData,
  formData,
  status,
  customStyleOptions,
}) {
  const langs = ["Yes", "No"];
  const { t } = useTranslation();

  const handleClick = (lang) => {
    if (status === "checklist") {
      setFormData({
        ...formData,
        event_checklist_critiria: lang,
      });
    } else if (status === "rank") {
      setFormData({
        ...formData,
        event_ranking_critiria: lang,
      });
    } else if (status === "fee") {
      setFormData({
        ...formData,
        event_fee_critiria: lang,
      });
    }
    onClose();
  };

  if (!open) return null;
  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      <div
        style={customStyleOptions ? customStyleOptions : MODAL_STYLES}
        className={style.options}
      >
        {langs.map((lang, index) => (
          <div
            className={style.option}
            key={index}
            onClick={() => handleClick(lang)}
          >
            {lang === "Yes" ? t("yes") : t("no")}
          </div>
        ))}
      </div>
    </>
  );
}

export default SelectOptions;
