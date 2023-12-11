import style from "./Item.module.css";
import React from "react";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";

function Item({ data, followBack }) {
  return (
    <div className={style.item}>
      <>
        <img
          src={
            data?.photoId !== "1"
              ? `${imageShowUrl}/${
                  data && data.insProfilePhoto
                    ? data.insProfilePhoto
                    : data.profilePhoto
                    ? data.profilePhoto
                    : ""
                }`
              : "/images/ins_default_profile.svg"
          }
          alt=""
        />
        <div className={style.text}>
          <h6>
            {data && data.name ? data.name : data.username ? data.username : ""}
          </h6>
          <p>has started to following you</p>
        </div>
      </>
      {followBack === "true" && <div className={style.btn}>followBack</div>}
    </div>
  );
}

export default Item;
