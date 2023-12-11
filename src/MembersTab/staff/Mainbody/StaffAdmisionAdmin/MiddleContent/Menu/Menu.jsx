import React from "react";
import style from "../MiddleContent.module.css";

const MODAL_STYLES = {
  position: "absolute",

  zIndex: 15,
  right: "0.8vw",
  top: "2vw",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  zIndex: 10,
};

function Menu({ open, onClose }) {
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className={style.menu}>
        <div className={style.menuItem}>Edit Person Profile</div>
        <div className={style.menuItem}>Remove Person Profile</div>
      </div>
    </>
  );
}

export default Menu;
