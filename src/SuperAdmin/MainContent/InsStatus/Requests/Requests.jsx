import React from "react";
import style from "./Requests.module.css";

function Requests({ nbr, text }) {
  return (
    <div className={style.requests}>
      <div className={style.left}>
        <h5>
          <span className={style.nbr}>{nbr}</span>
          &nbsp; {text}
        </h5>
        <div className={style.greenbtn}>
          <img src="/images/admin/funnel.svg" alt="" />
          <p>Filter</p>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.searchcontainer}>
          <div className={style.searchbar}>
            <input
              type="text"
              placeholder="Search"
              className={`form-control ${style.searchinput}`}
            />
            <img alt="img" src="/images/search-dash-icon.svg" />
          </div>
        </div>

        <div className={style.icons}>
          <img src="/images/admin/download-icon.svg" alt="" />
          <img src="/images/admin/print-icon.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Requests;
