import React, { useEffect } from "react";
import style from "./InsFund.module.css";
import Card from "./Card/Card";
import { useTranslation } from "react-i18next";
import { useFinanceRemainBalance } from "../../../../../hooks/institute/institute-finance-api";

function InsFund({ detailFund, fId, financeId }) {
  const { t } = useTranslation();
  const { financeRemainBalance, financeRemainBalanceRefetch } =
    useFinanceRemainBalance({
      id: `${fId ? fId : financeId}`,
      skip: !fId ? !financeId : !fId,
    });

  useEffect(() => {
    if (fId || financeId) financeRemainBalanceRefetch();
  }, [fId, financeId, financeRemainBalanceRefetch]);

  const onNumberFormat = (val) => {
    return val?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0;
  };

  // console.info(";asdgfajsasd", detailFund);
  return (
    <div className={style.insFund}>
      <div className={style.insFundBottom}>
        <Card
          amt={`${detailFund?.financeRaisedBalance}`}
          text={t("total_raised_amount")}
          img="/images/finance/total.svg"
        />
        <Card
          amt={`${onNumberFormat(
            detailFund?.financeCashBalance + detailFund?.financeSubmitBalance
          )}`}
          text={t("offline_collected_amount")}
          img="/images/finance/offline.svg"
        />
        <Card
          amt={`${onNumberFormat(detailFund?.financeBankBalance)}`}
          text={t("online_collected_amount")}
          img="/images/finance/online.svg"
        />
        <Card
          amt={`${onNumberFormat(detailFund?.financeCollectedSBalance)}`}
          text={t("collected_not_submitted")}
          img="/images/finance/notSubmitted.svg"
        />
        <Card
          amt={`${onNumberFormat(detailFund?.financeExemptBalance)}`}
          text={t("exempted_amount")}
          img="/images/finance/exempted.svg"
        />
        <Card
          amt={`${onNumberFormat(financeRemainBalance?.remain)}`}
          text={t("remaining_amount")}
          img="/images/finance/remaining.svg"
        />
      </div>
    </div>
  );
}

export default InsFund;
