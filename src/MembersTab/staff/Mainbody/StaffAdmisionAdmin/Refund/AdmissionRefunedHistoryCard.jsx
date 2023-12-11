import { useTranslation } from "react-i18next";
import style from "../../FinanceManager/History/History.module.css";
// import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import QLoader from "../../../../../Loader/QLoader";
import { useGetFeeReceiptDetail } from "../../../../../hooks/member_tab/admission-api";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import {
  admissionModifyReceiptData,
  hostelModifyReceiptData,
} from "../../../../../pdf/function/pdf-convertor-function";
const AdmissionRefunedHistoryCard = ({ history }) => {
  const { t } = useTranslation();
  // const params = useParams();
  // const getQuery = useLocation();
  const [receiptId, setReceiptId] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [downloadableData, setDownloadableData] = useState("");

  const { getFeeReceiptDetail, getFeeReceiptDetailRefetch } =
    useGetFeeReceiptDetail({
      rid: receiptId,
      skip: !receiptId,
    });
  useEffect(() => {
    if (receiptId) getFeeReceiptDetailRefetch();
  }, [receiptId, getFeeReceiptDetailRefetch]);
  useEffect(() => {
    if (getFeeReceiptDetail?.receipt && getFeeReceiptDetail?.all_remain) {
      setDownloadableData(getFeeReceiptDetail);
    }
  }, [getFeeReceiptDetail]);
  // console.info("downloadableData", downloadableData);
  useEffect(() => {
    if (downloadableData) {
      const workerInstance = new Worker(
        new URL(
          "../../../../../pdf/worker/main.receipt.pdf.worker.js",
          import.meta.url
        )
      );
      if (
        downloadableData?.all_remain?.remaining_flow === "Hostel Application"
      ) {
        const { institute, studentInfo, paymentReceiptInfo } =
          hostelModifyReceiptData(
            downloadableData?.all_remain,
            downloadableData?.receipt
          );
        workerInstance.postMessage({
          institute,
          studentInfo,
          paymentReceiptInfo,
          printReceiptType:
            paymentReceiptInfo?.transactonRefund === "Refunded"
              ? "HOSTEL_REFUND"
              : "HOSTEL",
        });
      } else {
        const { institute, studentInfo, paymentReceiptInfo } =
          admissionModifyReceiptData(
            downloadableData?.all_remain,
            downloadableData?.receipt
          );
        workerInstance.postMessage({
          institute,
          studentInfo,
          paymentReceiptInfo,
          printReceiptType:
            paymentReceiptInfo?.transactonRefund === "Refunded"
              ? "ADMISSION_REFUND"
              : "ADMISSION",
        });
      }

      workerInstance.onmessage = (message) => {
        if (message) {
          window.open(message.data, "_blank");
          setDisabled((pre) => !pre);
          setDownloadableData("");
          workerInstance.terminate();
        }
      };
    }
  }, [downloadableData]);
  const onPdfDownload = () => {
    if (history?.fee_receipt?._id) {
      setDisabled((pre) => !pre);
      setReceiptId(history?.fee_receipt?._id);
      if (receiptId === history?.fee_receipt?._id) {
        setDownloadableData(getFeeReceiptDetail);
      }
    }
  };

  // const onNull = () => {};
  const onFeeReceipt = () => {
    // history?.payment_module_type === "Admission" ||
    // history?.payment_module_type === "Admission Fees" ||
    // history?.payment_module_type === "Hostel" ||
    // history?.payment_module_type === "Hostel Fees"
    //   ?
    onPdfDownload(history?.fee_receipt?._id);
    // : history?.payment_module_type === "Income"
    // ? onNull()
    // : onNull();
  };
  return (
    <>
      <div
        className={style.sidebarheader}
        style={{
          gap: "1%",
        }}
        title={history?.payment_module_type === "Income" ? "" : "View Receipt"}
      >
        <div
          className={style.history_image_container}
          style={{
            width: "50%",
          }}
        >
          {history?.student?.studentProfilePhoto ? (
            // <Link
            //   to={`/${params.username}/student/profile`}
            //   state={{
            //     ...getQuery.state,
            //     sid: history?.student?._id,
            //     // studentId: history?.student?._id,
            //   }}
            // >
            <img
              src={`${imageShowUrl}/${history?.student?.studentProfilePhoto}`}
              alt="qr code"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "12px",
              }}
            />
          ) : // </Link>
          null}

          <div className={style.text}>
            <p className={style.rcv}>{t("paid_to")}</p>
            <h6>
              {history?.student
                ? `${history?.student?.studentFirstName} ${history?.student?.studentMiddleName} ${history?.student?.studentLastName}`
                : ""}
            </h6>
            <p className={style.rcv}>
              {t("gr_number")} {history?.student?.studentGRNO ?? ""}
            </p>
            <p className={style.rcv}>
              {history?.student?.fee_structure?.unique_structure_name ?? ""}
            </p>
          </div>
        </div>

        <div
          className={style.text}
          style={{
            width: "27%",
          }}
        >
          <p
            className={style.rcv}
            style={{
              width: "100%",
            }}
          >
            {t("transaction_id")}
          </p>
          <h6
            style={{
              width: "100%",
              wordWrap: "break-word",
            }}
          >
            {history?.fee_receipt?.fee_utr_reference
              ? history?.fee_receipt?.fee_utr_reference
              : "N/A"}
          </h6>
          <p
            className={style.rcv}
            style={{
              width: "100%",
            }}
          >
            {moment(history?.created_at).format("DD MMM YYYY")}
            {", "}
            {moment(history?.created_at).format("LT")}
          </p>
        </div>
        <div
          className={style.text}
          style={{
            width: "20%",
          }}
        >
          <p
            className={style.rcv}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {t("invoice_no")} {history?.fee_receipt?.invoice_count ?? "N/A"}
            <img
              src="/images/member_tab/admission/admission-receipt-download.svg"
              alt="receipt icon"
              title="Download Fees Receipt"
              onClick={onFeeReceipt}
            />
          </p>

          <h6
            style={{
              width: "100%",
            }}
          >
            Rs. {history?.fee_receipt?.fee_payment_amount}
          </h6>
          <p
            className={style.rcv}
            style={{
              width: "100%",
            }}
          >
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
      {disabled && <QLoader />}
    </>
  );
};

export default AdmissionRefunedHistoryCard;
