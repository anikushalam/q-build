import React from "react";
import style from "./Navbar.module.css";
import {
  assestsLogoUrl,
  assestsNavbarUrl,
} from "@/Services/UrlConfig/AssestsBaseUrl";
import { useTranslation } from "react-i18next";

const NavbarSearch = () => {
  const { t } = useTranslation();
  return (
    <div className={style.navbar_search_container}>
      <img
        className={style.navbar_logo}
        src={`${assestsLogoUrl}/qviple-logo.svg`}
        alt="qviple-logo"
      />
      <div className={style.navbar_search_container_inner}>
        <input
          className={style.navbar_search_container_input}
          type="text"
          placeholder={t("search")}
        />
        <img src={`${assestsNavbarUrl}/navbar-search.svg`} alt="search icon" />
      </div>
    </div>
  );
};

export default NavbarSearch;
