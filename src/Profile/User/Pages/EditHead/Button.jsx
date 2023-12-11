import React from "react";
import LoaderButton from "../../../../Loader/LoaderButton";
import style from "./Button.module.css";
const Button = ({ buttonText, submitHandler, disabled }) => {
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

export default Button;
