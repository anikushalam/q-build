import React from "react";
import LoaderButton from "../../Loader/LoaderButton";
import style from "./SubmitButton.module.css";
const SubmitButton = ({ buttonText, submitHandler, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={style.container}
      onClick={submitHandler}
      style={disabled ? { cursor: "none" } : { cursor: "pointer" }}
    >
      <div>{buttonText}</div>
      {disabled && <LoaderButton />}
    </button>
  );
};

export default SubmitButton;
