import React from "react";
import { useTranslation } from "react-i18next";
import style from "./JoinForm.module.css";
import CustomTimePicker from "../../../Custom/TimePicker/TimePicker";

const JoinFormTimePicker = ({
  labelText,
  name,
  value,
  onChange,
  placeholder,
  errorShow,
  customStyleContainer,
  customStyleLabel,
  customStyleInput,
  disabled,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={style.join_form_container}
      style={{ ...customStyleContainer }}
    >
      {labelText && (
        <label
          className={style.join_form_label}
          htmlFor={name}
          style={{ ...customStyleLabel }}
        >
          {labelText}{" "}
          {errorShow && (
            <span style={{ color: "red", marginLeft: "15px" }}>
              * {t("form_require_label")}
            </span>
          )}
        </label>
      )}

      <CustomTimePicker />
    </div>
  );
};

export default JoinFormTimePicker;
