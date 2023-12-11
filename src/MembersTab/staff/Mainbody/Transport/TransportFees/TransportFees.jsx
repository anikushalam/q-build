import React, { useState } from "react";
import style from "../../Hostel/MiddleContent/Funds/Funds.module.css";
import { useTranslation } from "react-i18next";
import { useRequestCashToFinance } from "../../../../../hooks/member_tab/transport-api";
import QLoader from "../../../../../Loader/QLoader";
function BalanceItem({ bal, value }) {
  return (
    <div className={style.balanceItem}>
      <p>{bal}:</p>
      <p>Rs. {value}</p>
    </div>
  );
}

const TransportFees = ({ tid, transport, onRefetch, pageOpenAs }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [requestCashToFinance] = useRequestCashToFinance();
  const onSubmitToFinanceManager = () => {
    if (
      transport?.collected_fee > 0 &&
      transport?.requested_status === "Pending"
    ) {
      setDisabled((pre) => !pre);
      requestCashToFinance({
        tid: tid,
        submitCash: {
          amount: transport?.collected_fee,
          id: transport?.institute?._id ?? "",
        },
      })
        .then(() => {
          onRefetch();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };
  return (
    <div className={style.funds2}>
      <div className={style.fundshead}>
        <h6> {t("transport_fees_fund")} </h6>
        <img src="/images/finance/filter-icon.svg" alt="" />
      </div>

      <div className={style.fundscontent}>
        <div className={style.sidebarbottomitem}>
          <img alt="not found" src="/images/hostel/rupee-blue-icon.svg" />
          <div>
            <p className={style.namee}>
              Rs.{" "}
              {(transport?.offline_fee
                ? transport?.offline_fee
                : 0 + transport?.online_fee
                ? transport?.online_fee
                : 0
              ).toFixed(2)}
            </p>
            <p className={style.desig}> {t("total_tansport_fees")} </p>
          </div>
        </div>

        <BalanceItem
          check="false"
          bal={t("online_fees")}
          value={transport?.online_fee?.toFixed(2) ?? 0}
        />
        <BalanceItem
          check="true"
          bal={t("offline_fees")}
          value={transport?.offline_fee?.toFixed(2) ?? 0}
        />
        <BalanceItem
          check="true"
          bal={t("cash_with_me")}
          value={transport?.collected_fee?.toFixed(2) ?? 0}
        />
        {pageOpenAs === "INSTITUTE" ? null : (
          <div
            className={style.fundbtn}
            onClick={onSubmitToFinanceManager}
            style={{
              color: "#ffffff",
              backgroundColor: "#1c023b",
            }}
          >
            {transport?.requested_status === "Pending"
              ? `${t("submit")} ${t("submit_cash_to_finance_manager")}`
              : `${t("requested")} ${t("submit_cash_to_finance_manager")}`}
          </div>
        )}

        <div className={style.fundbtn}>
          {t("total_pending_fees")} : Rs. {transport?.remaining_fee}
        </div>
        <div className={style.fundbtn}>
          {t("total_written_of_fees")} : Rs. {transport?.exempt_fee}
        </div>
      </div>
      {disabled && <QLoader />}
    </div>
  );
};

export default TransportFees;
