import React, { useEffect, useState } from "react";
import style from "./AllBooks.module.css";
import { useTranslation } from "react-i18next";
import { useGetBooklist } from "../../../../../../hooks/member_tab/library-api";
import { useInView } from "react-intersection-observer";
import { debounce } from "lodash";
import { useCallback } from "react";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import LibraryBookCard from "../../../../../staff/Mainbody/LibraryHead/LibraryFunctions/AllBooks/LibraryBookCard";
function AllBooks({ onClose, lid, carryParentState }) {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [bookList, setBookList] = useState([]);

  const { getBooklist, getBookListRefetch } = useGetBooklist({
    data: {
      lid: lid,
      page: search ? 1 : refetchStatus ? 1 : page,
      limit: 10,
      search: search,
    },
    skip: !lid,
  });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (lid) {
      setShowingDataLoading(true);
      getBookListRefetch();
    }
  }, [page, lid, search, getBookListRefetch]);

  useEffect(() => {
    if (search) {
      setBookList(getBooklist?.books);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setBookList((prevState) =>
          [
            ...new Set(
              [...getBooklist?.books, ...prevState]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
        setRefetchStatus(false);
      } else {
        if (getBooklist?.books) {
          setBookList((prevState) =>
            [
              ...new Set(
                [...prevState, ...getBooklist?.books]?.map(JSON.stringify)
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getBooklist?.books?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getBooklist?.books?.length === 10) setState(true);
    else setState(false);
  }, [getBooklist?.books]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );
  const onSearch = (val) => {
    onDebounce(val);
  };
  return (
    <div className={style.addbookcontainer}>
      <div className={style.addbooktop}>
        <h6>{t("all_books")}</h6>
        <img src="/images/user_signup/close.svg" onClick={onClose} />
      </div>
      <div className={style.addbookbody}>
        <div
          className={style.searchContainer}
          style={{
            marginBottom: "1rem",
          }}
        >
          <img alt="" src="/images/search-dept-icon.svg" />
          <input
            type="text"
            onChange={(e) => onSearch(e.target.value)}
            placeholder={t("search-label")}
            required
          />
        </div>

        {/* <div className={style.itemsContainer}> */}
        {bookList?.map((book, index) =>
          bookList?.length === index + 1 ? (
            <div ref={ref} key={book?._id}>
              <LibraryBookCard
                book={book}
                viewAs="STUDENT"
                carryParentState={carryParentState}
              />
            </div>
          ) : (
            <LibraryBookCard
              key={book?._id}
              book={book}
              viewAs="STUDENT"
              carryParentState={carryParentState}
            />
          )
        )}
        {showingDataLoading && <QvipleLoading />}
        {/* </div> */}
      </div>
    </div>
  );
}

export default AllBooks;
