import React, { useState, Suspense } from "react";
import style from "./Navleft.module.css";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
import QLoader from "../../../../../Loader/QLoader";
import { useTranslation } from "react-i18next";
const UserSearchModal = React.lazy(() =>
  import("../../../../../Search/UserSearchModal")
);
function Navleft() {
  const { t } = useTranslation();
  const [navClick, setNavClick] = useState(false);
  const { showScrollbar } = useScrollbar();

  const onCloseSearch = () => {
    setNavClick((pre) => !pre);
    showScrollbar();
  };

  const openSearch = () => {
    if (navClick) {
      // console.info("this is my tyoe");
    } else {
      setNavClick(true);
    }
  };
  return (
    <div className={style.navleft}>
      {/* <Link to={`/q/${searchUserName?.name}/feed`}> */}
      <img className={style.logo} alt="img" src="/images/career/newLogo.svg" />
      {/* </Link> */}

      <div className={style.searchbar} onClick={openSearch}>
        <input
          disabled
          type="text"
          placeholder={t("search-label")}
          className={`form-control`}
          // autoFocus={navClick}
        />
        <img alt="img" src="/images/search-dash-icon.svg" />
      </div>

      {navClick && (
        <Suspense fallback={<QLoader />}>
          <UserSearchModal onCloseSearch={onCloseSearch} />
        </Suspense>
      )}
    </div>
  );
}

export default Navleft;
