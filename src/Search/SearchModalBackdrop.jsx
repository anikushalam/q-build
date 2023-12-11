import React from "react";
import style from "./SearchHeader.module.css";
const SearchModalBackdrop = ({ onClose, customStyleBackdrop }) => {
  return (
    <div
      className={style.search_backdrop}
      style={{ ...customStyleBackdrop }}
      onClick={onClose}
    />
  );
};

export default SearchModalBackdrop;
