import React from "react";
import style from "./MemberItem.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../services/BaseUrl";

function MemberItem({ member }) {
  const { t } = useTranslation();

  return (
    <div className={style.memberItem}>
      <div className={style.issuedBookItemMidleft}>
        <div className={style.imgcontainer}>
          <img
            src={
              member?.student?.photoId !== "1"
                ? `${imageShowUrl}/${member?.student?.studentProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            alt=""
          />
        </div>
        <div className={style.issuedBookItemMidright}>
          <h6>
            {`${member?.student?.studentFirstName} ${
              member?.student?.studentMiddleName
                ? member?.student?.studentMiddleName
                : ""
            } ${member?.student?.studentLastName}`}
          </h6>
          <p>
            {t("gr_no")} : {member?.student?.studentGRNO}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MemberItem;
