import { useTranslation } from "react-i18next";
import style from "../UiInput.module.css";

const getRow = (value) => {
  return value ? value?.split("\n")?.length : 2;
};
const FormTextarea = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  errorShow,
  disabled,
  customFormInputContainer,
  customFormInputLabel,
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
          htmlFor={name}
          style={customFormInputLabel}
        >
          {label}
          {errorShow && (
            <span className={style.form_input_label_error}>
              * {t("form_require_label")}
            </span>
          )}
        </label>
      )}

      <textarea
        className={style.form_textarea_input}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        rows={getRow(value)}
        disabled={disabled}
        style={{
          "--textarea-height": `${getRow(value) * 17}px`,
        }}
      />
    </div>
  );
};

export default FormTextarea;
