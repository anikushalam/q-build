import style from "./Item.module.css";
import React from "react";

function Item({ data, Switch, id, setAnnId }) {
  return (
    <div
      className={style.item}
      onClick={() => {
        setAnnId(data && data._id);
        Switch(true);
      }}
    >
      <div className={style.head}>
        <img src="/images/member_tab/class/default_avatar.svg" alt="" />
        <div className={style.text}>
          <h6>{data && data?.institute.name}</h6>
          <p>
            {data?.createdAt} | {data?.createdAt}
          </p>
        </div>
      </div>

      <div className={style.content}>
        <p>{data?.insAnnDescription}</p>
      </div>
      <img
        className={style.bookmark}
        src="/images/bookmark-yellow.svg"
        alt=""
      />
    </div>
  );
}

export default Item;
