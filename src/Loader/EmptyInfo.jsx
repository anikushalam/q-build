import React from "react";
import style from "./QvipleLoader.module.css";

const EmptyInfo = ({
  customStyleContainer,
  title,
  subtitle,
  costomTextTitleStyle,
  costomTextSubtitleStyle,
}) => {
  return (
    <div className={style.empty_container} style={customStyleContainer}>
      {title && <h6 style={costomTextTitleStyle}>{title}</h6>}
      {subtitle && <p style={costomTextSubtitleStyle}>{subtitle}</p>}
    </div>
  );
};

export default EmptyInfo;
