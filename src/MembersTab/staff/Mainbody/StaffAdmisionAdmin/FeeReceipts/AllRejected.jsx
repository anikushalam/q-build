import React, { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useGetReceiptByAdmission } from "../../../../../hooks/member_tab/admission-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import style from "./FeeReceipts.module.css";
import ReceiptCard from "./ReceiptCard";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
const AllRejected = ({ admissionId, filterReceiptQuery, search }) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [acceptList, setAcceptList] = useState([]);

  const { getReceiptByAdmission, getReceiptByAdmissionRefetch } =
    useGetReceiptByAdmission({
      data: {
        aid: admissionId,
        page: page,
        limit: 10,
        filterBy: "ALL_REJECT",
        over_filter: filterReceiptQuery?.department?._id ?? "",
        search: search ?? "",
      },
      skip: !admissionId,
    });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (admissionId) {
      setShowingDataLoading(true);

      getReceiptByAdmissionRefetch();
    }
  }, [admissionId, page, search, getReceiptByAdmissionRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (filterReceiptQuery?.department?._id) setAcceptList([]);
  }, [filterReceiptQuery?.department?._id]);
  useEffect(() => {
    if (search) {
      setAcceptList(getReceiptByAdmission?.all_requests);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setAcceptList(getReceiptByAdmission?.all_requests);
        setShowingDataLoading(false);
        setRefetchStatus(false);
      } else {
        if (getReceiptByAdmission?.all_requests) {
          setAcceptList((prevState) =>
            [
              ...new Set(
                [...prevState, ...getReceiptByAdmission?.all_requests]?.map(
                  JSON.stringify
                )
              ),
            ].map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getReceiptByAdmission?.all_requests?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getReceiptByAdmission?.all_requests?.length === 10) setState(true);
    else setState(false);
  }, [getReceiptByAdmission?.all_requests]);

  // console.info("this is request rab", getReceiptByAdmission?.all_requests);
  const onRefetch = () => {
    setRefetchStatus(true);
    setPage(1);
    getReceiptByAdmissionRefetch();
  };
  return (
    <div className={style.all_request_container}>
      <h6 className={style.total_request}>
        {t("total_request")} {getReceiptByAdmission?.count ?? 0}
      </h6>
      {acceptList?.map((receipt, index) =>
        acceptList?.length === index + 1 ? (
          <div ref={ref} key={receipt?._id}>
            <ReceiptCard
              receipt={receipt}
              showAs="REJECTED"
              admissionId={admissionId}
              onRefetch={onRefetch}
            />
          </div>
        ) : (
          <ReceiptCard
            key={receipt?._id}
            receipt={receipt}
            showAs="REJECTED"
            admissionId={admissionId}
            onRefetch={onRefetch}
          />
        )
      )}

      {showingDataLoading && <QvipleLoading />}
    </div>
  );
};

export default AllRejected;
