import React from "react";
import style from "./JoinForm.module.css";
import { useTranslation } from "react-i18next";
const JoinFormFile = ({
  labelText,
  name,
  value,
  onChange,
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
      <label className={style.join_form_label}>
        {labelText}
        {errorShow && (
          <span style={{ color: "red", marginLeft: "15px" }}>
            * {t("form_require_label")}
          </span>
        )}
      </label>
      <div className={style.join_form_file_container}>
        <label
          className={
            value
              ? `${style.join_form_file_choose} ${style.join_form_active_background}`
              : style.join_form_file_choose
          }
          htmlFor={name}
        >
          {t(value !== "" ? "file_chosen" : "chose_file")}
        </label>
        <label className={style.join_form_file_choosen} htmlFor={name}>
          {value !== "" ? value?.originalName : t("no_file_chosen")}
        </label>
      </div>
      <input
        type="file"
        name={name}
        id={name}
        style={{ display: "none" }}
        onChange={onChange}
        disabled={disabled ? disabled : false}
      />
    </div>
  );
};

export default JoinFormFile;
