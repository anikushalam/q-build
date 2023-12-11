import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useFetchDueBalanceQuery } from "../../../../../services/financeAPI";
import style from "./Repayment.module.css";
import moment from "moment";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import EmptyInfo from "../../../../../Loader/EmptyInfo";
import { useTranslation } from "react-i18next";

function RapaymentCard({ repay }) {
  const { t } = useTranslation();

  return (
    <div className={style.settle_card}>
      <div className={style.settle_card_container}>
        <img
          src="/images/career/newLogo.svg"
          alt="logo"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "12px",
          }}
        />
        <div className={style.settle_card_text}>
          <h6>
            {t("settlement_date")} {" : "}
            {repay?.settlement_date ?? ""}
          </h6>
          <p className={style.settle_paragraph}>
            {t("message")} {" : "} {repay?.message ?? ""}
          </p>
          <p className={style.settle_paragraph}>
            {t("transition_id")}
            {" : "} {repay?.txnId ?? ""}
          </p>
          <p className={style.settle_paragraph}>
            {t("bank_name")}
            {" : "}
            {repay?.bank_account?.[0]?.finance_bank_account_name ?? ""}
          </p>
        </div>
      </div>

      <div
        className={style.settle_card_text}
        style={{
          alignItems: "flex-end",
        }}
      >
        {repay?.excel_attach ? (
          <a
            title="Download File"
            href={`${imageShowUrl}/${repay?.excel_attach}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <img
              src="/images/member_tab/subject/subject-excel-icon.svg"
              alt="excel icon"
              style={{
                cursor: "pointer",
                height: "1.5rem",
              }}
            />
          </a>
        ) : null}
        <h6>Rs. {repay?.repayAmount ?? ""}</h6>
        <p className={style.settle_paragraph}>{`${moment(
          repay?.createdAt
        ).format("DD MMM, yyyy")}, ${moment(repay?.createdAt).format(
          "LT"
        )}`}</p>
      </div>
    </div>
  );
}

function Repayment({ insId }) {
  const finance_author = useSelector((state) => state.financeChange);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [settlementList, setSettlementList] = useState([]);

  const { data: dueData, refetch: dueFetch } = useFetchDueBalanceQuery({
    info: {
      page: page,
      limit: 10,
      fid: finance_author?.insId ? finance_author?.insId : insId,
    },
    skip: finance_author?.insId ? !finance_author?.insId : !insId,
  });

  useEffect(() => {
    if (insId || finance_author?.insId) {
      setShowingDataLoading(true);
      dueFetch();
    }
  }, [insId, finance_author?.insId, page, dueFetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    if (dueData?.repay) {
      setSettlementList((prevState) =>
        [
          ...new Set([...prevState, ...dueData?.repay]?.map(JSON.stringify)),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (dueData?.repay?.length === 0) setShowingDataLoading(false);
    else {
    }
    if (dueData?.repay?.length === 10) setState(true);
    else setState(false);
  }, [dueData?.repay]);

  return (
    <div className={style.dueList}>
      {settlementList?.map((ele, index) =>
        settlementList?.length === index + 1 ? (
          <div ref={ref} key={ele?._id}>
            <RapaymentCard repay={ele} />
          </div>
        ) : (
          <RapaymentCard repay={ele} key={ele?._id} />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
      {!showingDataLoading && !settlementList.length && (
        <EmptyInfo
          customStyleContainer={{
            marginTop: "9rem",
          }}
          title={"No due payment."}
        />
      )}
    </div>
  );
}

export default Repayment;
