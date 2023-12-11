import React from "react";
import Overlay from "../../Search/Overlay";
import SearchModalWrapper from "../../Search/SearchModalWrapper";

const CustomModal = ({ onClose, customStyle, children }) => {
  return (
    <>
      <SearchModalWrapper onClose={onClose} />
      <Overlay customStyle={customStyle}>{children}</Overlay>
    </>
  );
};

export default CustomModal;
