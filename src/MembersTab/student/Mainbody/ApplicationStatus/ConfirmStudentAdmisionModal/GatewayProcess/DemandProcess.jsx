import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetBankByFinance } from "../../../../../../hooks/member_tab/finance-api";
import JoinFormInputView from "../../../../../../JoiningForm/Student/Form/JoinFormInputView";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "./GatewayProcess.module.css";
import PaymentForm from "./PaymentForm";
const containerStyle = { width: "100%", marginTop: "0", marginBottom: "0" };
const labelStyle = {
  fontWeight: "400",
  fontSize: "12px",
  color: "rgba(18, 18, 18, 0.8)",
};
const DemandProcess = ({
  financeId,
  setIndex,
  payData,
  setPayData,
  ConfirmOffline,
  ExceedAmount,
  viewAs,
  departmentId,
  flowAs,
}) => {
  const { t } = useTranslation();
  const [openForm, setOpenForm] = useState(false);
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
  const onBackWithArrowLeft = () => {
    setIndex(1);
  };
  return (
    <div
      className={style.process_modal}
      style={
        viewAs === "APPLICATION_STATUS" || viewAs === "HOSTEL_RENEWAL"
          ? {
              height: "30rem",
              overflowY: "auto",
            }
          : {
              backgroundColor: "inherit",
            }
      }
    >
      {!openForm ? (
        <>
          <section className={style.add_process_modal_title_left}>
            <img
              src="/images/arrow-left-fees-icon.svg"
              onClick={onBackWithArrowLeft}
              alt=""
            />
            <h6>
              {viewAs === "APPLICATION_STATUS"
                ? "Bank Details"
                : t("pay_fees_by_demand")}
            </h6>
          </section>
          <BorderBottom customStyle={{ width: "100%", marginTop: "0.7rem" }} />

          <section className={style.process_description}>
            <h6>{t("procedure_for_paying_in_demand")}</h6>
            <p>1. {t("visit_your_bank_submit_demand")} </p>
            <p>2. {t("by_entering_bank_institute_demand")}</p>
            <p>3. {t("find_school_college")}</p>
            <p>4. {t("after_demand_draft")}</p>
            <p>5. {t("either_admission_counter")}</p>
            <p>6. {t("after_payment_made_and_authorised")}</p>
          </section>

          <section className={style.bank_details}>
            <h6>{t("bank_details")}</h6>
            <JoinFormInputView
              labelText={`${t("bank_name_collect")} :`}
              value={getBankByFinance?.all_account?.finance_bank_name}
              customStyleContainer={containerStyle}
              customStyleLabel={labelStyle}
              customStyleValue={labelStyle}
            />
            <JoinFormInputView
              labelText={`${t("account_name")} :`}
              value={getBankByFinance?.all_account?.finance_bank_account_name}
              customStyleContainer={containerStyle}
              customStyleLabel={labelStyle}
              customStyleValue={labelStyle}
            />
            <JoinFormInputView
              labelText={`${t("account_number")} :`}
              value={getBankByFinance?.all_account?.finance_bank_account_number}
              customStyleContainer={containerStyle}
              customStyleLabel={labelStyle}
              customStyleValue={labelStyle}
            />
            <JoinFormInputView
              labelText={`${t("ifsc_code")} :`}
              value={getBankByFinance?.all_account?.finance_bank_ifsc_code}
              customStyleContainer={containerStyle}
              customStyleLabel={labelStyle}
              customStyleValue={labelStyle}
            />
            <JoinFormInputView
              labelText={`${t("address")} :`}
              value={getBankByFinance?.all_account?.finance_bank_branch_address}
              customStyleContainer={containerStyle}
              customStyleLabel={labelStyle}
              customStyleValue={labelStyle}
            />
          </section>
          {viewAs === "APPLICATION_STATUS" ? (
            ""
          ) : (
            <button
              className={style.pay_in_cash_btn}
              onClick={() => setOpenForm((pre) => !pre)}
            >
              {t("update_payment_info")}
            </button>
          )}
        </>
      ) : (
        <PaymentForm
          setPayData={setPayData}
          payData={payData}
          setOpenForm={setOpenForm}
          activePaymentStatus="Demand Draft"
          ConfirmOffline={ConfirmOffline}
          ExceedAmount={ExceedAmount}
          viewAs={viewAs}
        />
      )}
    </div>
  );
};

export default DemandProcess;
