import React from "react";
import Overlay from "../../../../../Search/Overlay";
import SearchModalWrapper from "../../../../../Search/SearchModalWrapper";

const PopupWrapper = ({ onClose, children }) => {
  return (
    <>
      <SearchModalWrapper onClose={onClose} />
      <Overlay>{children}</Overlay>
    </>
  );
};

export default PopupWrapper;
