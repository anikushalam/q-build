import React from "react";
import { useTranslation } from "react-i18next";
import style from "./JoinForm.module.css";

const JoinFormTextArea = ({
  labelText,
  name,
  type,
  value,
  onChange,
  placeholder,
  errorShow,
  customStyleContainer,
  disabled,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={style.join_form_container}
      style={{ ...customStyleContainer }}
    >
      <label className={style.join_form_label} htmlFor={name}>
        {labelText}{" "}
        {errorShow && (
          <span style={{ color: "red", marginLeft: "15px" }}>
            * {t("form_require_label")}
          </span>
        )}
      </label>
      <textarea
        className={style.join_form_text_area}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        rows={value ? value?.split("\n")?.length + 3 : 1}
        disabled={disabled}
      />
    </div>
  );
};

export default JoinFormTextArea;
