import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useAllHostelFeeFinance } from "../../../../../../hooks/member_tab/finance-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import RequestCard from "../RequestCard";
import style from "../SubmissionRequest.module.css";
import { useScrollbar } from "../../../../../../Scroll/use-scroll";

const AllHostelRequest = () => {
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [request, setRequest] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const fid = useSelector((state) => state.financeChange.fid);
  const { allHostelFeeFinance, allHostelFeeFinanceRefetch } =
    useAllHostelFeeFinance({
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
      allHostelFeeFinanceRefetch();
    }
  }, [fid, page, allHostelFeeFinanceRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setRequest(allHostelFeeFinance?.arr);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (allHostelFeeFinance?.arr) {
        setRequest((prevState) =>
          [
            ...new Set(
              [...prevState, ...allHostelFeeFinance?.arr]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (allHostelFeeFinance?.arr?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (allHostelFeeFinance?.arr?.length === 10) setState(true);
    else setState(false);
  }, [allHostelFeeFinance?.arr]);

  const onRefetchWhenActionPerform = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    allHostelFeeFinanceRefetch();
  };
  return (
    <div className={style.acceptedRequest}>
      <div className={style.acceptedRequestHead}>
        Total Request {allHostelFeeFinance?.arrCount}
      </div>

      <div className={style.acceptedRequestContent}>
        {request?.map((req, index) =>
          request?.length === index + 1 ? (
            <div key={req?._id} ref={ref}>
              <RequestCard
                cardData={req}
                viewAs="HOSTEL_REQUEST"
                fid={fid}
                onRefetchWhenActionPerform={onRefetchWhenActionPerform}
              />
            </div>
          ) : (
            <RequestCard
              key={req?._id}
              cardData={req}
              viewAs="HOSTEL_REQUEST"
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

export default AllHostelRequest;
