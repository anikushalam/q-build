import React from "react";
import style from "./CollectedLogs.module.css";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../services/BaseUrl";

function CollectLogItem({ status, book }) {
  const { t } = useTranslation();
  return (
    <div
      className={
        status === "memberdetail"
          ? `${style.collctLogItem} ${style.fullwidth}`
          : status === "memberStudentdetail"
          ? `${style.collctLogItem} ${style.disabled}`
          : style.collctLogItem
      }
    >
      <div className={style.collectLogItemTop}>
        <img
          className={style.bookItemImg}
          src={
            book?.book?.photoId !== "1" && book?.book?.photo !== ""
              ? `${imageShowUrl}/${book?.book?.photo}`
              : "/images/defaultBook.png"
          }
        />
        <div className={style.collectLogItemTopRight}>
          <h6>
            {" "}
            {book?.book?.bookName?.length >= 18
              ? `${book?.book?.bookName?.match(/.{1,18}/g)[0]} ...`
              : book?.book?.bookName}
          </h6>
          <div className={style.collectLogItemBottom}>
            <div className={style.collectLogItemBottomleft}>
              <p>{t("issue_date")}</p>
              <h6>{moment(book?.issuedDate).format("Do MMM YYYY")}</h6>
            </div>

            <div className={style.collectLogItemBottomleft}>
              <p>{t("rcv_date")}</p>
              <h6>{moment(book?.createdAt).format("Do MMM YYYY")}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectLogItem;
