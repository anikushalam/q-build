import React from "react";
import style from "./Funds.module.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import QLoader from "../../../../../../Loader/QLoader";
import HostelTabChangeLink from "../../HostelTabChangeLink";
import { useSubmitCashToFinanceByHostel } from "../../../../../../hooks/member_tab/hostel-api";
function BalanceItem({ bal, value }) {
  return (
    <div className={style.balanceItem}>
      <p>{bal}:</p>
      <p>Rs. {value}</p>
    </div>
  );
}

function Funds({
  onRefetch,
  carryParentState,
  accessRole,
  accessTpye,
  hostel,
  callApi,
}) {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [submitCashToFinanceByHostel] = useSubmitCashToFinanceByHostel();
  const onSubmitToFinanceManager = () => {
    if (
      !accessRole &&
      !accessTpye &&
      hostel?.collected_fee > 0 &&
      hostel?.requested_status === "Pending"
    ) {
      setDisabled((pre) => !pre);
      submitCashToFinanceByHostel({
        hid: hostel?._id,
        submitAmount: { amount: hostel?.collected_fee },
      })
        .then(() => {
          onRefetch();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  // console.info("smfdsfb,n", funds);
  return (
    <div className={style.funds2}>
      <div className={style.fundshead}>
        <h6> {t("hostel_fees")} </h6>
        <img src="/images/finance/filter-icon.svg" alt="" />
      </div>

      <div className={style.fundscontent}>
        <div className={style.sidebarbottomitem}>
          <img alt="not found" src="/images/hostel/rupee-blue-icon.svg" />
          <div>
            <p className={style.namee}>
              Rs.{" "}
              {(hostel?.onlineFee
                ? hostel?.onlineFee
                : 0 + hostel?.offlineFee
                ? hostel?.offlineFee
                : 0
              ).toFixed(2)}
            </p>
            <p className={style.desig}> {t("total_hostel_fees")} </p>
          </div>
        </div>

        <BalanceItem
          check="false"
          bal={t("online_fees")}
          value={hostel?.onlineFee?.toFixed(2) ?? 0}
        />
        <BalanceItem
          check="true"
          bal={t("offline_fees")}
          value={hostel?.offlineFee?.toFixed(2) ?? 0}
        />
        <BalanceItem
          check="true"
          bal={t("cash_with_me")}
          value={hostel?.collected_fee?.toFixed(2) ?? 0}
        />
        <div
          className={style.fundbtn}
          onClick={onSubmitToFinanceManager}
          style={{
            color: "#ffffff",
            backgroundColor: "#1c023b",
            opacity: accessRole ? "0.5" : "1",
          }}
        >
          {hostel?.requested_status === "Pending"
            ? `${t("submit")} ${t("submit_cash_to_finance_manager")}`
            : `${t("requested")} ${t("submit_cash_to_finance_manager")}`}
        </div>
        <HostelTabChangeLink
          carryParentState={carryParentState}
          activeTab="remaining"
          accessRole={accessRole}
          callApi={callApi}
        >
          <div className={style.fundbtn}>
            {t("total_pending_fees")} : Rs. {hostel?.remainingFeeCount}
          </div>
        </HostelTabChangeLink>
        <div className={style.fundbtn}>
          {t("total_concession_fees")} : Rs. {hostel?.exemptAmount}
        </div>
      </div>
      {disabled && <QLoader />}
    </div>
  );
}

export default Funds;
