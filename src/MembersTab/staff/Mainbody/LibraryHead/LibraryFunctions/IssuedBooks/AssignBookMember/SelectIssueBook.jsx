import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useGetBooklist } from "../../../../../../../hooks/member_tab/library-api";
import QvipleLoading from "../../../../../../../Loader/QvipleLoading";
import style from "./AssignBookMember.module.css";
import AssignBookMemberHeader from "./AssignBookMemberHeader";
import { useTranslation } from "react-i18next";
import ItemBook from "./ItemBook";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";

const SelectIssueBook = ({ member, onAddBook, onBack, step }) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [bookList, setBookList] = useState([]);
  const [search, setSearch] = useState("");
  const libAuthor = useSelector((state) => state.libraryChange);

  const { getBooklist, getBookListRefetch } = useGetBooklist({
    data: {
      lid: libAuthor?.lid,
      page: page,
      limit: 10,
      search: search,
      flow: "ISSUE_BOOK",
    },
    skip: !libAuthor?.lid,
  });

  useEffect(() => {
    if (libAuthor?.lid) {
      setShowingDataLoading(true);
      getBookListRefetch();
    }
  }, [libAuthor?.lid, page, search, getBookListRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (search) {
      setBookList(getBooklist?.books);
      setShowingDataLoading(false);
    } else {
      if (getBooklist?.books) {
        if (page === 1) {
          setBookList(getBooklist?.books);
        } else {
          setBookList((prevState) =>
            [
              ...new Set(
                [...prevState, ...getBooklist?.books]?.map(JSON.stringify)
              ),
            ]?.map(JSON.parse)
          );
        }
        setShowingDataLoading(false);
      } else if (getBooklist?.books?.length === 0) setShowingDataLoading(false);
      else {
      }
    }
    if (getBooklist?.books?.length === 10) setState(true);
    else setState(false);
  }, [getBooklist?.books]);
  const onSearch = (val) => {
    setPage((page) => (page = 1));
    setSearch(val);
  };
  return (
    <>
      <AssignBookMemberHeader onBack={onBack} step={step} onSearch={onSearch} />
      <div className={style.selectbook}>
        <div className={style.issuedBookItem}>
          <p className={style.selectedText}>{t("selected")}</p>
          <div className={style.issuedBookItemMidleft}>
            <div className={style.imgcontainer}>
              <img
                src={
                  member?.studentProfilePhoto
                    ? `${imageShowUrl}/${member?.studentProfilePhoto}`
                    : "/images/member_tab/class/default_avatar.svg"
                }
                alt=""
              />
            </div>
          </div>
          <div className={style.issuedBookItemMidright}>
            <h6>
              {`${member?.studentFirstName} ${
                member?.studentMiddleName ? member?.studentMiddleName : ""
              } ${member?.studentLastName}`}
            </h6>
            <p>
              {t("gr_no")} {member?.studentGRNO}
            </p>
          </div>
        </div>
        <div className={style.dash} />
        <div className={style.itembookcontainer}>
          {bookList?.map((book, index) =>
            bookList?.length === index + 1 ? (
              <div key={book?._id} ref={ref}>
                <ItemBook
                  status="selectbook"
                  book={book}
                  onAddBook={onAddBook}
                />
              </div>
            ) : (
              <ItemBook
                key={book?._id}
                status="selectbook"
                book={book}
                onAddBook={onAddBook}
              />
            )
          )}

          {showingDataLoading && <QvipleLoading status="white" />}
        </div>
      </div>
    </>
  );
};

export default SelectIssueBook;
