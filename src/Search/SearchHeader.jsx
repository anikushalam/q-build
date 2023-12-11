import React from "react";
import style from "./SearchHeader.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const SearchHeader = ({
  width,
  searchQuery,
  setSearchQuery,
  username,
  onClose,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const onEnterClick = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      onClose();
      navigate(`/q/${username}/search`, { state: { search: searchQuery } });
    }
  };
  return (
    <div className={style.search_container} style={{ width: `${width}` }}>
      <img
        alt="search icon for question"
        src="/images/left-nav-icon.svg"
        onClick={onClose}
        className={style.search_container_back}
      />
      <div className={style.search_container_text}>
        <img
          className={style.searchIcon}
          alt="search icon"
          src="/images/search-dash-icon.svg"
        />
        <input
          type="text"
          placeholder={t("search-label")}
          // value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={onEnterClick}
          autoFocus
        />
      </div>
    </div>
  );
};

export default SearchHeader;
