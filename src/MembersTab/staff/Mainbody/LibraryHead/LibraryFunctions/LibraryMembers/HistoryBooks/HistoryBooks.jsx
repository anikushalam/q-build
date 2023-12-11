import React, { useState } from "react";
import style from "../LibraryMembers.module.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useGetMemberHistoryList } from "../../../../../../../hooks/member_tab/library-api";
import CollectLogItem from "../../CollectedLogs/CollectLogItem";
import QvipleLoading from "../../../../../../../Loader/QvipleLoading";

function HistoryBooks({ mid }) {
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [historyBookList, setHistoryBookList] = useState({
    memberId: "",
    historyList: [],
  });

  const { getMemberHistorylist, getMemberHistoryListRefetch } =
    useGetMemberHistoryList({
      data: {
        sid: mid,
        page: historyBookList.memberId !== mid ? 1 : page,
        limit: 10,
      },
      skip: !mid,
    });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (mid) {
      setShowingDataLoading(true);
      getMemberHistoryListRefetch();
    }
  }, [page, mid, getMemberHistoryListRefetch]);

  useEffect(() => {
    if (getMemberHistorylist?.history) {
      if (historyBookList.memberId === mid) {
        setHistoryBookList((prevState) => ({
          ...prevState,
          historyList: [
            ...new Set(
              [...prevState.historyList, ...getMemberHistorylist?.history]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse),
        }));
        setShowingDataLoading(false);
      } else {
        setHistoryBookList({
          memberId: mid,
          historyList: [...getMemberHistorylist?.history],
        });
        setShowingDataLoading(false);
      }
    } else if (getMemberHistorylist?.history?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (getMemberHistorylist?.history?.length === 10) setState(true);
    else setState(false);
  }, [getMemberHistorylist?.history]);
  // console.info("s.fms gsd", historyBookList);
  return (
    <div className={style.membersContainer}>
      {historyBookList.historyList?.map((book, index) =>
        historyBookList.historyList?.length === index + 1 ? (
          <div key={index} ref={ref} className={style.limember}>
            <CollectLogItem status="memberdetail" book={book} />
          </div>
        ) : (
          <div key={index} className={style.limember}>
            <CollectLogItem status="memberdetail" book={book} />
          </div>
        )
      )}
      {showingDataLoading && <QvipleLoading />}
      {!showingDataLoading && historyBookList.historyList?.length === 0 && (
        <div className={style.noData}>
          <img src="/images/nodata.jpg" alt="" />
        </div>
      )}
    </div>
  );
}

export default HistoryBooks;
