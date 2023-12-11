import React from "react";
import style from "./InputTextField.module.css";
const InputTextFieldWithLabel = ({
  customInputConatiner,
  customInputLable,
  customInput,
  labelText,
  id,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div
      className={style.input_text_with_label_container}
      style={{ ...customInputConatiner }}
    >
      <label style={{ ...customInputLable }} htmlFor={id}>
        {labelText}
      </label>
      <input
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        style={{ ...customInput }}
      />
    </div>
  );
};

export default InputTextFieldWithLabel;
