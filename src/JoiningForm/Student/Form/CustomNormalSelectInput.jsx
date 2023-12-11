import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./JoinForm.module.css";
const CustomNormalSelectInput = ({
  selectLabel,
  value,
  onClick,
  selectedValue,
  options,
  errorShow,
  customStyleContainer,
  customLabelStyle,
  customListStyle,
  openAs,
  viewAs,
}) => {
  const { t } = useTranslation();
  const [openOption, setOpenOption] = useState(false);

  const onSelectFunction = () => {
    if (
      openAs === "REFUND" ||
      openAs === "BACKLOG" ||
      viewAs === "FINANCE_MANAGER"
    ) {
    } else {
      setOpenOption((pre) => !pre);
    }
  };

  const onChooseOption = (val) => {
    onClick(val);
    onSelectFunction();
  };
  return (
    <div
      className={style.join_form_container}
      style={{ ...customStyleContainer }}
    >
      <p
        className={style.join_form_select_paragraph}
        style={{ ...customLabelStyle }}
      >
        {selectLabel}{" "}
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
          <p className={style.join_form_select_custom_paragraph}>
            {selectedValue}
          </p>
        ) : (
          <p className={style.join_form_select_custom_paragraph}>
            {value ?? ""}
          </p>
        )}

        <img
          className={style.join_form_select_custom_icon}
          src="/images/down-icon.svg"
          alt="categor icon"
        />
      </section>
      {openOption && (
        <>
          <section
            className={style.join_form_select_custom_list}
            style={
              customListStyle
                ? { ...customListStyle }
                : options?.length > 2
                ? { overflowY: "scroll" }
                : { backgroundColor: "#ffffff" }
            }
          >
            <p
              className={style.join_form_select_custom_paragraph_option}
              onClick={onSelectFunction}
            >
              {selectedValue}
            </p>

            {options?.map((opt, index) => (
              <p
                key={index}
                onClick={() => onChooseOption(opt)}
                className={style.join_form_select_custom_paragraph_option}
              >
                {opt}
              </p>
            ))}
          </section>
        </>
      )}
    </div>
  );
};

export default CustomNormalSelectInput;
