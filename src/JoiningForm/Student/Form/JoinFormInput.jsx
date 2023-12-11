import React from "react";
import { useTranslation } from "react-i18next";
import style from "./JoinForm.module.css";

const JoinFormInput = ({
  labelText,
  name,
  type,
  value,
  onChange,
  placeholder,
  errorShow,
  customStyleContainer,
  customStyleLabel,
  customStyleInput,
  inputLength,
  reAccount,
  disabled,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={style.join_form_container}
      style={{ ...customStyleContainer }}
    >
      <label
        className={style.join_form_label}
        htmlFor={name}
        style={{ ...customStyleLabel }}
      >
        {labelText}{" "}
        {!reAccount && errorShow && (
          <span style={{ color: "red", marginLeft: "15px" }}>
            * {t("form_require_label")}
          </span>
        )}
        {reAccount && (
          <span style={{ color: "red", marginLeft: "15px" }}>{reAccount}</span>
        )}
      </label>
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
          style={customStyleInput}
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
          style={customStyleInput}
        />
      )}
    </div>
  );
};

export default JoinFormInput;
