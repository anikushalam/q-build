import React, { useState } from "react";
import style from "./HistoryBooks.module.css";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useGetMemberHistoryList } from "../../../../../../hooks/member_tab/library-api";
import CollectLogItem from "../../../../../staff/Mainbody/LibraryHead/LibraryFunctions/CollectedLogs/CollectLogItem";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";

function HistoryBooks({ onClose, studentId }) {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [historyBookList, setHistoryBookList] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { getMemberHistorylist, getMemberHistoryListRefetch } =
    useGetMemberHistoryList({
      data: {
        sid: studentId,
        page: page,
        limit: 10,
      },
      skip: !studentId,
    });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (studentId) {
      setShowingDataLoading(true);
      getMemberHistoryListRefetch();
    }
  }, [page, studentId, getMemberHistoryListRefetch]);

  useEffect(() => {
    if (getMemberHistorylist?.history) {
      setHistoryBookList((prevState) =>
        [
          ...new Set(
            [...prevState, ...getMemberHistorylist?.history]?.map(
              JSON.stringify
            )
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (getMemberHistorylist?.history?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (getMemberHistorylist?.history?.length === 10) setState(true);
    else setState(false);
  }, [getMemberHistorylist?.history]);
  return (
    <div className={style.addbookcontainer}>
      <div className={style.addbooktop}>
        <h6>{t("book_history")}</h6>
        <img src="/images/user_signup/close.svg" onClick={onClose} />
      </div>
      <div className={style.addbookbody}>
        <div className={style.membersContainer}>
          {historyBookList?.map((book, index) =>
            historyBookList?.length === index + 1 ? (
              <div key={index} ref={ref} className={style.itemsRef}>
                <CollectLogItem book={book} status="memberStudentdetail" />
              </div>
            ) : (
              <div key={index} className={style.itemsRef}>
                <CollectLogItem book={book} status="memberStudentdetail" />
              </div>
            )
          )}
          {showingDataLoading && <QvipleLoading />}
          {!showingDataLoading && historyBookList?.length === 0 && (
            <div className={style.noData}>
              <img src="/images/nodata.jpg" alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HistoryBooks;
