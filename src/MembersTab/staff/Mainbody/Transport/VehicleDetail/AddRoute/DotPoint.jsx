import React from "react";
import style from "./RouteSlider.module.css";

const DotPoint = ({
  customStyle,
  customContainerStyle,
  title,
  subtitle,
  editRoute,
  routeId,
  onRouteClose,
  routeStructureId,
  routeStructureName,
}) => {
  const onRoute = () => {
    if (editRoute) {
      onRouteClose({
        _id: routeId,
        structureName: routeStructureName,
        structure: routeStructureId,
        stop: title,
      });
    }
  };
  return (
    <>
      <div
        className={style.dot_point_container}
        style={{ ...customContainerStyle, cursor: "pointer" }}
        onClick={onRoute}
      >
        <div className={style.dot_point} style={customStyle}></div>
        <div>
          <div className={style.dot_point_title}>{title ?? ""}</div>
          {subtitle && (
            <div className={style.dot_point_subtitle}>{subtitle ?? ""}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default DotPoint;
