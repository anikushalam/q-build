import BackdropModal from "../../Utils/Modal/BackdropModal";
import OverlayModal from "../../Utils/Modal/OverlayModal";
// import { useCallback, useState } from "react";

const Modal = ({
  onClose,
  modalState,
  customBackdropStyle,
  customOverlayStyle,
  children,
}) => {
  // const [isHide, setIsHide] = useState(false);
  // const onAnimationClose = useCallback(() => {
  //   setIsHide(true);
  //   let animationTimeout = setTimeout(() => {
  //     onClose();
  //   }, 500);
  //   return () => clearTimeout(animationTimeout);
  // }, [onClose]);
  return (
    <>
      <BackdropModal
        onBackdropClose={onClose}
        customBackdropStyle={customBackdropStyle}
      />
      <OverlayModal
        // modalState={modalState}
        // isHide={isHide}
        customOverlayStyle={customOverlayStyle}
      >
        {/* <div
          style={{
            width: "30rem",
            minHeight: "30rem",
          }}
        >
          <h6>hi everyoune</h6>
        </div> */}
        {children}
      </OverlayModal>
    </>
  );
};

export default Modal;
