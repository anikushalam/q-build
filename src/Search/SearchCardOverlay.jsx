import React from "react";
import style from "./SearchHeader.module.css";

const SearchCardOverlay = ({ customStyle, children }) => {
  return (
    <div className={style.search_card} style={{ ...customStyle }}>
      {children}
    </div>
  );
};

export default SearchCardOverlay;
