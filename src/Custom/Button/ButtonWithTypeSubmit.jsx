import React from "react";
import LoaderButton from "../../Loader/LoaderButton";
import style from "./ButtonWithTypeSubmit.module.css";
const ButtonWithTypeSubmit = ({
  type,
  buttonText,
  disabled,
  customStyleButton,
  customStyleButtonText,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      style={{ ...customStyleButton }}
      className={style.button_main}
    >
      <span style={{ ...customStyleButtonText }}>{buttonText}</span>
      {disabled && (
        <div style={{ marginTop: "0.7vw" }}>
          <LoaderButton />
        </div>
      )}
    </button>
  );
};

export default ButtonWithTypeSubmit;
