import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  useGetAllEBalanceQuery,
  useGetAllExpenseQuery,
} from "../../../../../services/financeAPI";
import ExpenseForm from "./ExpenseForm";
import ExpenseLeft from "./ExpenseLeft";
import ExpenseRight from "./ExpenseRight";
import style from "./Expenses.module.css";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { useScrollbar } from "../../../../../Scroll/use-scroll";

function Expenses({ fId }) {
  const { t } = useTranslation();
  const [viewIndex, setViewIndex] = useState(0);
  const [detailview, setDetailView] = useState(false);
  const [expenseId, setExpenseId] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView();
  const [allIncome, setAllIncome] = React.useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const financeAuthor = useSelector((state) => state.financeChange);

  const { data: allEBalance, refetch: allEBalanceRefetch } =
    useGetAllEBalanceQuery(`${financeAuthor?.fid ? financeAuthor?.fid : fId}`, {
      skip: !financeAuthor?.fid ? !fId : !financeAuthor?.fid,
    });
  const { data: allEQuery, refetch: allERefetch } = useGetAllExpenseQuery(
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
    if (fId || financeAuthor?.fid) {
      allEBalanceRefetch();
    }
  }, [allEBalanceRefetch, financeAuthor?.fid, fId]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) setPage(1);
  }, [refetchStatus]);
  useEffect(() => {
    if (fId || financeAuthor?.fid) {
      setShowingDataLoading(true);
      allERefetch();
    }
  }, [page, fId, financeAuthor?.fid, allERefetch]);
  useEffect(() => {
    if (refetchStatus && financeAuthor?.fid) {
      setShowingDataLoading(true);
      allERefetch();
    }
  }, [refetchStatus, financeAuthor?.fid, allERefetch]);

  useEffect(() => {
    if (refetchStatus) {
      setAllIncome(allEQuery?.allIncome);
      setRefetchStatus(false);
      setShowingDataLoading(false);
    } else {
      if (allEQuery?.allIncome) {
        const uniquePost = [...allIncome, ...allEQuery?.allIncome];
        const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
          JSON.parse
        );
        setAllIncome(uniqueRefind);
        setShowingDataLoading(false);
      } else if (allEQuery?.allIncome?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (allEQuery?.allIncome?.length === 10) setState(true);
    else setState(false);
  }, [allEQuery?.allIncome]);

  const onRefetchWhenCreateExpense = () => {
    setRefetchStatus(true);
    allEBalanceRefetch();
  };

  return (
    <>
      {viewIndex === 0 && (
        <div className={style.incomeContainer}>
          <div className={style.incomeTop}>
            <div className={style.history}>{t("payment_history")}</div>
          </div>
          <div className={style.income}>
            <div className={style.incomeLeft}>
              <ExpenseLeft
                viewForm={() => setViewIndex(1)}
                setDetailView={setDetailView}
                allExpense={allIncome}
                setExpenseId={setExpenseId}
                fId={fId}
                ref={ref}
              />
              {showingDataLoading && <QvipleLoading />}
            </div>
            <div className={style.incomeRight}>
              <ExpenseRight
                detailview={detailview}
                eBalance={allEBalance?.expenseBalance}
                expenseId={expenseId}
                setExpenseId={setExpenseId}
                setDetailView={setDetailView}
              />
            </div>
          </div>
        </div>
      )}

      {viewIndex === 1 && (
        <div className={style.income}>
          <ExpenseForm
            setViewIndex={setViewIndex}
            onRefetchWhenCreateExpense={onRefetchWhenCreateExpense}
          />
        </div>
      )}
    </>
  );
}

export default Expenses;
