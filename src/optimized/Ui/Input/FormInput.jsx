import { useTranslation } from "react-i18next";
import style from "../UiInput.module.css";
const inputType = ["tel", "number"];
const FormInput = ({
  label,
  name,
  msg,
  type,
  value,
  onChange,
  placeholder,
  maxLength,
  customFormInputContainer,
  customFormInputLabel,
  customFormInput,
  errorShow,
  disabled,
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={style.form_input_container}
      style={customFormInputContainer}
    >
      {label && (
        <label
          className={style.form_input_label}
          style={customFormInputLabel}
          htmlFor={name}
        >
          {label}
          {msg ? (
            <span className={style.form_input_label_error}>{msg}</span>
          ) : errorShow ? (
            <span className={style.form_input_label_error}>
              * {t("form_require_label")}
            </span>
          ) : null}
        </label>
      )}
      {inputType.includes(type) ? (
        <input
          className={style.form_input}
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          maxLength={maxLength ?? 100}
          disabled={disabled}
          style={customFormInput}
        />
      ) : (
        <input
          className={style.form_input}
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          style={customFormInput}
        />
      )}
    </div>
  );
};

export default FormInput;
