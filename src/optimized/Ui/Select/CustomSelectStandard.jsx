import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../UiInput.module.css";
import { assestsUserFinanceUrl } from "../../Services/UrlConfig/AssestsBaseUrl";
const CustomSelectStandard = ({
  selectLabel,
  onClick,
  selectedValue,
  options,
  customStyleContainer,
  customLabelStyle,
  customListStyle,
  errorShow,
  defalutValue,
  viewAs,
  isFull,
}) => {
  const { t } = useTranslation();
  const [openOption, setOpenOption] = useState(false);
  const [value, setValue] = useState("");
  const onSelectFunction = () => {
    setOpenOption((pre) => !pre);
  };

  useEffect(() => {
    if (viewAs === "NORMAL_FILTER") {
      setValue(defalutValue);
    }
  }, [viewAs, defalutValue]);

  // useEffect(() => {
  //   if (viewAs === "CUSTOM_FILTER") {
  //     let str = "";
  //     for (let match of options) {
  //       for (let def of defalutValue) {
  //         if (match?._id === def) {
  //           let ins =
  //             match?.dName ?? match?.batchName ?? match?.className ?? "";
  //           str = str ? str + ", " + ins : ins;
  //         }
  //       }
  //     }
  //     setValue(str);
  //   }
  // }, [viewAs, defalutValue, options]);

  const onChooseOption = (val) => {
    if (isFull) {
      onClick(val);
    } else {
      onClick(val?._id);
    }
    onSelectFunction();
    setValue(val?.className ?? val);
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
          <p className={style.join_form_select_custom_paragraph}>
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
                onClick={() => onChooseOption(opt)}
                className={style.join_form_select_custom_paragraph_option}
              >
                {opt?.className ?? opt}
              </p>
            ))}
          </section>
        </>
      )}
    </div>
  );
};

export default CustomSelectStandard;
