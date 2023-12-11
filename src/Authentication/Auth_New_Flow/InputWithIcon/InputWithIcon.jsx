import React from "react";
import { useState } from "react";
import style from "./InputWithIcon.module.css";

function TextInput({ icon, placeholder, name, onChange, value, required }) {
  return (
    <div className={style.date_input_container}>
      <div className={style.date_input_flex}>
        <div className={style.date_input_img_container}>
          <img
            className={style.date_input_container_icon}
            src={icon}
            alt="avatar"
          />
        </div>

        <input
          className={style.date_input_container_input}
          name={name}
          placeholder={placeholder}
          type="text"
          maxLength={"30"}
          minLength={"6"}
          value={value}
          onChange={onChange}
          required={required}
        />
      </div>
    </div>
  );
}

function PasswordInput({ icon, placeholder, name, onChange, value, required }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div className={`${style.date_input_container} ${style.input_position}`}>
      <div className={style.date_input_flex}>
        <div className={style.date_input_img_container}>
          <img className={style.date_input_container_icon} src={icon} alt="" />
        </div>

        <input
          className={style.date_input_container_input}
          type={passwordVisible ? "text" : "password"}
          name={name}
          maxLength={"16"}
          minLength={"8"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />

        {!passwordVisible && (
          <img
            alt="not found"
            className={style.eye}
            src="/images/eye-icon.svg"
            onClick={() => setPasswordVisible((open) => !open)}
          />
        )}

        {passwordVisible && (
          <img
            alt="not found"
            className={style.eyeOpen}
            src="/images/eye-open.svg"
            onClick={() => setPasswordVisible((open) => !open)}
          />
        )}
      </div>
    </div>
  );
}

function NumberInput({ icon, placeholder, name, maxlength, value, onChange }) {
  return (
    <div className={style.date_input_container}>
      <div className={style.date_input_flex}>
        <div className={style.date_input_img_container}>
          <img
            className={style.date_input_container_icon}
            src={icon}
            alt="input icon"
          />
        </div>

        <input
          className={`${style.date_input_container_input} ${style.number_input}`}
          placeholder={placeholder}
          name={name}
          type="tel"
          value={value}
          onChange={onChange}
          maxLength={maxlength}
        />
      </div>
    </div>
  );
}

function NumberInputWithRef({ icon, placeholder, name, maxlength, ref }) {
  return (
    <div className={style.date_input_container}>
      <div className={style.date_input_flex}>
        <div className={style.date_input_img_container}>
          <img
            className={style.date_input_container_icon}
            src={icon}
            alt="input icon"
          />
        </div>

        <input
          className={`${style.date_input_container_input} ${style.number_input}`}
          placeholder={placeholder}
          name={name}
          type="tel"
          ref={ref}
          maxLength={maxlength}
        />
      </div>
    </div>
  );
}
export { TextInput, PasswordInput, NumberInput, NumberInputWithRef };
