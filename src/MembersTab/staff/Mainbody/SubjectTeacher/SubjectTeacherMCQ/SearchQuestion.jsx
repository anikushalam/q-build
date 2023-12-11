import React from "react";
import style from "./McqWrapper.module.css";
import { useTranslation } from "react-i18next";

const SearchQuestion = ({
  width,
  tabHandler,
  tabEventName,
  topLevelIndex,
  backIndex,
  type,
  onSearchEvent,
}) => {
  const { t } = useTranslation();
  return (
    <>
      {!type ? (
        <div
          className={style.search_container}
          style={{ width: `${width}` }}
          onClick={() => {
            tabHandler(tabEventName);
            topLevelIndex(backIndex);
          }}
        >
          <img
            alt="search icon for question"
            src="/images/search-dept-icon.svg"
          />
          <input type="text" placeholder={t("search_question")} />
        </div>
      ) : (
        <div
          className={style.search_container}
          style={{ width: `${width}` }}
          // onClick={() => {
          //   // tabHandler(tabEventName);
          //   // topLevelIndex(backIndex);
          // }}
        >
          <img
            alt="search icon for question"
            src="/images/search-dept-icon.svg"
          />
          <input
            type="text"
            placeholder={t("search_question")}
            onChange={onSearchEvent}
          />
        </div>
      )}
    </>
  );
};

export default SearchQuestion;
