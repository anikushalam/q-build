import React from "react";
import style from "./NewEnquiryModal.module.css";
// import { useTranslation } from "react-i18next";

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

function SelectOptions({ open, onClose, onSelect }) {
  // const { t } = useTranslation();
  const gender = ["Male", "Female", "Other"];

  if (!open) return null;
  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />

      <div style={MODAL_STYLES} className={style.options}>
        {gender.map((g, index) => (
          <div
            className={style.option}
            key={index}
            // onClick={() => {
            //   setEnquireData({
            //     ...enquireData,
            //     sgender: g,
            //   });
            //   onClose();
            // }}
            onClick={() => {
              onSelect({
                target: {
                  name: "inquiry_student_gender",
                  value: g,
                },
              });
              onClose();
            }}
          >
            {g}
          </div>
        ))}
      </div>
    </>
  );
}

export default SelectOptions;
