import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useGetAllEnquiryList } from "../../../../../../hooks/member_tab/admission-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import style from "../AdmissionEnquiry.module.css";
import ReviewedItem from "./ReviewedItem";
import { useScrollbar } from "../../../../../../Scroll/use-scroll";

function Reviewed({ admissionId, setReviewedId }) {
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [enquiryList, setEnquiryList] = useState([]);

  const { getAllEnquiryList, getAllEnquiryListRefetch } = useGetAllEnquiryList({
    data: {
      aid: admissionId,
      page: page,
      limit: 10,
      status: "Reviewed",
    },
    skip: !admissionId,
  });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (admissionId) {
      setShowingDataLoading(true);
      getAllEnquiryListRefetch();
    }
  }, [page, admissionId, getAllEnquiryListRefetch]);

  useEffect(() => {
    if (getAllEnquiryList?.all_inquiry) {
      const uniquePost = [...enquiryList, ...getAllEnquiryList?.all_inquiry];
      const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
        JSON.parse
      );
      setEnquiryList(uniqueRefind);
      setShowingDataLoading(false);
    } else if (getAllEnquiryList?.all_inquiry?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (getAllEnquiryList?.all_inquiry?.length === 10) setState(true);
    else setState(false);
  }, [getAllEnquiryList?.all_inquiry]);
  // console.info("this is standard", getAllEnquiryList);
  return (
    <div className={style.remainingFees}>
      <div className={style.remainingFeesBottom}>
        <div className={style.itemsContainer}>
          {enquiryList?.map((enquiry, index) =>
            enquiryList?.length === index + 1 ? (
              <div ref={ref} key={enquiry?._id}>
                <ReviewedItem enquiry={enquiry} setReviewedId={setReviewedId} />
              </div>
            ) : (
              <ReviewedItem
                key={enquiry?._id}
                enquiry={enquiry}
                setReviewedId={setReviewedId}
              />
            )
          )}
          {showingDataLoading && <QvipleLoading />}
        </div>
      </div>
    </div>
  );
}

export default Reviewed;
