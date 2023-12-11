import React from "react";
import style from "./InputForm.module.css";
const InputForm = ({ id, labelText, type, placeholder, value, onChange }) => {
  return (
    <div className={style.labelContainer}>
      <div className={style.label}>
        <label htmlFor={id}>{labelText}</label>
      </div>
      <div className={style.inputBox}>
        <input
          id={id}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default InputForm;
