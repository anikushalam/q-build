import React from "react";
import { useTranslation } from "react-i18next";
import style from "./JoinForm.module.css";

const CustomSearch = ({
  customStyleSearchContainer,
  customStyleSearchInput,
  onSearchEvent,
  onSearchEventClick,
  clickAble,
  value,
  autofocus,
  customStyleSearchIcon,
  isSearch,
}) => {
  const { t } = useTranslation();

  const onChange = (e) => {
    if (clickAble) onSearchEvent(e.target.value);
  };
  const onClick = () => {
    if (clickAble) onSearchEventClick();
  };
  return isSearch ? (
    <div
      className={style.search_container}
      style={{ ...customStyleSearchContainer }}
    >
      <div className={style.search_container_text}>
        <img
          className={style.searchIcon}
          alt="search icon"
          src="/images/search-dash-icon.svg"
          style={{ ...customStyleSearchIcon }}
        />
        <input
          type="text"
          placeholder={t("search-label")}
          onChange={onSearchEvent}
          style={{ ...customStyleSearchInput }}
        />
      </div>
    </div>
  ) : (
    <div
      className={style.search_container}
      style={{ ...customStyleSearchContainer }}
    >
      <div className={style.search_container_text}>
        <img
          className={style.searchIcon}
          alt="search icon"
          src="/images/search-dash-icon.svg"
          style={{ ...customStyleSearchIcon }}
        />
        <input
          type="text"
          placeholder={t("search-label")}
          value={value ?? ""}
          onChange={onChange}
          onClick={onClick}
          // onKeyUp={onEnterClick}
          autoFocus={autofocus ?? false}
          style={{ ...customStyleSearchInput }}
        />
      </div>
    </div>
  );
};

export default CustomSearch;
