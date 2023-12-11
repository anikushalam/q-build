import React from "react";
import {
  fileShowUrl,
  imageShowUrl,
} from "../../../../../../../services/BaseUrl";
import style from "./BookDetails.module.css";
import { useTranslation } from "react-i18next";
import LibraryTabChnageLink from "../../../LibraryTabChnageLink";
import InstituteLibraryTabChangeLink from "../../../../../../../Library/Institute/InsLibraryMain/InstituteLibraryTabChangeLink";

function BookDetailsItem({
  book,
  onBackClick,
  status,
  onCollectBackClick,
  onStudentBackClick,
  carryParentState,
  pageOpenAs,
}) {
  const { t } = useTranslation();

  return (
    <>
      {status === "bookDetails" ? (
        <div className={style.addbookcontainer}>
          <div className={style.addbooktop}>
            <img src="/images/back.svg" onClick={onBackClick} />
            <h6>{t("book_details")}</h6>
            {pageOpenAs === "INSTITUTE" ? (
              <InstituteLibraryTabChangeLink
                carryParentState={{
                  ...carryParentState,
                  bid: book?._id,
                  book: book,
                }}
                activeTab="?a=book&n=edit"
                // customStyle={{ width: "19%" }}
              >
                <img src="/images/library/edit_.svg" />
              </InstituteLibraryTabChangeLink>
            ) : (
              <LibraryTabChnageLink
                carryParentState={{
                  ...carryParentState,
                  bid: book?._id,
                  book: book,
                }}
                activeTab="book&n=edit"
                // customStyle={{ width: "19%" }}
              >
                <img src="/images/library/edit_.svg" />
              </LibraryTabChnageLink>
            )}
          </div>

          <div className={style.addbookbody}>
            <div className={style.addbookbodyright}>
              <div className={style.bookItemImgContainer}>
                <img
                  className={style.bookItemImg}
                  src={
                    book?.photo
                      ? `${imageShowUrl}/${book?.photo}`
                      : "/images/defaultBook.png"
                  }
                />
              </div>
            </div>
            <div className={style.addbookbodyleft}>
              <h3 className={style.bookTitle}>{book?.bookName}</h3>
              <p className={style.bookby}>
                {t("by_")} &nbsp;
                <span>{book?.author}</span>
              </p>

              <p className={style.booklang}>{book?.language}</p>
              <p
                className={
                  book?.bookStatus === "Online"
                    ? style.bookstatus
                    : `${style.bookstatus} ${style.bookstatusoffline}`
                }
              >
                {book?.bookStatus}
              </p>
            </div>
          </div>

          <div className={style.addbookbodybottom}>
            <div className={style.viewRow}>
              {book?.book_id && (
                <div>
                  <p className={style.viewRowp}>{t("book_id")}</p>
                  <h6 className={style.viewRowh6}> {book?.book_id}</h6>
                </div>
              )}
              {book?.subject && (
                <div>
                  <p className={style.viewRowp}>{t("subject_only")}</p>
                  <h6 className={style.viewRowh6}> {book?.subject}</h6>
                </div>
              )}
              {book?.ssn_number && (
                <div>
                  <p className={style.viewRowp}>{t("ssn_number")}</p>
                  <h6 className={style.viewRowh6}> {book?.ssn_number}</h6>
                </div>
              )}
              {book?.publisher_place && (
                <div>
                  <p className={style.viewRowp}>{t("publisher_place")}</p>
                  <h6 className={style.viewRowh6}> {book?.publisher_place}</h6>
                </div>
              )}
              {book?.publisher_year && (
                <div>
                  <p className={style.viewRowp}>{t("publisher_year")}</p>
                  <h6 className={style.viewRowh6}> {book?.publisher_year}</h6>
                </div>
              )}
              {book?.publication && (
                <div>
                  <p className={style.viewRowp}>{t("publication")}</p>
                  <h6 className={style.viewRowh6}> {book?.publication}</h6>
                </div>
              )}
              {book?.totalPage && (
                <div>
                  <p className={style.viewRowp}>{t("total_page")}</p>
                  <h6 className={style.viewRowh6}>{book?.totalPage}</h6>
                </div>
              )}
              {book?.price && (
                <div>
                  <p className={style.viewRowp}>{t("price")}</p>
                  <h6 className={style.viewRowh6}>{book?.price}</h6>
                </div>
              )}

              {book?.totalCopies && book?.bookStatus === "Offline" && (
                <div>
                  <p className={style.viewRowp}>{t("total_copies")}</p>
                  <h6 className={style.viewRowh6}> {book?.totalCopies}</h6>
                </div>
              )}
              {book?.leftCopies && book?.bookStatus === "Offline" && (
                <div>
                  <p className={style.viewRowp}>{t("leftCopies")}</p>
                  <h6 className={style.viewRowh6}>{book?.leftCopies}</h6>
                </div>
              )}
              {book?.shellNumber && book?.bookStatus === "Offline" && (
                <div>
                  <p className={style.viewRowp}>{t("shell_number")}</p>
                  <h6 className={style.viewRowh6}>{book?.shellNumber}</h6>
                </div>
              )}

              {book?.attachment[0]?.documentName &&
                book?.bookStatus === "Online" && (
                  <div className={style.pdfdivcontainer}>
                    <p className={style.viewRowp}>{t("attachment")}</p>
                    <div className={style.pdfdiv}>
                      <img src="/images/chat/pdf-icon.svg" alt="" />

                      <h6 className={`${style.viewRowh6} ${style.pdfh6}`}>
                        {`${book?.attachment[0]?.documentName}`}
                      </h6>
                    </div>
                  </div>
                )}
            </div>

            {book?.description && (
              <div className={style.viewRowfull}>
                <p className={style.viewRowp}>{t("description")}</p>
                <h6 className={style.desh6}> {book?.description}</h6>
              </div>
            )}

            {book?.bookStatus === "Online" && book?.attachment?.length > 0 && (
              <a
                href={`${fileShowUrl}/${book?.attachment[0]?.documentKey}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={style.downloadbtn}>{t("view")}</div>
              </a>
            )}
          </div>
        </div>
      ) : status === "student book details" ? (
        <div className={style.addbookcontainer}>
          <div className={style.addbooktop}>
            <img src="/images/back.svg" onClick={onStudentBackClick} />
            <h6>{t("book_details")}</h6>
            <div />
          </div>

          <div className={style.addbookbody}>
            <div className={style.addbookbodyright}>
              <div className={style.bookItemImgContainer}>
                <img
                  className={style.bookItemImg}
                  src={
                    book?.photoId !== "1"
                      ? `${imageShowUrl}/${book?.photo}`
                      : "/images/defaultBook.png"
                  }
                />
              </div>
            </div>
            <div className={style.addbookbodyleft}>
              <h3 className={style.bookTitle}>{book?.bookName}</h3>
              <p className={style.bookby}>
                {t("by_")} &nbsp;
                <span>{book?.author}</span>
              </p>

              <p className={style.booklang}>{book?.language}</p>
              <p
                className={
                  book?.bookStatus === "Online"
                    ? style.bookstatus
                    : `${style.bookstatus} ${style.bookstatusoffline}`
                }
              >
                {book?.bookStatus}
              </p>
            </div>
          </div>

          <div className={style.addbookbodybottom}>
            <div className={style.viewRow}>
              {book?.publication && (
                <div>
                  <p className={style.viewRowp}>{t("publication")}</p>
                  <h6 className={style.viewRowh6}> {book?.publication}</h6>
                </div>
              )}
              {book?.totalPage && (
                <div>
                  <p className={style.viewRowp}>{t("total_page")}</p>
                  <h6 className={style.viewRowh6}>{book?.totalPage}</h6>
                </div>
              )}
              {book?.price && (
                <div>
                  <p className={style.viewRowp}>{t("price")}</p>
                  <h6 className={style.viewRowh6}>{book?.price}</h6>
                </div>
              )}

              {book?.totalCopies && book?.bookStatus === "Offline" && (
                <div>
                  <p className={style.viewRowp}>{t("total_copies")}</p>
                  <h6 className={style.viewRowh6}> {book?.totalCopies}</h6>
                </div>
              )}
              {book?.leftCopies && book?.bookStatus === "Offline" && (
                <div>
                  <p className={style.viewRowp}>{t("leftCopies")}</p>
                  <h6 className={style.viewRowh6}>{book?.leftCopies}</h6>
                </div>
              )}
              {book?.shellNumber && book?.bookStatus === "Offline" && (
                <div>
                  <p className={style.viewRowp}>{t("shell_number")}</p>
                  <h6 className={style.viewRowh6}>{book?.shellNumber}</h6>
                </div>
              )}

              {book?.attachment[0]?.documentName &&
                book?.bookStatus === "Online" && (
                  <div className={style.pdfdivcontainer}>
                    <p className={style.viewRowp}>{t("attachment")}</p>
                    <div className={style.pdfdiv}>
                      <img src="/images/chat/pdf-icon.svg" alt="" />

                      <h6 className={`${style.viewRowh6} ${style.pdfh6}`}>
                        {`${book?.attachment[0]?.documentName}`}
                      </h6>
                    </div>
                  </div>
                )}
            </div>

            {book?.description && (
              <div className={style.viewRowfull}>
                <p className={style.viewRowp}>{t("description")}</p>
                <h6 className={style.desh6}> {book?.description}</h6>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={style.addbookcontainer}>
          <div className={style.addbooktop}>
            <img src="/images/back.svg" onClick={onCollectBackClick} />
            <h6>{t("book_details")}</h6>
            <div />
          </div>
          <div className={style.addbookbody}>
            <div className={style.addbookbodyright}>
              <div className={style.bookItemImgContainer}>
                <img
                  className={style.bookItemImg}
                  src={
                    book?.photoId !== "1" && book?.photo !== ""
                      ? `${imageShowUrl}/${book?.photo}`
                      : "/images/defaultBook.png"
                  }
                />
              </div>
            </div>
            <div className={style.addbookbodyleft}>
              <h3 className={style.bookTitle}>{book?.bookName}</h3>
              <p className={style.bookby}>
                {t("by_")} &nbsp;
                <span>{book?.author}</span>
              </p>

              <p className={style.booklang}>{book?.language}</p>
              <p
                className={
                  book?.bookStatus === "Online"
                    ? style.bookstatus
                    : `${style.bookstatus} ${style.bookstatusoffline}`
                }
              >
                {book?.bookStatus}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BookDetailsItem;
