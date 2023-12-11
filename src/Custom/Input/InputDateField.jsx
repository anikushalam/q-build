import React from "react";
import { useState } from "react";
import DatePicker from "./DatePicker/DatePicker";
import { useTranslation } from "react-i18next";
import { imageShowUrl2 } from "../../services/BaseUrl";

import style from "./InputDateField.module.css";

function InputDateField({
  customStyleInput,

  datePickerPosition,
  placeholder,
  range,
  dateInput,
  setDateInput,
}) {
  const [openCalender, setOpenCalender] = useState(false);

  const handleFocusRemove = () => {
    setOpenCalender(false);
  };

  const handleFocus = () => {
    setOpenCalender(true);
  };

  return (
    <div
      style={{ ...customStyleInput }}
      className={
        openCalender
          ? `${style.date_input_container} ${style.input_border_active}`
          : style.date_input_container
      }
    >
      <div className={style.date_input_flex}>
        <div className={style.date_input_img_container}>
          <img
            className={style.date_input_container_icon}
            // src="/images/Input/calendar.svg"
            src={`${imageShowUrl2}/Input/calendar.svg`}
            alt=""
          />
        </div>

        <input
          className={style.date_input_container_input}
          placeholder={placeholder ? placeholder : "dd/mm/yyyy"}
          type="text"
          onFocus={handleFocus}
          value={range ? dateInput[0] : dateInput}

          // onBlur={handleFocusRemove}
        />
      </div>

      {openCalender && (
        <DatePicker
          datePickerPosition={datePickerPosition}
          range={range}
          onClose={() => setOpenCalender(false)}
          dateInput={dateInput}
          setDateInput={setDateInput}
        />
      )}
    </div>
  );
}

function InputDateWithoutIcon({
  datePickerPosition,
  range,
  iconStyle,
  dateInput,
  setDateInput,
  customStyleInput,
  placeholder,
  label,
  setOpenDate,
  asOpen,
}) {
  const [openCalender, setOpenCalender] = useState(false);
  const { t } = useTranslation();
  const handleFocusRemove = () => {
    setOpenCalender(false);
  };

  const handleFocus = () => {
    if (asOpen === "Enquiry") {
      setOpenDate(true);
    }
    setOpenCalender(true);
  };

  return (
    <div className={style.input_without_icon_container}>
      <h3 className={style.input_without_icon_label}>{label}</h3>
      <input
        className={style.input_without_icon}
        style={{ ...customStyleInput }}
        placeholder={placeholder ? placeholder : "dd/mm/yyyy"}
        type="text"
        onFocus={handleFocus}
        value={range && dateInput ? dateInput[0] : dateInput ? dateInput : ""}
      />

      <img
        style={{ ...iconStyle }}
        className={iconStyle ? "" : style.arrowIcon}
        src="/images/Input/calendar.svg"
        alt=""
      />

      {openCalender && (
        <DatePicker
          datePickerPosition={datePickerPosition}
          range={range}
          onClose={() => setOpenCalender(false)}
          dateInput={dateInput}
          setDateInput={setDateInput}
        />
      )}
    </div>
  );
}

export { InputDateField, InputDateWithoutIcon };
