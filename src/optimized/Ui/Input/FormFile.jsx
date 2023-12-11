import { useCallback } from "react";
import style from "../UiInput.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../Services/UrlConfig/BaseUrl";

const FormFile = ({
  label,
  name,
  value,
  onChange,
  errorShow,
  disabled,
  customFormFileContainer,
  customFormFileLabel,
  customFormFile,
  type,
  multiple,
}) => {
  const { t } = useTranslation();
  const onViewFile = useCallback(() => {
    const newWindow = window.open(
      `${imageShowUrl}/${value?.key}`,
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  }, []);
  return (
    <div
      className={style.form_input_container}
      style={{ ...customFormFileContainer }}
    >
      {label && (
        <label className={style.form_input_label} style={customFormFileLabel}>
          {label}
          {errorShow ? (
            <span className={style.form_input_label_error}>
              * {t("form_require_label")}
            </span>
          ) : null}
        </label>
      )}

      <div className={style.form_file_container} style={customFormFile}>
        <label
          className={
            value
              ? `${style.form_file_choose} ${style.form_file_choose_active}`
              : style.form_file_choose
          }
          htmlFor={name}
        >
          {t(value !== "" ? "file_choosen" : "choose_file")}
        </label>
        <label className={style.form_file_choosen} onClick={onViewFile}>
          {value !== ""
            ? value?.name
              ? value?.name
              : t("view")
            : t("no_file_chosen")}
        </label>
      </div>

      <input
        type="file"
        multiple={multiple ? true : false}
        accept={
          type
            ? type
            : "image/*, .doc,.docx, application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        }
        name={name}
        id={name}
        style={{ display: "none" }}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default FormFile;
