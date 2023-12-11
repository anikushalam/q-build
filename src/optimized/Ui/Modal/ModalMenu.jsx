import QvipleLoader from "../../Loader/QvipleLoader";
import Modal from "./Modal";
import style from "./Modal.module.css";
import BorderBottom from "../Border/BorderBottom";
const ModalMenu = ({ onClose, disabled, heading, children }) => {
  const onCloseEvent = () => {
    if (disabled) {
      return null;
    } else {
      onClose();
    }
  };
  return (
    <Modal onClose={onCloseEvent}>
      <div className={style.modal_menu_card}>
        {heading ? (
          <>
            <h5>{heading}</h5>
            <BorderBottom />
          </>
        ) : null}
        {children}
        {disabled && <QvipleLoader />}
      </div>
    </Modal>
  );
};

export default ModalMenu;
