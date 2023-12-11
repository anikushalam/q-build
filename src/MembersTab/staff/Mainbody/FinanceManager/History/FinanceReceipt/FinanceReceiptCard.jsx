import React, { useEffect, useState } from "react";
import pdfInternalFeeReceipt from "../../../../../../pdf/pdfInternalFeeReceipt";
import {
  useGetFeeReceiptDetail,
  useInternalFeeReceipt,
} from "../../../../../../hooks/member_tab/admission-api";
import {
  imageShowUrl,
  imageShowUrl1,
} from "../../../../../../services/BaseUrl";
import QLoader from "../../../../../../Loader/QLoader";
import style from "../History.module.css";
import moment from "moment";
import { useTranslation } from "react-i18next";
import {
  admissionModifyReceiptData,
  hostelModifyReceiptData,
} from "../../../../../../pdf/function/pdf-convertor-function";
import { Link, useParams } from "react-router-dom";
const FinanceReceiptCard = ({ history, insId }) => {
  const { t } = useTranslation();
  const params = useParams();
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
    if (val) {
      setDisabled((pre) => !pre);
      setReceiptId(val);
      if (receiptId === val) {
        setDownloadableData(getFeeReceiptDetail);
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
  const onPdfInternalDownload = (val) => {
    if (val) {
      setDisabled((pre) => !pre);
      setReceiptInternalId(val);
    }
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
  const onNull = () => {};
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
              to={`/q/${params.username}/student/profile`}
              state={{
                sid: history?.payment_student?._id,
                viewAs: "FINANCE_MANAGER",
                instituteId: insId,
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
            {moment(history?.created_at).format("DD MMM yyyy")}
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
            {t("invoice_no")}{" "}
            {history?.fee_receipt?.invoice_count ??
              history?.payment_invoice_number ??
              "N/A"}
            <img
              src="/images/member_tab/admission/admission-receipt-download.svg"
              onClick={() => {
                history?.payment_module_type === "Admission" ||
                history?.payment_module_type === "Admission Fees" ||
                history?.payment_module_type === "Hostel" ||
                history?.payment_module_type === "Hostel Fees"
                  ? onPdfDownload(history?.fee_receipt?._id)
                  : history?.payment_module_type === "Income"
                  ? onNull()
                  : onPdfInternalDownload(history?.fee_receipt?._id);
              }}
              alt="receipt icon"
              title="Download Fees Receipt"
            />
          </p>

          <h6
            style={{
              width: "100%",
            }}
          >
            Rs. {history?.payment_amount}
          </h6>
          <p
            className={style.rcv}
            style={{
              width: "100%",
            }}
          >
            {/* {history.payment_mode === "By Bank"
              ? "Payment Gateway"
              : history.payment_mode === "Online"
              ? history?.fee_receipt?._id
                ? `By Bank (${history.payment_mode})`
                : "By Bank"
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

export default FinanceReceiptCard;
