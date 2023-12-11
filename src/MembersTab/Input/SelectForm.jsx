import React from "react";
import style from "./InputForm.module.css";

const SelectForm = ({
  chooseOptions,
  selectedValue,
  onChangeValue,
  placeHolder,
  labelText,
  id,
  customStyle,
}) => {
  return (
    <div className={style.labelContainer}>
      <div className={style.label}>
        <label htmlFor={id}>{labelText}</label>
      </div>
      <div className={style.inputBox}>
        <select
          //   class="form-select"
          aria-label="Default select example"
          value={selectedValue}
          onChange={onChangeValue}
          id={id}
          style={{ ...customStyle }}
        >
          <option selected>{placeHolder}</option>
          {chooseOptions?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectForm;
