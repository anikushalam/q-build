import React from "react";
import style from "./Employees.module.css";

function Employees() {
  return (
    <div className={style.itemsContainer}>
      <div className={style.item}>
        <img alt="" src="/images/member_tab/class/default_avatar.svg" />
        <div>
          <p>Abhishek Singh</p>
          <p className={style.index}>Index No. 1</p>
        </div>
      </div>
      <div className={style.item}>
        <img alt="" src="/images/member_tab/class/default_avatar.svg" />
        <div>
          <p>Abhishek Singh</p>
          <p className={style.index}>Index No. 1</p>
        </div>
      </div>
      <div className={style.item}>
        <img alt="" src="/images/member_tab/class/default_avatar.svg" />
        <div>
          <p>Abhishek Singh</p>
          <p className={style.index}>Index No. 1</p>
        </div>
      </div>
      <div className={style.item}>
        <img alt="" src="/images/member_tab/class/default_avatar.svg" />
        <div>
          <p>Abhishek Singh</p>
          <p className={style.index}>Index No. 1</p>
        </div>
      </div>
    </div>
  );
}

export default Employees;
