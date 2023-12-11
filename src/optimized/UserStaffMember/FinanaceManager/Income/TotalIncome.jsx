import { useTranslation } from "react-i18next";
import style from "./Income.module.css";
import { useFinanceIncomeBalance } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { memo } from "react";

const TotalIncome = ({ fid }) => {
  const { t } = useTranslation();
  const { financeIncomeBalance } = useFinanceIncomeBalance({
    fid: fid,
    skip: !fid,
  });
  return (
    <div className={style.right}>
      <div
        className={style.rightHead}
        style={{
          "--bg-expense-color": "#20b038",
        }}
      >
        <h6>{t("total_income")}</h6>
        <h6>
          {t("rs_only")}
          {financeIncomeBalance?.incomeBalance?.financeIncomeCashBalance +
            financeIncomeBalance?.incomeBalance?.financeIncomeBankBalance}
        </h6>
      </div>

      <div className={style.rightBody}>
        <h6>
          {" "}
          {t("by_cash")} : {t("rs_only")}
          {financeIncomeBalance?.incomeBalance?.financeIncomeCashBalance}
        </h6>
        <h6>
          {" "}
          {t("by_bank")} : {t("rs_only")}
          {financeIncomeBalance?.incomeBalance?.financeIncomeBankBalance}
        </h6>
      </div>
    </div>
  );
};

export default memo(TotalIncome);
