import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import style from "../AdmissionApplicationRequest.module.css";
import {
  imageShowUrl,
  pdfShowUrlNext,
} from "../../../../../../services/BaseUrl";
import { useGetFeeReceiptDetail } from "../../../../../../hooks/member_tab/admission-api";
import QLoader from "../../../../../../Loader/QLoader";
import { admissionModifyReceiptData } from "../../../../../../pdf/function/pdf-convertor-function";
const AdmissionConfirmCard = ({
  onAllotApplicantBatch,
  onCancelAdmission,
  applicant,
  instituteId,
}) => {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
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
  useEffect(() => {
    if (downloadableData) {
      const { institute, studentInfo, paymentReceiptInfo } =
        admissionModifyReceiptData(
          downloadableData?.all_remain,
          downloadableData?.receipt
        );

      const workerInstance = new Worker(
        new URL(
          "../../../../../../pdf/worker/main.receipt.pdf.worker.js",
          import.meta.url
        )
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

  const onViewApplicantProfile = () => {
    navigate(`/q/${params.username}/student/profile`, {
      state: {
        sid: applicant?.student?._id,
        viewAs: "ADMISSION_ADMIN",
        instituteId: instituteId,
      },
    });
    // onViewApplicant(applicant?.student?._id);
  };
  const onCancel = (e) => {
    e.stopPropagation();
    onCancelAdmission(applicant);
  };
  const onAllotClasses = (e) => {
    e.stopPropagation();
    onAllotApplicantBatch(applicant);
  };

  const onReceiptDownload = (e, rid) => {
    e.stopPropagation();
    setDisabled((pre) => !pre);
    setReceiptId(rid);
    if (receiptId === rid) {
      setDownloadableData(getFeeReceiptDetail);
    }
  };
  const onViewApplication = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className={style.applicant_card_container}
      onClick={onViewApplicantProfile}
      title="View Profile"
    >
      <div className={style.applicant_card_inner}>
        <img
          alt="Student Request Avatar"
          src={
            applicant?.student?.photoId !== "1"
              ? `${imageShowUrl}/${applicant?.student?.studentProfilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
          }
          loading="lazy"
        />
        <div className={style.applicant_card_inner_info}>
          <h6>{`${applicant?.student?.studentFirstName} ${
            applicant?.student?.studentMiddleName
              ? applicant?.student?.studentMiddleName
              : ""
          } ${applicant?.student?.studentLastName}`}</h6>
          <p onClick={onCancel} className={style.cancelStatus}>
            {t("cancel_admision")}
          </p>
        </div>
      </div>

      <div className={style.applicant_card_contact}>
        <div className={style.applicant_card_contact_inner}>
          <img src="/images/admidion_department/gender.svg" alt="" />
          <p>{applicant?.student?.studentGender}</p>
        </div>
        {(applicant?.student?.studentPhoneNumber ||
          applicant?.student?.user?.userPhoneNumber ||
          applicant?.student?.user?.userEmail ||
          applicant?.student?.studentParentsPhoneNumber) && (
          <div className={style.applicant_card_contact_inner}>
            <img src="/images/admidion_department/phone.svg" alt="" />
            <p
              style={{
                marginBottom: "0 !important",
              }}
            >
              {applicant?.student?.user?.userPhoneNumber
                ? applicant?.student?.user?.userPhoneNumber
                : applicant?.student?.user?.userEmail
                ? applicant?.student?.user?.userEmail
                : applicant?.student?.studentPhoneNumber
                ? applicant?.student?.studentPhoneNumber
                : applicant?.student?.studentParentsPhoneNumber}
            </p>
          </div>
        )}
      </div>

      <div className={style.applicant_card_reciept} onClick={onViewApplication}>
        <a
          href={`${pdfShowUrlNext}/${applicant?.student?.application_print?.[0]?.value}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            marginTop: "-4.5px",
          }}
        >
          <img
            src="/images/member_tab/admission/admission-form-download.svg"
            alt="receipt icon"
            title="View Application Form"
          />
        </a>
      </div>

      <div className={style.applicant_card_reciept}>
        {applicant?.student?.fee_receipt?.map((rid, index) =>
          index > 2 ? (
            ""
          ) : (
            <img
              src="/images/member_tab/admission/admission-receipt-download.svg"
              onClick={(e) => onReceiptDownload(e, rid)}
              alt="receipt icon"
              title="Download Fees Receipt"
              key={rid}
            />
          )
        )}
      </div>

      <div
        className={style.selectBtnContainer}
        style={{
          width: "auto",
        }}
      >
        <div className={style.selectBtn} onClick={onAllotClasses}>
          {t("allot_class")}
        </div>
      </div>
      {disabled && <QLoader />}
    </div>
  );
};

export default AdmissionConfirmCard;
