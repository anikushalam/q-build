import React from "react";
import style from "./StaffProfile.module.css";

const BorderBottom = ({ customStyle }) => {
  return <hr className={style.universal_hr} style={{ ...customStyle }} />;
};

export default BorderBottom;
