import { useCallback } from "react";
import ReactDOM from "react-dom";
import style from "../Utils.module.css";

const BackdropModal = ({ onBackdropClose, customBackdropStyle }) => {
  const onClose = useCallback(() => {
    if (onBackdropClose) {
      onBackdropClose();
    } else {
      return null;
    }
  }, [onBackdropClose]);
  return ReactDOM.createPortal(
    <div
      className={style.modal_backdrop}
      onClick={onClose}
      style={customBackdropStyle}
    />,
    document.getElementById("backdrop")
  );
};

export default BackdropModal;
