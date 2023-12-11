import React, { useCallback, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useFinanceAllHistory } from "../../../../../../hooks/member_tab/finance-api";
import style from "../History.module.css";
import { useScrollbar } from "../../../../../../Scroll/use-scroll";
import HistoryRight from "../HistoryRight";
import FinancePaymentCard from "./FinancePaymentCard";
import { useTranslation } from "react-i18next";
import { debounce } from "lodash";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import EmptyInfo from "../../../../../../Loader/EmptyInfo";

const PaymentHistory = ({ insId }) => {
  const { t } = useTranslation();
  const finance = useSelector((state) => state.financeChange);
  const [allHistory, setAllHistory] = React.useState([]);
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView({ skip: search });
  const [state, setState] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [detailview, setDetailView] = React.useState(false);
  const [onClickValue, setOnClickValue] = React.useState("");
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { financeAllHistory, financeAllHistoryRefetch } = useFinanceAllHistory({
    data: {
      uid: finance?.insId ? finance?.insId : insId,
      page: page,
      limit: 10,
      filter: "Expense",
      search: search,
    },
    skip: !finance?.insId ? !insId : !finance?.insId,
  });
  const { scrollToTop } = useScrollbar();
  React.useEffect(() => {
    scrollToTop();
  }, []);
  React.useEffect(() => {
    if (finance?.insId || insId) financeAllHistoryRefetch();
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
        const uniquePost = [...allHistory, ...financeAllHistory?.history];
        const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
          JSON.parse
        );
        setAllHistory(uniqueRefind);
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
      <div
        className={style.income}
        style={{
          display: "flex",
          gap: "2%",
        }}
      >
        <div
          className={style.incomeLeft}
          style={{
            width: detailview ? "50%" : "100%",
          }}
        >
          <div className={style.searchContainerr}>
            <div className={style.searchContainer}>
              <img alt="" src="/images/search-dept-icon.svg" />
              <input
                type="text"
                placeholder={t("search")}
                onChange={onSearchEvent}
              />
            </div>
          </div>
          <div className={style.itemsContainer}>
            {allHistory?.map((history, index) =>
              allHistory?.length === index + 1 ? (
                <div ref={ref} key={index}>
                  <FinancePaymentCard
                    history={history}
                    setDetailView={setDetailView}
                    setOnClickValue={setOnClickValue}
                  />
                </div>
              ) : (
                <FinancePaymentCard
                  key={index}
                  history={history}
                  setDetailView={setDetailView}
                  setOnClickValue={setOnClickValue}
                />
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
        {detailview && (
          <div className={style.incomeRight}>
            <HistoryRight
              setDetailView={setDetailView}
              detailview={detailview}
              onClickValue={onClickValue}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
