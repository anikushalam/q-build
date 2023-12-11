import React from "react";
import style from "./CommonSidebar.module.css";

const CommonTab = ({
  onTabAction,
  tabLevel,
  customStyleContainer,
  customStyleLevel,
  currentValue,
  tabValue,
}) => {
  return (
    <div
      className={
        currentValue === tabValue
          ? style.common_tab_container_active
          : style.common_tab_container
      }
      style={{ ...customStyleContainer }}
      onClick={onTabAction}
    >
      <h6 className={style.common_tab_text} style={{ ...customStyleLevel }}>
        {tabLevel}
      </h6>
    </div>
  );
};

export default CommonTab;
