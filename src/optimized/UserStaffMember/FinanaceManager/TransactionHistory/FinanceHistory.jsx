import { useFinanceAllTransaction } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { customDebounce } from "../../../Utils/Functions/debounce";
import { nextPage } from "../../../Utils/Functions/nextPage";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import style from "../FinanceManager.module.css";
import FinanceHistoryCard from "./FinanceHistoryCard";
import { assestsNavbarUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import Loading from "../../../Loader/Loading";
import QvipleLoader from "../../../Loader/QvipleLoader";
import EmptyMessage from "../../../Utils/EmptyMessage/EmptyMessage";

const FinanceHistory = ({ instituteId }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView({ skip: search });
  const { financeAllTransaction, financeAllTransactionLoading } =
    useFinanceAllTransaction({
      data: {
        uid: instituteId,
        page: page,
        limit: 10,
        search: search,
        filter: "Expense",
      },
      skip: !instituteId,
    });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (financeAllTransaction?.list?.length) {
      let obj = nextPage(financeAllTransaction?.list?.length);
      setState(() => obj);
    }
  }, [financeAllTransaction?.list]);
  const onDebounce = useCallback(
    customDebounce((val) => {
      setPage(() => 1);
      setSearch(val);
    }, 500),
    []
  );

  const onSearchEvent = (e) => {
    if (e.target.value) onDebounce(e.target.value);
    else {
      setPage(() => 1);
      setSearch("");
    }
  };
  return (
    <>
      <div className={style.fm_search_full}>
        <section className={style.fm_search_full_container}>
          <div className={style.fm_search_full_container_inner}>
            <img
              className={style.fm_search_full_icon}
              alt="search icon"
              src={`${assestsNavbarUrl}/navbar-search.svg`}
            />
            <input
              type="text"
              placeholder={t("search")}
              onChange={onSearchEvent}
            />
          </div>
        </section>
      </div>

      {financeAllTransaction?.list?.map((history, index) =>
        financeAllTransaction?.list?.length === index + 1 ? (
          <div key={history?._id} ref={ref}>
            <FinanceHistoryCard history={history} />
          </div>
        ) : (
          <FinanceHistoryCard history={history} key={history?._id} />
        )
      )}
      {financeAllTransactionLoading ? (
        search ? (
          <QvipleLoader />
        ) : (
          <Loading />
        )
      ) : search ? (
        !financeAllTransaction?.list?.length && (
          <EmptyMessage
            customStyleContainer={{
              marginTop: "1.5rem",
            }}
            title="No history fuond related this search."
          />
        )
      ) : (
        !financeAllTransaction?.list?.length && (
          <EmptyMessage
            customStyleContainer={{
              marginTop: "1.5rem",
            }}
            title="No history added."
          />
        )
      )}
    </>
  );
};

export default FinanceHistory;
