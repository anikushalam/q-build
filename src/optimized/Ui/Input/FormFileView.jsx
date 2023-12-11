import { useCallback } from "react";
import style from "../UiInput.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../Services/UrlConfig/BaseUrl";
const FormFileView = ({
  label,
  value,
  customFormInputContainer,
  customFormInputLabel,
  customFormInput,
}) => {
  const { t } = useTranslation();
  const onViewFile = useCallback(() => {
    if (value) {
      const newWindow = window.open(
        `${imageShowUrl}/${value?.key}`,
        "_blank",
        "noopener,noreferrer"
      );
      if (newWindow) newWindow.opener = null;
    }
  }, [value]);
  return (
    <div
      className={style.form_read_input_container}
      style={customFormInputContainer}
    >
      <label
        className={style.form_read_input_label}
        style={customFormInputLabel}
      >
        {label}
      </label>
      <h6
        className={style.form_read_input_file}
        style={customFormInput}
        onClick={onViewFile}
      >
        {t("view")}
      </h6>
    </div>
  );
};

export default FormFileView;
