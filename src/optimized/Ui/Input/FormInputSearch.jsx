import { useTranslation } from "react-i18next";
import style from "../UiInput.module.css";
const FormInputSearch = ({
  label,
  name,
  msg,
  type,
  value,
  onChange,
  placeholder,
  customFormInputContainer,
  customFormInputLabel,
  customFormInput,
  errorShow,
  disabled,
  iconUrl,
  searchLabel,
  onSearchAction,
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={style.form_input_container}
      style={customFormInputContainer}
    >
      {label && (
        <div className={style.form_input_search}>
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
          <div
            className={style.form_input_search_image}
            onClick={onSearchAction}
          >
            <img src={iconUrl} alt="icon" />
            <span>{t(searchLabel)}</span>
          </div>
        </div>
      )}

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
    </div>
  );
};

export default FormInputSearch;
