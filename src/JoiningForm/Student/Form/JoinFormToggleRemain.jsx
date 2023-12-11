import React from "react";
import { useTranslation } from "react-i18next";
import style from "./JoinForm.module.css";
const JoinFormToggleRemain = ({
  labelText,
  name,
  value,
  onChange,
  customStyleContainer,
  customStyleLabel,
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
        {labelText}
      </label>
      <div className={style.join_form_file_container}>
        <label
          className={`${style.join_form_yes} ${
            value && style.join_form_active_background
          }`}
          onClick={onChange}
        >
          {t("yes")}
        </label>
        <label
          className={`${style.join_form_no} ${
            !value && style.join_form_active_background
          }`}
          onClick={onChange}
        >
          {t("no")}
        </label>
      </div>
    </div>
  );
};

export default JoinFormToggleRemain;
