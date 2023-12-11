import React from "react";
import style from "./AllBooks.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import LibraryTabChnageLink from "../../LibraryTabChnageLink";
import StudentTabChangeLink from "../../../../../student/Mainbody/StudentClass/StudentTabChangeLink";
import InstituteLibraryTabChangeLink from "../../../../../../Library/Institute/InsLibraryMain/InstituteLibraryTabChangeLink";
function BookItem({
  author,
  title,
  booklang,
  bookPhoto,
  book,
  viewAs,
  carryParentState,
}) {
  const { t } = useTranslation();

  return (
    <>
      {viewAs === "STUDENT" ? (
        <StudentTabChangeLink
          carryParentState={{ ...carryParentState, bid: book?._id }}
          activeTab="library&n=books&n=detail"
          // customStyle={{ width: "19%" }}
        >
          <div className={style.bookItem}>
            <img
              className={style.bookItemImg}
              src={
                bookPhoto
                  ? `${imageShowUrl}/${bookPhoto}`
                  : "/images/defaultBook.png"
              }
            />
            <h6 className={style.title}>
              {title?.length >= 18
                ? `${title?.match(/.{1,18}/g)[0]} ...`
                : title}
            </h6>
            <p className={style.author}>
              {" "}
              {author?.length >= 16
                ? `${author?.match(/.{1,16}/g)[0]} ...`
                : author}{" "}
            </p>
            <p className={style.authorLabel}> {t("author")} </p>
            <p className={style.booklang}> {booklang}</p>

            {book?.bookStatus === "Online" ? (
              <div className={`${style.status} ${style.online}`}>
                {t("online")}
              </div>
            ) : (
              <div className={`${style.status} ${style.offline}`}>
                {t("offline")}
              </div>
            )}
          </div>
        </StudentTabChangeLink>
      ) : viewAs === "INSTITUTE" ? (
        <InstituteLibraryTabChangeLink
          carryParentState={{ ...carryParentState, bid: book?._id }}
          activeTab="?a=book&n=detail"
          // customStyle={{ width: "19%" }}
        >
          <div className={style.bookItem}>
            <img
              className={style.bookItemImg}
              src={
                bookPhoto
                  ? `${imageShowUrl}/${bookPhoto}`
                  : "/images/defaultBook.png"
              }
            />
            <h6 className={style.title}>
              {title?.length >= 18
                ? `${title?.match(/.{1,18}/g)[0]} ...`
                : title}
            </h6>
            <p className={style.author}>
              {" "}
              {author?.length >= 16
                ? `${author?.match(/.{1,16}/g)[0]} ...`
                : author}{" "}
            </p>
            <p className={style.authorLabel}> {t("author")} </p>
            <p className={style.booklang}> {booklang}</p>

            {book?.bookStatus === "Online" ? (
              <div className={`${style.status} ${style.online}`}>
                {t("online")}
              </div>
            ) : (
              <div className={`${style.status} ${style.offline}`}>
                {t("offline")}
              </div>
            )}
          </div>
        </InstituteLibraryTabChangeLink>
      ) : (
        <LibraryTabChnageLink
          carryParentState={{ ...carryParentState, bid: book?._id }}
          activeTab="book&n=detail"
          // customStyle={{ width: "19%" }}
        >
          <div className={style.bookItem}>
            <img
              className={style.bookItemImg}
              src={
                bookPhoto
                  ? `${imageShowUrl}/${bookPhoto}`
                  : "/images/defaultBook.png"
              }
            />
            <h6 className={style.title}>
              {title?.length >= 18
                ? `${title?.match(/.{1,18}/g)[0]} ...`
                : title}
            </h6>
            <p className={style.author}>
              {" "}
              {author?.length >= 16
                ? `${author?.match(/.{1,16}/g)[0]} ...`
                : author}{" "}
            </p>
            <p className={style.authorLabel}> {t("author")} </p>
            <p className={style.booklang}> {booklang}</p>

            {book?.bookStatus === "Online" ? (
              <div className={`${style.status} ${style.online}`}>
                {t("online")}
              </div>
            ) : (
              <div className={`${style.status} ${style.offline}`}>
                {t("offline")}
              </div>
            )}
          </div>
        </LibraryTabChnageLink>
      )}
    </>
  );
}

export default BookItem;
