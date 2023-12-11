import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import style from "./UniversalForm.module.css";

const FormCheckbox = ({
  checkLabel,
  onCheckboxAction,
  checkedValue,
  customStyle,
  name,
  customStyleLabel,
}) => {
  return (
    <div className={style.form_checkbox_container} style={{ ...customStyle }}>
      <FormControlLabel
        control={
          <Checkbox
            sx={{ color: "rgba(18, 18, 18, 0.7)" }}
            onChange={onCheckboxAction}
            checked={checkedValue}
            name={name}
          />
        }
        label={checkLabel}
        sx={{ ...customStyleLabel }}
      />
    </div>
  );
};

export default FormCheckbox;
