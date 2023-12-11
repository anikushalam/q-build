import React from "react";
import style from "./ButtonWithTypeSubmit.module.css";
const ButtonWithTypeSubmit = ({
  buttonText,
  customStyleButton,
  customStyleButtonText,
}) => {
  return (
    <button style={{ ...customStyleButton }} className={style.button_disabled}>
      <span style={{ ...customStyleButtonText }}>{buttonText}</span>
    </button>
  );
};

export default ButtonWithTypeSubmit;
