import React from "react";
import style from "./CommonSidebar.module.css";

const CommonCardSideWrapper = ({ children }) => {
  return <div className={style.common_card_wrapper}>{children}</div>;
};

export default CommonCardSideWrapper;
