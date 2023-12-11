import React, { useEffect } from "react";
import { useGetBankByFinance } from "../../../../hooks/member_tab/finance-api";
import FormToggle from "../../../../StaffTab/components/DividerTab/MainContent/StaffForm/FormToggle";
import { useTranslation } from "react-i18next";

const ShowPaymentMode = ({ fid }) => {
  const { t } = useTranslation();
  const { getBankByFinance, getBankByFinanceRefetch } = useGetBankByFinance({
    data: {
      fid: fid,
      flow: "",
      filter_by: "",
    },
    skip: !fid,
  });
  useEffect(() => {
    if (fid) getBankByFinanceRefetch();
  }, [fid, getBankByFinanceRefetch]);
  return (
    <>
      <FormToggle
        labelHeading={t("online_payment_gateway")}
        labelDescription={"Default On"}
        defaultLabel={false}
        customContainer={{
          padding: "0",
          marginBottom: "0.5rem",
        }}
      />
      <FormToggle
        labelHeading={t("cash")}
        labelDescription={""}
        defaultLabel={false}
        checkedToggle={getBankByFinance?.bank_query?.cash}
        customContainer={{
          padding: "0",
          marginBottom: "0.5rem",
        }}
      />
      <FormToggle
        labelHeading={t("upi_transfer")}
        labelDescription={""}
        defaultLabel={false}
        checkedToggle={getBankByFinance?.bank_query?.upi_transfer}
        customContainer={{
          padding: "0",
          marginBottom: "0.5rem",
        }}
      />
      <FormToggle
        labelHeading={t("neft_rtgs")}
        labelDescription={""}
        defaultLabel={false}
        checkedToggle={getBankByFinance?.bank_query?.net_banking}
        customContainer={{
          padding: "0",
          marginBottom: "0.5rem",
        }}
      />
      <FormToggle
        labelHeading={t("cheque")}
        labelDescription={""}
        defaultLabel={false}
        checkedToggle={getBankByFinance?.bank_query?.cheque}
        customContainer={{
          padding: "0",
          marginBottom: "0.5rem",
        }}
      />
      <FormToggle
        labelHeading={t("demand_draft")}
        labelDescription={""}
        defaultLabel={false}
        checkedToggle={getBankByFinance?.bank_query?.demand_draft}
        customContainer={{
          padding: "0",
          marginBottom: "0.5rem",
        }}
      />
    </>
  );
};

export default ShowPaymentMode;
