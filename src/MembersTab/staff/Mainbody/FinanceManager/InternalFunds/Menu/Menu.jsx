import React from "react";
import style from "./Menu.module.css";

const MODAL_STYLES = {
  position: "absolute",
  width: "30vw",
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

function Menu({ open, onClose, setSelectIndex }) {
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className={style.menu}>
        <div
          className={`${style.menuItem} ${style.firstItem}`}
          onClick={() => {
            onClose();
            setSelectIndex(1);
          }}
        >
          Total Institute Fund
        </div>
        <div
          className={style.menuItem}
          onClick={() => {
            onClose();
            setSelectIndex(2);
          }}
        >
          Computer Department
        </div>
        <div
          className={style.menuItem}
          onClick={() => {
            onClose();
            setSelectIndex(3);
          }}
        >
          Information Technology
        </div>

        <div
          className={style.menuItem}
          onClick={() => {
            onClose();
            setSelectIndex(4);
          }}
        >
          Electrical Department
        </div>

        <div
          className={style.menuItem}
          onClick={() => {
            onClose();
            setSelectIndex(5);
          }}
        >
          E & Tc Department
        </div>

        <div
          className={`${style.menuItem} ${style.lastItem}`}
          onClick={() => {
            onClose();
            setSelectIndex(6);
          }}
        >
          Mechanical Department
        </div>
      </div>
    </>
  );
}

export default Menu;
