import style from "../StudentFees.module.css";
import { useTranslation } from "react-i18next";
// import StudentInternalFeeReceipt from "./StudentInternalFeeReceipt";
import dayjs from "dayjs";

const StudentInternalFeesCard = ({
  amount,
  feesName,
  dateOffCreation,
  is_paid,
  is_checklist,
  rid,
  transactionDate,
  transactionMode,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <h5>
        {t("rs")}.{amount ?? 0}{" "}
      </h5>
      <h6>{feesName ?? "Static"}</h6>
      {transactionDate ? (
        <p>
          {t("paid_on")}
          {dayjs(transactionDate).format("DD MMMM YYYY")}
        </p>
      ) : is_checklist ? (
        ""
      ) : (
        <p>
          {t("pay_by")}
          {dayjs(dateOffCreation).format("DD MMMM YYYY")}
        </p>
      )}

      {is_paid !== "Not Paid" ? (
        <>
          <button className={style.student_internal_card_btn_paid}>
            {t("internal_paid")} {transactionMode ?? ""}
          </button>
          {/* <StudentInternalFeeReceipt rid={rid} /> */}
        </>
      ) : (
        <button className={style.student_internal_card_btn_pay}>
          {t("unpaid")}
        </button>
      )}
    </>
  );
};

export default StudentInternalFeesCard;
