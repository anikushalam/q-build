import React from "react";
import style from "./McqWrapper.module.css";
const McqWrapper = ({ isDepartment, children }) => {
  return (
    <div
      className={style.main_wrapper}
      style={{
        border: isDepartment ? "none" : "0.5px solid #cacaca",
      }}
    >
      {children}
    </div>
  );
};

export default McqWrapper;
