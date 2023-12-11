import React, { memo } from "react";
import style from "./Navbar.module.css";
import { useTranslation } from "react-i18next";

const NavbarIcon = ({ isActive, iconOutline, iconFill, name }) => {
  const { t } = useTranslation();
  return (
    <div className={style.navbar_icon_container}>
      <img src={isActive ? iconFill : iconOutline} alt="navbar-icon" />
      <h6>{t(name)}</h6>
    </div>
  );
};

export default memo(NavbarIcon);
