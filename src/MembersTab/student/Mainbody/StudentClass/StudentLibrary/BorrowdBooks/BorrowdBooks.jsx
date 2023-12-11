import React, { useState } from "react";
import style from "./BorrowdBooks.module.css";
import { useTranslation } from "react-i18next";
import { useGetMemberBookList } from "../../../../../../hooks/member_tab/library-api";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import IssuedBookItem from "../../../../../staff/Mainbody/LibraryHead/LibraryFunctions/IssuedBooks/IssuedBookItem";

function BorrowdBooks({ onClose, studentId }) {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [noMoreResults, setNoMoreResults] = useState(false);
  const [timeeout, setTimeeout] = useState(false);
  const [bookList, setBookList] = useState([]);
  const { getMemberBooklist, getMemberBookListRefetch } = useGetMemberBookList({
    data: {
      sid: studentId,
      page: page,
      limit: 10,
    },
  });

  useEffect(() => {
    if (getMemberBooklist) {
      if (getMemberBooklist?.student?.borrow?.length) {
        setBookList([...bookList, ...getMemberBooklist?.student?.borrow]);
      } else if (page > 1) {
        setNoMoreResults(true);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMemberBooklist]);

  useEffect(() => {
    if (inView) {
      if (!noMoreResults) {
        setPage(page + 1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    setTimeout(() => {
      setTimeeout(!timeeout);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.addbookcontainer}>
      <div className={style.addbooktop}>
        <h6>{t("borrowed_books")}</h6>
        <img src="/images/user_signup/close.svg" onClick={onClose} />
      </div>
      <div className={style.addbookbody}>
        <div className={style.membersContainer}>
          {bookList?.length > 0 ? (
            bookList?.map((book, index) => (
              <div key={index} ref={ref} className={style.itemsRef}>
                <IssuedBookItem
                  img="/images/library/book.svg"
                  author="Babasaheb Ambedkar"
                  title="The Power of Your Subconscious Mind"
                  booklang="Hindi"
                  memberName="Ankita jain"
                  grNo="00125462"
                  issueDate="22 Mar 2022"
                  status="studentMemberDetail"
                  book={book}
                  member={getMemberBooklist?.student}
                />
              </div>
            ))
          ) : bookList?.length === 0 && timeeout === true ? (
            <div className={style.noData}>
              <img src="/images/nodata.jpg" alt="" />
            </div>
          ) : (
            <div className={style.loader}>
              <img src="/images/loader-transperant.svg" alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BorrowdBooks;
