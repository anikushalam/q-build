import React from "react";
import LoaderButton from "../../Loader/LoaderButton";
import style from "./ButtonWithTypeSubmit.module.css";
const ButtonWithAction = ({
  buttonText,
  disabled,
  customStyleButton,
  customStyleButtonText,
  onAction,
  shwoLoader,
}) => {
  return (
    <button
      disabled={disabled}
      style={{ ...customStyleButton }}
      className={style.button_main}
      onClick={onAction}
    >
      <span style={{ ...customStyleButtonText }}>{buttonText}</span>
      {disabled && shwoLoader && (
        <div style={{ marginTop: "0.7vw" }}>
          <LoaderButton />
        </div>
      )}
    </button>
  );
};

export default ButtonWithAction;
