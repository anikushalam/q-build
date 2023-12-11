import ReactDOM from "react-dom";
import style from "../Utils.module.css";

const NavbarOverlayModal = ({ isHide, children }) => {
  return ReactDOM.createPortal(
    <div
      className={
        isHide ? style.navbar_modal_hide_overlay : style.navbar_modal_overlay
      }
    >
      {children}
    </div>,
    document.getElementById("overlay")
  );
};

export default NavbarOverlayModal;
