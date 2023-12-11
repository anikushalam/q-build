import React from "react";
import ReactDOM from "react-dom";
import style from "../Utils.module.css";
import { assestsUserFinanceUrl } from "@/Services/UrlConfig/AssestsBaseUrl";

const NotifyOverlay = ({ onClose, isVariant, isHide, children }) => {
  return ReactDOM.createPortal(
    <div>
      <div className={style.notify_backdrop} />
      <div
        className={isHide ? style.notify_hide_overlay : style.notify_overlay}
      >
        <div
          className={style.notify_container}
          style={{
            "--notify-bg-color": isVariant,
          }}
        >
          {children}
          <img
            src={`${assestsUserFinanceUrl}/close.svg`}
            alt="close icon"
            onClick={onClose}
            className={style.notify_close}
          />
          {/* <img src={`${assestsUtilsUrl}/close.svg`} alt="close icon" /> */}
        </div>
      </div>
    </div>,
    document.getElementById("notify-alert")
  );
};

export default NotifyOverlay;
