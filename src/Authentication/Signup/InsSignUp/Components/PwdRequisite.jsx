import React from "react";
import style from "./PwdRequisite.module.css";

function PwdRequisite({ capsFlag, numFlag, lengthFlag, spacialCharFlag }) {
  return (
    <div className={style.pwd}>
      <p className={capsFlag === "valid" ? style.valid : style.invalid}>
        {" "}
        Must contain atleast one capital letter
      </p>
      <p className={numFlag === "valid" ? style.valid : style.invalid}>
        {" "}
        Must contain atleast one numeric digit
      </p>
      <p className={lengthFlag === "valid" ? style.valid : style.invalid}>
        {" "}
        length must be of 8-16 characters
      </p>
      <p className={spacialCharFlag === "valid" ? style.valid : style.invalid}>
        Must contain atleast one spacial character
      </p>
    </div>
  );
}

export default PwdRequisite;
