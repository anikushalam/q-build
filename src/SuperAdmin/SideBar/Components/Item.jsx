import React from "react";
import style from "./Item.module.css";

function Item({ img, name, logout }) {
  return (
    <>
    {name === 'Logout' ? 
    <div className={style.item} onClick={logout}>
      <img alt="img" src={img} />
      <h6>{name}</h6>
    </div>
    : 
    <div className={style.item}>
      <img alt="img" src={img} />
      <h6>{name}</h6>
    </div>
    }
    </>
  );
}

export default Item;
