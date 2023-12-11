import style from "./Item.module.css";
import React from "react";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import { useTranslation } from "react-i18next";

function Item({ data, followBack }) {
  const { t } = useTranslation();
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
          <p>{t("startrd_following")}</p>
        </div>
      </>
      {followBack === "true" && (
        <div className={style.btn}>{t("followBack")}</div>
      )}
    </div>
  );
}

export default Item;
