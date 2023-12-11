import React from "react";
import style from "./Modal.module.css";
import { Dialog } from "@mui/material";

const Modal = ({
  open,
  setOpen,
  modalTitle,
  buttonText,
  onButtonClick,
  button,
  children,
}) => {
  const onCloseHandler = (e) => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <div className={style.DModal}>
        <div className={style.title}>
          <p className={style.titleHead}>{modalTitle}</p>
          <img
            src="/images/close-post-icon.svg"
            onClick={onCloseHandler}
            alt="not found"
          />
        </div>
        {children}
        {/* <div className={style.input}>
          <p>{t("create-master-header-2")}</p>
          <input
            type="text"
            ref={inputRef}
            placeholder={t("e.g. 6th Class/ FYJC")}
            required
          />
        </div> */}
        {button === "no" ? (
          ""
        ) : (
          <div className={style.btn} onClick={onButtonClick}>
            {buttonText}
          </div>
        )}
      </div>
    </Dialog>
  );
};

export default Modal;
