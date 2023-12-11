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
import { Notfication } from "../../../../../validation/Snackbar";
import AddRemark from "./AddRemark";
import style from "./AdmissionFeesApplicationWise.module.css";
import AddAdmissionFeesScholarNumber from "./AddAdmissionFeesScholarNumber";
import SelectFeeStructure from "../../../../../MembersTab/staff/Mainbody/StaffAdmisionAdmin/AdmissionApplicationRequest/AdmssionStructureSelection/SelectFeeStructure";
import AdmissionFeesApplicationWiseMenu from "./AdmissionFeesApplicationWiseMenu";
import {
  admissionModifyReceiptData,
  hostelModifyReceiptData,
  transportModifyReceiptData,
} from "../../../../../pdf/function/pdf-convertor-function";
import AdmissionFeesInstallmentMenu from "./AdmissionFeesInstallmentMenu";
import { useFinanceTransportReceipt } from "../../../../../hooks/member_tab/finance-api";
const AdmissionFeesApplicationWiseUniversal = ({
  admission,
  viewAs,
  onAdmissionPaid,
  onAdmissionFeesRefetch,
  renderPageAs,
  is_feesdata,
  onFeesRefetch,
}) => {
  const { t } = useTranslation();
  const [receiptId, setReceiptId] = useState("");
  const [receiptTransportId, setReceiptTransportId] = useState("");
  const [openRemark, setOpenRemark] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [alreadyRemark, setAlreadyRemark] = useState("");
  const [downloadableData, setDownloadableData] = useState("");
  const [openFeeStructure, setOpenFeeStructure] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [removeInstallMenu, setRemoveInstallMenu] = useState("");
  const [updateRemarkByAdmissionAdmin] = useUpdateRemarkByAdmissionAdmin();
  const [selectedReceiptCard, setSelectReceiptCard] = useState("");
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [addScholar, setAddScholar] = useState(false);
  const [scholarNumber, setScholarNumber] = useState("");

  const [updateFeeStructureByAppliationWise] =
    useUpdateFeeStructureByAppliationWise();
  const { getFeeReceiptDetail, getFeeReceiptDetailRefetch } =
    useGetFeeReceiptDetail({
      rid: receiptId,
      skip: !receiptId,
    });
  const { financeTransportReceipt, financeTransportReceiptRefetch } =
    useFinanceTransportReceipt({
      rid: receiptTransportId,
      skip: !receiptTransportId,
    });

  useEffect(() => {
    if (receiptId) getFeeReceiptDetailRefetch();
  }, [receiptId, getFeeReceiptDetailRefetch]);
  useEffect(() => {
    if (receiptTransportId) financeTransportReceiptRefetch();
  }, [receiptTransportId, financeTransportReceiptRefetch]);

  const onPdfDownload = (val, status) => {
    setDisabled((pre) => !pre);
    if (status === "Transport Application") {
      setReceiptTransportId(val);
      if (receiptTransportId === val) {
        setDownloadableData(financeTransportReceipt);
      }
    } else {
      setReceiptId(val);
      if (receiptId === val) {
        setDownloadableData(getFeeReceiptDetail);
      }
    }
  };

  useEffect(() => {
    if (getFeeReceiptDetail?.receipt && getFeeReceiptDetail?.all_remain) {
      setDownloadableData(getFeeReceiptDetail);
    }
  }, [getFeeReceiptDetail]);
  useEffect(() => {
    if (
      financeTransportReceipt?.receipt &&
      financeTransportReceipt?.all_remain
    ) {
      setDownloadableData(financeTransportReceipt);
    }
  }, [financeTransportReceipt]);

  useEffect(() => {
    if (admission?.scholar_ship_number) {
      setScholarNumber(admission?.scholar_ship_number);
    }
  }, [admission?.scholar_ship_number]);

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
      } else if (
        downloadableData?.all_remain?.remaining_flow === "Transport Application"
      ) {
        const { institute, studentInfo, paymentReceiptInfo } =
          transportModifyReceiptData(
            downloadableData?.all_remain,
            downloadableData?.receipt
          );
        workerInstance.postMessage({
          institute,
          studentInfo,
          paymentReceiptInfo,
          printReceiptType:
            paymentReceiptInfo?.transactonRefund === "Refunded"
              ? "TRANSPORT_REFUND"
              : "TRANSPORT",
        });
      } else {
        const { institute, studentInfo, paymentReceiptInfo } =
          admissionModifyReceiptData(
            downloadableData?.all_remain,
            downloadableData?.receipt,
            selectedReceiptCard
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
          setSelectReceiptCard("");
          workerInstance.terminate();
        }
      };
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
      if (admission?._id) {
        setDisabled((pre) => !pre);
        setOpenFeeStructure(false);
        updateFeeStructureByAppliationWise({
          aid: admission?.appId?.admissionAdmin?._id,
          appId: admission?.appId?._id,
          sid: admission?.student?._id,
          updateStrucutre: {
            old_fee_struct: admission?.fee_structure?._id,
            new_fee_struct: val?._id,
            rid: admission?._id,
          },
        })
          .then(() => {
            onAdmissionFeesRefetch();
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    }
  };
  return (
    <div
      className={style.student_admission_fees_card_container}
      style={{
        width: is_feesdata
          ? "46%"
          : renderPageAs === "STUDENT_PROFILE"
          ? "49%"
          : "32%",
      }}
    >
      <section className={style.student_admission_card_title}>
        {admission?.remaining_flow === "Transport Application" ? (
          <h6>
            {admission?.vehicleId?.vehicle_name ?? ""}
            <span
              style={{
                fontSize: "12px",
              }}
            >
              {admission?.vehicleId?.vehicle_number
                ? ` (${admission?.vehicleId?.vehicle_number})`
                : ""}
            </span>
          </h6>
        ) : (
          <h6>
            {admission?.card_type === "Promote"
              ? admission?.student?.studentClass?.classTitle ?? ""
              : admission?.appId?.applicationName ?? ""}{" "}
            {admission?.remaining_flow === "Hostel Application"
              ? "(Hostel Fees)"
              : ""}{" "}
          </h6>
        )}

        <p
          style={{
            marginBottom: "0.3rem",
          }}
        >
          {admission?.remaining_flow === "Hostel Application"
            ? `(for ${admission?.fee_structure?.structure_month} Month)`
            : admission?.fee_structure?.unique_structure_name ?? ""}
          {/* {admission?.batchId?.batchName
            ? `(${admission?.batchId?.batchName})`
            : admission?.remaining_flow === "Hostel Application"
            ? `(for ${admission?.fee_structure?.structure_month} Month)`
            : ""}
          {" - "} 
          {admission?.fee_structure?.structure_name ?? ""} */}
        </p>

        {admission?.remaining_flow === "Hostel Application" ||
        // admission?.status === "Paid" ||
        viewAs === "STUDENT" ||
        viewAs === "STUDENT_SECTION" ? (
          ""
        ) : (
          // <img
          //   src="/images/bank-edit-icon.svg"
          //   alt="edit icon"
          //   className={style.edit_icon}
          //   onClick={() => setOpenFeeStructure(true)}
          //   style={{
          //     cursor: "pointer",
          //   }}
          // />
          <img
            src="/images/three-24-dot-icon.svg"
            alt="menu icon"
            onClick={() => setOpenMenu(true)}
            className={style.edit_icon}
            title="Menu"
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

      {admission?.remaining_flow !== "Hostel Application" &&
        admission?.remaining_flow !== "Transport Application" && (
          <div
            className={style.student_admission_count_container}
            onClick={() => setAddScholar(true)}
          >
            <button className={style.add_scholar_number_btn}>
              {scholarNumber || admission?.scholar_ship_number ? (
                <>
                  {t("edit_scholarship_application_no")}
                  <span
                    style={{
                      color: "#121212",
                    }}
                  >
                    {scholarNumber || admission?.scholar_ship_number}
                  </span>
                </>
              ) : (
                t("add_scholarship_application_no_if_applicable")
              )}
            </button>
          </div>
        )}

      {viewAs === "STUDENT" ? (
        admission?.remaining_flow !== "Hostel Application" ? (
          <section
            className={style.student_admission_count_container}
            style={{
              marginBottom: "1.5rem",
            }}
          >
            <div className={style.student_admission_count}>
              <h5
                style={{
                  color: "#121212",
                }}
              >
                {t("rs")}. {admission?.fee_structure?.total_admission_fees ?? 0}
                {admission?.remaining_flow ===
                "Transport Application" ? null : (
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
                )}
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
                {admission?.remaining_flow ===
                "Transport Application" ? null : (
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: "400",
                      color: "#121212",
                    }}
                  >
                    {` (${t("rs")}.${
                      admission?.fee_structure?.applicable_fees -
                        admission?.paid_fee >
                      0
                        ? admission?.fee_structure?.applicable_fees -
                          admission?.paid_fee
                        : 0
                    })`}
                  </span>
                )}
              </h5>
              <h6>{t("paid_exempted")}</h6>
            </div>
            <div className={style.student_admission_count_image}>
              {admission?.status === "Paid" ? (
                admission?.paid_fee - admission?.applicable_fee > 0 ? (
                  <>
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
                        {t("rs")}.{" "}
                        {admission?.paid_fee - admission?.applicable_fee}
                      </h6>
                      <h6> {t("excess")}</h6>
                      <button
                        className={style.image_refund_btn}
                        onClick={() => {
                          if (
                            viewAs === "ADMISSION_ADMIN" ||
                            viewAs === "ADMISSION_ADMIN_SCHOLARSHIP"
                          ) {
                            onAdmissionPaid({
                              applicableAmount: admission?.applicable_fee ?? 0,
                              remainAmount: admission?.remaining_fee ?? 0,
                              refundAmount:
                                admission?.paid_fee -
                                  admission?.applicable_fee ?? 0,
                              openAs: "REFUND",
                              appId: admission?.appId?._id,
                              admissionId:
                                admission?.appId?.admissionAdmin?._id,
                              collectFlow: admission?.remaining_flow,
                              hostelId: admission?.appId?.hostelAdmin?._id,
                              studentApplicableFees:
                                admission?.fee_structure?.applicable_fees -
                                admission?.paid_fee,
                            });
                          }
                        }}
                      >
                        {t("refund")}
                      </button>
                    </div>
                  </>
                ) : (
                  <img
                    src="/images/members/new-paid-icon.svg"
                    alt="pending icon"
                    style={{
                      width: "140px",
                      height: "140px",
                    }}
                  />
                )
              ) : admission?.applicable_fees_pending === 0 ? (
                <img
                  src="/images/members/new-paid-icon.svg"
                  alt="pending icon"
                  style={{
                    width: "140px",
                    height: "140px",
                  }}
                />
              ) : (
                <>
                  <img
                    src="/images/members/new-pending-icon.svg"
                    alt="pending icon"
                    style={{
                      width: "140px",
                      height: "140px",
                    }}
                  />
                  <div className={style.show_text}>
                    <h6
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      {t("rs")}. {admission?.applicable_fees_pending ?? 0}
                    </h6>
                    <h6> {t("pending")}</h6>
                  </div>
                </>
              )}
            </div>
          </section>
        ) : (
          <section
            className={style.student_admission_count_container}
            style={{
              marginBottom: "1.5rem",
            }}
          >
            <div className={style.student_admission_count}>
              <h5
                style={{
                  color: "#121212",
                }}
              >
                {t("rs")}. {admission?.fee_structure?.total_admission_fees ?? 0}
                {admission?.remaining_flow ===
                "Transport Application" ? null : (
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
                )}
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
                {admission?.remaining_flow ===
                "Transport Application" ? null : (
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: "400",
                      color: "#121212",
                    }}
                  >
                    {` (${t("rs")}.${
                      admission?.fee_structure?.applicable_fees -
                        admission?.paid_fee >
                      0
                        ? admission?.fee_structure?.applicable_fees -
                          admission?.paid_fee
                        : 0
                    })`}
                  </span>
                )}
              </h5>
              <h6>{t("paid_exempted")}</h6>
            </div>
            <div className={style.student_admission_count_image}>
              {admission?.status === "Paid" ? (
                admission?.paid_fee - admission?.applicable_fee > 0 ? (
                  <>
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
                        {t("rs")}.{" "}
                        {admission?.paid_fee - admission?.applicable_fee}
                      </h6>
                      <h6> {t("excess")}</h6>
                      <button
                        className={style.image_refund_btn}
                        onClick={() => {
                          if (
                            viewAs === "ADMISSION_ADMIN" ||
                            viewAs === "ADMISSION_ADMIN_SCHOLARSHIP"
                          ) {
                            onAdmissionPaid({
                              applicableAmount: admission?.applicable_fee ?? 0,
                              remainAmount: admission?.remaining_fee ?? 0,
                              refundAmount:
                                admission?.paid_fee -
                                  admission?.applicable_fee ?? 0,
                              openAs: "REFUND",
                              appId: admission?.appId?._id,
                              admissionId:
                                admission?.appId?.admissionAdmin?._id,
                              collectFlow: admission?.remaining_flow,
                              hostelId: admission?.appId?.hostelAdmin?._id,
                              studentApplicableFees:
                                admission?.fee_structure?.applicable_fees -
                                admission?.paid_fee,
                            });
                          }
                        }}
                      >
                        {t("refund")}
                      </button>
                    </div>
                  </>
                ) : (
                  <img
                    src="/images/members/new-paid-icon.svg"
                    alt="pending icon"
                    style={{
                      width: "140px",
                      height: "140px",
                    }}
                  />
                )
              ) : admission?.remaining_fee ? (
                <>
                  <img
                    src="/images/members/new-pending-icon.svg"
                    alt="pending icon"
                    style={{
                      width: "140px",
                      height: "140px",
                    }}
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
        )
      ) : (
        <section
          className={style.student_admission_count_container}
          style={{
            marginBottom: "1.5rem",
          }}
        >
          <div className={style.student_admission_count}>
            <h5
              style={{
                color: "#121212",
              }}
            >
              {t("rs")}. {admission?.fee_structure?.total_admission_fees ?? 0}
              {admission?.remaining_flow === "Transport Application" ? null : (
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
              )}
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
              {admission?.remaining_flow === "Transport Application" ? null : (
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: "400",
                    color: "#121212",
                  }}
                >
                  {` (${t("rs")}.${
                    admission?.fee_structure?.applicable_fees -
                      admission?.paid_fee >
                    0
                      ? admission?.fee_structure?.applicable_fees -
                        admission?.paid_fee
                      : 0
                  })`}
                </span>
              )}
            </h5>
            <h6>{t("paid_exempted")}</h6>
          </div>
          <div className={style.student_admission_count_image}>
            {admission?.status === "Paid" ? (
              admission?.paid_fee - admission?.applicable_fee > 0 ? (
                <>
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
                      {t("rs")}.{" "}
                      {admission?.paid_fee - admission?.applicable_fee}
                    </h6>
                    <h6> {t("excess")}</h6>
                    <button
                      className={style.image_refund_btn}
                      onClick={() => {
                        if (
                          viewAs === "ADMISSION_ADMIN" ||
                          viewAs === "ADMISSION_ADMIN_SCHOLARSHIP"
                        ) {
                          onAdmissionPaid({
                            applicableAmount: admission?.applicable_fee ?? 0,
                            remainAmount: admission?.remaining_fee ?? 0,
                            refundAmount:
                              admission?.paid_fee - admission?.applicable_fee ??
                              0,
                            openAs: "REFUND",
                            appId: admission?.appId?._id,
                            admissionId: admission?.appId?.admissionAdmin?._id,
                            collectFlow: admission?.remaining_flow,
                            hostelId: admission?.appId?.hostelAdmin?._id,
                            studentApplicableFees:
                              admission?.fee_structure?.applicable_fees -
                              admission?.paid_fee,
                          });
                        }
                      }}
                    >
                      {t("refund")}
                    </button>
                  </div>
                </>
              ) : (
                <img
                  src="/images/members/new-paid-icon.svg"
                  alt="pending icon"
                  style={{
                    width: "140px",
                    height: "140px",
                  }}
                />
              )
            ) : admission?.remaining_fee ? (
              <>
                <img
                  src="/images/members/new-pending-icon.svg"
                  alt="pending icon"
                  style={{
                    width: "140px",
                    height: "140px",
                  }}
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
      )}

      {viewAs === "STUDENT" &&
      admission?.remaining_flow !== "Hostel Application" ? (
        <>
          {admission?.remaining_array?.map((install) =>
            admission?.applicable_fees_pending === 0 ? (
              install?.status === "Not Paid" ? null : (
                <div
                  key={install?._id}
                  className={style.student_admission_cash_card}
                >
                  <section className={style.admission_fees_amount}>
                    <h6>
                      {install?.status === "Paid"
                        ? install?.installmentValue ?? ""
                        : install?.installmentValue}{" "}
                      {install?.status === "Paid" && (
                        <span>
                          {moment(
                            install?.fee_receipt?.fee_transaction_date
                          ).format("DD-MMM-yy")}
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
                          {install?.fee_receipt?.set_off_status === "Set Off"
                            ? "SetOff"
                            : install?.fee_receipt?.fee_payment_mode ===
                              "By Cash"
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
                      onClick={() => {
                        setSelectReceiptCard(admission?.appId?._id);
                        onPdfDownload(
                          install?.fee_receipt?._id,
                          admission?.remaining_flow
                        );
                      }}
                    >
                      {t("view_receipt")}
                    </button>
                  ) : (
                    <button
                      className={style.student_admission_collect_btn}
                      onClick={() =>
                        install?.status === "Receipt Requested"
                          ? ""
                          : viewAs === "STUDENT"
                          ? install?.status === "Receipt Rejected"
                            ? onAdmissionPaid({
                                install: install,
                                openAs: "RE_PAY",
                                studentId: admission?.student?._id,
                                collectFlow: admission?.remaining_flow,
                                is_promote:
                                  admission?.card_type === "Promote"
                                    ? "Promote"
                                    : null,
                                is_already_made: admission?.already_made,
                                rid: admission?._id,
                                hostelId: admission?.appId?.hostelAdmin?._id,
                                studentApplicableFees:
                                  admission?.fee_structure?.applicable_fees -
                                  admission?.paid_fee,
                                transportId:
                                  admission?.vehicleId?.transport?._id ?? "",
                              })
                            : admission?.button_status ===
                              "Collect As Scholarship"
                            ? ""
                            : onAdmissionPaid({
                                install: install,
                                feeStructure: admission?.fee_structure,
                                openAs: "NOT_RE_PAY",
                                collectFlow: admission?.remaining_flow,
                                studentId: admission?.student?._id,
                                is_promote:
                                  admission?.card_type === "Promote"
                                    ? "Promote"
                                    : null,
                                applicableAmount:
                                  admission?.applicable_fee ?? 0,
                                remainAmount: admission?.remaining_fee ?? 0,
                                admissionId:
                                  admission?.appId?.admissionAdmin?._id,
                                departmentId:
                                  admission?.appId?.applicationDepartment ??
                                  admission?.appId?.hostelAdmin?._id ??
                                  "",
                                financeId:
                                  admission?.appId?.admissionAdmin?.institute
                                    ?.financeDepart?.[0] ??
                                  admission?.appId?.hostelAdmin?.institute
                                    ?.financeDepart?.[0],
                                rid: admission?._id,
                                is_already_made: admission?.already_made,
                                hostelId: admission?.appId?.hostelAdmin?._id,
                                studentApplicableFees:
                                  admission?.fee_structure?.applicable_fees -
                                  admission?.paid_fee,
                                transportId:
                                  admission?.vehicleId?.transport?._id ?? "",
                              })
                          : onAdmissionPaid({
                              install: install,
                              feeStructure: admission?.fee_structure,
                              applicableAmount: admission?.applicable_fee ?? 0,
                              remainAmount: admission?.remaining_fee ?? 0,
                              admissionId:
                                admission?.appId?.admissionAdmin?._id,
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
                                admission?.remaining_flow ===
                                "Hostel Application"
                                  ? "Hostel Application"
                                  : admission?.appId?.applicationDepartment
                                  ? "Department"
                                  : admission?.remaining_flow,
                              cardShowApplicable:
                                admission?.fee_structure?.applicable_fees -
                                  admission?.paid_fee >
                                0
                                  ? admission?.fee_structure?.applicable_fees -
                                    admission?.paid_fee
                                  : 0,
                              setOffPrice: admission?.setOffPrice ?? 0,
                              is_already_made: admission?.already_made,
                              hostelId: admission?.appId?.hostelAdmin?._id,
                              studentApplicableFees:
                                admission?.fee_structure?.applicable_fees -
                                admission?.paid_fee,
                              transportId:
                                admission?.vehicleId?.transport?._id ?? "",
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
                          : admission?.button_status ===
                            "Collect As Scholarship"
                          ? {
                              backgroundColor: "#1d22c9f7",
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
                          : admission?.button_status ===
                            "Collect As Scholarship"
                          ? t("scholarship_outs")
                          : t("collect_fees")
                        : viewAs === "INSTITUTE_ADMIN" ||
                          viewAs === "SUBJECT_TEACHER" ||
                          viewAs === "FINANCE_MANAGER" ||
                          viewAs === "STUDENT_SECTION" ||
                          viewAs === "CERTIFICATE_AUTHORITY" ||
                          viewAs === "CLASS_CATALOG"
                        ? admission?.button_status === "Collect As Scholarship"
                          ? t("scholarship_outs")
                          : t("unpaid")
                        : install?.status === "Receipt Rejected"
                        ? t("re_pay")
                        : viewAs === "STUDENT"
                        ? admission?.button_status === "Collect As Scholarship"
                          ? t("scholarship_outs")
                          : t("pay")
                        : t("unpaid")}
                    </button>
                  )}
                </div>
              )
            ) : (
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
                        {moment(
                          install?.fee_receipt?.fee_transaction_date
                        ).format("DD-MMM-yy")}
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
                    onClick={() => {
                      setSelectReceiptCard(admission?.appId?._id);
                      onPdfDownload(
                        install?.fee_receipt?._id,
                        admission?.remaining_flow
                      );
                    }}
                  >
                    {t("view_receipt")}
                  </button>
                ) : (
                  <button
                    className={style.student_admission_collect_btn}
                    onClick={() =>
                      install?.status === "Receipt Requested"
                        ? ""
                        : viewAs === "STUDENT"
                        ? install?.status === "Receipt Rejected"
                          ? onAdmissionPaid({
                              install: install,
                              openAs: "RE_PAY",
                              studentId: admission?.student?._id,
                              collectFlow: admission?.remaining_flow,
                              is_promote:
                                admission?.card_type === "Promote"
                                  ? "Promote"
                                  : null,
                              is_already_made: admission?.already_made,
                              rid: admission?._id,
                              hostelId: admission?.appId?.hostelAdmin?._id,
                              studentApplicableFees:
                                admission?.fee_structure?.applicable_fees -
                                admission?.paid_fee,
                              transportId:
                                admission?.vehicleId?.transport?._id ?? "",
                            })
                          : admission?.button_status ===
                            "Collect As Scholarship"
                          ? ""
                          : onAdmissionPaid({
                              install: install,
                              feeStructure: admission?.fee_structure,
                              openAs: "NOT_RE_PAY",
                              collectFlow: admission?.remaining_flow,
                              studentId: admission?.student?._id,
                              is_promote:
                                admission?.card_type === "Promote"
                                  ? "Promote"
                                  : null,
                              applicableAmount: admission?.applicable_fee ?? 0,
                              remainAmount: admission?.remaining_fee ?? 0,
                              admissionId:
                                admission?.appId?.admissionAdmin?._id,
                              departmentId:
                                admission?.appId?.applicationDepartment ??
                                admission?.appId?.hostelAdmin?._id ??
                                "",
                              financeId:
                                admission?.appId?.admissionAdmin?.institute
                                  ?.financeDepart?.[0] ??
                                admission?.appId?.hostelAdmin?.institute
                                  ?.financeDepart?.[0],
                              rid: admission?._id,
                              is_already_made: admission?.already_made,
                              hostelId: admission?.appId?.hostelAdmin?._id,
                              studentApplicableFees:
                                admission?.fee_structure?.applicable_fees -
                                admission?.paid_fee,
                              transportId:
                                admission?.vehicleId?.transport?._id ?? "",
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
                                : admission?.remaining_flow,
                            cardShowApplicable:
                              admission?.fee_structure?.applicable_fees -
                                admission?.paid_fee >
                              0
                                ? admission?.fee_structure?.applicable_fees -
                                  admission?.paid_fee
                                : 0,
                            setOffPrice: admission?.setOffPrice ?? 0,
                            is_already_made: admission?.already_made,
                            hostelId: admission?.appId?.hostelAdmin?._id,
                            studentApplicableFees:
                              admission?.fee_structure?.applicable_fees -
                              admission?.paid_fee,
                            transportId:
                              admission?.vehicleId?.transport?._id ?? "",
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
                        : admission?.button_status === "Collect As Scholarship"
                        ? {
                            backgroundColor: "#1d22c9f7",
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
                        : admission?.button_status === "Collect As Scholarship"
                        ? t("scholarship_outs")
                        : t("collect_fees")
                      : viewAs === "INSTITUTE_ADMIN" ||
                        viewAs === "SUBJECT_TEACHER" ||
                        viewAs === "FINANCE_MANAGER" ||
                        viewAs === "STUDENT_SECTION" ||
                        viewAs === "CERTIFICATE_AUTHORITY" ||
                        viewAs === "CLASS_CATALOG"
                      ? admission?.button_status === "Collect As Scholarship"
                        ? t("scholarship_outs")
                        : t("unpaid")
                      : install?.status === "Receipt Rejected"
                      ? t("re_pay")
                      : viewAs === "STUDENT"
                      ? admission?.button_status === "Collect As Scholarship"
                        ? t("scholarship_outs")
                        : t("pay")
                      : t("unpaid")}
                  </button>
                )}
              </div>
            )
          )}
        </>
      ) : (
        <>
          {admission?.remaining_array?.map((install) => (
            <div
              key={install?._id}
              className={style.student_admission_cash_card}
              style={{
                position: "relative",
              }}
            >
              <section className={style.admission_fees_amount}>
                <h6>
                  {install?.status === "Paid"
                    ? install?.installmentValue ?? ""
                    : install?.installmentValue}{" "}
                  {install?.status === "Paid" && (
                    <span>
                      {moment(
                        install?.fee_receipt?.fee_transaction_date
                      ).format("DD-MMM-yy")}
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
              {install?.remainAmount <= 0
                ? (viewAs === "ADMISSION_ADMIN" ||
                    viewAs === "ADMISSION_ADMIN_SCHOLARSHIP") && (
                    <img
                      src="/images/three-24-dot-icon.svg"
                      alt="menu icon"
                      onClick={() => setRemoveInstallMenu(install?._id)}
                      className={style.edit_icon}
                      title="Menu"
                      style={{
                        cursor: "pointer",
                        top: "1%",
                        right: "0.5%",
                      }}
                    />
                  )
                : null}
              {install?.status === "Paid" ? (
                <button
                  className={style.view_receipt_btn}
                  onClick={() => {
                    setSelectReceiptCard(admission?.appId?._id);
                    onPdfDownload(
                      install?.fee_receipt?._id,
                      admission?.remaining_flow
                    );
                  }}
                >
                  {t("view_receipt")}
                </button>
              ) : (
                <button
                  className={style.student_admission_collect_btn}
                  onClick={() =>
                    install?.status === "Receipt Requested"
                      ? ""
                      : viewAs === "STUDENT"
                      ? install?.status === "Receipt Rejected"
                        ? onAdmissionPaid({
                            install: install,
                            openAs: "RE_PAY",
                            studentId: admission?.student?._id,
                            collectFlow: admission?.remaining_flow,
                            is_promote:
                              admission?.card_type === "Promote"
                                ? "Promote"
                                : null,
                            is_already_made: admission?.already_made,
                            rid: admission?._id,
                            hostelId: admission?.appId?.hostelAdmin?._id,
                            studentApplicableFees:
                              admission?.fee_structure?.applicable_fees -
                              admission?.paid_fee,
                            transportId:
                              admission?.vehicleId?.transport?._id ?? "",
                          })
                        : admission?.button_status === "Collect As Scholarship"
                        ? ""
                        : onAdmissionPaid({
                            install: install,
                            feeStructure: admission?.fee_structure,
                            openAs: "NOT_RE_PAY",
                            collectFlow: admission?.remaining_flow,
                            studentId: admission?.student?._id,
                            is_promote:
                              admission?.card_type === "Promote"
                                ? "Promote"
                                : null,
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
                            rid: admission?._id,
                            is_already_made: admission?.already_made,
                            hostelId: admission?.appId?.hostelAdmin?._id,
                            studentApplicableFees:
                              admission?.fee_structure?.applicable_fees -
                              admission?.paid_fee,
                            transportId:
                              admission?.vehicleId?.transport?._id ?? "",
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
                              : admission?.remaining_flow,
                          cardShowApplicable:
                            admission?.fee_structure?.applicable_fees -
                              admission?.paid_fee >
                            0
                              ? admission?.fee_structure?.applicable_fees -
                                admission?.paid_fee
                              : 0,
                          setOffPrice: admission?.setOffPrice ?? 0,
                          is_already_made: admission?.already_made,
                          hostelId: admission?.appId?.hostelAdmin?._id,
                          studentApplicableFees:
                            admission?.fee_structure?.applicable_fees -
                            admission?.paid_fee,
                          transportId:
                            admission?.vehicleId?.transport?._id ?? "",
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
                      : admission?.button_status === "Collect As Scholarship"
                      ? {
                          backgroundColor: "#1d22c9f7",
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
                      : admission?.button_status === "Collect As Scholarship"
                      ? t("scholarship_outs")
                      : t("collect_fees")
                    : viewAs === "INSTITUTE_ADMIN" ||
                      viewAs === "SUBJECT_TEACHER" ||
                      viewAs === "FINANCE_MANAGER" ||
                      viewAs === "STUDENT_SECTION" ||
                      viewAs === "CERTIFICATE_AUTHORITY" ||
                      viewAs === "CLASS_CATALOG"
                    ? admission?.button_status === "Collect As Scholarship"
                      ? t("scholarship_outs")
                      : t("unpaid")
                    : install?.status === "Receipt Rejected"
                    ? t("re_pay")
                    : viewAs === "STUDENT"
                    ? admission?.button_status === "Collect As Scholarship"
                      ? t("scholarship_outs")
                      : t("pay")
                    : t("unpaid")}
                </button>
              )}
            </div>
          ))}
        </>
      )}

      <div className={style.remark_card_container}>
        <section className={style.add_remark}>
          {(viewAs === "ADMISSION_ADMIN" ||
            viewAs === "ADMISSION_ADMIN_SCHOLARSHIP" ||
            viewAs === "INSTITUTE_ADMIN" ||
            viewAs === "STUDENT_SECTION") &&
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
          // departmentId={admission?.appId?.applicationDepartment}
          // classMasterId={admission?.appId?.applicationMaster}
          departmentId={admission?.fee_structure?.department}
          classMasterId={admission?.fee_structure?.class_master?._id}
          batchId={admission?.fee_structure?.batch_master}
          // batchId={admission?.batchId?.applicationBatch}
          onSelectedStrucutre={onSelectedStrucutre}
          asOpen="ADMISSION_APPLICATION_WISE"
        />
      )}
      {addScholar && (
        <AddAdmissionFeesScholarNumber
          onClose={() => setAddScholar(false)}
          rcid={admission?._id}
          setScholarNumber={setScholarNumber}
          filledNumber={scholarNumber}
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
      {openMenu && (
        <AdmissionFeesApplicationWiseMenu
          setOpenFeeStructure={setOpenFeeStructure}
          rid={admission?._id}
          sid={admission?.student?._id}
          onClose={() => setOpenMenu(false)}
          onRefetch={onAdmissionFeesRefetch}
          is_drop={admission?.drop_status === "Disable" ? false : true}
          onFeesRefetch={onFeesRefetch}
        />
      )}
      {removeInstallMenu && (
        <AdmissionFeesInstallmentMenu
          removeInstallMenu={removeInstallMenu}
          rid={admission?._id}
          onClose={() => setRemoveInstallMenu("")}
          onRefetch={onAdmissionFeesRefetch}
        />
      )}
    </div>
  );
};

export default AdmissionFeesApplicationWiseUniversal;
