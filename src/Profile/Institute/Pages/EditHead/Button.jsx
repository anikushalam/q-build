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
      {buttonText}
      <div
        style={{
          marginTop: "1.4vw",
          marginLeft: "1vw",
        }}
      >
        {disabled && <LoaderButton />}
      </div>
    </button>
  );
};

export default Button;
