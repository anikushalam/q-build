import React from "react";
import style from "./CollectedLogs.module.css";
import { useTranslation } from "react-i18next";
import CollectLogItem from "./CollectLogItem";
import { useInView } from "react-intersection-observer";
import { useCollectedBooklist } from "../../../../../../hooks/member_tab/library-api";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";

function CollectedLogs() {
  const { t } = useTranslation();
  const lid = useSelector((state) => state.libraryChange.lid);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [bookList, setBookList] = useState([]);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { getCollectedBooklist, getCollectedBookListRefetch } =
    useCollectedBooklist({
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
      getCollectedBookListRefetch();
    }
  }, [page, lid, getCollectedBookListRefetch]);
  useEffect(() => {
    if (getCollectedBooklist?.collected) {
      setBookList((prevState) =>
        [
          ...new Set(
            [...prevState, ...getCollectedBooklist?.collected]?.map(
              JSON.stringify
            )
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (getCollectedBooklist?.collected?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (getCollectedBooklist?.collected?.length === 10) setState(true);
    else setState(false);
  }, [getCollectedBooklist?.collected]);

  return (
    <>
      <div className={style.searchContainerr}>
        <div className={style.searchContainer}>
          <img alt="" src="/images/search-dept-icon.svg" />
          <input type="text" placeholder={t("search-label")} required />
        </div>
      </div>

      <div className={style.remainingFees}>
        <div className={style.remainingFeesBottom}>
          <div className={style.itemsContainer}>
            {bookList?.map((book, index) =>
              bookList?.length === index + 1 ? (
                <div key={index} ref={ref} className={style.itemsRef}>
                  <CollectLogItem book={book} status="memberdetail" />
                </div>
              ) : (
                <div key={index} className={style.itemsRef}>
                  <CollectLogItem book={book} status="memberdetail" />
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
    </>
  );
}

export default CollectedLogs;
