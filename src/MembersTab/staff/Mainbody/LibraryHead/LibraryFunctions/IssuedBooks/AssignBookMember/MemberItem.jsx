import React from "react";
import style from "./AssignBookMember.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";

function MemberItem({ student, onAddMember }) {
  const { t } = useTranslation();

  return (
    <div className={style.issuedBookItem} onClick={() => onAddMember(student)}>
      <div className={style.issuedBookItemMidleft}>
        <div className={style.imgcontainer}>
          <img
            src={
              student?.photoId !== "1"
                ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            alt=""
          />
        </div>
      </div>
      <div className={style.issuedBookItemMidright}>
        <h6>
          {`${student?.studentFirstName} ${
            student?.studentMiddleName ? student?.studentMiddleName : ""
          } ${student?.studentLastName}`}
        </h6>
        <p>
          {t("gr_no")} {student?.studentGRNO}
        </p>
      </div>
    </div>
  );
}

export default MemberItem;
