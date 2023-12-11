import React from "react";
import style from "./EventMenu.module.css";
import { useTranslation } from "react-i18next";

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  zIndex: 10,
};

const MODAL_STYLES = {
  position: "absolute",
  right: "0",
  top: "2.1rem",
  zIndex: 19,
};

function EventMenu({
  open,
  onClose,
  customStyleOptions,
  handleDelete,
  handleEdit,
  setViewStatus,
}) {
  const { t } = useTranslation();
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      <div
        style={customStyleOptions ? customStyleOptions : MODAL_STYLES}
        className={style.options}
      >
        {/* <div
          className={style.option}
          onClick={() => setViewStatus("createEvent")}
        >
          {t("edit_")}
        </div> */}
        <div className={style.option} onClick={handleDelete}>
          {t("delete")}
        </div>
      </div>
    </>
  );
}

export default EventMenu;
