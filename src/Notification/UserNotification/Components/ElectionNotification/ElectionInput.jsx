import React from "react";
import style from "../../../../Profile/Institute/Pages/EditHead/Input.module.css";

const ElectionInput = ({
  id,
  labelText,
  type,
  placeholder,
  value,
  onChange,
  customStyle,
}) => {
  return (
    <div className={style.labelContainer} style={{ ...customStyle }}>
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

export default ElectionInput;
