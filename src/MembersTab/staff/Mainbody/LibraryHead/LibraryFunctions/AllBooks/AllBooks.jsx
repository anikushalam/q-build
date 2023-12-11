import React, { useEffect, useState } from "react";
import style from "./AllBooks.module.css";
import { useTranslation } from "react-i18next";
import {
  useAddExcelBookByLibrary,
  useGetBooklist,
} from "../../../../../../hooks/member_tab/library-api";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { debounce } from "lodash";
import { useCallback } from "react";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import LibraryTabChnageLink from "../../LibraryTabChnageLink";
import BookDetails from "./BookDetails/BookDetails";
import { useLocation } from "react-router-dom";
import { useFileUpload } from "../../../../../../hooks/authentication-api";
import QLoader from "../../../../../../Loader/QLoader";
import CreateBook from "./CreateBook/CreateBook";
import InstituteLibraryTabChangeLink from "../../../../../../Library/Institute/InsLibraryMain/InstituteLibraryTabChangeLink";
import LibraryBookCard from "./LibraryBookCard";
function AllBooks({ carryParentState, libraryId, pageOpenAs }) {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [bookList, setBookList] = useState([]);
  const lid = useSelector((state) => state.libraryChange.lid);
  const [disabled, setDisabled] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [addExcelBookByLibrary] = useAddExcelBookByLibrary();
  const { getBooklist, getBookListRefetch } = useGetBooklist({
    data: {
      lid: lid ? lid : libraryId,
      page: search ? 1 : refetchStatus ? 1 : page,
      limit: 10,
      search: search,
      flow: "",
    },
    skip: lid ? !lid : !libraryId,
  });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (lid || libraryId) {
      setShowingDataLoading(true);
      getBookListRefetch();
    }
  }, [page, lid, libraryId, search, getBookListRefetch]);

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
  const onRefetchWhenBookCreate = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getBookListRefetch();
  };
  const onExcelFileUpload = (e) => {
    // console.info("this is excel up,lsd", e.target.files[0]);
    if (e.target.files?.length) {
      setDisabled((pre) => !pre);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      oneFileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          if (res.data?.imageKey) {
            addExcelBookByLibrary({
              lid: libraryId ? libraryId : lid,
              excelFile: {
                excel_file: res.data?.imageKey,
              },
            })
              .then(() => {
                setDisabled((pre) => !pre);
              })
              .catch({});
            // console.info("safjasgfk", res.data);
          } else {
            setDisabled((pre) => !pre);
          }
        })
        .catch({});
    }
  };

  return (
    <>
      {getQuery?.search?.substring(3) === "book" && (
        <>
          <div className={style.searchContainerr}>
            <div className={style.searchContainer}>
              <img alt="" src="/images/search-dept-icon.svg" />
              <input
                type="text"
                onChange={(e) => onSearch(e.target.value)}
                placeholder={t("search-label")}
                required
              />
            </div>
            <label
              className={style.upload_excel_file}
              htmlFor="uploadExcel"
              style={{
                cursor: "pointer",
              }}
            >
              <img
                src="/images/upload-xslx-icon.svg"
                alt="add student icon"
                title="Upload excel file"
              />
            </label>

            <input
              type={"file"}
              id="uploadExcel"
              accept=".xlsx"
              onChange={onExcelFileUpload}
              style={{
                display: "none",
              }}
            />
            {pageOpenAs === "INSTITUTE" ? (
              <InstituteLibraryTabChangeLink
                carryParentState={carryParentState}
                activeTab="?a=book&n=add"
                customStyle={{ width: "19%" }}
              >
                <div className={style.newBtn} style={{ width: "100%" }}>
                  {t("add_new_book")}
                </div>
              </InstituteLibraryTabChangeLink>
            ) : (
              <LibraryTabChnageLink
                carryParentState={carryParentState}
                activeTab="book&n=add"
                customStyle={{ width: "19%" }}
              >
                <div className={style.newBtn} style={{ width: "100%" }}>
                  {t("add_new_book")}
                </div>
              </LibraryTabChnageLink>
            )}
          </div>

          <div className={style.remainingFees}>
            <div className={style.remainingFeesBottom}>
              {/* <div className={style.itemsContainer}> */}
              {bookList?.map((book, index) =>
                bookList?.length === index + 1 ? (
                  <div ref={ref} key={book?._id}>
                    <LibraryBookCard
                      book={book}
                      carryParentState={carryParentState}
                      viewAs={pageOpenAs}
                    />
                  </div>
                ) : (
                  <LibraryBookCard
                    key={book?._id}
                    book={book}
                    carryParentState={carryParentState}
                    viewAs={pageOpenAs}
                  />
                )
              )}
              {showingDataLoading && <QvipleLoading status="white" />}
              {/* </div> */}
            </div>
          </div>
        </>
      )}
      {getQuery?.search?.substring(10) === "add" && (
        <CreateBook
          status="create"
          lid={libraryId ? libraryId : lid}
          onRefetchWhenBookCreate={onRefetchWhenBookCreate}
        />
      )}
      {getQuery?.search?.substring(10) === "edit" && (
        <CreateBook
          status="edit"
          onRefetchWhenBookCreate={onRefetchWhenBookCreate}
        />
      )}
      {getQuery?.search?.substring(10) === "detail" && (
        <BookDetails
          carryParentState={carryParentState}
          pageOpenAs={pageOpenAs}
        />
      )}
      {disabled && <QLoader />}
    </>
  );
}

export default AllBooks;
