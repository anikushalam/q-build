import { memo, useCallback, useEffect, useState } from "react";
import style from "./BankDetail.module.css";
import { useFinanceAllBank } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import BankDetailCard from "./BankDetailCard";
import { useLocation } from "react-router-dom";
import FinanceTabLink from "../FinanceTabLink";
import Loading from "../../../Loader/Loading";
import { useInView } from "react-intersection-observer";
import { nextPage } from "../../../Utils/Functions/nextPage";
import { customDebounce } from "../../../Utils/Functions/debounce";
import QvipleLoader from "../../../Loader/QvipleLoader";
import EmptyMessage from "../../../Utils/EmptyMessage/EmptyMessage";

const BankDetailList = ({ fid }) => {
  const getQuery = useLocation();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView({ skip: search });
  const { financeAllBank, financeAllBankLoading } = useFinanceAllBank({
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
    if (financeAllBank?.list) {
      let obj = nextPage(financeAllBank?.list?.length);
      setState(() => obj);
    }
  }, [financeAllBank?.list]);
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
    <div className={style.bank_detail_list}>
      {financeAllBank?.list?.map((bank, index) =>
        financeAllBank?.list?.length === index + 1 ? (
          <div
            ref={ref}
            style={{
              width: "49%",
            }}
            key={bank?._id}
          >
            <FinanceTabLink
              parentState={{ ...getQuery.state, bankId: bank?._id }}
              activeUrl="type=bank&n=detail"
            >
              <BankDetailCard bank={bank} />
            </FinanceTabLink>
          </div>
        ) : (
          <div
            style={{
              width: "49%",
            }}
            key={bank?._id}
          >
            <FinanceTabLink
              parentState={{ ...getQuery.state, bankId: bank?._id }}
              activeUrl="type=bank&n=detail"
            >
              <BankDetailCard bank={bank} />
            </FinanceTabLink>
          </div>
        )
      )}
      {financeAllBankLoading ? (
        search ? (
          <QvipleLoader />
        ) : (
          <Loading />
        )
      ) : search ? (
        !financeAllBank?.list?.length && (
          <EmptyMessage title="No bank fuond related this search." />
        )
      ) : (
        !financeAllBank?.list?.length && (
          <EmptyMessage title="No banks added." />
        )
      )}
    </div>
  );
};

export default memo(BankDetailList);
