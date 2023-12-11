import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useRemainingStudentFeeListQuery } from "../../../../../services/financeAPI";
import style from "../../StaffAdmisionAdmin/RemainingFees/RemainingFees.module.css";
import { useTranslation } from "react-i18next";
// import { useFinanceExportData } from "../../../../../hooks/ExportData/export-data-api";
import { useInView } from "react-intersection-observer";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
import RemainingAmountWrapper from "./RemainingAmountWrapper";
import { debounce } from "lodash";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import FinanceRemainingStudentCard from "./FinanceRemainingStudentCard";

function RemainingAmount({ fId }) {
  const { t } = useTranslation();
  const financeAuthor = useSelector((state) => state.financeChange);
  // const { financeExportData } = useFinanceExportData(financeAuthor?.fid);
  const [allRemaining, setAllRemaining] = React.useState([]);
  const [ref, inView] = useInView();
  const [state, setState] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [search, setSearch] = useState("");

  const { data: remainList, refetch: remainListRefetch } =
    useRemainingStudentFeeListQuery(
      {
        finance: `${financeAuthor?.fid ? financeAuthor?.fid : fId}`,
        page: page,
        limit: 10,
        search: search,
      },
      {
        skip: !financeAuthor?.fid ? !fId : !financeAuthor?.fid,
      }
    );
  const { scrollToTop } = useScrollbar();
  React.useEffect(() => {
    scrollToTop();
  }, []);
  React.useEffect(() => {
    if (financeAuthor?.fid || fId) {
      setShowingDataLoading(true);
      remainListRefetch();
    }
  }, [financeAuthor?.fid, fId, page, search, remainListRefetch]);

  React.useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  React.useEffect(() => {
    if (search) {
      setAllRemaining(remainList?.list);
      setShowingDataLoading(false);
    } else {
      if (remainList?.list) {
        setAllRemaining((prev) =>
          [...new Set([...prev, ...remainList?.list].map(JSON.stringify))].map(
            JSON.parse
          )
        );
        setShowingDataLoading(false);
      } else if (remainList?.list?.length === 0) {
        setShowingDataLoading(false);
      } else {
      }
    }
    //for next api is call or not dashboard
    if (remainList?.list.length === 10) setState(true);
    else setState(false);
  }, [remainList?.list]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };
  return (
    <>
      <div className={style.remainingFees}>
        <RemainingAmountWrapper>
          <input
            type="text"
            placeholder={t("search-label")}
            onChange={onSearchEvent}
          />
        </RemainingAmountWrapper>
        {allRemaining?.map((rem, index) =>
          allRemaining?.length === index + 1 ? (
            <div key={index} ref={ref}>
              <FinanceRemainingStudentCard remainData={rem} />
            </div>
          ) : (
            <FinanceRemainingStudentCard key={index} remainData={rem} />
          )
        )}
        {showingDataLoading && <QvipleLoading status="white" />}
      </div>
    </>
  );
}

export default RemainingAmount;
