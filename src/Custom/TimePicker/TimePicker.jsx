import React, { useState } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
const CustomTimePicker = () => {
  const [value, onChange] = useState("01:00 Pm");
  console.info("value", value);
  return (
    <div>
      <TimePicker
        onChange={onChange}
        value={value}
        amPmAriaLabel="AM/PM"
        format="hh:mm a"
        clearIcon={null}
        clockIcon={null}
        disableClock={true}
      />
    </div>
  );
};

export default CustomTimePicker;
