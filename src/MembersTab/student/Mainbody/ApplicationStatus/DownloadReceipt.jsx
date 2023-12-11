import React, { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useGetFeeReceiptDetail } from "../../../../hooks/member_tab/admission-api";
import style from "./ApplicationStatus.module.css";
import QLoader from "../../../../Loader/QLoader";
import {
  admissionModifyReceiptData,
  hostelModifyReceiptData,
} from "../../../../pdf/function/pdf-convertor-function";
const DownloadReceipt = ({ receiptId }) => {
  const { t } = useTranslation();
  const [assignReceiptId, setAssignReceiptId] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [downloadableData, setDownloadableData] = useState("");

  const { getFeeReceiptDetail, getFeeReceiptDetailRefetch } =
    useGetFeeReceiptDetail({
      rid: assignReceiptId,
      skip: !assignReceiptId,
    });

  useEffect(() => {
    if (assignReceiptId) getFeeReceiptDetailRefetch();
  }, [assignReceiptId]);

  useEffect(() => {
    if (getFeeReceiptDetail?.receipt && getFeeReceiptDetail?.all_remain) {
      setDownloadableData(getFeeReceiptDetail);
    }
  }, [getFeeReceiptDetail]);

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
    setDisabled((pre) => !pre);
    setAssignReceiptId(receiptId);
    if (receiptId === assignReceiptId) {
      setDownloadableData(getFeeReceiptDetail);
    }
  };

  return (
    <>
      <button className={style.view_receipt_btn} onClick={onPdfDownload}>
        {t("download_receipt")}
      </button>
      {disabled && <QLoader />}
    </>
  );
};

export default DownloadReceipt;

// const onPdfDownload = () => {
//   const accountData = getFeeReceiptDetail?.one_account;
//   const receiptData = getFeeReceiptDetail?.receipt;
//   const allRemain = getFeeReceiptDetail?.all_remain;
//   const imgData = receiptData?.application?.admissionAdmin?.institute
//     ?.insProfilePhoto
//     ? `${imageShowUrl1}/${receiptData?.application?.admissionAdmin?.institute?.insProfilePhoto}`
//     : "/images/certificate/logodemo.jpg";
//   if (receiptData && allRemain) {
//     feeReceiptPdf(receiptData, allRemain, imgData, accountData);
//     // window.location.reload();
//   }
// };
