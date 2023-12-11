import { useTranslation } from "react-i18next";
import style from "../Income/Income.module.css";
import { useFinanceExpenseBalance } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { memo } from "react";

const TotalExpense = ({ fid }) => {
  const { t } = useTranslation();
  const { financeExpenseBalance } = useFinanceExpenseBalance({
    fid: fid,
    skip: !fid,
  });

  // console.info("financeExpenseBalance", financeExpenseBalance);
  return (
    <div className={style.right}>
      <div
        className={style.rightHead}
        style={{
          "--bg-expense-color": "rgb(231, 75, 75)",
        }}
      >
        <h6>{t("total_expense")}</h6>
        <h6>
          {t("rs_only")}
          {financeExpenseBalance?.expenseBalance?.financeExpenseCashBalance +
            financeExpenseBalance?.expenseBalance?.financeExpenseBankBalance}
        </h6>
      </div>

      <div className={style.rightBody}>
        <h6>
          {" "}
          {t("by_cash")} : {t("rs_only")}
          {financeExpenseBalance?.expenseBalance?.financeExpenseCashBalance}
        </h6>
        <h6>
          {" "}
          {t("by_bank")} : {t("rs_only")}
          {financeExpenseBalance?.expenseBalance?.financeExpenseBankBalance}
        </h6>
      </div>
    </div>
  );
};

export default memo(TotalExpense);
