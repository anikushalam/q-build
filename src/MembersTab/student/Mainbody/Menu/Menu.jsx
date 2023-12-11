import React from "react";
import style from "../Mainbody.module.css";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

const MODAL_STYLES = {
  position: "absolute",
  left: "10.5vw",
  top: "3vw",
  zIndex: 10,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  zIndex: 10,
};
function Menu({ open, onClose, setMenu, setIndex, studentDesignationData }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  if (!open) return null;

  return (
    <div>
      <div onClick={onClose} style={OVERLAY_STYLES} />

      <div className={style.menu} style={MODAL_STYLES}>
        {studentDesignationData?.student?.studentClass && (
          <div
            className={style.menuItem}
            onClick={() => {
              setMenu(false);
              setIndex("1");
            }}
          >
            <img alt="" src="/images/members/dHead-icon.svg" />
            <h6>{studentDesignationData?.student?.studentClass?.classTitle}</h6>
          </div>
        )}

        <div
          className={style.menuItem}
          onClick={() => {
            setMenu(false);
            setIndex("0");
          }}
        >
          <img alt="" src="/images/members/aStatus-icon.svg" />
          <h6>Application Status</h6>
        </div>
      </div>
    </div>
  );
}

export default Menu;
