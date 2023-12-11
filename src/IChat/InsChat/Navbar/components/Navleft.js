import React, { useState } from "react";
import style from "./Navleft.module.css";
import SearchModal from "../../../../Dashboard/InsDashboard/Modals/SearchModal";

function Navleft({ searchUserName }) {
  const [navClick, setNavClick] = useState(false);

  return (
    <div className={style.navleft}>
      <img className={style.logo} alt="img" src="/images/career/newLogo.svg" />

      <div className={style.searchbar} onClick={() => setNavClick(true)}>
        <input
          disabled
          type="text"
          placeholder="Search"
          className={`form-control ${style.searchinput}`}
        />
        <img alt="img" src="/images/search-dash-icon.svg" />
      </div>

      {navClick && (
        <SearchModal
          navClick={navClick}
          hideModal={(w) => setNavClick(w)}
          username={searchUserName && searchUserName.name}
        />
      )}
    </div>
  );
}

export default Navleft;
