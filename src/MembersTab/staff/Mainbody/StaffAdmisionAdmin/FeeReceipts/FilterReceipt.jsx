import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useGetAllBankByFinance } from "../../../../../hooks/member_tab/finance-api";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import BankCard from "../../FinanceManager/BankDetails/BankCard";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import style from "./FeeReceipts.module.css";

const FilterReceipt = ({ onClose, financeId, setFilterReceiptQuery }) => {
  const { t } = useTranslation();
  const { getAllBankByFinance, getAllBankByFinanceRefetch } =
    useGetAllBankByFinance({
      data: {
        fid: financeId,
        page: 1,
        limit: 20,
        search: "",
      },
      skip: !financeId,
    });
  useEffect(() => {
    if (financeId) getAllBankByFinanceRefetch();
  }, [financeId, getAllBankByFinanceRefetch]);

  const onChooseBank = (val) => {
    setFilterReceiptQuery(val);
    onClose();
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.applicable_container}>
        <section className={style.receipt_container_title}>
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onClose}
            alt="go to previous tab"
            title="Go Back"
            style={{
              cursor: "pointer",
            }}
          />
          <h6>{t("filter_bank_account")}</h6>
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        <div
          style={{
            marginTop: "1rem",
          }}
        >
          {getAllBankByFinance?.all_accounts?.map((bank) => (
            <BankCard
              bank={bank}
              viewAs="ADMISSION_ADMIN"
              onChooseBank={onChooseBank}
            />
          ))}
        </div>
      </div>
    </PopupWrapper>
  );
};

export default FilterReceipt;
