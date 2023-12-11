import React from "react";
import { useTranslation } from "react-i18next";
import style from "./AssignBookMember.module.css";
import moment from "moment";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import AssignBookMemberHeader from "./AssignBookMemberHeader";
import ItemBook from "./ItemBook";

const AssignIssuePreview = ({ member, book, onBack, step, onIssueBook }) => {
  const { t } = useTranslation();
  return (
    <>
      <AssignBookMemberHeader onBack={onBack} step={step} />

      <div className={style.issueBookk}>
        <h6>{t("member")}</h6>
        <div className={`${style.itembookk} ${style.bookmargin}`}>
          <img
            className={style.bluetick}
            src="/images/library/bluetick.svg"
            alt="verified"
          />
          <div className={style.issuedBookItemMidleft}>
            <div className={style.imgcontainer}>
              <img
                src={
                  member?.studentProfilePhoto
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
              {t("gr_no")} {member?.studentGRNO}
            </p>
          </div>
        </div>

        <h6>{t("book")}</h6>
        <ItemBook book={book} status="issueBook" />

        <h6 className={style.issuedDate}>
          {t("issue_date")} : <span>{moment().format("Do MMM YYYY")}</span>
        </h6>

        <button className={style.issuebtn} onClick={onIssueBook}>
          {t("issue_book")}
        </button>
      </div>
    </>
  );
};

export default AssignIssuePreview;
