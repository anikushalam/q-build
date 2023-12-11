import ReactDOM from "react-dom";
import style from "../Utils.module.css";

const OverlayModal = ({ modalState, isHide, customOverlayStyle, children }) => {
  // console.info("wefkdsf", modalState, isHide);
  return ReactDOM.createPortal(
    <div
      className={style.modal_overlay}
      // className={isHide ? style.modal_hide_overlay : style.modal_overlay}
      style={{
        // "--modal-cleint-y": modalState?.yoffset,
        // "--modal-cleint-x": modalState?.xoffset,
        ...customOverlayStyle,
      }}
    >
      {children}
    </div>,
    document.getElementById("overlay")
  );
};

export default OverlayModal;
