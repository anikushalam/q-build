import React from "react";
import style from "./SearchWrapper.module.css";

const SearchTab = ({ searchTab, searchTabActive, setSearchTabActive, top }) => {
  return (
    <div className={style.search_tab} style={{ top: top }}>
      {searchTab?.map((tab, index) => (
        <div
          className={
            searchTabActive === tab
              ? style.search_tab_each_active
              : style.search_tab_each
          }
          key={index}
          onClick={() => setSearchTabActive(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default SearchTab;
