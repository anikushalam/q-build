import React from "react";
import { imageShowUrl } from "../../../services/BaseUrl";
import style from "./Item.module.css";

function Item({ staff, status }) {
  return (
    <div className={style.listItem}>
      <div className={style.listItemLeft}>
        <p>{staff?.staffROLLNO}.</p>
        <img
          src={
            staff?.photoId !== "1"
              ? `${imageShowUrl}/${staff?.staffProfilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
          }
          loading="lazy"
          alt=""
        />
        <p>{`${staff?.staffFirstName} ${
          staff?.staffMiddleName ? staff?.staffMiddleName : ""
        } ${staff?.staffLastName}`}</p>
      </div>
      <div className={style.listItemRight}>
        {!staff?.staffLeave?.length ? (
          status === "present" ? (
            <img src="/images/members/radio-btn-green.svg" alt="" />
          ) : status === "absent" ? (
            <img src="/images/members/radio-btn-red.svg" alt="" />
          ) : (
            <img src="/images/members/radio-btn.svg" alt="" />
          )
        ) : (
          <img src="/images/members/radio-btn.svg" alt="" />
        )}
      </div>
    </div>
  );
}

export default Item;
