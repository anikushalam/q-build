import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useGetAllEnquiryList } from "../../../../../../hooks/member_tab/admission-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import style from "../AdmissionEnquiry.module.css";
import EnquiryItem from "./EnquiryItem";
import { useScrollbar } from "../../../../../../Scroll/use-scroll";

function Enquiries({
  setEnquiryId,
  admissionId,
  reftechWhenMark,
  setReftechWhenMark,
}) {
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
      status: "Ongoing",
    },
    skip: !admissionId,
  });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (reftechWhenMark) setPage(1);
  }, [reftechWhenMark]);
  useEffect(() => {
    if (admissionId) {
      setShowingDataLoading(true);
      getAllEnquiryListRefetch();
    }
  }, [page, admissionId, getAllEnquiryListRefetch]);

  useEffect(() => {
    if (admissionId && reftechWhenMark) {
      setShowingDataLoading(true);
      getAllEnquiryListRefetch();
    }
  }, [admissionId, reftechWhenMark, getAllEnquiryListRefetch]);

  useEffect(() => {
    if (getAllEnquiryList?.all_inquiry) {
      if (reftechWhenMark) {
        const uniquePost = [...getAllEnquiryList?.all_inquiry];
        const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
          JSON.parse
        );
        setEnquiryList(uniqueRefind);
        setReftechWhenMark(false);
        setShowingDataLoading(false);
      } else {
        const uniquePost = [...enquiryList, ...getAllEnquiryList?.all_inquiry];
        const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
          JSON.parse
        );
        setEnquiryList(uniqueRefind);
        setShowingDataLoading(false);
      }
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
                <EnquiryItem setEnquiryId={setEnquiryId} enquiry={enquiry} />
              </div>
            ) : (
              <EnquiryItem
                key={enquiry?._id}
                setEnquiryId={setEnquiryId}
                enquiry={enquiry}
              />
            )
          )}
          {showingDataLoading && <QvipleLoading />}
        </div>
      </div>
    </div>
  );
}

export default Enquiries;
