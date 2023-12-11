import React from "react";
import style from "./LibraryMembers.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../services/BaseUrl";

function MemberItem({ index, member, setMid, mid }) {
  const { t } = useTranslation();
  return (
    <div
      className={
        member?._id === mid
          ? `${style.memberItem} ${style.memberItemactive}`
          : style.memberItem
      }
      onClick={() => setMid(member?._id)}
    >
      <div className={style.issuedBookItemMidleft}>
        <div className={style.imgcontainer}>
          <img
            src={
              member?.photoId !== "1"
                ? `${imageShowUrl}/${member?.studentProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            alt=""
          />
        </div>
      </div>
      <div className={style.issuedBookItemMidright}>
        <h6>
          {`${member?.studentFirstName} ${
            member?.studentMiddleName ? member?.studentMiddleName : ""
          } ${member?.studentLastName}`}
        </h6>
        <p>
          {t("index_no")} : {index}{" "}
        </p>
      </div>
    </div>
  );
}

export default MemberItem;
