import React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useGetBankByFinance } from "../../../../../hooks/member_tab/finance-api";
import style from "./ConfirmStudentAdmisionModal.module.css";

const StudentPaymentGateway = ({
  financeId,
  setIndex,
  viewAs,
  departmentId,
  flowAs,
}) => {
  const { t } = useTranslation();
  const { getBankByFinance, getBankByFinanceRefetch } = useGetBankByFinance({
    data: {
      fid: financeId,
      flow: flowAs,
      filter_by: departmentId,
    },
    skip: !financeId,
  });
  useEffect(() => {
    if (financeId) getBankByFinanceRefetch();
  }, [financeId, getBankByFinanceRefetch]);

  // console.info("this is gateway ", getBankByFinance);
  return (
    <>
      <h6 className={style.process_offline}>
        {t("process_for_offline_payment")}
      </h6>

      {viewAs === "STUDENT"
        ? ""
        : getBankByFinance?.bank_query?.cash && (
            <div className={style.gateway_card} onClick={() => setIndex(2)}>
              <img src="/images/cash-icon.svg" alt="cash icon" />
              <h6>{t("process_by_cash")}</h6>
            </div>
          )}
      {getBankByFinance?.bank_query?.upi_transfer && (
        <div className={style.gateway_card} onClick={() => setIndex(3)}>
          <img src="/images/upi-icon.svg" alt="cash icon" />
          <h6>{t("upi_transfer")}</h6>
        </div>
      )}
      {getBankByFinance?.bank_query?.net_banking && (
        <div className={style.gateway_card} onClick={() => setIndex(4)}>
          <img src="/images/bank-details-icon.svg" alt="cash icon" />
          <h6>{t("neft_rtgs")}</h6>
        </div>
      )}
      {getBankByFinance?.bank_query?.cheque && (
        <div className={style.gateway_card} onClick={() => setIndex(5)}>
          <img src="/images/cheque-icon.svg" alt="cash icon" />
          <h6>{t("cheque")}</h6>
        </div>
      )}
      {getBankByFinance?.bank_query?.demand_draft && (
        <div className={style.gateway_card} onClick={() => setIndex(6)}>
          <img src="/images/demand-icon.svg" alt="cash icon" />
          <h6>{t("demand_draft")}</h6>
        </div>
      )}
    </>
  );
};

export default StudentPaymentGateway;
