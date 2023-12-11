import React from "react";
import style from "./IssuedBooks.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import moment from "moment";
import { useState } from "react";
import CollectModal from "./CollectModal/CollectModal";

function IssuedBookItem({
  status,
  book,
  issueId,
  member,
  onRefetchWhenBookCollect,
}) {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      className={
        status === "memberdetail"
          ? `${style.issuedBookItem} ${style.fullwidth}`
          : style.issuedBookItem
      }
    >
      <div className={style.issuedBookItemTop}>
        <div className={style.issuedBookItemTopleft}>
          <img
            className={style.bookItemImg}
            src={
              book?.book?.photo
                ? `${imageShowUrl}/${book?.book?.photo}`
                : "/images/defaultBook.png"
            }
          />
        </div>
        <div className={style.issuedBookItemTopright}>
          <h6 className={style.title}>
            {book?.book?.bookName?.length >= 18
              ? `${book?.book?.bookName?.match(/.{1,18}/g)[0]} ...`
              : book?.book?.bookName}
          </h6>
          <p className={style.author}>
            {book?.book?.author} &nbsp;
            <span className={style.authorLabel}>{t("author")}</span>
          </p>
          <p className={style.booklang}> {book?.book?.language}</p>
        </div>
      </div>
      <div className={style.issuedBookItemMid}>
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
            {" "}
            {`${member?.studentFirstName} ${
              member?.studentMiddleName ? member?.studentMiddleName : ""
            } ${member?.studentLastName}`}
          </h6>
          <p>
            {t("gr_no")} {member?.studentGRNO}{" "}
          </p>
        </div>
      </div>
      <div className={style.issuedBookItemBottom}>
        <div className={style.issuedBookItemBottomLeft}>
          <p>{t("issue_date")}:</p>
          <h6>{moment(book?.createdAt).format("Do MMM YYYY")}</h6>
        </div>
        {status !== "studentMemberDetail" && (
          <div className={style.collectbtn} onClick={() => setOpenModal(true)}>
            {t("collect")}
          </div>
        )}
      </div>

      {openModal && (
        <CollectModal
          open={openModal}
          hideModal={(w) => {
            setOpenModal(w);
          }}
          issueId={issueId}
          onRefetchWhenBookCollect={onRefetchWhenBookCollect}
        />
      )}
    </div>
  );
}

export default IssuedBookItem;
