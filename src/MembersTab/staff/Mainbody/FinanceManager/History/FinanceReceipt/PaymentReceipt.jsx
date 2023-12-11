import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useFinanceAllHistory } from "../../../../../../hooks/member_tab/finance-api";
import style from "../History.module.css";
import { useScrollbar } from "../../../../../../Scroll/use-scroll";
import FinanceReceiptCard from "./FinanceReceiptCard";
import { debounce } from "lodash";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import EmptyInfo from "../../../../../../Loader/EmptyInfo";

const PaymentReceipt = ({ insId }) => {
  const finance = useSelector((state) => state.financeChange);
  const [allHistory, setAllHistory] = React.useState([]);
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView({ skip: search });
  const [state, setState] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { financeAllHistory, financeAllHistoryRefetch } = useFinanceAllHistory({
    data: {
      uid: finance?.insId ? finance?.insId : insId,
      page: page,
      limit: 10,
      filter: "",
      search: search,
    },
    skip: !finance?.insId ? !insId : !finance?.insId,
  });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  React.useEffect(() => {
    if (finance?.insId || insId) {
      setShowingDataLoading(true);
      financeAllHistoryRefetch();
    }
  }, [finance?.insId, insId, page, search, financeAllHistoryRefetch]);

  React.useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  React.useEffect(() => {
    if (financeAllHistory?.history) {
      if (search) {
        setAllHistory(() => financeAllHistory?.history);
        setShowingDataLoading(false);
      } else {
        setAllHistory((prev) =>
          [
            ...new Set(
              [...prev, ...financeAllHistory?.history].map(JSON.stringify)
            ),
          ].map(JSON.parse)
        );
        setShowingDataLoading(false);
      }
    }
    //for next api is call or not dashboard
    if (financeAllHistory?.history.length === 10) setState(true);
    else setState(false);
  }, [financeAllHistory?.history]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };

  return (
    <div className={style.incomeContainer}>
      <div className={style.searchContainerr}>
        <div className={style.searchContainer}>
          <img alt="" src="/images/search-dept-icon.svg" />
          <input type="text" placeholder="Search" onChange={onSearchEvent} />
        </div>
      </div>

      <div className={style.itemsContainer}>
        {allHistory?.map((history, index) =>
          allHistory?.length === index + 1 ? (
            <div ref={ref} key={index}>
              <FinanceReceiptCard history={history} insId={insId} />
            </div>
          ) : (
            <FinanceReceiptCard key={index} history={history} insId={insId} />
          )
        )}
        {showingDataLoading && <QvipleLoading />}
        {!showingDataLoading && !allHistory.length && (
          <EmptyInfo
            customStyleContainer={{
              marginTop: "9rem",
            }}
            title={"No search found."}
          />
        )}
      </div>
    </div>
  );
};

export default PaymentReceipt;
