import React, { useState } from "react";
import style from "./AuthFormField.module.css";
import { assestsAuthUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
const AuthFormFieldWithIcon = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  minLength,
  maxLength,
  validate,
  fieldIconUrl,
  isPassword,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onToggle = () => {
    setPasswordVisible((prev) => !prev);
  };
  return (
    <>
      {label ? (
        <label htmlFor={name} className={style.auth_input_label}>
          {label}
          {validate ? <span className={style.auth_label_error}> *</span> : null}
        </label>
      ) : null}
      <div
        className={
          validate
            ? style.auth_input_container_error
            : style.auth_input_container
        }
      >
        <div className={style.auth_input_container_inner}>
          <div className={style.auth_input_image_container}>
            <img src={fieldIconUrl} alt="input icon" />
          </div>
          {type === "password" ? (
            <input
              className={style.auth_input_field}
              type={passwordVisible ? "text" : "password"}
              name={name}
              maxLength={maxLength}
              minLength={minLength}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          ) : (
            <input
              className={style.auth_input_field}
              type={type ?? "text"}
              name={name}
              maxLength={maxLength}
              minLength={minLength}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          )}

          {isPassword ? (
            <img
              alt="password icon"
              className={style.auth_passward_icon}
              src={
                passwordVisible
                  ? `${assestsAuthUrl}/auth-close-password.svg`
                  : `${assestsAuthUrl}/auth-open-password.svg`
              }
              onClick={onToggle}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default AuthFormFieldWithIcon;
