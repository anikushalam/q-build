import { useFinanceAllSettlement } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { customDebounce } from "../../../Utils/Functions/debounce";
import { nextPage } from "../../../Utils/Functions/nextPage";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import style from "../FinanceManager.module.css";
import { assestsNavbarUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import { useTranslation } from "react-i18next";
import FinanceSettlementCard from "./FinanceSettlementCard";
import Loading from "../../../Loader/Loading";
import QvipleLoader from "../../../Loader/QvipleLoader";
import EmptyMessage from "../../../Utils/EmptyMessage/EmptyMessage";

const FinanceSettlement = ({ instituteId }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView({ skip: search });

  const { financeAllSettlement, financeAllSettlementLoading } =
    useFinanceAllSettlement({
      data: {
        fid: instituteId,
        page: page,
        limit: 10,
        search: search,
      },
      skip: !instituteId,
    });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (financeAllSettlement?.list?.length) {
      let obj = nextPage(financeAllSettlement?.list?.length);
      setState(() => obj);
    }
  }, [financeAllSettlement?.list]);
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

      {financeAllSettlement?.list?.map((repay, index) =>
        financeAllSettlement?.list?.length === index + 1 ? (
          <div key={repay?._id} ref={ref}>
            <FinanceSettlementCard repay={repay} />
          </div>
        ) : (
          <FinanceSettlementCard repay={repay} key={repay?._id} />
        )
      )}
      {financeAllSettlementLoading ? (
        search ? (
          <QvipleLoader />
        ) : (
          <Loading />
        )
      ) : search ? (
        !financeAllSettlement?.list?.length && (
          <EmptyMessage
            customStyleContainer={{
              marginTop: "1.5rem",
            }}
            title="No receipts fuond related this search."
          />
        )
      ) : (
        !financeAllSettlement?.list?.length && (
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

export default FinanceSettlement;
