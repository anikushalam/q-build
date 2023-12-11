import React from "react";
import { useTranslation } from "react-i18next";
import style from "./JoinForm.module.css";

const JoinFormAdmissionAmountSelect = ({
  selectLabel,
  value,
  name,
  onChange,
  selectedValue,
  options,
  optionsValue,
  errorShow,
  customStyleContainer,
  showingAmount,
}) => {
  const { t } = useTranslation();
  // console.info("dgfsdfndas", optionsValue);
  return (
    <div
      className={style.join_form_container}
      style={{ ...customStyleContainer }}
    >
      <p className={style.join_form_select_paragraph}>
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
      >
        <option selected>{selectedValue}</option>
        {options?.map((opt, index) => (
          <option
            key={index}
            value={optionsValue ? optionsValue[opt?.keys] : opt}
          >
            {t(opt?.keys)} Rs. {showingAmount[index]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default JoinFormAdmissionAmountSelect;
