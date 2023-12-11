import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useGetRefundedListByAdmission } from "../../../../../hooks/member_tab/admission-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import style from "../../FinanceManager/Deposit/Deposit.module.css";
import moment from "moment";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
import AdmissionRefunedHistoryCard from "./AdmissionRefunedHistoryCard";
const AdmissionRefunedHistory = ({ admissionId }) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [refundList, setRefundList] = useState([]);
  const { getRefundedListByAdmission, getRefundedListByAdmissionRefetch } =
    useGetRefundedListByAdmission({
      data: {
        aid: admissionId,
        page: page,
        limit: 10,
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
      getRefundedListByAdmissionRefetch();
    }
  }, [admissionId, page, getRefundedListByAdmissionRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getRefundedListByAdmission?.all_refunded) {
      setRefundList((prevState) =>
        [
          ...new Set(
            [...prevState, ...getRefundedListByAdmission?.all_refunded]?.map(
              JSON.stringify
            )
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (getRefundedListByAdmission?.all_refunded?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (getRefundedListByAdmission?.all_refunded?.length === 10) setState(true);
    else setState(false);
  }, [getRefundedListByAdmission?.all_refunded]);
  return (
    <>
      <section className={style.unused_container}>
        <img src="/images/rupee-symobl-icon.svg" alt="rupee symobl" />
        <div className={style.unused_container_text}>
          <div className={style.unused_container_text_inner}>
            <h6>{t("total_refunded")}</h6>
            <h6>
              {t("rs")}
              {` `}
              {getRefundedListByAdmission?.count ?? 0}
            </h6>
          </div>
          {/* <div className={style.unused_container_text_inner}>
            <p>
              {t("deposit_of")}
              {refund_student_count ?? 0}{" "}
              {t("deposit_student")}
            </p>
          </div> */}
        </div>
      </section>
      <div
        className={style.with_search}
        style={{
          marginBottom: "1rem",
          marginTop: "1rem",
        }}
      >
        <h6>{t("refunded_history")}</h6>
      </div>
      <div className={style.refund_list}>
        {refundList?.map((refund, index) =>
          refundList?.length === index + 1 ? (
            <div ref={ref} key={index}>
              <AdmissionRefunedHistoryCard history={refund} />
            </div>
          ) : (
            <AdmissionRefunedHistoryCard history={refund} key={index} />
          )
        )}
        {showingDataLoading && <QvipleLoading />}
      </div>
    </>
  );
};

export default AdmissionRefunedHistory;

{
  /* <div className={style.corpus_card} key={index}>
              <h6
                style={{
                  textAlign: "center",
                }}
              >
                {t("invoice_number")}
                {refund?.fee_receipt?.invoice_count ?? ""}
              </h6>
              <p className={style.recieve_from}>{t("paid_to")}</p>
              <div className={style.unused_container_text_inner}>
                <h6>
                  {`${refund?.student?.studentFirstName ?? ""} ${
                    refund?.student?.studentMiddleName ?? ""
                  } ${refund?.student?.studentLastName ?? ""}`}
                </h6>
                <h6>
                  {t("rs")} {refund?.fee_receipt?.fee_payment_amount ?? 0}
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
                  {refund?.fee_receipt?.fee_payment_mode === "Online"
                    ? "Bank"
                    : "Cash"}
                </p>
              </div>
            </div> */
}
