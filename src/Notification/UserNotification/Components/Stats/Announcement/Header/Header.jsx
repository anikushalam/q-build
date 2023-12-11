import React from "react";
import style from "./Header.module.css";
import Avatar from "@mui/material/Avatar";
import { useTranslation } from "react-i18next";
import "./Header.css";

function Header() {
  const { t } = useTranslation();
  return (
    <div className={style.header}>
      <div className={style.avatars}>
        <Avatar
          alt="Remy Sharp"
          src="/images/testimonial-1.svg"
          sx={{ width: 24, height: 24 }}
        />
        <Avatar
          alt="Travis Howard"
          src="/images/testimonial-2.svg"
          sx={{ width: 24, height: 24 }}
        />
      </div>

      <div className={style.text}>
        <h6>{t("new-followers-place")}</h6>
        <p>{t("follow-back-place")}</p>
      </div>
    </div>
  );
}

export default Header;
