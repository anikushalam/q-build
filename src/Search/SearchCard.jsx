import React from "react";
import style from "./SearchHeader.module.css";
const SearchCard = ({ children }) => {
  return <div className={style.search_card}>{children}</div>;
};

export default SearchCard;
