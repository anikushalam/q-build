import React from "react";
import style from "./InputWithoutIcon.module.css";

function TextInput({
  importantt,
  placeholder,
  customStyleInput,
  value,
  handleChange,
  label,
  type,
  maxLength,
  name,
  // min,
}) {
  return (
    <div>
      {label && (
        <h3 className={style.input_without_icon_label}>
          {label}
          {importantt ? <span className={style.labelspan}>*</span> : ""}
        </h3>
      )}
      <input
        className={style.input_without_icon}
        style={{ ...customStyleInput }}
        type={type ? type : "text"}
        value={value}
        name={name || ""}
        // min={min && min}
        placeholder={placeholder}
        onChange={handleChange}
        maxLength={maxLength ? maxLength : ""}
      />
    </div>
  );
}

function ReadOnlyInput({
  customStyleInput,
  value,
  pointer,
  handleClick,
  onfocus,
}) {
  return (
    <div
      style={
        pointer && pointer === true
          ? { cursor: "pointer" }
          : { cursor: "context-menu" }
      }
      onClick={handleClick}
    >
      <input
        className={style.input_without_icon}
        style={{ ...customStyleInput }}
        type="text"
        value={value}
        readOnly
      />
    </div>
  );
}

export { TextInput, ReadOnlyInput };
