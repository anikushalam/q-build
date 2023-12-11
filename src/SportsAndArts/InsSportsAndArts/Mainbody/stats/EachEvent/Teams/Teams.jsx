import React from "react";
import style from "./Teams.module.css";
import { useTranslation } from "react-i18next";

function Item(params) {
  const { t } = useTranslation();

  return (
    <div className={style.member}>
      <img src="/images/member_tab/class/default_avatar.svg" />
      <div className={style.textt}>
        <h6>Ankita jain</h6>
        <p> {t("team")} : Cricket Best 11</p>
      </div>
    </div>
  );
}

function Teams() {
  const { t } = useTranslation();
  const searchHandler = () => {};
  return (
    <div className={style.teams}>
      <div className={style.searchbarContainer}>
        <div className={style.searchbar}>
          <input
            type="text"
            placeholder={t("search")}
            name="search"
            className={`form-control ${style.searchinput}`}
            onChange={searchHandler}
          />
          <img alt="img" src="/images/search-dash-icon.svg" />
        </div>
      </div>

      <div className={style.membersbarContainer}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

export default Teams;
