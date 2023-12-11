import React, { useState } from "react";
import style from "./MiddleContent.module.css";
import { useTranslation } from "react-i18next";
import Tabs from "./Tabs";
import Funds from "./Funds/Funds";
import DueList from "./DueList/DueList";
import FinanceTabChangeLink from "../../FinanceTabChangeLink";
import { useLocation } from "react-router-dom";
import FeesStructure from "../../FeesStructure/FeesStructure";

function MiddleContent({ tabData, carryParentState, accessRole, callApi }) {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [dueList, setDueList] = useState(false);

  // console.info("this is finance all info", tabData);
  return (
    <div
      className={style.MiddleContent}
      style={
        getQuery?.search?.substring(9) === "category" ||
        getQuery?.search?.substring(9) === "structure"
          ? {
              marginTop: "0",
            }
          : {
              color: "inherit",
            }
      }
    >
      {!dueList ? (
        <div className={style.MiddleContentLeft}>
          <div className={style.tabs}>
            <Tabs
              search={getQuery?.search}
              carryParentState={carryParentState}
            />
          </div>

          {!getQuery?.search && (
            <div className={style.itemIconContainer}>
              <FinanceTabChangeLink
                carryParentState={carryParentState}
                activeTab="student"
                accessRole={accessRole}
                callApi={callApi}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/finance/finance-student-icon.svg"
                    alt="moderator icon"
                  />
                  <p>{t("all_student")}</p>
                </div>
              </FinanceTabChangeLink>
              <FinanceTabChangeLink
                carryParentState={carryParentState}
                activeTab="bank"
                accessRole={accessRole}
                callApi={callApi}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/finance/finance-bank-icon.svg"
                    alt="bank icon"
                  />
                  <p>{t("bank_details_tab")}</p>
                </div>
              </FinanceTabChangeLink>
              <FinanceTabChangeLink
                carryParentState={carryParentState}
                activeTab="pending"
                accessRole={accessRole}
                callApi={callApi}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/finance/finance-pending-icon.svg"
                    alt="settings"
                  />
                  <p>{t("pending_fees")}</p>
                </div>
              </FinanceTabChangeLink>
              <FinanceTabChangeLink
                carryParentState={carryParentState}
                activeTab="submission"
                accessRole={accessRole}
                callApi={callApi}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/finance/finance-cash-icon.svg"
                    alt="settings"
                  />
                  <p>{t("finance_submit_request")}</p>
                </div>
              </FinanceTabChangeLink>
              <FinanceTabChangeLink
                carryParentState={carryParentState}
                activeTab="deposit"
                accessRole={accessRole}
                callApi={callApi}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/finance/finance-deposit-icon.svg"
                    alt="refund"
                  />
                  <p>{t("finance_deposit")}</p>
                </div>
              </FinanceTabChangeLink>
              {/* <FinanceTabChangeLink
                carryParentState={carryParentState}
                activeTab="inventory"
                accessRole={accessRole}
                callApi={callApi}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/finance/finance-inventory-icon.svg"
                    alt="inventry"
                  />
                  <p>{t("inventry_assets")}</p>
                </div>
              </FinanceTabChangeLink> */}
              <FinanceTabChangeLink
                carryParentState={carryParentState}
                activeTab="income"
                accessRole={accessRole}
                callApi={callApi}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/finance/finance-income-icon.svg"
                    alt="student Request"
                  />
                  <p>{t("incomes")}</p>
                </div>
              </FinanceTabChangeLink>
              <FinanceTabChangeLink
                carryParentState={carryParentState}
                activeTab="expense"
                accessRole={accessRole}
                callApi={callApi}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/finance/finance-expense-icon.svg"
                    alt="settings"
                  />
                  <p>{t("expenses")}</p>
                </div>
              </FinanceTabChangeLink>
              {/* <FinanceTabChangeLink
                carryParentState={carryParentState}
                activeTab="payroll"
                accessRole={accessRole}
                callApi={callApi}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/finance/finance-payroll-icon.svg"
                    alt="settings"
                  />
                  <p>{t("payroll")}</p>
                </div>
              </FinanceTabChangeLink> */}
              {/* <FinanceTabChangeLink
                carryParentState={carryParentState}
                activeTab="internal"
                accessRole={accessRole}
                callApi={callApi}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/finance/finance-fund-icon.svg"
                    alt="Class Catalog"
                  />
                  <p>{t("finance_fund_overview")}</p>
                </div>
              </FinanceTabChangeLink> */}
              <FinanceTabChangeLink
                carryParentState={carryParentState}
                activeTab="scholarship"
                accessRole={accessRole}
                callApi={callApi}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/finance/finance-scholarship-icon.svg"
                    alt="scholarship icon"
                  />
                  <p>{t("finance_shcolarship")}</p>
                </div>
              </FinanceTabChangeLink>
              <FinanceTabChangeLink
                carryParentState={carryParentState}
                activeTab="exemption"
                accessRole={accessRole}
                callApi={callApi}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/finance/finance-exemption-icon.svg"
                    alt="exemption icon"
                    style={{
                      marginTop: "1rem",
                    }}
                  />
                  <p
                    style={{
                      marginLeft: "1.5rem",
                    }}
                  >
                    {t("exemption_unrecovered")}
                  </p>
                </div>
              </FinanceTabChangeLink>
              {/* <FinanceTabChangeLink
                carryParentState={carryParentState}
                activeTab="repayment"
                accessRole={accessRole}
              callApi={callApi}
                >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/finance/finance-repayment-icon.svg"
                    alt="repayment"
                  />
                  <p>{t("finance_settlement")}</p>
                </div>
              </FinanceTabChangeLink> */}
              <FinanceTabChangeLink
                carryParentState={carryParentState}
                activeTab="history"
                accessRole={accessRole}
                callApi={callApi}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/finance/finance-history-icon.svg"
                    alt="repayment"
                  />
                  <p>{t("finance_transaction_hisotry")}</p>
                </div>
              </FinanceTabChangeLink>
              <FinanceTabChangeLink
                carryParentState={carryParentState}
                activeTab="export"
                accessRole={accessRole}
                callApi={callApi}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/finance/finance-export-icon.svg"
                    alt="refund"
                  />
                  <p>{t("data_export")}</p>
                </div>
              </FinanceTabChangeLink>
              <FinanceTabChangeLink
                carryParentState={carryParentState}
                activeTab="moderator"
                accessRole={accessRole}
                callApi={callApi}
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/finance/finance-moderator-icon.svg"
                    alt="moderator icon"
                  />
                  <p>{t("finance_moderator")}</p>
                </div>
              </FinanceTabChangeLink>
            </div>
          )}
          {getQuery?.search?.substring(3, 6) === "fee" && (
            <FeesStructure
              financeId={tabData?._id}
              instituteId={tabData?.institute?._id}
              fees_category_count={tabData?.fees_category_count}
              fee_master_array_count={tabData?.fee_master_array_count}
              carryParentState={carryParentState}
              accessRole={accessRole}
              callApi={callApi}
            />
          )}
          {getQuery?.search?.substring(3) === "fund" && (
            <Funds
              dueList={dueList}
              setDueList={setDueList}
              funds={tabData}
              instituteId={tabData?.institute?._id}
              accessRole={accessRole}
              callApi={callApi}
            />
          )}
        </div>
      ) : (
        <div className={style.MiddleContentLeft2}>
          <DueList setDueList={setDueList} />
        </div>
      )}
    </div>
  );
}

export default MiddleContent;
