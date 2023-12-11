import { useTranslation } from "react-i18next";
import style from "./FinanceDeposit.module.css";
import dayjs from "dayjs";
import { localTimeFormat } from "../../../Utils/Functions/localTime";

const FinanceDepositRefundedListCard = ({ refund }) => {
  const { t } = useTranslation();
  return (
    <div className={style.corpus_card}>
      <h6
        style={{
          textAlign: "center",
        }}
      >
        {t("invoice_number")} {" : "} {refund?.invoice_count ?? ""}
      </h6>
      <p className={style.recieve_from}>{t("paid_to")}</p>
      <div className={style.unused_container_text_inner}>
        <h6>
          {`${refund?.student?.studentFirstName ?? ""} ${
            refund?.student?.studentMiddleName ?? ""
          } ${refund?.student?.studentLastName ?? ""}`}
        </h6>
        <h6>
          {t("rs_only")} {refund?.fee_payment_amount ?? 0}
        </h6>
      </div>
      <div className={style.unused_container_text_inner}>
        <p
          style={{
            color: "rgba(18, 18, 18, 0.8)",
          }}
        >
          {dayjs(refund?.created_at).format("DD MMM YYYY")}
          {", "}
          {localTimeFormat(refund?.created_at, "LT")}
        </p>
        <p
          style={{
            color: "rgba(18, 18, 18, 0.8)",
          }}
        >
          {refund?.fee_payment_mode === "Online" ? "Bank" : "Cash"}
        </p>
      </div>
    </div>
  );
};

export default FinanceDepositRefundedListCard;
