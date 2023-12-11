import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useAllLibraryFeeFinance } from "../../../../../../hooks/member_tab/finance-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import RequestCard from "../RequestCard";
import style from "../SubmissionRequest.module.css";
import { useScrollbar } from "../../../../../../Scroll/use-scroll";

const AllLibraryAccepted = () => {
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [accept, setAccept] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const fid = useSelector((state) => state.financeChange.fid);
  const { allLibraryFeeFinance, allLibraryFeeFinanceRefetch } =
    useAllLibraryFeeFinance({
      data: {
        fid: fid,
        page: page,
        limit: 10,
        filterBy: "ALL_SUBMIT",
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
      allLibraryFeeFinanceRefetch();
    }
  }, [fid, page, allLibraryFeeFinanceRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (allLibraryFeeFinance?.arr) {
      setAccept((prevState) =>
        [
          ...new Set(
            [...prevState, ...allLibraryFeeFinance?.arr]?.map(JSON.stringify)
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (allLibraryFeeFinance?.arr?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (allLibraryFeeFinance?.arr?.length === 10) setState(true);
    else setState(false);
  }, [allLibraryFeeFinance?.arr]);

  return (
    <div className={style.acceptedRequest}>
      <div className={style.acceptedRequestHead}>
        Total Request {allLibraryFeeFinance?.arrCount}
      </div>

      <div className={style.acceptedRequestContent}>
        {accept?.map((req, index) =>
          accept?.length === index + 1 ? (
            <div key={req?._id} ref={ref}>
              <RequestCard cardData={req} viewAs="LIBRARY_ACCEPT" />
            </div>
          ) : (
            <RequestCard
              key={req?._id}
              cardData={req}
              viewAs="LIBRARY_ACCEPT"
            />
          )
        )}
        {showingDataLoading && <QvipleLoading />}
      </div>
    </div>
  );
};

export default AllLibraryAccepted;
