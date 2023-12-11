import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../UiInput.module.css";
import { assestsUserFinanceUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
const CustomSelectKey = ({
  selectLabel,
  onClick,
  selectedValue,
  options,
  customStyleContainer,
  customLabelStyle,
  customListStyle,
  errorShow,
  defalutValue,
}) => {
  const { t } = useTranslation();
  const [openOption, setOpenOption] = useState(false);
  const [value, setValue] = useState("");
  const onSelectFunction = () => {
    setOpenOption((pre) => !pre);
  };

  useEffect(() => {
    if (defalutValue) {
      setValue(defalutValue);
    }
  }, [defalutValue]);

  const onChooseOption = (val) => {
    onClick(val);
    onSelectFunction();
    setValue(val);
  };
  return (
    <div
      className={style.form_input_container}
      style={{ ...customStyleContainer }}
    >
      <p
        className={style.join_form_select_paragraph}
        style={{ ...customLabelStyle }}
      >
        {selectLabel}
        {errorShow && (
          <span style={{ color: "red", marginLeft: "15px" }}>
            * {t("form_require_label")}
          </span>
        )}
      </p>
      <section
        className={style.join_form_select_custom}
        onClick={onSelectFunction}
      >
        {!value ? (
          <p
            className={style.join_form_select_custom_paragraph}
            style={{
              color: "rgba(18, 18, 18, 0.5)",
            }}
          >
            {selectedValue}
          </p>
        ) : (
          <p className={style.join_form_select_custom_paragraph}>
            {value ?? ""}
          </p>
        )}

        {openOption ? (
          <img
            className={style.join_form_select_custom_rotate_icon}
            src={`${assestsUserFinanceUrl}/down.svg`}
            alt="categor icon"
          />
        ) : (
          <img
            className={style.join_form_select_custom_icon}
            src={`${assestsUserFinanceUrl}/down.svg`}
            alt="categor icon"
          />
        )}
      </section>
      {openOption && (
        <>
          <section
            className={style.join_form_select_custom_list}
            style={customListStyle}
          >
            {options?.map((opt, index) => (
              <p
                key={index}
                onClick={() => onChooseOption(opt?.key)}
                className={style.join_form_select_custom_paragraph_option}
              >
                {t(opt?.name)}
              </p>
            ))}
          </section>
        </>
      )}
    </div>
  );
};

export default CustomSelectKey;
