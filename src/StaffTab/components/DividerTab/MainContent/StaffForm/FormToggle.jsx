import React from "react";
import Switch from "@mui/material/Switch";
import style from "./UniversalForm.module.css";
const label = { inputProps: { "aria-label": "Switch demo" } };

const FormToggle = ({
  customContainer,
  customLabel,
  labelDescription,
  labelHeading,
  defaultLabel,
  checkedToggle,
  onToggleHandler,
  children,
}) => {
  return (
    <div className={style.form_toggle_container} style={{ ...customContainer }}>
      <div className={style.form_toggle_label}>
        {defaultLabel ? (
          <Switch {...label} defaultChecked disabled />
        ) : (
          <Switch
            {...label}
            checked={checkedToggle}
            onChange={onToggleHandler}
          />
        )}

        <span style={{ ...customLabel }}>{labelHeading}</span>
      </div>
      <div className={style.form_toggle_description}>{labelDescription}</div>
      {children}
    </div>
  );
};

export default FormToggle;
