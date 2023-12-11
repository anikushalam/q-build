import React from "react";
import style from "./Navmid.module.css";

function Navmid() {
  return (
    <div className={style.navmid}>
      <div className={style.searchbar}>
        <input
          type="text"
          placeholder="Search"
          className={`form-control ${style.searchinput}`}
        />
        <img alt="img" src="/images/search-dash-icon.svg" />
      </div>
    </div>
  );
}

export default Navmid;
