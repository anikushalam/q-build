import React from "react";
import style from "./NoInternet.module.css";

function NoInternet() {
  const Reload = () => {
    window.location.reload();
  };
  return (
    <div className={style.error}>
      <div className={style.errordiv}>
        <img
          className={style.errorimg}
          src="/images/no_internet/no-internet.svg"
          alt=""
        />
        <img
          onClick={Reload}
          className={style.goback}
          src="/images/no_internet/go-back.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default NoInternet;
