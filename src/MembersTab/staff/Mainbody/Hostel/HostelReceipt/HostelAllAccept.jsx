import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useGetReceiptListByHostel } from "../../../../../hooks/member_tab/hostel-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import style from "../../StaffAdmisionAdmin/FeeReceipts/FeeReceipts.module.css";
import HostelReceiptCard from "./HostelReceiptCard";

const HostelAllAccept = ({ hid, search }) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [acceptList, setAcceptList] = useState([]);

  const { getReceiptListByHostel, getReceiptListByHostelRefetch } =
    useGetReceiptListByHostel({
      data: {
        hid: hid,
        page: page,
        limit: 10,
        filterBy: "ALL_APPROVE",
        search: search ?? "",
      },
      skip: !hid,
    });

  useEffect(() => {
    if (hid) {
      setShowingDataLoading(true);
      getReceiptListByHostelRefetch();
    }
  }, [hid, page, search, getReceiptListByHostelRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (search) {
      setAcceptList(getReceiptListByHostel?.all_requests);
      setShowingDataLoading(false);
    } else {
      if (getReceiptListByHostel?.all_requests) {
        setAcceptList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getReceiptListByHostel?.all_requests]?.map(
                JSON.stringify
              )
            ),
          ].map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getReceiptListByHostel?.all_requests?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }

    if (getReceiptListByHostel?.all_requests?.length === 10) setState(true);
    else setState(false);
  }, [getReceiptListByHostel?.all_requests]);
  // console.info("this  block of code", acceptList);

  return (
    <div className={style.all_request_container}>
      <h6 className={style.total_request}>
        {t("total_request")} {getReceiptListByHostel?.count ?? 0}
      </h6>
      {acceptList?.map((receipt, index) =>
        acceptList?.length === index + 1 ? (
          <div ref={ref} key={receipt?._id}>
            <HostelReceiptCard receipt={receipt} />
          </div>
        ) : (
          <HostelReceiptCard key={receipt?._id} receipt={receipt} />
        )
      )}

      {showingDataLoading && <QvipleLoading />}
    </div>
  );
};

export default HostelAllAccept;
