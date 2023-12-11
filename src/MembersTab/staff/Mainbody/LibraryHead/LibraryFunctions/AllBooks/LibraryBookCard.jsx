import React from "react";
import style from "./LibraryBookCard.module.css";
import { useTranslation } from "react-i18next";
import StudentTabChangeLink from "../../../../../student/Mainbody/StudentClass/StudentTabChangeLink";
import InstituteLibraryTabChangeLink from "../../../../../../Library/Institute/InsLibraryMain/InstituteLibraryTabChangeLink";
import LibraryTabChnageLink from "../../LibraryTabChnageLink";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
const LibraryBookCard = ({ book, carryParentState, viewAs }) => {
  const { t } = useTranslation();

  return (
    <>
      {viewAs === "STUDENT" ? (
        <StudentTabChangeLink
          carryParentState={{ ...carryParentState, bid: book?._id }}
          activeTab="library&n=books&n=detail"
          // customStyle={{ width: "19%" }}
        >
          <div className={style.book_card}>
            <div className={style.book_header}>
              <div
                className={style.book_header_inner}
                style={{
                  width: "60%",
                }}
              >
                <img
                  src={
                    book?.photo
                      ? `${imageShowUrl}/${book?.photo}`
                      : "/images/defaultBook.png"
                  }
                />
                <div className={style.book_header_inner_text}>
                  <h6>
                    {t("book_name")} {" : "}
                    {book?.bookName?.length >= 50
                      ? `${book?.bookName?.match(/.{1,50}/g)[0]} ...`
                      : book?.bookName}
                  </h6>
                  <div>
                    {t("author_label")} {" : "}
                    {book?.author?.length >= 50
                      ? `${book?.author?.match(/.{1,50}/g)[0]} ...`
                      : book?.author}{" "}
                  </div>
                  <div>
                    {t("subject_only")} {" : "}
                    {book?.subject?.length >= 50
                      ? `${book?.subject?.match(/.{1,50}/g)[0]} ...`
                      : book?.subject}{" "}
                  </div>
                  <div>
                    {t("mode")} {" : "}
                    <span
                      style={{
                        color:
                          book?.bookStatus === "Online" ? "#20b038" : "#e95f28",
                      }}
                    >
                      {book?.bookStatus}
                    </span>
                  </div>
                  <div>
                    {t("language")} {" : "}
                    <span
                      style={{
                        color: "#f4900c",
                      }}
                    >
                      {book?.language}{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={style.book_header_inner_text}
                style={{
                  width: "40%",
                }}
              >
                <h6>
                  {t("book_id")} {" : "}
                  {book?.book_id?.length >= 50
                    ? `${book?.book_id?.match(/.{1,50}/g)[0]} ...`
                    : book?.book_id}
                </h6>
                <h6>
                  {t("ssn_number")} {" : "}
                  {book?.accession_number ?? ""}{" "}
                </h6>
                <div>
                  {t("publisher_place")} {" : "}
                  {book?.publisher_place?.length >= 50
                    ? `${book?.publisher_place?.match(/.{1,50}/g)[0]} ...`
                    : book?.publisher_place}{" "}
                </div>
                <div>
                  {t("publisher_year")} {" : "}
                  {book?.publication_year?.length >= 50
                    ? `${book?.publication_year?.match(/.{1,50}/g)[0]} ...`
                    : book?.publication_year}{" "}
                </div>
                <div>
                  {t("publication")} {" : "}
                  {book?.publication}
                </div>
              </div>
            </div>
          </div>
        </StudentTabChangeLink>
      ) : viewAs === "INSTITUTE" ? (
        <InstituteLibraryTabChangeLink
          carryParentState={{ ...carryParentState, bid: book?._id }}
          activeTab="?a=book&n=detail"
          // customStyle={{ width: "19%" }}
        >
          <div className={style.book_card}>
            <div className={style.book_header}>
              <div
                className={style.book_header_inner}
                style={{
                  width: "60%",
                }}
              >
                <img
                  src={
                    book?.photo
                      ? `${imageShowUrl}/${book?.photo}`
                      : "/images/defaultBook.png"
                  }
                />
                <div className={style.book_header_inner_text}>
                  <h6>
                    {t("book_name")} {" : "}
                    {book?.bookName?.length >= 50
                      ? `${book?.bookName?.match(/.{1,50}/g)[0]} ...`
                      : book?.bookName}
                  </h6>
                  <div>
                    {t("author_label")} {" : "}
                    {book?.author?.length >= 50
                      ? `${book?.author?.match(/.{1,50}/g)[0]} ...`
                      : book?.author}{" "}
                  </div>
                  <div>
                    {t("subject_only")} {" : "}
                    {book?.subject?.length >= 50
                      ? `${book?.subject?.match(/.{1,50}/g)[0]} ...`
                      : book?.subject}{" "}
                  </div>
                  <div>
                    {t("mode")} {" : "}
                    <span
                      style={{
                        color:
                          book?.bookStatus === "Online" ? "#20b038" : "#e95f28",
                      }}
                    >
                      {book?.bookStatus}
                    </span>
                  </div>
                  <div>
                    {t("language")} {" : "}
                    <span
                      style={{
                        color: "#f4900c",
                      }}
                    >
                      {book?.language}{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={style.book_header_inner_text}
                style={{
                  width: "40%",
                }}
              >
                <h6>
                  {t("book_id")} {" : "}
                  {book?.book_id?.length >= 50
                    ? `${book?.book_id?.match(/.{1,50}/g)[0]} ...`
                    : book?.book_id}
                </h6>
                <h6>
                  {t("ssn_number")} {" : "}
                  {book?.accession_number ?? ""}{" "}
                </h6>
                <div>
                  {t("publisher_place")} {" : "}
                  {book?.publisher_place?.length >= 50
                    ? `${book?.publisher_place?.match(/.{1,50}/g)[0]} ...`
                    : book?.publisher_place}{" "}
                </div>
                <div>
                  {t("publisher_year")} {" : "}
                  {book?.publication_year?.length >= 50
                    ? `${book?.publication_year?.match(/.{1,50}/g)[0]} ...`
                    : book?.publication_year}{" "}
                </div>
                <div>
                  {t("publication")} {" : "}
                  {book?.publication}
                </div>
              </div>
            </div>
          </div>
        </InstituteLibraryTabChangeLink>
      ) : (
        <LibraryTabChnageLink
          carryParentState={{ ...carryParentState, bid: book?._id }}
          activeTab="book&n=detail"
          // customStyle={{ width: "19%" }}
        >
          <div className={style.book_card}>
            <div className={style.book_header}>
              <div
                className={style.book_header_inner}
                style={{
                  width: "60%",
                }}
              >
                <img
                  src={
                    book?.photo
                      ? `${imageShowUrl}/${book?.photo}`
                      : "/images/defaultBook.png"
                  }
                />
                <div className={style.book_header_inner_text}>
                  <h6>
                    {t("book_name")} {" : "}
                    {book?.bookName?.length >= 50
                      ? `${book?.bookName?.match(/.{1,50}/g)[0]} ...`
                      : book?.bookName}
                  </h6>
                  <div>
                    {t("author_label")} {" : "}
                    {book?.author?.length >= 50
                      ? `${book?.author?.match(/.{1,50}/g)[0]} ...`
                      : book?.author}{" "}
                  </div>
                  <div>
                    {t("subject_only")} {" : "}
                    {book?.subject?.length >= 50
                      ? `${book?.subject?.match(/.{1,50}/g)[0]} ...`
                      : book?.subject}{" "}
                  </div>
                  <div>
                    {t("mode")} {" : "}
                    <span
                      style={{
                        color:
                          book?.bookStatus === "Online" ? "#20b038" : "#e95f28",
                      }}
                    >
                      {book?.bookStatus}
                    </span>
                  </div>
                  <div>
                    {t("language")} {" : "}
                    <span
                      style={{
                        color: "#f4900c",
                      }}
                    >
                      {book?.language}{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={style.book_header_inner_text}
                style={{
                  width: "40%",
                }}
              >
                <h6>
                  {t("book_id")} {" : "}
                  {book?.book_id?.length >= 50
                    ? `${book?.book_id?.match(/.{1,50}/g)[0]} ...`
                    : book?.book_id}
                </h6>
                <h6>
                  {t("ssn_number")} {" : "}
                  {book?.accession_number ?? ""}{" "}
                </h6>
                <div>
                  {t("publisher_place")} {" : "}
                  {book?.publisher_place?.length >= 50
                    ? `${book?.publisher_place?.match(/.{1,50}/g)[0]} ...`
                    : book?.publisher_place}{" "}
                </div>
                <div>
                  {t("publisher_year")} {" : "}
                  {book?.publication_year?.length >= 50
                    ? `${book?.publication_year?.match(/.{1,50}/g)[0]} ...`
                    : book?.publication_year}{" "}
                </div>
                <div>
                  {t("publication")} {" : "}
                  {book?.publication}
                </div>
              </div>
            </div>
          </div>
        </LibraryTabChnageLink>
      )}
    </>
  );
};

export default LibraryBookCard;
