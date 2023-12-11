import { useFinanceAllDepositRefund } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { assestsNavbarUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import { customDebounce } from "../../../Utils/Functions/debounce";
import { nextPage } from "../../../Utils/Functions/nextPage";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import style from "../FinanceManager.module.css";
import FinanceDepositRefundedListCard from "./FinanceDepositRefundedListCard";
import Loading from "../../../Loader/Loading";
import QvipleLoader from "../../../Loader/QvipleLoader";
import EmptyMessage from "../../../Utils/EmptyMessage/EmptyMessage";
const FinanceDepositRefundedList = ({ fid }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView({ skip: search });

  const { financeAllDepositRefund, financeAllDepositRefundLoading } =
    useFinanceAllDepositRefund({
      data: {
        fid: fid,
        page: page,
        limit: 10,
        search: search,
      },
      skip: !fid,
    });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (financeAllDepositRefund?.list?.length) {
      let obj = nextPage(financeAllDepositRefund?.list?.length);
      setState(() => obj);
    }
  }, [financeAllDepositRefund?.list?.length]);

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
      <div
        className={style.fm_header_container}
        style={{
          marginTop: "0.5rem",
        }}
      >
        <h6>{t("refund_history")}</h6>
        <div
          className={style.fm_search}
          style={{
            marginBottom: "0.5rem",
          }}
        >
          <section className={style.fm_search_container}>
            <div className={style.fm_search_container_inner}>
              <img
                className={style.fm_search_icon}
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
      </div>

      {financeAllDepositRefund?.list?.map((refund, index) =>
        financeAllDepositRefund?.list?.length === index + 1 ? (
          <div key={refund?._id} ref={ref}>
            <FinanceDepositRefundedListCard refund={refund} />
          </div>
        ) : (
          <FinanceDepositRefundedListCard refund={refund} key={refund?._id} />
        )
      )}
      {financeAllDepositRefundLoading ? (
        search ? (
          <QvipleLoader />
        ) : (
          <Loading />
        )
      ) : search ? (
        !financeAllDepositRefund?.list?.length && (
          <EmptyMessage
            customStyleContainer={{
              marginTop: "1.5rem",
            }}
            title="No student fuond related this search."
          />
        )
      ) : (
        !financeAllDepositRefund?.list?.length && (
          <EmptyMessage
            customStyleContainer={{
              marginTop: "1.5rem",
            }}
            title="No students refunded."
          />
        )
      )}
    </>
  );
};

export default FinanceDepositRefundedList;
