import React, { useCallback, useEffect, useState } from "react";
import style from "./Deposit.module.css";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useGetAllDepositRefundByFinance } from "../../../../../hooks/member_tab/finance-api";
import { debounce } from "lodash";
import { useSelector } from "react-redux";
import moment from "moment";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
const Refunded = ({ refund_amount, refund_student_count }) => {
  const { t } = useTranslation();
  const [state, setState] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [refundedList, setRefundedList] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const fid = useSelector((state) => state.financeChange.fid);

  const { getAllDepositRefundByFinance, getAllDepositRefundByFinanceRefetch } =
    useGetAllDepositRefundByFinance({
      data: {
        fid: fid,
        page: page,
        limit: 10,
        search: search,
      },
      skip: !fid,
    });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (fid) getAllDepositRefundByFinanceRefetch();
  }, [page, fid, getAllDepositRefundByFinanceRefetch]);

  useEffect(() => {
    if (search) {
      setRefundedList(getAllDepositRefundByFinance?.all_receipts);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setRefundedList(getAllDepositRefundByFinance?.all_receipts);
        setRefetchStatus(false);
        setShowingDataLoading(false);
      } else {
        if (getAllDepositRefundByFinance?.all_receipts) {
          setRefundedList((prevState) =>
            [
              ...new Set(
                [
                  ...prevState,
                  ...getAllDepositRefundByFinance?.all_receipts,
                ]?.map(JSON.stringify)
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getAllDepositRefundByFinance?.all_receipts?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getAllDepositRefundByFinance?.all_receipts?.length === 10)
      setState(true);
    else setState(false);
  }, [getAllDepositRefundByFinance?.all_receipts]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };
  return (
    <div>
      <section className={style.unused_container}>
        <img src="/images/rupee-symobl-icon.svg" alt="rupee symobl" />
        <div className={style.unused_container_text}>
          <div className={style.unused_container_text_inner}>
            <h6>{t("total_refunded")}</h6>
            <h6>
              {t("rs")}
              {` `}
              {refund_amount ?? 0}
            </h6>
          </div>
          <div className={style.unused_container_text_inner}>
            <p>
              {t("deposit_of")} {refund_student_count ?? 0}{" "}
              {t("deposit_student")}
            </p>
          </div>
        </div>
      </section>
      <div
        className={style.with_search}
        style={{
          marginBottom: "1rem",
        }}
      >
        <h6>{t("refunded_history")}</h6>
        <section className={style.search_container}>
          <div className={style.search_container_input}>
            <img
              className={style.searchIcon}
              alt="search icon"
              src="/images/search-dash-icon.svg"
            />
            <input type="text" placeholder="Search" onChange={onSearchEvent} />
          </div>
        </section>
      </div>

      <div className={style.refund_list}>
        {refundedList?.map((refund, index) =>
          refundedList?.length === index + 1 ? (
            <div className={style.corpus_card} ref={ref} key={index}>
              <h6
                style={{
                  textAlign: "center",
                }}
              >
                {t("invoice_number")}
                {refund?.invoice_count ?? ""}
              </h6>
              <p className={style.recieve_from}>{t("paid_to")}</p>
              <div className={style.unused_container_text_inner}>
                <h6>
                  {`${refund?.student?.studentFirstName ?? ""} ${
                    refund?.student?.studentMiddleName ?? ""
                  } ${refund?.student?.studentLastName ?? ""}`}
                </h6>
                <h6>
                  {t("rs")} {refund?.fee_payment_amount ?? 0}
                </h6>
              </div>
              <div className={style.unused_container_text_inner}>
                <p
                  style={{
                    color: "rgba(18, 18, 18, 0.8)",
                  }}
                >
                  {moment(refund?.created_at)?.format("DD MMM yyyy")},{" "}
                  {moment(refund?.created_at)?.format("LT")}
                </p>
                <p
                  style={{
                    color: "rgba(18, 18, 18, 0.8)",
                  }}
                >
                  {refund?.fee_payment_mode === "Online" ? "Bank" : "Cash"}
                </p>
              </div>
            </div>
          ) : (
            <div className={style.corpus_card} key={index}>
              <h6
                style={{
                  textAlign: "center",
                }}
              >
                {t("invoice_number")}
                {refund?.invoice_count ?? ""}
              </h6>
              <p className={style.recieve_from}>{t("paid_to")}</p>
              <div className={style.unused_container_text_inner}>
                <h6>
                  {`${refund?.student?.studentFirstName ?? ""} ${
                    refund?.student?.studentMiddleName ?? ""
                  } ${refund?.student?.studentLastName ?? ""}`}
                </h6>
                <h6>
                  {t("rs")} {refund?.fee_payment_amount ?? 0}
                </h6>
              </div>
              <div className={style.unused_container_text_inner}>
                <p
                  style={{
                    color: "rgba(18, 18, 18, 0.8)",
                  }}
                >
                  {moment(refund?.created_at)?.format("DD MMM yyyy")},{" "}
                  {moment(refund?.created_at)?.format("LT")}
                </p>
                <p
                  style={{
                    color: "rgba(18, 18, 18, 0.8)",
                  }}
                >
                  {refund?.fee_payment_mode === "Online" ? "Bank" : "Cash"}
                </p>
              </div>
            </div>
          )
        )}
        {showingDataLoading && <QvipleLoading />}
      </div>
    </div>
  );
};

export default Refunded;
