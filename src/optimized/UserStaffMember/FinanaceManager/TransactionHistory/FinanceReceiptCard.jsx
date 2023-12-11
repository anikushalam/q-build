import { useTranslation } from "react-i18next";
import style from "./TransactionHistory.module.css";
import { Link, useLocation, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { localTimeFormat } from "../../../Utils/Functions/localTime";
import { imageShowUrl } from "../../../Services/UrlConfig/BaseUrl";
import { assestsUserFinanceUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import { useEffect, useState } from "react";
import { useFinanceReceipt } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import QvipleLoader from "../../../Loader/QvipleLoader";
import {
  admissionModifyReceiptData,
  hostelModifyReceiptData,
} from "../../../../pdf/function/pdf-convertor-function";
import { useInternalFeeReceipt } from "../../../../hooks/member_tab/admission-api";
import { imageShowUrl1 } from "../../../../services/BaseUrl";
import pdfInternalFeeReceipt from "../../../../pdf/pdfInternalFeeReceipt";
const FinanceReceiptCard = ({ history }) => {
  const { t } = useTranslation();
  const params = useParams();
  const getQuery = useLocation();
  const [receiptId, setReceiptId] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [downloadableData, setDownloadableData] = useState("");
  const [receiptInternalId, setReceiptInternalId] = useState("");
  const [downloadableInternalData, setDownloadableInternalData] = useState("");

  const { financeReceipt, financeReceiptRefetch } = useFinanceReceipt({
    rid: receiptId,
    skip: !receiptId,
  });

  useEffect(() => {
    if (receiptId) financeReceiptRefetch();
  }, [receiptId, financeReceiptRefetch]);
  useEffect(() => {
    if (financeReceipt?.receipt && financeReceipt?.all_remain) {
      setDownloadableData(financeReceipt);
    }
  }, [financeReceipt]);
  // console.info("downloadableData", downloadableData);
  useEffect(() => {
    if (downloadableData) {
      const workerInstance = new Worker(
        new URL(
          "../../../../pdf/worker/main.receipt.pdf.worker.js",
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
        setDownloadableData(financeReceipt);
      }
    }
  };
  const { internalFeeReceipt, internalFeeReceiptRefetch } =
    useInternalFeeReceipt({
      rid: receiptInternalId,
      skip: !receiptInternalId,
    });

  useEffect(() => {
    if (receiptInternalId) internalFeeReceiptRefetch();
  }, [receiptInternalId, internalFeeReceiptRefetch]);

  useEffect(() => {
    if (internalFeeReceipt?.receipt && internalFeeReceipt?.one_account) {
      setDownloadableInternalData(internalFeeReceipt);
    }
  }, [internalFeeReceipt]);

  useEffect(() => {
    if (downloadableInternalData) {
      setDisabled((pre) => !pre);
      let accountInfo = downloadableInternalData?.one_account;
      let receiptInfo = downloadableInternalData?.receipt;

      const imgData = receiptInfo?.finance?.institute?.insProfilePhoto
        ? `${imageShowUrl1}/${receiptInfo?.finance?.institute?.insProfilePhoto}`
        : "/images/certificate/logodemo.jpg";
      const affliatedImg = receiptInfo?.finance?.institute?.affliatedLogo
        ? `${imageShowUrl1}/${receiptInfo?.finance?.institute?.affliatedLogo}`
        : "/images/certificate/logodemo.jpg";
      if (accountInfo && receiptInfo) {
        pdfInternalFeeReceipt(accountInfo, receiptInfo, imgData, affliatedImg);
        setDisabled(false);
      }
      setDownloadableInternalData("");
      window.location.reload();
    }
  }, [downloadableInternalData]);

  const onPdfInternalDownload = (val) => {
    if (val) {
      setDisabled((pre) => !pre);
      setReceiptInternalId(val);
    }
  };

  const onNull = () => {};
  const onFeeReceipt = () => {
    history?.payment_module_type === "Admission" ||
    history?.payment_module_type === "Admission Fees" ||
    history?.payment_module_type === "Hostel" ||
    history?.payment_module_type === "Hostel Fees"
      ? onPdfDownload(history?.fee_receipt?._id)
      : history?.payment_module_type === "Income"
      ? onNull()
      : onPdfInternalDownload(history?.fee_receipt?._id);
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
          {history?.payment_student?.studentProfilePhoto ? (
            <Link
              to={`/${params.username}/student/profile`}
              state={{
                ...getQuery.state,
                sid: history?.payment_student?._id,
                // studentId: history?.payment_student?._id,
              }}
            >
              <img
                src={`${imageShowUrl}/${history?.payment_student?.studentProfilePhoto}`}
                alt="qr code"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                }}
              />
            </Link>
          ) : null}

          <div className={style.text}>
            <p className={style.rcv}>{t("recived_from")}</p>
            <h6>
              {history?.payment_student
                ? `${history?.payment_student?.studentFirstName} ${history?.payment_student?.studentMiddleName} ${history?.payment_student?.studentLastName}`
                : history?.payment_by_end_user_id?.userLegalName ??
                  history?.payment_by_end_user_id_name}
            </h6>
            <p className={style.rcv}>
              {t("gr_number")} {history?.payment_student?.studentGRNO ?? ""}
            </p>
            <p className={style.rcv}>
              {history?.payment_student?.fee_structure?.unique_structure_name ??
                ""}
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
            {history?.razorpay_payment_id
              ? history?.razorpay_payment_id
              : history?.fee_receipt?.fee_utr_reference
              ? history?.fee_receipt?.fee_utr_reference
              : "N/A"}
          </h6>
          <p
            className={style.rcv}
            style={{
              width: "100%",
            }}
          >
            {dayjs(history?.created_at).format("DD MMM YYYY")}
            {", "}
            {localTimeFormat(history?.created_at, "LT")}
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
            {t("invoice_no")}{" "}
            {history?.fee_receipt?.invoice_count ??
              history?.payment_invoice_number ??
              "N/A"}
            <img
              src={`${assestsUserFinanceUrl}/receipt.svg`}
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
            {t("rs_only")} {history?.payment_amount}
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
      {disabled && <QvipleLoader />}
    </>
  );
};

export default FinanceReceiptCard;
