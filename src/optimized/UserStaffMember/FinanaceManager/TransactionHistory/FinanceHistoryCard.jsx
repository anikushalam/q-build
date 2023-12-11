import { useTranslation } from "react-i18next";
import style from "./TransactionHistory.module.css";
import dayjs from "dayjs";
import { localTimeFormat } from "../../../Utils/Functions/localTime";

const FinanceHistoryCard = ({ history }) => {
  const { t } = useTranslation();
  return (
    <div
      className={style.sidebarheader}
      //   onClick={() => {
      //     setOnClickValue(history);
      //     setDetailView(true);
      //   }}
    >
      <div className={style.text}>
        <p className={style.rcv}>{t("paid_to")}</p>
        <h6>
          {history?.payment_by_end_user_id?.userLegalName ??
            history?.payment_by_end_user_id_name}
        </h6>
        <p className={style.rcv}>
          {dayjs(history?.created_at).format("DD MMM YYYY")}
          {", "}
          {localTimeFormat(history?.created_at, "LT")}
        </p>
      </div>

      <div className={style.text} style={{ marginTop: "0.9rem" }}>
        <p className={style.rcv}>
          {/* {t("invoice_no")} {history?.payment_invoice_number} */}
        </p>

        <h6>
          {t("rs_only")} {history?.payment_amount}
        </h6>
        <p className={style.rcv}>
          {/* {history?.payment_mode} */}
          {history.payment_mode?.toLowerCase() === "offline"
            ? history?.fee_receipt?.fee_payment_mode
              ? `${history?.fee_receipt?.fee_payment_mode}`
              : "Offline - No Receipt"
            : history.payment_mode?.toLowerCase() === "online"
            ? history?.fee_receipt?.fee_payment_mode
              ? `${history?.fee_receipt?.fee_payment_mode}`
              : "Online - No Receipt"
            : history?.payment_mode}
        </p>
      </div>
    </div>
  );
};

export default FinanceHistoryCard;
