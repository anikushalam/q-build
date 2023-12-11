import React, { useEffect } from "react";
import style from "./ApplicationStatus.module.css";
import { useApplicationStatusQuery } from "../../../../services/joining/joinApi";
import moment from "moment";
import { useState } from "react";
import { useSelector } from "react-redux";
import AdmissionFirstNotification from "./NewAdmissionMessage/AdmissionFirstNotification";
import AdmissionSecondNotification from "./NewAdmissionMessage/AdmissionSecondNotification";
import AdmissionThirdNotification from "./NewAdmissionMessage/AdmissionThirdNotification";
import AdmissionFourthNotification from "./NewAdmissionMessage/AdmissionFourthNotification";
import QLoader from "../../../../Loader/QLoader";
import { useGetFeeReceiptDetail } from "../../../../hooks/member_tab/admission-api";
import HostelFirstNotification from "./NewAdmissionMessage/HostelFirstNotification";
import HostelSecondNotification from "./NewAdmissionMessage/HostelSecondNotification";
import {
  admissionModifyReceiptData,
  hostelModifyReceiptData,
} from "../../../../pdf/function/pdf-convertor-function";
import { useTranslation } from "react-i18next";
import RejectedReceipt from "./RejectedReceipt";
import DownloadReceipt from "./DownloadReceipt";
function ApplicationStatus() {
  const { t } = useTranslation();
  const ids = useSelector((state) => state.idChange);
  const { data: applicationStatus, refetch: applicationStatusFetch } =
    useApplicationStatusQuery(ids?.id, { skip: !ids?.id });
  React.useEffect(() => {
    if (ids?.id) applicationStatusFetch();
  }, [ids?.id, applicationStatusFetch]);
  const [receiptId, setReceiptId] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [downloadableData, setDownloadableData] = useState("");
  const [openForm, setOpenForm] = useState(false);

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
  const onPdfDownload = (val) => {
    setDisabled((pre) => !pre);
    setReceiptId(val);
    if (receiptId === val) {
      setDownloadableData(getFeeReceiptDetail);
    }
  };

  return (
    <div className={style.applicationStatus}>
      {applicationStatus?.status?.map((item, index) =>
        item?.for_selection ? (
          <div className={style.item} key={index}>
            <h6 className={style.status_institute_name}>
              {item?.instituteId?.insName}
            </h6>

            {item?.for_selection === "Yes" &&
              item?.flow_status === "Admission Application" && (
                <AdmissionFourthNotification
                  message={item}
                  onRefetchApplication={applicationStatusFetch}
                />
              )}

            <div className={style.timeDate}>
              <p>
                {moment(item?.createdAt).format("dddd")},{" "}
                {moment(item?.createdAt).format("DD MMM yyyy")}
              </p>
              <p>{moment(item?.createdAt).format("LT")}</p>
            </div>
          </div>
        ) : (
          <div className={style.item} key={index}>
            <h6 className={style.status_institute_name}>
              {item?.instituteId?.insName}
            </h6>
            {item?.document_visible ? (
              item?.for_docs === "Yes" ? (
                item?.flow_status === "Hostel Application" ? (
                  <HostelSecondNotification
                    message={item}
                    onRefetchApplication={applicationStatusFetch}
                  />
                ) : (
                  <AdmissionSecondNotification
                    message={item}
                    onRefetchApplication={applicationStatusFetch}
                  />
                )
              ) : item?.admission_process === "Yes" ? (
                <AdmissionThirdNotification message={item} />
              ) : item?.flow_status === "Hostel Application" ? (
                <HostelFirstNotification message={item} />
              ) : (
                <AdmissionFirstNotification message={item} />
              )
            ) : item?.receipt_status === "Requested" ? (
              <>
                <p>{item?.content}</p>
                <button className={style.requested_btn}>
                  {item?.fee_receipt?.fee_payment_mode ?? ""} {t("requested")}
                </button>
              </>
            ) : item?.receipt_status === "Approved" ? (
              <>
                <p>{item?.content}</p>
                <p>
                  Admission confirmation is in process. Payment receipt
                  accepted.
                </p>
                <DownloadReceipt receiptId={item?.fee_receipt?._id} />
              </>
            ) : item?.receipt_status === "Rejected" ? (
              <>
                <p>{item?.content}</p>
                <RejectedReceipt
                  item={item}
                  openForm={openForm}
                  setOpenForm={setOpenForm}
                  applicationStatusFetch={applicationStatusFetch}
                />
                <button
                  className={style.rejected_btn}
                  onClick={() => setOpenForm((pre) => !pre)}
                >
                  {item?.fee_receipt?.fee_payment_mode ?? ""}{" "}
                  {t("re_apply_for_receipt")}
                </button>
              </>
            ) : (
              <>
                <p>{item?.content}</p>
                {item?.fee_receipt?._id && (
                  <p
                    style={{
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                    onClick={() => onPdfDownload(item?.fee_receipt?._id)}
                  >
                    View Receipt
                  </p>
                )}
              </>
            )}
            <div className={style.timeDate}>
              <p>{moment(item?.createdAt).format("ll")}</p>
              <p>{moment(item?.createdAt).format("LT")}</p>
            </div>
          </div>
        )
      )}

      {disabled && <QLoader />}
    </div>
  );
}

export default ApplicationStatus;
