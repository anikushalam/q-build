import BorderBottom from "../../../Ui/Border/BorderBottom";
import style from "../FinanceManager.module.css";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import { useTranslation } from "react-i18next";
import { assestsUserFinanceUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
const FinanceFund = ({ financeData }) => {
  const { t } = useTranslation();
  var cashBalance =
    financeData?.financeCashBalance +
    financeData?.financeSubmitBalance +
    financeData?.financeIncomeCashBalance;
  if (cashBalance > financeData?.financeExpenseCashBalance) {
    cashBalance -= financeData?.financeExpenseCashBalance;
  }

  var bankBalance =
    financeData?.financeBankBalance + financeData?.financeIncomeBankBalance;
  if (bankBalance > financeData?.financeExpenseBankBalance) {
    bankBalance -= financeData?.financeExpenseBankBalance;
  }

  return (
    <>
      <UserMemberContentWrapper>
        <div className={style.fm_header_container}>
          <h6>{t("funds_overview")}</h6>
        </div>
      </UserMemberContentWrapper>
      <BorderBottom />
      <UserMemberContentWrapper>
        <div className={style.fm_fund_total}>
          <img src={`${assestsUserFinanceUrl}/rupee.svg`} alt="" />
          <div className={style.fm_fund_total_inner}>
            <h6>
              {t("rs_only")} {financeData?.financeTotalBalance ?? 0}
            </h6>
            <p>{t("total_funds")}</p>
          </div>
        </div>
        <div className={style.fm_fund_card}>
          <p>{t("cash_balance")}:</p>
          <p>
            {t("rs_only")} {cashBalance ?? 0}
          </p>
        </div>
        <div className={style.fm_fund_card}>
          <p>{t("bank_balance")}:</p>
          <p>
            {t("rs_only")} {bankBalance ?? 0}
          </p>
        </div>
        <div className={style.fm_fund_card}>
          <p>{t("due_from_qviple")}:</p>
          <p>
            {t("rs_only")}{" "}
            {financeData?.institute?.adminRepayAmount?.toFixed(2) ?? 0}
          </p>
        </div>
      </UserMemberContentWrapper>
    </>
  );
};

export default FinanceFund;
