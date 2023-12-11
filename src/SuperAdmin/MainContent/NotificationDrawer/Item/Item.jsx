import React from "react";
import { imageShowUrl } from "../../../../services/BaseUrl";
import style from "./Item.module.css";
import moment from 'moment'

function Item({ key, nData }) {
  return (
    <div className={style.eachItem} key={key}>
      <div className={style.eachItemleft}>
        <img src={
          nData?.notifyByInsPhoto?.photoId !== '1' 
          ? `${imageShowUrl}/${nData?.notifyByInsPhoto?.insProfilePhoto}`
          : "/images/ins_default_profile.svg" 
        }
        alt="Institute Avatar" />
        <p>{nData?.notifyContent}</p>
      </div>
      <div className={style.text}>
        <p>{moment(nData?.createdAt).format('LT')}</p>
      </div>
    </div>
  );
}

export default Item;
