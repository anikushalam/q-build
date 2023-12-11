import React from "react";
import ReactDom from "react-dom";
import SearchModalBackdrop from "./SearchModalBackdrop";
const SearchModalWrapper = ({ onClose, customStyleBackdrop }) => {
  return (
    <>
      {ReactDom.createPortal(
        <SearchModalBackdrop
          onClose={onClose}
          customStyleBackdrop={customStyleBackdrop}
        />,
        document.getElementById("backdrop")
      )}
    </>
  );
};

export default SearchModalWrapper;
