import React from "react";
import style from "./Funds.module.css";
import { useTranslation } from "react-i18next";
// import TransactionFilter from "../../../Filter/Transaction/TransactionFilter";
// import FeeHeadFilter from "../../../Filter/FeesHead/FeeHeadFilter";

function BalanceItem({ bal, value, check }) {
  return (
    <div className={style.balanceItem}>
      <p>{bal}:</p>
      <p>Rs. {value}</p>
    </div>
  );
}

function Funds({ funds }) {
  const { t } = useTranslation();
  // const [openFilter, setOpenFilter] = useState(false);
  // const [openFeeFilter, setOpenFeeFilter] = useState(false);
  var cashBalance =
    funds?.financeCashBalance +
    funds?.financeSubmitBalance +
    funds?.financeIncomeCashBalance;
  if (cashBalance > funds?.financeExpenseCashBalance) {
    cashBalance -= funds?.financeExpenseCashBalance;
  }

  var bankBalance = funds?.financeBankBalance + funds?.financeIncomeBankBalance;
  if (bankBalance > funds?.financeExpenseBankBalance) {
    bankBalance -= funds?.financeExpenseBankBalance;
  }

  // const onOpenFilter = () => {
  //   if (accessRole) {
  //   } else {
  //     setOpenFilter(true);
  //   }
  // };
  // const onOpenFeeFilter = () => {
  //   if (accessRole) {
  //   } else {
  //     setOpenFeeFilter((pre) => !pre);
  //   }
  // };
  return (
    <div className={style.funds}>
      <div className={style.fundshead}>
        <h6> {t("funds_overview")} </h6>
        {/* <div className={style.both_filter}>
          <div
            onClick={onOpenFeeFilter}
            className={style.both_filter_with_name}
          >
            <img src="/images/finance/filter-grey-icon.svg" alt="" />
            <h6>{t("fee_receipt_filter")}</h6>
          </div>
          <img
            src="/images/finance/filter-icon.svg"
            alt=""
            onClick={onOpenFilter}
          />
        </div> */}
      </div>

      <div className={style.fundscontent}>
        <div className={style.sidebarbottomitem}>
          <img alt="not found" src="/images/finance/doller-icon.svg" />
          <div>
            <p className={style.namee}>Rs. {funds?.financeTotalBalance}</p>
            <p className={style.desig}>{t("total_funds")}</p>
          </div>
        </div>
        <BalanceItem
          check="false"
          bal={t("cash_balance")}
          value={cashBalance}
        />
        <BalanceItem
          check="false"
          bal={t("bank_balance")}
          value={bankBalance}
        />
        <BalanceItem
          check="true"
          bal={t("due_from_qviple")}
          value={funds?.institute?.adminRepayAmount?.toFixed(2)}
        />
      </div>
      {/* {openFilter && (
        <TransactionFilter
          onClose={() => setOpenFilter(false)}
          instituteId={instituteId}
        />
      )}
      {openFeeFilter && <FeeHeadFilter onClose={onOpenFeeFilter} />} */}
    </div>
  );
}

export default Funds;
