import React from "react";
import style from "./AssignBookMember.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";

function ItemBook({ book, status, onAddBook }) {
  const { t } = useTranslation();

  const handleIndexChange = () => {
    if (status === "selectbook") {
      onAddBook(book);
    }
  };

  return (
    <div
      className={
        status !== "issueBook"
          ? `${style.itembookk} ${style.itembookcursor}`
          : style.itembookk
      }
      onClick={handleIndexChange}
    >
      {status === "issueBook" && (
        <img
          className={style.bluetick}
          src="/images/library/bluetick.svg"
          alt="verified"
        />
      )}
      <p className={style.selectedText}>{book?.language}</p>
      <img
        src={
          book?.photo
            ? `${imageShowUrl}/${book?.photo}`
            : "/images/defaultBook.png"
        }
        alt=""
      />
      <div className={style.textt}>
        <h6>{book?.bookName}</h6>
        <p className={style.author}>
          {book?.author} &nbsp;
          <span className={style.authorLabel}>{t("author")}</span>
        </p>
      </div>
    </div>
  );
}

export default ItemBook;
