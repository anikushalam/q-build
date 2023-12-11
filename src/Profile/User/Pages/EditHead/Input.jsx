import React from "react";
import style from "./Input.module.css";
const Input = ({ id, labelText, type, placeholder, value, onChange }) => {
  return (
    <div className={style.labelContainer}>
      <div className={style.label}>
        <label htmlFor={id}>{labelText}</label>
      </div>
      <div className={style.inputBox}>
        {id !== "gender" ? (
          <input
            id={id}
            type={type}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
          />
        ) : (
          <select
            id={id}
            required
            aria-label={placeholder}
            value={value}
            onChange={onChange}
          >
            <option disabled selected>
              {placeholder}
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        )}
      </div>
    </div>
  );
};

export default Input;
