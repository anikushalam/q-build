import style from "./Item.module.css";
import React from "react";
import moment from "moment";

function Item({ admin, notification }) {
  return admin ? (
    <div className={style.eachItem}>
      <div className={style.eachItemleft}>
        <img src="/images/career/newLogo.svg" alt="" />
        <p>Qviple {notification?.notifyContent}</p>
      </div>
      <div className={style.text}>
        <p>{moment(notification?.notifyTime).format("LT")}</p>
      </div>
    </div>
  ) : (
    <div className={style.eachItem}>
      <div className={style.eachItemleft}>
        <img src="/images/avatar-icon.png" alt="" />
        <p className={style.textlast}>{notification?.notifyContent}</p>
      </div>
      <div className={`${style.text} `}>
        <p>{moment(notification?.notifyTime).format("LT")}</p>
      </div>
    </div>
  );
}

export default Item;
