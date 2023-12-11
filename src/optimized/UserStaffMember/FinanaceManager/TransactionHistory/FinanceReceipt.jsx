import { useFinanceAllTransaction } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import style from "../FinanceManager.module.css";
import { nextPage } from "../../../Utils/Functions/nextPage";
import { customDebounce } from "../../../Utils/Functions/debounce";
import FinanceReceiptCard from "./FinanceReceiptCard";
import { useTranslation } from "react-i18next";
import { assestsNavbarUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import Loading from "../../../Loader/Loading";
import QvipleLoader from "../../../Loader/QvipleLoader";
import EmptyMessage from "../../../Utils/EmptyMessage/EmptyMessage";

const FinanceReceipt = ({ instituteId }) => {
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
        filter: "",
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
            <FinanceReceiptCard history={history} />
          </div>
        ) : (
          <FinanceReceiptCard history={history} key={history?._id} />
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
            title="No receipts fuond related this search."
          />
        )
      ) : (
        !financeAllTransaction?.list?.length && (
          <EmptyMessage
            customStyleContainer={{
              marginTop: "1.5rem",
            }}
            title="No receipts added."
          />
        )
      )}
    </>
  );
};

export default FinanceReceipt;
