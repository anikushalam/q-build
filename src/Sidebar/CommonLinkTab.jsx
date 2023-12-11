import React from "react";
import style from "./CommonSidebar.module.css";
import { Link, useParams } from "react-router-dom";

const CommonLinkTab = ({
  tabLevel,
  customStyleContainer,
  customStyleLevel,
  currentValue,
  tabValue,
  carryParentState,
  activeUrl,
}) => {
  const params = useParams();
  return (
    <Link
      to={`/q/${params.username}/${activeUrl}`}
      state={carryParentState}
      className={
        currentValue === tabValue
          ? style.common_tab_container_active
          : style.common_tab_container
      }
      style={customStyleContainer}
    >
      <h6
        className={
          currentValue === tabValue
            ? style.common_tab_text_active
            : style.common_tab_text
        }
        style={customStyleLevel}
      >
        {tabLevel}
      </h6>
    </Link>
  );
};

export default CommonLinkTab;
