import React from "react";
import style from "./Funds.module.css";
import { useTranslation } from "react-i18next";
import { useSubmitAmountToFinanace } from "../../../../../../hooks/member_tab/admission-api";
import { useState } from "react";
import QLoader from "../../../../../../Loader/QLoader";
import AdmissionTabChangeLink from "../../AdmissionTabChangeLink";
// import AdmissionFilter from "./AdmissionFilter";
function BalanceItem({ bal, value }) {
  return (
    <div className={style.balanceItem}>
      <p>{bal}:</p>
      <p>Rs. {value}</p>
    </div>
  );
}

function Funds({
  setDueList,
  dueList,
  funds,
  onRefetch,
  carryParentState,
  accessRole,
  accessTpye,
  callApi,
}) {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [submitAmountToFinanace] = useSubmitAmountToFinanace();
  // const [openFilter, setOpenFilter] = useState(false);
  var total = funds?.onlineFee + funds?.offlineFee;
  const onSubmitToFinanceManager = () => {
    if (
      !accessRole &&
      !accessTpye &&
      callApi &&
      funds?.collected_fee > 0 &&
      funds?.requested_status === "Pending"
    ) {
      setDisabled((pre) => !pre);
      submitAmountToFinanace({
        aid: funds?._id,
        submitAmount: { amount: funds?.collected_fee },
      })
        .then(() => {
          onRefetch();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  // const onClose = () => {
  //   if (!accessRole) {
  //     setOpenFilter((pre) => !pre);
  //   }
  // };

  // console.info("smfdsfb,n", funds);
  return (
    <div className={dueList ? style.funds : style.funds2}>
      <div className={style.fundshead}>
        <h6> {t("admission_fees")} </h6>
        {/* <img src="/images/finance/filter-icon.svg" alt="" onClick={onClose} /> */}
      </div>

      <div className={style.fundscontent}>
        <div className={style.sidebarbottomitem}>
          <img alt="not found" src="/images/finance/doller-icon.svg" />
          <div>
            <p className={style.namee}>Rs. {total}</p>
            <p className={style.desig}> {t("total_admission_fees")} </p>
          </div>
        </div>

        <BalanceItem
          check="false"
          setDueList={setDueList}
          dueList={dueList}
          bal={t("online_fees")}
          value={funds?.onlineFee?.toFixed(2)}
        />
        <BalanceItem
          check="true"
          dueList={dueList}
          setDueList={setDueList}
          bal={t("offline_fees")}
          value={funds?.offlineFee?.toFixed(2)}
        />
        <BalanceItem
          check="true"
          dueList={dueList}
          setDueList={setDueList}
          bal={t("cash_with_me")}
          value={funds?.collected_fee?.toFixed(2)}
        />
        <div
          className={style.fundbtn}
          onClick={onSubmitToFinanceManager}
          style={{
            color: "#ffffff",
            backgroundColor: "#1c023b",
            opacity: accessRole || accessTpye ? "0.5" : "1",
          }}
        >
          {funds?.requested_status === "Pending"
            ? `${t("submit")} ${t("submit_cash_to_finance_manager")}`
            : `${t("requested")} ${t("submit_cash_to_finance_manager")}`}
        </div>
        <AdmissionTabChangeLink
          carryParentState={carryParentState}
          activeTab="pending"
          accessRole={accessRole}
          accessTpye={accessTpye}
          callApi={callApi}
        >
          <div className={style.fundbtn}>
            {t("total_pending_fees")} : Rs. {funds?.remainingFeeCount}
          </div>
        </AdmissionTabChangeLink>
        <div className={style.fundbtn}>
          {t("total_concession_fees")} : Rs. {funds?.exemptAmount}
        </div>
      </div>
      {disabled && <QLoader />}

      {/* {openFilter && (
        <AdmissionFilter
          admissionId={funds?._id}
          instituteId={funds?.institute?._id}
          financeId={funds?.institute?.financeDepart[0]}
          carryParentState={carryParentState}
          onClose={onClose}
        />
      )} */}
    </div>
  );
}

export default Funds;
