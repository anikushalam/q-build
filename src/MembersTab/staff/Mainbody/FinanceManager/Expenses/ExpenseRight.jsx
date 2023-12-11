import React from "react";
import moment from "moment";
import { useOneExpenseDetailQuery } from "../../../../../services/financeAPI";
import style from "./Expenses.module.css";
import { useTranslation } from "react-i18next";

function IncomeRight({ detailview, eBalance, expenseId, setDetailView }) {
  const { data: eDetail } = useOneExpenseDetailQuery(`${expenseId}`, {
    skip: !expenseId,
  });
  const { t } = useTranslation();

  // console.info("dnshjhfsa", eDetail);
  return (
    <>
      <div className={style.incomeRightt}>
        {detailview ? (
          <div className={style.detail}>
            <div className={style.detailTop}>
              <div className={style.detailTopLeft}>
                <h6 onClick={() => setDetailView(false)}>{t("back")}</h6>
              </div>
              <div className={style.detailTopMid}>
                <h6>
                  {eDetail?.oneExpense?.expensePaid
                    ? eDetail?.oneExpense?.expensePaid
                    : eDetail?.oneExpense?.expensePaidUser?.userLegalName}
                </h6>
              </div>
              <div className={style.detailTopRight}>
                Rs. {eDetail?.oneExpense?.expenseAmount}
              </div>
            </div>
            <div className={style.detailContent}>
              <p>{t("transaction_mode")}</p>
              <h6>
                {eDetail?.oneExpense?.expenseAccount} {t("payment")}{" "}
              </h6>
            </div>
            {eDetail?.oneExpense?.expense_good_name ? (
              <div className={style.detailContent}>
                <p>{t("name_of_good")}</p>
                <h6>{eDetail?.oneExpense?.expense_good_name}</h6>
              </div>
            ) : (
              ""
            )}
            {eDetail?.oneExpense?.expense_quantity ? (
              <div className={style.detailContent}>
                <p>{t("quantity_of_goods")}</p>
                <h6>{eDetail?.oneExpense?.expense_quantity}</h6>
              </div>
            ) : (
              ""
            )}

            <div className={style.detailContent}>
              <p>{t("reason")}</p>
              <h6>{eDetail?.oneExpense?.expensePurpose}</h6>
            </div>
            <div className={style.detailContent}>
              <p>{t("description")}</p>
              <h6>{eDetail?.oneExpense?.expenseDesc}</h6>
            </div>
            <div className={style.detailContent}>
              <p>{t("day_date")}</p>
              <h6>{moment(eDetail?.oneExpense?.createdAt).format("LL")}</h6>
            </div>
            <div className={style.detailContent}>
              <p>{t("ack_rcpt")}</p>
              <div className={style.imagediv}>
                <img src="/images/image-icon.svg" alt="" />

                <p>img07.png</p>
              </div>
            </div>
          </div>
        ) : (
          <div className={style.right}>
            <div className={style.rightHead}>
              <h6>{t("total_expenditure")}</h6>
              <h6>
                Rs.{" "}
                {eBalance?.financeExpenseCashBalance +
                  eBalance?.financeExpenseBankBalance}
              </h6>
            </div>

            <div className={style.rightBody}>
              <h6>
                {" "}
                {t("by_cash")} : Rs. {eBalance?.financeExpenseCashBalance}
              </h6>
              <h6>
                {" "}
                {t("by_bank")} : Rs. {eBalance?.financeExpenseBankBalance}
              </h6>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default IncomeRight;
