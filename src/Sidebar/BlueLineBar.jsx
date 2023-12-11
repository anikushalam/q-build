import React from "react";
import style from "./CommonSidebar.module.css";

const BlueLineBar = ({ customStyleBlueLine }) => {
  return (
    <div
      className={style.blue_line_container}
      style={{ ...customStyleBlueLine }}
    ></div>
  );
};

export default BlueLineBar;
