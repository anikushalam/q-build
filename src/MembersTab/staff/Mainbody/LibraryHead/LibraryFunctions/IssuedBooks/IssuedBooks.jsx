import React, { useState } from "react";
import style from "./IssuedBooks.module.css";
import { useTranslation } from "react-i18next";
import IssuedBookItem from "./IssuedBookItem";
// import IssueBookModal from "./IssueBookModal/IssueBookModal";
import { useInView } from "react-intersection-observer";
import { useGetIssuedBooklist } from "../../../../../../hooks/member_tab/library-api";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import AssignBookMember from "./AssignBookMember/AssignBookMember";

function IssuedBooks({ insId }) {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [bookList, setBookList] = useState([]);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const lid = useSelector((state) => state.libraryChange.lid);
  const { getIssuedBooklist, getIssuedBookListRefetch } = useGetIssuedBooklist({
    data: {
      lid: lid,
      page: page,
      limit: 10,
    },
    skip: !lid,
  });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (lid) {
      setShowingDataLoading(true);
      getIssuedBookListRefetch();
    }
  }, [page, lid, getIssuedBookListRefetch]);

  useEffect(() => {
    if (getIssuedBooklist?.issues) {
      if (refetchStatus) {
        setBookList(getIssuedBooklist?.issues);
        setShowingDataLoading(false);
        setRefetchStatus(false);
      } else {
        if (getIssuedBooklist?.issues) {
          setBookList((prevState) =>
            [
              ...new Set(
                [...prevState, ...getIssuedBooklist?.issues]?.map(
                  JSON.stringify
                )
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getIssuedBooklist?.issues?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getIssuedBooklist?.issues?.length === 10) setState(true);
    else setState(false);
  }, [getIssuedBooklist?.issues]);

  const onRefetchWhenBookIssue = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getIssuedBookListRefetch();
  };
  return (
    <>
      <div className={style.searchContainerr}>
        <div className={style.searchContainer}>
          <img alt="" src="/images/search-dept-icon.svg" />
          <input type="text" placeholder={t("search-label")} required />
        </div>
        <div className={style.newBtn} onClick={() => setOpenModal(true)}>
          {t("issue_book")}
        </div>
      </div>

      <div className={style.remainingFees}>
        <div className={style.remainingFeesBottom}>
          <div className={style.itemsContainer}>
            {bookList?.map((book, index) =>
              bookList?.length === index + 1 ? (
                <div key={index} ref={ref} className={style.itemsRef}>
                  <IssuedBookItem
                    book={book}
                    member={book?.member}
                    issueId={book?._id}
                    onRefetchWhenBookCollect={onRefetchWhenBookIssue}
                  />
                </div>
              ) : (
                <div key={index} className={style.itemsRef}>
                  <IssuedBookItem
                    book={book}
                    member={book?.member}
                    issueId={book?._id}
                    onRefetchWhenBookCollect={onRefetchWhenBookIssue}
                  />
                </div>
              )
            )}
            {showingDataLoading && <QvipleLoading />}
            {!showingDataLoading && bookList?.length === 0 && (
              <div className={style.noData}>
                <img src="/images/nodata.jpg" alt="" />
              </div>
            )}
          </div>
        </div>
      </div>

      {openModal && (
        <AssignBookMember
          instituteId={insId}
          onClose={() => setOpenModal(false)}
          onRefetchWhenBookIssue={onRefetchWhenBookIssue}
        />
      )}
    </>
  );
}

export default IssuedBooks;
