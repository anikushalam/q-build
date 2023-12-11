import { useTranslation } from "react-i18next";
import style from "../BankDetail.module.css";
const OneBankFund = ({ totalRepay, collectOnline, dueRepay }) => {
  const { t } = useTranslation();
  return (
    <div className={style.bank_fund_container}>
      <div className={style.bank_fund}>
        <h6>{t("total_due")}</h6>
        <h5>
          {t("rs_only")} {totalRepay ?? 0}
        </h5>
      </div>
      <div className={style.bank_fund}>
        <h6>{t("online_fees")}</h6>
        <h5>
          {t("rs_only")} {collectOnline ?? 0}
        </h5>
      </div>
      <div className={style.bank_fund}>
        <h6>{t("repayment_due")}</h6>
        <h5>
          {t("rs_only")} {dueRepay ?? 0}
        </h5>
      </div>
    </div>
  );
};

export default OneBankFund;
