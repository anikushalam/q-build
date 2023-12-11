import React, { memo } from "react";
import style from "./Navbar.module.css";
import NavbarSearch from "./NavbarSearch";
import NavbarUserConent from "./NavbarUserConent";
import NavbarLanguage from "./NavbarLanguage";
const Navbar = () => {
  return (
    <div className={style.navbar_container}>
      <NavbarSearch />
      <NavbarUserConent />
      <NavbarLanguage />
    </div>
  );
};

export default memo(Navbar);
