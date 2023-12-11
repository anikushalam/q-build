import React from "react";
import style from "./JoinForm.module.css";

const JoinFormInputView = ({
  labelText,
  value,
  customStyleContainer,
  customStyleLabel,
  customStyleValue,
}) => {
  return (
    <div
      className={style.join_form_container_view}
      style={{ ...customStyleContainer }}
    >
      <label
        className={style.join_form_label_view}
        style={{ ...customStyleLabel }}
      >
        {labelText}
      </label>
      <h6
        className={style.join_form_input_view}
        style={{ ...customStyleValue }}
      >
        {value}
      </h6>
    </div>
  );
};

export default JoinFormInputView;
