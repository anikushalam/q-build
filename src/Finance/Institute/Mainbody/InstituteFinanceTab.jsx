import React from "react";
import style from "./Main.module.css";
import { useTranslation } from "react-i18next";
import InstituteFinanceTabChangeLink from "./InstituteFinanceTabChangeLink";
import CommonLinkTab from "../../../Sidebar/CommonLinkTab";
import { useSearchParams } from "react-router-dom";
import LinkedAccount from "./stats/LinkedAccount/LinkedAccount";

const InstituteFinanceTab = ({ carryParentState }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  return (
    <>
      <div className={style.finance_tab_tabs}>
        <CommonLinkTab
          tabLevel={t("menu")}
          customStyleContainer={{
            width: "33.3%",
            marginRight: "2px",
            borderTopLeftRadius: "6px",
          }}
          customStyleLevel={{ borderTopLeftRadius: "6px" }}
          tabValue="menu"
          currentValue={!searchParams?.get("a") ? "menu" : "other"}
          carryParentState={carryParentState}
          activeUrl="finance"
        />
        <CommonLinkTab
          tabLevel={t("fees_structure")}
          customStyleContainer={{
            width: "33.3%",
            marginRight: "2px",
          }}
          customStyleLevel={{ borderTopLeftRadius: "6px" }}
          tabValue="fee"
          currentValue={searchParams?.get("a") === "fee" ? "fee" : "other"}
          carryParentState={carryParentState}
          activeUrl="finance?a=fee"
        />
        <CommonLinkTab
          tabLevel={t("acount")}
          customStyleContainer={{
            width: "33.3%",
            borderTopRightRadius: "6px",
          }}
          customStyleLevel={{ borderTopLeftRadius: "6px" }}
          tabValue="account"
          currentValue={
            searchParams?.get("a") === "account" ? "account" : "other"
          }
          carryParentState={carryParentState}
          activeUrl="finance?a=account"
        />
      </div>
      {!searchParams?.get("a") ? (
        <div className={style.item}>
          <InstituteFinanceTabChangeLink
            carryParentState={carryParentState}
            activeTab="?a=bank"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/finance/finance-bank-icon.svg"
                alt="bank icon"
              />
              <p>{t("bank_details_tab")}</p>
            </div>
          </InstituteFinanceTabChangeLink>
          <InstituteFinanceTabChangeLink
            carryParentState={carryParentState}
            activeTab="?a=pending"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/finance/finance-pending-icon.svg"
                alt="settings"
              />
              <p>{t("pending_fees")}</p>
            </div>
          </InstituteFinanceTabChangeLink>
          <InstituteFinanceTabChangeLink
            carryParentState={carryParentState}
            activeTab="?a=income"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/finance/finance-income-icon.svg"
                alt="student Request"
              />
              <p>{t("incomes")}</p>
            </div>
          </InstituteFinanceTabChangeLink>
          <InstituteFinanceTabChangeLink
            carryParentState={carryParentState}
            activeTab="?a=expense"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/finance/finance-expense-icon.svg"
                alt="settings"
              />
              <p>{t("expenses")}</p>
            </div>
          </InstituteFinanceTabChangeLink>
          {/* <InstituteFinanceTabChangeLink
            carryParentState={carryParentState}
            activeTab="?a=internal"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/finance/finance-fund-icon.svg"
                alt="Class Catalog"
              />
              <p>{t("finance_fund_overview")}</p>
            </div>
          </InstituteFinanceTabChangeLink> */}
          <InstituteFinanceTabChangeLink
            carryParentState={carryParentState}
            activeTab="?a=history"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/finance/finance-history-icon.svg"
                alt="repayment"
              />
              <p>{t("finance_transaction_hisotry")}</p>
            </div>
          </InstituteFinanceTabChangeLink>
          <InstituteFinanceTabChangeLink
            carryParentState={carryParentState}
            activeTab="?a=export"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/finance/finance-export-icon.svg"
                alt="refund"
              />
              <p>{t("data_export")}</p>
            </div>
          </InstituteFinanceTabChangeLink>
          <InstituteFinanceTabChangeLink
            carryParentState={carryParentState}
            activeTab="?a=moderator"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/finance/finance-moderator-icon.svg"
                alt="moderator icon"
              />
              <p>{t("finance_moderator")}</p>
            </div>
          </InstituteFinanceTabChangeLink>
        </div>
      ) : searchParams?.get("a") === "account" ? (
        <LinkedAccount />
      ) : null}
    </>
  );
};

export default InstituteFinanceTab;
