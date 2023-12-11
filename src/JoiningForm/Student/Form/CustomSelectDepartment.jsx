import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./JoinForm.module.css";
const CustomSelectDepartment = ({
  selectLabel,
  onClick,
  selectedValue,
  options,
  customStyleContainer,
  customLabelStyle,
  customListStyle,
  openAs,
  errorShow,
  defalutValue,
  viewAs,
}) => {
  const { t } = useTranslation();
  const [openOption, setOpenOption] = useState(false);
  const [value, setValue] = useState("");
  const onSelectFunction = () => {
    setOpenOption((pre) => !pre);
  };

  useEffect(() => {
    if (
      viewAs === "EVENT_MANAGER" ||
      viewAs === "ADMISSION_APPLICATION" ||
      viewAs === "FINANCE_BANK" ||
      viewAs === "NORMAL_FILTER"
    ) {
      setValue(defalutValue);
    }
  }, [viewAs, defalutValue]);

  useEffect(() => {
    if (viewAs === "CUSTOM_FILTER") {
      let str = "";
      for (let match of options) {
        // if (match?._id === defalutValue) {
        //   setValue(match?.dName ?? match?.batchName ?? match?.className ?? "");
        // }
        for (let def of defalutValue) {
          if (match?._id === def) {
            let ins =
              match?.dName ?? match?.batchName ?? match?.className ?? "";
            str = str ? str + ", " + ins : ins;
            // setValue(match?.dName ?? match?.batchName ?? match?.className ?? "");
          }
        }
      }
      setValue(str);
    }
  }, [viewAs, defalutValue, options]);

  const onChooseOption = (val) => {
    // setValue(val)
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
            {/* <p
              className={style.join_form_select_custom_paragraph_option}
              onClick={onSelectFunction}
            >
              {selectedValue}
            </p> */}

            {options?.map((opt, index) => (
              <p
                key={index}
                onClick={() => {
                  onChooseOption(
                    openAs === "PROMOTE" ? opt : opt?._id ? opt?._id : opt
                  );
                  if (viewAs === "FINANCE_BANK") {
                  } else {
                    setValue(
                      opt?.dName ??
                        opt?.batchName ??
                        opt?.className ??
                        opt?.classTitle ??
                        opt?.category_name ??
                        opt?.category_master?.category_name ??
                        opt?.hostel_unit_name ??
                        opt?.room_name ??
                        opt?.subjectName ??
                        opt?.vehicle_number ??
                        opt?.finance_bank_account_name ??
                        opt
                    );
                  }
                }}
                className={style.join_form_select_custom_paragraph_option}
              >
                {opt?.dName ??
                  opt?.batchName ??
                  opt?.className ??
                  opt?.classTitle ??
                  opt?.category_name ??
                  opt?.category_master?.category_name ??
                  opt?.hostel_unit_name ??
                  opt?.room_name ??
                  opt?.subjectName ??
                  opt?.vehicle_number ??
                  opt?.finance_bank_account_name ??
                  opt}
              </p>
            ))}
          </section>
        </>
      )}
    </div>
  );
};

export default CustomSelectDepartment;
