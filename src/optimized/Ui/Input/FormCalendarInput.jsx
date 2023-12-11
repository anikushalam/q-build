import { useTranslation } from "react-i18next";
import style from "../UiInput.module.css";
import { useState } from "react";
import Calendar from "@/Utils/Calendar/Calendar";
const FormCalendarInput = ({
  label,
  name,
  msg,
  value,
  onChange,
  placeholder,
  customFormInputContainer,
  customFormInputLabel,
  customFormInput,
  errorShow,
  disabled,
}) => {
  const { t } = useTranslation();
  const [calendar, setCalendar] = useState(false);
  const onToggle = () => {
    setCalendar((pre) => !pre);
  };

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
      <input
        className={style.form_input}
        type="text"
        defaultValue={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        style={customFormInput}
        onFocus={onToggle}
      />
      {calendar && <Calendar onClose={onToggle} onDateSelect={onChange} />}
    </div>
  );
};

export default FormCalendarInput;
