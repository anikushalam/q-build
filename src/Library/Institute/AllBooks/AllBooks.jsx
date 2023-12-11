import React, { useEffect } from "react";
import style from "../InsLibraryMain/InsLibraryMain.module.css";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import BookItem from "../../../MembersTab/staff/Mainbody/LibraryHead/LibraryFunctions/AllBooks/BookItem";
import { useState } from "react";
import { useGetBooklist } from "../../../hooks/member_tab/library-api";

function AllBooks({ libraryId, setStatus }) {
  const [ref, inView] = useInView();
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [noMoreResults, setNoMoreResults] = useState(false);
  const [timeeout, setTimeeout] = useState(false);
  const [bookList, setBookList] = useState([]);
  const { getBooklist, getBookListRefetch } = useGetBooklist({
    data: {
      lid: libraryId,
      page: page,
      limit: 10,
      search: search,
    },
    skip: !libraryId,
  });

  useEffect(() => {
    if (getBooklist) {
      if (getBooklist?.books?.length) {
        setBookList([...bookList, ...getBooklist?.books]);
      } else if (page > 1) {
        setNoMoreResults(true);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getBooklist]);

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

  const handleSearch = (e) => {
    setBookList([]);
    setPage(1);
    setSearch(e.target.value);
  };

  // console.info(bookList);
  return (
    <div className={style.itemsContainer}>
      {bookList?.length > 0 ? (
        bookList?.map((book, index) => (
          <div key={index} ref={ref} className={style.itemref}>
            <BookItem
              img="/images/library/book.svg"
              author={book?.author}
              title={book?.bookName}
              booklang={book?.language}
              status={book?.bookStatus}
              bookPhotoId={book?.photoId}
              bookPhoto={book?.photo}
              book={book}
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
  );
}

export default AllBooks;
