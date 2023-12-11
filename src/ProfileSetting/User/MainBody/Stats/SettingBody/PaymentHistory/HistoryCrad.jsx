import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./PaymentHistory.module.css";
import moment from "moment";
import {
  useGetFeeReceiptDetail,
  useInternalFeeReceipt,
} from "../../../../../../hooks/member_tab/admission-api";
import { imageShowUrl1 } from "../../../../../../services/BaseUrl";
import QLoader from "../../../../../../Loader/QLoader";
import pdfInternalFeeReceipt from "../../../../../../pdf/pdfInternalFeeReceipt";
import {
  admissionModifyReceiptData,
  hostelModifyReceiptData,
} from "../../../../../../pdf/function/pdf-convertor-function";
const onShowPaymentName = (val) => {
  if (val?.payment_fee) return val?.payment_fee?.feeName;
  else if (val?.payment_income)
    return val?.payment_income?.incomeDesc || "Income";
  else if (val?.payment_expense)
    return val?.payment_expense?.expneseDesc || "Refund";
  // return val?.payment_expense?.expneseDesc || "Expense";
  else if (val?.payment_admission)
    return val?.payment_admission?.applicationName;
  else if (val?.payment_checklist) return val?.payment_checklist?.checklistName;
  else if (val?.payment_participate)
    return val?.payment_participate?.event_name;
  else return "Not Defined";
  // else if(val?.payment_fee) return val?.payment_fee?.feeName
};
const HistoryCrad = ({ history }) => {
  const { t } = useTranslation();
  const [receiptId, setReceiptId] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [downloadableData, setDownloadableData] = useState("");
  const [receiptInternalId, setReceiptInternalId] = useState("");
  const [downloadableInternalData, setDownloadableInternalData] = useState("");

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
  useEffect(() => {
    if (downloadableData) {
      const workerInstance = new Worker(
        new URL(
          "../../../../../../pdf/worker/main.receipt.pdf.worker.js",
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
  const onPdfDownload = (val) => {
    setDisabled((pre) => !pre);
    setReceiptId(val);
    if (receiptId === val) {
      setDownloadableData(getFeeReceiptDetail);
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
  const onPdfInternalDownload = (val) => {
    setDisabled((pre) => !pre);
    setReceiptInternalId(val);
  };

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
  //   Admission
  // Admission Fees
  // Hostel Fees
  // Hostel
  // Income
  // Expense
  // Library Fine
  // Internal Fees
  //Fees
  return (
    <>
      <div
        className={style.payment_history_container}
        // onClick={() => {
        //   setPaymentId(history?._id);
        //   setIndex(1);
        // }}
        onClick={() => {
          // setSelectReceiptCard(admission?.appId?._id);
          history?.payment_module_type === "Admission" ||
          history?.payment_module_type === "Admission Fees" ||
          history?.payment_module_type === "Hostel" ||
          history?.payment_module_type === "Hostel Fees"
            ? onPdfDownload(history?.fee_receipt?._id)
            : onPdfInternalDownload(history?.fee_receipt?._id);
        }}
        title="View Receipt"
      >
        {history?.payment_mode === "By Bank" && (
          <h6 className={style.transaction_id}>
            <span style={{ fontWeight: "400", fontSize: "14px" }}>
              {t("transaction_id")} :
            </span>
            {` ${history?.razorpay_order_id ?? ""}`}
          </h6>
        )}
        <div className={style.payment_history_top}>
          <p>
            {onShowPaymentName(history)}{" "}
            {history?.payment_module_type
              ? `(${history?.payment_module_type})`
              : ""}{" "}
          </p>
          <p>
            {" "}
            {t("invoice_no")}{" "}
            {history?.fee_receipt?.invoice_count ??
              history?.payment_invoice_number ??
              "N/A"}
          </p>
        </div>
        <div className={style.payment_history_middle}>
          <h6>{history?.payment_to_end_user_id?.insName}</h6>
          <h6>{history?.payment_amount}</h6>
        </div>
        <div className={style.payment_history_bottom}>
          <p>
            {moment(history?.created_at).format("DD MMM yyyy")}
            {", "}
            {moment(history?.created_at).format("LT")}
          </p>
          <p>
            {/* {history.payment_mode === "By Bank"
              ? "Payment Gateway"
              : history.payment_mode === "Online"
              ? history?.fee_receipt?._id
                ? `By Bank (${history.payment_mode})`
                : "By Bank"
              : history.payment_mode?.toLowerCase() === "offline"
              ? `${history.payment_mode} -${
                  history?.fee_receipt?.fee_payment_mode ?? "N/A"
                }`
              : history.payment_mode} */}
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

export default HistoryCrad;
