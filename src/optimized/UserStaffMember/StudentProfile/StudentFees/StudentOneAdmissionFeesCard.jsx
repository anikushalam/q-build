import { useTranslation } from "react-i18next";
import style from "./StudentAdmissionFees.module.css";
import dayjs from "dayjs";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import CollectAsScholarship from "./FeeCollect/CollectAsScholarship";

const StudentOneAdmissionFeesCard = ({ admission, install }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [whichAction, setWhichAction] = useState("");

  const onCollectAction = () => {
    if (getQuery.state?.collectAs === "SCHOLARSHIP") {
      setWhichAction("SCHOLARSHIP");
    }
  };
  const onCloseAction = () => {
    setWhichAction("");
  };
  return (
    <>
      <div className={style.student_admission_cash_card}>
        <section className={style.admission_fees_amount}>
          <h6>
            {install?.status === "Paid"
              ? install?.installmentValue ?? ""
              : install?.installmentValue}{" "}
            {install?.status === "Paid" && (
              <span>
                {dayjs(install?.fee_receipt?.fee_transaction_date).format(
                  "DD-MMM-YYYY"
                )}
              </span>
            )}
          </h6>
          <h6>
            {t("rs")}
            {install?.remainAmount ?? 0}
          </h6>
        </section>
        <section className={style.admission_fees_grant}>
          {install?.status === "Paid" ? (
            <>
              <h6>
                {install?.fee_receipt?.fee_payment_mode === "By Cash"
                  ? "Offline"
                  : install?.fee_receipt?.fee_payment_mode
                  ? install?.fee_receipt?.fee_payment_mode
                  : install?.refund_status ?? ""}
              </h6>
              <h6>
                {install?.fee_receipt?.set_off_status === "Set Off"
                  ? "SetOff"
                  : install?.fee_receipt?.fee_payment_mode === "By Cash"
                  ? "Cash"
                  : install?.fee_receipt?.fee_payment_mode ===
                    "Exempted/Unrecovered"
                  ? "N/A"
                  : "Bank"}
              </h6>
            </>
          ) : (
            <>
              {install?.status === "Receipt Rejected" ? (
                <h6>
                  {`${t("reason")} : `}
                  {install?.fee_receipt?.reason}
                </h6>
              ) : (
                <h6>
                  {t("due_on")}
                  {install?.dueDate}
                </h6>
              )}
            </>
          )}
        </section>
        {install?.status === "Paid" ? (
          <button
            className={style.view_receipt_btn}
            // onClick={() => {
            //   setSelectReceiptCard(admission?.appId?._id);
            //   onPdfDownload(
            //     install?.fee_receipt?._id,
            //     admission?.remaining_flow
            //   );
            // }}
          >
            {t("view_receipt")}
          </button>
        ) : (
          <button
            className={style.student_admission_collect_btn}
            style={
              install?.status === "Receipt Requested"
                ? {
                    width: "100%",
                    backgroundColor: "#B8B83E",
                  }
                : install?.status === "Receipt Rejected"
                ? {
                    width: "100%",
                    backgroundColor: "#B8B83E",
                  }
                : admission?.button_status === "Collect As Scholarship"
                ? {
                    backgroundColor: "#1d22c9f7",
                  }
                : {
                    width: "100%",
                  }
            }
            onClick={onCollectAction}
          >
            {install?.status === "Receipt Requested"
              ? t("receipt_requested")
              : admission?.button_status === "Collect As Scholarship"
              ? t("scholarship_outs")
              : t("collect_fees")}
          </button>
        )}
      </div>

      {whichAction === "SCHOLARSHIP" && (
        <CollectAsScholarship
          onClose={onCloseAction}
          installment={install}
          admission={admission}
        />
      )}
    </>
  );
};

export default StudentOneAdmissionFeesCard;
