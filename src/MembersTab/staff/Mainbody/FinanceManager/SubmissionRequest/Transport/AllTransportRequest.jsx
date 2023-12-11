import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useAllTransportFeeFinance } from "../../../../../../hooks/member_tab/finance-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import RequestCard from "../RequestCard";
import style from "../SubmissionRequest.module.css";
import { useScrollbar } from "../../../../../../Scroll/use-scroll";

const AllTransportRequest = () => {
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [request, setRequest] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const fid = useSelector((state) => state.financeChange.fid);
  const { allTransportFeeFinance, allTransportFeeFinanceRefetch } =
    useAllTransportFeeFinance({
      data: {
        fid: fid,
        page: page,
        limit: 10,
        filterBy: "ALL_REQUEST",
      },
      skip: !fid,
    });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (fid) {
      setShowingDataLoading(true);
      allTransportFeeFinanceRefetch();
    }
  }, [fid, page, allTransportFeeFinanceRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setRequest(allTransportFeeFinance?.query);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (allTransportFeeFinance?.query) {
        setRequest((prevState) =>
          [
            ...new Set(
              [...prevState, ...allTransportFeeFinance?.query]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (allTransportFeeFinance?.query?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (allTransportFeeFinance?.query?.length === 10) setState(true);
    else setState(false);
  }, [allTransportFeeFinance?.query]);

  const onRefetchWhenActionPerform = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    allTransportFeeFinanceRefetch();
  };
  return (
    <div className={style.acceptedRequest}>
      <div className={style.acceptedRequestHead}>
        Total Request {allTransportFeeFinance?.queryCount}
      </div>

      <div className={style.acceptedRequestContent}>
        {request?.map((req, index) =>
          request?.length === index + 1 ? (
            <div key={req?._id} ref={ref}>
              <RequestCard
                cardData={req}
                viewAs="TRANSPORT_REQUEST"
                fid={fid}
                onRefetchWhenActionPerform={onRefetchWhenActionPerform}
              />
            </div>
          ) : (
            <RequestCard
              key={req?._id}
              cardData={req}
              viewAs="TRANSPORT_REQUEST"
              onRefetchWhenActionPerform={onRefetchWhenActionPerform}
              fid={fid}
            />
          )
        )}
        {showingDataLoading && <QvipleLoading />}
      </div>
    </div>
  );
};

export default AllTransportRequest;
