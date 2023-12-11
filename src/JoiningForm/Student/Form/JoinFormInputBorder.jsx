import React from "react";
import style from "./JoinForm.module.css";

const JoinFormInputBorder = ({
  name,
  type,
  value,
  onChange,
  placeholder,
  errorShow,
  customStyleContainer,
  customStyleInput,
  inputLength,
  reAccount,
  disabled,
}) => {
  return (
    <div
      className={style.join_form_container}
      style={{ ...customStyleContainer }}
    >
      {type === "tel" ? (
        <input
          className={style.join_form_input}
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          maxLength={inputLength ?? 100}
          disabled={disabled}
          style={{
            ...customStyleInput,
            borderColor: errorShow || reAccount ? "#ff0000" : "inherit",
          }}
        />
      ) : (
        <input
          className={style.join_form_input}
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          style={{
            ...customStyleInput,
            borderColor: errorShow || reAccount ? "#ff0000" : "inherit",
          }}
        />
      )}
    </div>
  );
};

export default JoinFormInputBorder;
