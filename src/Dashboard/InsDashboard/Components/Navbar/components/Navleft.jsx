import React, { useState, Suspense } from "react";
import style from "./Navleft.module.css";
import { Link, useLocation } from "react-router-dom";
import { FileNotUpload } from "../../../../../validation/Snackbar";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
import QLoader from "../../../../../Loader/QLoader";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
const InstituteSearchModal = React.lazy(() =>
  import("../../../../../Search/InstituteSearchModal")
);
function Navleft({ searchUserName }) {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const loginRole = useSelector((state) => state.authChange.loginRole);
  const [navClick, setNavClick] = useState(false);
  const [msg, setMsg] = useState(false);
  const { showScrollbar } = useScrollbar();
  // console.info("THis is search", searchUserName);

  const onClickHandler = () => {
    if (getQuery.state?.loginRole === "_usr_rs" || loginRole === "_usr_rs") {
    } else {
      if (searchUserName?.blockStatus !== "UnBlocked")
        setMsg("You are blocked by super admin due to malicious activities");
      else {
      }
      setNavClick(true);
    }
  };

  const onCloseSearch = () => {
    showScrollbar();
    setNavClick((pre) => !pre);
  };
  return (
    <div className={style.navleft}>
      <Link to={`/q/${searchUserName?.name}/feed`}>
        <img
          className={style.logo}
          alt="img"
          src="/images/career/newLogo.svg"
        />
      </Link>

      <div className={style.searchbar} onClick={onClickHandler}>
        <input
          disabled
          type="text"
          placeholder={t("search-label")}
          className={`form-control ${style.searchinput}`}
        />
        <img alt="img" src="/images/search-dash-icon.svg" />
      </div>

      {navClick && searchUserName?.blockStatus === "UnBlocked" ? (
        <Suspense fallback={<QLoader />}>
          <InstituteSearchModal
            onCloseSearch={onCloseSearch}
            username={searchUserName && searchUserName.name}
          />
        </Suspense>
      ) : (
        <FileNotUpload run={navClick} setRun={setNavClick} msg={msg} />
      )}
    </div>
  );
}

export default Navleft;
