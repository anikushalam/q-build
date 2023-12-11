import React from "react";
import style from "./StudentLibrary.module.css";
import { useTranslation } from "react-i18next";
import AllBooks from "./AllBooks/AllBooks";
import BookDetails from "../../../../staff/Mainbody/LibraryHead/LibraryFunctions/AllBooks/BookDetails/BookDetails";
import BorrowdBooks from "./BorrowdBooks/BorrowdBooks";
import HistoryBooks from "./HistoryBooks/HistoryBooks";
import StudentTabChangeLink from "../StudentTabChangeLink";
import { useLocation, useNavigate } from "react-router-dom";

function StudentLibrary({ lid, studentId, carryParentState }) {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const navigate = useNavigate();
  const onClose = () => {
    navigate(-1);
  };
  return (
    <>
      {getQuery?.search?.substring(3) === "library" && (
        <div className={style.studentLibrary}>
          <div className={style.item}>
            <StudentTabChangeLink
              carryParentState={carryParentState}
              activeTab="library&n=books"
            >
              <div className={style.itemIcon}>
                <img src="/images/library/all_books.svg" alt="Class Catalog" />
                <p>{t("all_books")}</p>
              </div>
            </StudentTabChangeLink>
            <StudentTabChangeLink
              carryParentState={carryParentState}
              activeTab="library&n=borrow"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/library/issued_books.svg"
                  alt="issued books"
                />
                <p>{t("borrowed_books")}</p>
              </div>
            </StudentTabChangeLink>
            <StudentTabChangeLink
              carryParentState={carryParentState}
              activeTab="library&n=history"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/library/collected_books.svg"
                  alt="collected logs"
                />
                <p>{t("history")}</p>
              </div>
            </StudentTabChangeLink>
          </div>
        </div>
      )}

      {getQuery?.search?.substring(13) === "books" && (
        <AllBooks
          lid={lid}
          onClose={onClose}
          carryParentState={carryParentState}
        />
      )}
      {getQuery?.search?.substring(21) === "detail" && (
        <BookDetails desig="student book details" />
      )}

      {getQuery?.search?.substring(13) === "borrow" && (
        <BorrowdBooks onClose={onClose} studentId={studentId} />
      )}

      {getQuery?.search?.substring(13) === "history" && (
        <HistoryBooks onClose={onClose} studentId={studentId} />
      )}
    </>
  );
}

export default StudentLibrary;
