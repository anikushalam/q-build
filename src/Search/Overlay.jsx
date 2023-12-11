import React from "react";
import ReactDom from "react-dom";
import style from "./Overlay.module.css";
const Overlay = ({ children, customStyle }) => {
  return (
    <>
      {ReactDom.createPortal(
        <div className={style.overlay_card} style={{ ...customStyle }}>
          {children}
        </div>,

        document.getElementById("overlay")
      )}
    </>
  );
};

export default Overlay;
