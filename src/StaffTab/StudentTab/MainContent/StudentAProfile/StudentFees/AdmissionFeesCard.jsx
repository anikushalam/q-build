import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  useGetFeeReceiptDetail,
  useUpdateFeeStructureByAppliationWise,
  useUpdateRemarkByAdmissionAdmin,
} from "../../../../../hooks/member_tab/admission-api";
import QLoader from "../../../../../Loader/QLoader";
import SelectFeeStructure from "../../../../../MembersTab/staff/Mainbody/StaffAdmisionAdmin/AdmisionApplication/OngoingApplication/AdmssionStructureSelection/SelectFeeStructure";
import feeReceiptPdf from "../../../../../pdf/pdfFeeRecipt";
import { imageShowUrl1 } from "../../../../../services/BaseUrl";
import { Notfication } from "../../../../../validation/Snackbar";
import AddRemark from "./AddRemark";
import style from "./AdmissionFeesApplicationWise.module.css";
import refundFeeReceiptPdf from "../../../../../pdf/pdfRefundFeeRecipt ";
const AdmissionFeesCard = ({
  admission,
  viewAs,
  onAdmissionPaid,
  onAdmissionFeesRefetch,
}) => {
  const { t } = useTranslation();
  const [receiptId, setReceiptId] = useState("");
  const [openRemark, setOpenRemark] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [alreadyRemark, setAlreadyRemark] = useState("");
  const [downloadableData, setDownloadableData] = useState("");
  const [openFeeStructure, setOpenFeeStructure] = useState(false);
  const [updateRemarkByAdmissionAdmin] = useUpdateRemarkByAdmissionAdmin();
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [updateFeeStructureByAppliationWise] =
    useUpdateFeeStructureByAppliationWise();
  const { getFeeReceiptDetail, getFeeReceiptDetailRefetch } =
    useGetFeeReceiptDetail({
      rid: receiptId,
      skip: !receiptId,
    });

  useEffect(() => {
    if (receiptId) getFeeReceiptDetailRefetch();
  }, [receiptId, getFeeReceiptDetailRefetch]);
  const onPdfDownload = (val) => {
    // setDisabled((pre) => !pre);
    setReceiptId(val);
  };

  useEffect(() => {
    if (getFeeReceiptDetail?.receipt && getFeeReceiptDetail?.all_remain) {
      setDownloadableData(getFeeReceiptDetail);
    }
  }, [getFeeReceiptDetail]);

  const onClose = () => {
    setOpenRemark((pre) => !pre);
  };

  const onUpdateRemark = (remarkValue) => {
    setDisabled((pre) => !pre);
    onClose();
    updateRemarkByAdmissionAdmin({
      applicatonCardId: admission?._id,
      remarkByAdmission: {
        remark: remarkValue,
      },
    })
      .then(() => {
        onAdmissionFeesRefetch();
        setDisabled((pre) => !pre);
      })
      .catch({});
  };

  useEffect(() => {
    if (downloadableData) {
      const accountData = downloadableData?.one_account;
      const receiptData = downloadableData?.receipt;
      const allRemain = downloadableData?.all_remain;
      const imgData = receiptData?.application?.admissionAdmin?.institute
        ?.insProfilePhoto
        ? `${imageShowUrl1}/${receiptData?.application?.admissionAdmin?.institute?.insProfilePhoto}`
        : "/images/certificate/logodemo.jpg";
      const affliatedImg = receiptData?.application?.admissionAdmin?.institute
        ?.affliatedLogo
        ? `${imageShowUrl1}/${receiptData?.application?.admissionAdmin?.institute?.affliatedLogo}`
        : "/images/certificate/logodemo.jpg";
      if (receiptData && allRemain) {
        // feeReceiptPdf(receiptData, allRemain, imgData,affliatedImg, accountData);
        if (receiptData?.refund_status === "Refunded") {
          refundFeeReceiptPdf(
            receiptData,
            allRemain,
            imgData,
            affliatedImg,
            accountData
            // selectedReceiptCard
          );
        } else {
          feeReceiptPdf(
            receiptData,
            allRemain,
            imgData,
            affliatedImg,
            accountData
            // selectedReceiptCard
          );
        }
        setDisabled(false);
      }
      setDownloadableData("");
      window.location.reload();
    }
  }, [downloadableData]);

  const onSelectedStrucutre = (val) => {
    if (admission?.fee_structure?._id === val?._id) {
      setOpenFeeStructure(false);
      setNotificationState({
        msg: "Both structures are same",
        run: true,
      });
    } else {
      setDisabled((pre) => !pre);
      setOpenFeeStructure(false);
      updateFeeStructureByAppliationWise({
        aid: admission?.appId?.admissionAdmin?._id,
        appId: admission?.appId?._id,
        sid: admission?.student?._id,
        updateStrucutre: {
          old_fee_struct: admission?.fee_structure?._id,
          new_fee_struct: val?._id,
        },
      })
        .then(() => {
          onAdmissionFeesRefetch();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };
  return (
    <div className={style.student_admission_fees_card_container}>
      <section className={style.student_admission_card_title}>
        <h6>
          {admission?.appId?.applicationName ?? ""}{" "}
          {admission?.remaining_flow === "Hostel Application"
            ? "(Hostel Fees)"
            : ""}{" "}
        </h6>
        <p
          style={{
            marginBottom: "0.3rem",
          }}
        >
          {admission?.batchId?.batchName
            ? `(${admission?.batchId?.batchName})`
            : admission?.remaining_flow === "Hostel Application"
            ? `(for ${admission?.fee_structure?.structure_month} Month)`
            : ""}
          {" - "}
          {admission?.fee_structure?.structure_name ?? ""}
        </p>
        {admission?.remaining_flow === "Hostel Application" ? (
          ""
        ) : (
          <img
            src="/images/bank-edit-icon.svg"
            alt="edit icon"
            className={style.edit_icon}
            onClick={() => setOpenFeeStructure(true)}
            style={{
              cursor: "pointer",
            }}
          />
        )}
      </section>
      {admission?.remaining_flow === "Hostel Application" && (
        <div
          className={style.admission_fees_amount_top}
          style={{
            justifyContent: "space-between",
            margin: "0 1.3rem",
          }}
        >
          <h6>
            {t("start_date")}
            {moment(admission?.renewal_start).format("DD MMM yyyy")}
          </h6>
          <h6>
            {t("end_date")}
            {moment(admission?.renewal_end).format("DD MMM yyyy")}
          </h6>
        </div>
      )}

      <section className={style.student_admission_count_container}>
        <div className={style.student_admission_count}>
          <h5
            style={{
              color: "#121212",
            }}
          >
            {t("rs")}. {admission?.fee_structure?.total_admission_fees ?? 0}
            <span
              style={{
                fontSize: "13px",
                fontWeight: "400",
                color: "#121212",
              }}
            >
              {` (${t("rs")}.${
                admission?.fee_structure?.applicable_fees ?? 0
              })`}
            </span>
          </h5>
          <h6
            style={{
              marginBottom: "1rem",
            }}
          >
            {t("total_applicable_fees")}
          </h6>

          <h5
            style={{
              color: "#008000",
            }}
          >
            {t("rs")}. {admission?.paid_fee ?? 0}
            <span
              style={{
                fontSize: "13px",
                fontWeight: "400",
                color: "#121212",
              }}
            >
              {` (${t("rs")}.${admission?.exempted_fee ?? 0})`}
            </span>
          </h5>
          <h6>{t("paid_exempted")}</h6>
        </div>
        <div className={style.student_admission_count_image}>
          {admission?.status === "Paid" ? (
            admission?.paid_fee - admission?.applicable_fee > 0 ? (
              <div
                onClick={() => {
                  if (
                    viewAs === "ADMISSION_ADMIN" ||
                    viewAs === "ADMISSION_ADMIN_SCHOLARSHIP"
                  ) {
                    onAdmissionPaid({
                      applicableAmount: admission?.applicable_fee ?? 0,
                      remainAmount: admission?.remaining_fee ?? 0,
                      refundAmount:
                        admission?.paid_fee - admission?.applicable_fee ?? 0,
                      openAs: "REFUND",
                      appId: admission?.appId?._id,
                      admissionId: admission?.appId?.admissionAdmin?._id,
                      collectFlow: admission?.remaining_flow,
                      hostelId: admission?.appId?.hostelAdmin?._id,
                    });
                  }
                }}
              >
                <img
                  src="/images/members/new-refund-icon.svg"
                  alt="pending icon"
                />
                <div className={style.show_text}>
                  <h6
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {t("rs")}. {admission?.paid_fee - admission?.applicable_fee}
                  </h6>
                  <h6> {t("excess")}</h6>
                </div>
              </div>
            ) : (
              <img src="/images/members/new-paid-icon.svg" alt="pending icon" />
            )
          ) : admission?.remaining_fee ? (
            <>
              <img
                src="/images/members/new-pending-icon.svg"
                alt="pending icon"
              />
              <div className={style.show_text}>
                <h6
                  style={{
                    fontWeight: "600",
                  }}
                >
                  {t("rs")}. {admission?.remaining_fee ?? 0}
                </h6>
                <h6> {t("pending")}</h6>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </section>
      {admission?.remaining_array?.map((install) => (
        <div
          key={install?.fee_receipt?._id}
          className={style.student_admission_cash_card}
        >
          <section className={style.admission_fees_amount}>
            <h6>
              {install?.status === "Paid"
                ? install?.installmentValue ?? ""
                : install?.installmentValue}{" "}
              {install?.status === "Paid" && (
                <span>
                  {moment(install?.fee_receipt?.fee_transaction_date).format(
                    "DD-MMM-yy"
                  )}
                </span>
              )}
            </h6>
            <h6>
              {t("rs")}.{install?.remainAmount ?? 0}
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
                  {install?.fee_receipt?.fee_payment_mode === "By Cash"
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
          {/* <section className={style.admission_fees_grant}>
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
                  {install?.fee_receipt?.fee_payment_mode === "By Cash"
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
          </section> */}
          {install?.status === "Paid" ? (
            <button
              className={style.view_receipt_btn}
              onClick={() => onPdfDownload(install?.fee_receipt?._id)}
              // onClick={() =>
              //   install?.status === "Paid"
              //     ? onPdfDownload(install?.fee_receipt?._id)
              //     : {}
              // }
            >
              {t("view_receipt")}
            </button>
          ) : (
            <button
              className={style.student_admission_collect_btn}
              onClick={() =>
                install?.status === "Receipt Requested"
                  ? ""
                  : install?.status === "Receipt Rejected"
                  ? viewAs === "STUDENT" &&
                    onAdmissionPaid({
                      install: install,
                      openAs: "RE_PAY",
                      collectFlow: admission?.remaining_flow,
                    })
                  : onAdmissionPaid({
                      install: install,
                      feeStructure: admission?.fee_structure,
                      applicableAmount: admission?.applicable_fee ?? 0,
                      remainAmount: admission?.remaining_fee ?? 0,
                      admissionId: admission?.appId?.admissionAdmin?._id,
                      departmentId:
                        admission?.appId?.applicationDepartment ??
                        admission?.appId?.hostelAdmin?._id ??
                        "",
                      financeId:
                        admission?.appId?.admissionAdmin?.institute
                          ?.financeDepart?.[0] ??
                        admission?.appId?.hostelAdmin?.institute
                          ?.financeDepart?.[0],
                      studentId: admission?.student?._id,
                      student: admission?.student,
                      rid: admission?._id,
                      collectFlow:
                        admission?.remaining_flow === "Hostel Application"
                          ? "Hostel Application"
                          : admission?.appId?.applicationDepartment
                          ? "Department"
                          : "",
                    })
              }
              style={
                install?.status === "Receipt Requested"
                  ? {
                      width: "100%",
                      backgroundColor: "#B8B83E",
                    }
                  : install?.status === "Receipt Rejected"
                  ? viewAs === "STUDENT"
                    ? {
                        width: "100%",
                      }
                    : {
                        width: "100%",
                        backgroundColor: "#B8B83E",
                      }
                  : {
                      width: "100%",
                    }
              }
            >
              {install?.status === "Receipt Requested"
                ? t("receipt_requested")
                : viewAs === "ADMISSION_ADMIN" ||
                  viewAs === "ADMISSION_ADMIN_SCHOLARSHIP"
                ? install?.status === "Receipt Rejected"
                  ? t("receipt_rejected")
                  : t("collect_fees")
                : viewAs === "INSTITUTE_ADMIN" ||
                  viewAs === "SUBJECT_TEACHER" ||
                  viewAs === "FINANCE_MANAGER"
                ? t("unpaid")
                : install?.status === "Receipt Rejected"
                ? t("re_pay")
                : t("pay")}
            </button>
          )}
        </div>
      ))}
      <div className={style.remark_card_container}>
        <section className={style.add_remark}>
          {(viewAs === "ADMISSION_ADMIN" ||
            viewAs === "ADMISSION_ADMIN_SCHOLARSHIP") &&
            (admission?.remark ? (
              <h6
                onClick={() => {
                  setAlreadyRemark(admission?.remark);
                  onClose();
                }}
                className={style.add_remark_btn}
              >
                {t("edit_remark")}
              </h6>
            ) : (
              <h6 className={style.add_remark_btn} onClick={onClose}>
                {t("add_remark")}
              </h6>
            ))}
          <h6 className={style.add_remark_text}>
            {t("fee_remark")} {admission?.remark ?? ""}
          </h6>
        </section>
      </div>

      {openRemark && (
        <AddRemark
          onClose={onClose}
          onUpdateRemark={onUpdateRemark}
          alreadyRemark={alreadyRemark}
        />
      )}
      {openFeeStructure && (
        <SelectFeeStructure
          onClose={() => setOpenFeeStructure(false)}
          departmentId={admission?.appId?.applicationDepartment}
          classMasterId={admission?.appId?.applicationMaster}
          batchId={admission?.appId?.applicationBatch}
          onSelectedStrucutre={onSelectedStrucutre}
          asOpen="ADMISSION_APPLICATION_WISE"
        />
      )}
      {disabled && <QLoader />}
      {notificationState.run && (
        <Notfication
          msg={notificationState.msg}
          run={notificationState.run}
          setRun={() => setNotificationState({ msg: "", run: false })}
          postiton="bottom"
          type="error"
        />
      )}
    </div>
  );
};

export default AdmissionFeesCard;
