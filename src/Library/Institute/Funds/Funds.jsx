import React from "react";
import style from "./Funds.module.css";
import { useTranslation } from "react-i18next";

function BalanceItem({ bal, value, check }) {
  return (
    <div className={style.balanceItem}>
      <p>{bal}:</p>
      <p>Rs. {value}</p>
    </div>
  );
}

function Funds({ library }) {
  const { t } = useTranslation();

  return (
    <div className={style.funds}>
      <div className={style.fundshead}>
        <h6> {t("library_fine")} </h6>
        <img src="/images/finance/filter-icon.svg" alt="" />
      </div>

      <div className={style.fundscontent}>
        <div className={style.sidebarbottomitem}>
          <img alt="not found" src="/images/finance/doller-icon.svg" />
          <div>
            <p className={style.namee}>Rs. {library?.totalFine} </p>
            <p className={style.desig}>{t("total_fine")}</p>
          </div>
        </div>
        <BalanceItem
          check="false"
          bal={t("cash_fine")}
          value={library?.offlineFine}
        />
        <BalanceItem
          check="false"
          bal={t("bank_fine")}
          value={library?.onlineFine}
        />
        <BalanceItem
          check="true"
          bal={t("cash_lib")}
          value={library?.collectedFine}
        />
      </div>
    </div>
  );
}

export default Funds;
