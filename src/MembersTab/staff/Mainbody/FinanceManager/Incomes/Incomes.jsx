import React, { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import {
  useGetAllIBalanceQuery,
  useGetAllIncomeQuery,
} from "../../../../../services/financeAPI";
import IncomeForm from "./IncomeForm";
import IncomeLeft from "./IncomeLeft";
import IncomeRight from "./IncomeRight";
import style from "./Incomes.module.css";
import { useScrollbar } from "../../../../../Scroll/use-scroll";

function Incomes({ fId }) {
  const { t } = useTranslation();
  const [viewIndex, setViewIndex] = useState(0);
  const [detailview, setDetailView] = useState(false);
  const [incomeId, setIncomeId] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView();
  const [allIncome, setAllIncome] = React.useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const financeAuthor = useSelector((state) => state.financeChange);
  const { data: allIBalance, refetch: allIBalanceRefetch } =
    useGetAllIBalanceQuery(`${financeAuthor?.fid ? financeAuthor?.fid : fId}`);
  const { data: allIQuery, refetch: allIRefetch } = useGetAllIncomeQuery(
    {
      fid: `${financeAuthor?.fid ? financeAuthor?.fid : fId}`,
      page: page,
      limit: 10,
    },
    { skip: !financeAuthor?.fid ? !fId : !financeAuthor?.fid }
  );
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) setPage(1);
  }, [refetchStatus]);
  useEffect(() => {
    if (fId || financeAuthor?.fid) {
      setShowingDataLoading(true);
      allIRefetch();
    }
  }, [page, fId, financeAuthor?.fid, allIRefetch]);
  useEffect(() => {
    if (refetchStatus && financeAuthor?.fid) {
      setShowingDataLoading(true);
      allIRefetch();
    }
  }, [refetchStatus, financeAuthor?.fid, allIRefetch]);

  useEffect(() => {
    if (refetchStatus) {
      setAllIncome(allIQuery?.allIncome);
      setRefetchStatus(false);
      setShowingDataLoading(false);
    } else {
      if (allIQuery?.allIncome) {
        const uniquePost = [...allIncome, ...allIQuery?.allIncome];
        const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
          JSON.parse
        );
        setAllIncome(uniqueRefind);
        setShowingDataLoading(false);
      } else if (allIQuery?.allIncome?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (allIQuery?.allIncome?.length === 10) setState(true);
    else setState(false);
  }, [allIQuery?.allIncome]);

  const onRefetchWhenCreateIncome = () => {
    setRefetchStatus(true);
    allIBalanceRefetch();
  };

  return (
    <>
      {viewIndex === 1 && (
        <div className={style.income}>
          <IncomeForm
            setViewIndex={setViewIndex}
            onRefetchWhenCreateIncome={onRefetchWhenCreateIncome}
          />
        </div>
      )}
      {viewIndex === 0 && (
        <div className={style.incomeContainer}>
          <div className={style.incomeTop}>
            <div className={style.history}>{t("income_history")}</div>
          </div>
          <div className={style.income}>
            <div className={style.incomeLeft}>
              <IncomeLeft
                viewForm={() => setViewIndex(1)}
                setDetailView={setDetailView}
                allIncome={allIncome}
                setIncomeId={setIncomeId}
                fId={fId}
                ref={ref}
              />
              {showingDataLoading && <QvipleLoading />}
            </div>
            <div className={style.incomeRight}>
              <IncomeRight
                detailview={detailview}
                iBalance={allIBalance?.incomeBalance}
                incomeId={incomeId}
                setIncomeId={setIncomeId}
                setDetailView={setDetailView}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Incomes;
