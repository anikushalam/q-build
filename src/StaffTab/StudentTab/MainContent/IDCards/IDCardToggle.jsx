import React from "react";
import style from "./IDCards.module.css";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

function IDCardToggle({
  labelDescription,
  labelHeading,
  defaultLabel,
  checkedToggle,
  onToggleHandler,
  children,
}) {
  return (
    <div className={style.form_toggle_container}>
      <div className={style.form_toggle_label}>
        <Switch {...label} checked={checkedToggle} onChange={onToggleHandler} />
        <span>{labelHeading}</span>
      </div>
      <div className={style.form_toggle_description}>{labelDescription}</div>
      {children}
    </div>
  );
}

export default IDCardToggle;
