import React from "react";
import style from "./Error.module.css";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  // console.log();
  return (
    <div className={style.error}>
      <div className={style.errordiv}>
        <img
          className={style.errorimg}
          src="/images/no_internet/error.svg"
          alt=""
        />
        <img
          onClick={() => navigate(-1)}
          className={style.goback}
          src="/images/no_internet/go-back.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Error;
