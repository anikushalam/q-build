import {
  assestsLogoUrl,
  assestsUserFinanceUrl,
} from "../../../Services/UrlConfig/AssestsBaseUrl";
import style from "./TransactionHistory.module.css";
import { imageShowUrl } from "../../../Services/UrlConfig/BaseUrl";
import { useTranslation } from "react-i18next";
import { localTimeFormat } from "../../../Utils/Functions/localTime";
const FinanceSettlementCard = ({ repay }) => {
  const { t } = useTranslation();
  return (
    <div className={style.settle_card}>
      <div className={style.settle_card_container}>
        <img
          src={`${assestsLogoUrl}/qviple-logo.svg`}
          alt="qviple logo"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "12px",
          }}
        />
        <div className={style.settle_card_text}>
          <h6>
            {t("settlement_date")} {" : "}
            {repay?.settlement_date ?? ""}
          </h6>
          <p className={style.settle_paragraph}>
            {t("message")} {" : "} {repay?.message ?? ""}
          </p>
          <p className={style.settle_paragraph}>
            {t("transaction_id")}
            {" : "} {repay?.txnId ?? ""}
          </p>
          <p className={style.settle_paragraph}>
            {t("bank_name")}
            {" : "}
            {repay?.bank_account?.[0]?.finance_bank_account_name ?? ""}
          </p>
        </div>
      </div>

      <div
        className={style.settle_card_text}
        style={{
          alignItems: "flex-end",
        }}
      >
        {repay?.excel_attach ? (
          <a
            title="Download File"
            href={`${imageShowUrl}/${repay?.excel_attach}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <img src={`${assestsUserFinanceUrl}/xsxl.svg`} alt="excel icon" />
          </a>
        ) : null}
        <h6>
          {t("rs_only")} {repay?.repayAmount ?? ""}
        </h6>
        <p className={style.settle_paragraph}>
          {localTimeFormat(repay?.createdAt, "L")}
          {", "}
          {localTimeFormat(repay?.createdAt, "LT")}
        </p>
      </div>
    </div>
  );
};

export default FinanceSettlementCard;
