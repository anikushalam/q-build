import React, { useState } from "react";
import style from "./JoinForm.module.css";
import DatePicker from "../../../Custom/Input/DatePicker/DatePicker";
const JoinFormCalender = ({
  customStyleContainer,
  labelText,
  errorShow,
  value,
  name,
  placeholder,
  onDateFunction,
  datePickerPosition,
  customStyleLabel,
  customStyleCaledarIcon,
  customStyleInput,
}) => {
  const [openCalender, setOpenCalender] = useState(false);

  const handleFocus = () => {
    setOpenCalender(true);
  };
  return (
    <div
      className={style.join_form_container}
      style={{ ...customStyleContainer }}
    >
      <label
        className={style.join_form_label}
        htmlFor={name}
        style={{ ...customStyleLabel }}
      >
        {labelText}{" "}
        {errorShow && (
          <span style={{ color: "red", marginLeft: "15px" }}>* required</span>
        )}
      </label>
      <input
        className={style.join_form_input}
        type="text"
        value={value}
        name={name}
        placeholder={placeholder ? placeholder : "dd/mm/yyyy"}
        onFocus={handleFocus}
        style={{ ...customStyleInput }}
      />
      <img
        className={style.arrowIcon}
        src="/images/Input/calendar.svg"
        alt="calender icon"
        onClick={handleFocus}
        style={{ ...customStyleCaledarIcon }}
      />
      {openCalender && (
        <DatePicker
          datePickerPosition={
            datePickerPosition
              ? { ...datePickerPosition }
              : {
                  top: "-17rem",
                  left: "1rem",
                  borderRadius: "0.375rem",
                  paddingBottom: "0",
                }
          }
          range={false}
          onClose={() => setOpenCalender(false)}
          dateInput={value}
          setDateInput={onDateFunction}
        />
      )}
    </div>
  );
};

export default JoinFormCalender;
