import React from "react";
import style from "../Navright.module.css";
import { LogoutQueryHandler } from "../../../../../Authentication/Logout/LogoutQuery";
import { useNavigate } from "react-router";

function Item({ img, name, logout }) {
  return (
    <>
      {name === "Logout" ? (
        <div className={style.item} onClick={logout}>
          <img alt="img" src={img} />
          <h6>{name}</h6>
        </div>
      ) : (
        <div className={style.item}>
          <img alt="img" src={img} />
          <h6>{name}</h6>
        </div>
      )}
    </>
  );
}

function Menu() {
  const navigate = useNavigate();

  const LogoutHandler = () => {
    navigate("/");
    LogoutQueryHandler();
  };
  return (
    <div className={style.menu}>
      <div className={style.menutop}>
        <img
          className={style.menudots}
          alt="img"
          src="/images/menu-dots-icon.svg"
        />
        <div className={style.imgContainer}>
          <img alt="img" src="/images/demo_users/user3.svg" />
        </div>
        <div className={style.user1}>
          <h6>Pankaj Phad</h6>
          <p>Super Admin</p>
        </div>
      </div>

      <div className={style.bottom}>
        <Item img="/images/admin/privacy-icon.svg" name="Privacy" />
        <Item img="/images/admin/setting-icon.svg" name="Setting" />
        <Item
          img="/images/admin/logout-icon.svg"
          name="Logout"
          logout={LogoutHandler}
        />
      </div>
    </div>
  );
}

export default Menu;
