import React from "react";
import { useTranslation } from "react-i18next";
import style from "./JoinForm.module.css";

const JoinFormSelect = ({
  selectLabel,
  value,
  name,
  onChange,
  selectedValue,
  options,
  optionsValue,
  errorShow,
  customStyleContainer,
  customStyleLabel,
  customStyleInput,
  disabled,
  isNotTranslation,
  openAs,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={style.join_form_container}
      style={{ ...customStyleContainer }}
    >
      <p
        className={style.join_form_select_paragraph}
        style={{ ...customStyleLabel }}
      >
        {selectLabel}{" "}
        {errorShow && (
          <span style={{ color: "red", marginLeft: "15px" }}>
            * {t("form_require_label")}
          </span>
        )}
      </p>
      {/* optionsValue[`${opt?.keys}`] ||  */}
      <select
        className={style.join_form_select}
        value={value}
        onChange={onChange}
        name={name}
        disabled={disabled}
        style={{ ...customStyleInput }}
      >
        <option selected>{selectedValue}</option>
        {isNotTranslation
          ? options?.map((opt, index) => (
              <option key={index} value={opt}>
                {opt}
              </option>
            ))
          : openAs === "academicSiteInfo"
          ? options?.map((opt, index) => (
              <option key={index} value={opt?._id}>
                {`${opt?.staffFirstName || ""} ${
                  opt?.staffMiddleName ? opt?.staffMiddleName : ""
                } ${opt?.staffLastName || ""}`}
              </option>
            ))
          : options?.map((opt, index) => (
              <option
                key={index}
                value={optionsValue ? optionsValue[opt?.keys] : opt}
              >
                {t(opt?.keys)}
              </option>
            ))}
      </select>
    </div>
  );
};

export default JoinFormSelect;
