import React from "react";
import style from "../FineHistory/FineHistory.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../services/BaseUrl";

function MemberItem({ member }) {
  const { t } = useTranslation();

  return (
    <div className={style.memberItem}>
      <div className={style.issuedBookItemMidleft}>
        <div className={style.imgcontainer}>
          <img
            src={
              member?.member?.photoId !== "1"
                ? `${imageShowUrl}/${member?.member?.studentProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            alt=""
          />
        </div>
        <div className={style.issuedBookItemMidright}>
          <h6>
            {`${member?.member?.studentFirstName} ${
              member?.member?.studentMiddleName
                ? member?.member?.studentMiddleName
                : ""
            } ${member?.member?.studentLastName}`}
          </h6>
          <p>
            {t("index_no")} : {member?.member?.studentGRNO}{" "}
          </p>
        </div>
      </div>
      <div className={`${style.issuedBookItemMidright} ${style.textalign}`}>
        <h6>{`Rs. ${member?.fineCharge}`}</h6>
        <p>{t("fine_amt")} </p>
      </div>
    </div>
  );
}

export default MemberItem;
