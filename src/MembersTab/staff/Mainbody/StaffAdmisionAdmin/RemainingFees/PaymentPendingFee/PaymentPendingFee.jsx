import React from "react";
import style from "./PaymentPendingFee.module.css";
import { Dialog } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  useApplicantAdmissionRemainingFees,
  useCollectNewAddFeesByAdmission,
  useRefundAmountByAdmissionAdmin,
} from "../../../../../../hooks/member_tab/admission-api";
import QLoader from "../../../../../../Loader/QLoader";
import { useSelector } from "react-redux";
import { Notfication } from "../../../../../../validation/Snackbar";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import JoinFormCalender from "../../../../../../JoiningForm/Student/Form/JoinFormCalender";
import { useEffect } from "react";
import CustomNormalSelectInput from "../../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import {
  useApplicantHostelRemainingFee,
  useRefundAmountByHostel,
} from "../../../../../../hooks/member_tab/hostel-api";
import PaymentModeType from "../../AdmissionApplicationRequest/AdmissionSelected/SelectedProcess/PaymentModeType";
import { useApplicantTransportRemainingFee } from "../../../../../../hooks/member_tab/transport-api";
function PaymentPendingFee({
  hideModal,
  payFees,
  installment,
  onAdmissionFeesRefetch,
  onFeesRefetch,
  studentId,
  viewAs,
}) {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const admissionId = useSelector((state) => state.admissionChange.aid);
  const [payData, setPayData] = useState({
    amount: "",
    mode: "",
    fee_payment_mode: "",
    fee_payment_amount: "",
    transaction_date: "",
    fee_bank_name: "",
    fee_bank_holder: "",
    fee_utr_reference: "",
  });
  const [filled, setFilled] = useState("");
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [applicantRemainingFees] = useApplicantAdmissionRemainingFees();
  const [refundAmountByAdmissionAdmin] = useRefundAmountByAdmissionAdmin();
  const [applicantHostelRemainingFee] = useApplicantHostelRemainingFee();
  const [refundAmountByHostel] = useRefundAmountByHostel();
  const [collectNewAddFeesByAdmission] = useCollectNewAddFeesByAdmission();
  const [applicantTransportRemainingFee] = useApplicantTransportRemainingFee();
  useEffect(() => {
    if (installment?.openAs === "REFUND") {
      setPayData((prev) => ({
        ...prev,
        fee_payment_mode: "Refunded",
        fee_payment_amount: installment?.refundAmount,
        amount: installment?.refundAmount,
      }));
    }
    // if (viewAs === "FINANCE_MANAGER") {
    //   setPayData((prev) => ({
    //     ...prev,
    //     fee_payment_mode: "Government/Scholarship",
    //     mode: "Online",
    //   }));
    // }
  }, [installment?.openAs]);
  // const onAmountChange = (e) => {
  //   if (+e.target.value > installment?.remainAmount) {
  //     setNotificationState({
  //       msg: "You can not enter amout greater than Admission fees",
  //       run: true,
  //     });
  //   } else {
  //     setPayData((pre) => ({
  //       ...pre,
  //       amount: +e.target.value,
  //     }));
  //   }
  // };
  const onAmountChange = (e) => {
    if (installment?.openAs !== "REFUND") {
      if (payData.fee_payment_mode === "Exempted/Unrecovered") {
      } else {
        setPayData((pre) => ({
          ...pre,
          amount: +e.target.value,
          fee_payment_amount: +e.target.value,
        }));
      }
    }
  };
  const onInputChange = (e) => {
    if (e.target.name === "fee_payment_mode") {
      setPayData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
        mode:
          e.target.value === "By Cash"
            ? "Offline"
            : e.target.value === "Exempted/Unrecovered"
            ? "Exempted"
            : "Online",
        fee_payment_mode: e.target.value,
        amount:
          e.target.value === "Exempted/Unrecovered"
            ? +installment?.remainAmount ?? 0
            : "",
        fee_payment_amount:
          e.target.value === "Exempted/Unrecovered"
            ? +installment?.remainAmount ?? 0
            : "",
      }));
    } else {
      setPayData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };
  const onDateFunction = (val) => {
    const onDateSplit = val?.split("/");
    setPayData((prev) => ({
      ...prev,
      transaction_date: `${onDateSplit[2]}-${onDateSplit[1]}-${onDateSplit[0]}`,
    }));
  };

  const onValidation = (collectPayment) => {
    const errors = {};
    for (let obj in collectPayment) {
      if (
        obj === "fee_bank_name" ||
        obj === "fee_bank_holder" ||
        obj === "fee_utr_reference" ||
        obj === "amount" ||
        obj === "mode"
      ) {
      } else {
        if (!collectPayment[obj]) {
          errors[obj] = `${obj} is required!`;
        } else {
          if (obj === "fee_payment_amount") {
            if (payData.fee_payment_mode === "Government/Scholarship") {
            } else if (payData.fee_payment_mode === "Exempted/Unrecovered") {
            } else if (
              collectPayment[obj] > installment?.install?.remainAmount
            ) {
              setNotificationState({
                msg: "You can not enter amount greater than Remaining fees",
                run: true,
              });
              errors["fee_payment_amount"] = `${obj} is required!`;
            } else {
            }
          }
        }
      }
    }
    return errors;
  };

  const onSelectMode = (val) => {
    setPayData((prev) => ({
      ...prev,
      mode: val === "By Bank" ? "Online" : "Offline",
    }));
  };
  const onConfirmPayment = () => {
    if (
      installment?.openAs === "REFUND" &&
      studentId &&
      installment?.admissionId
    ) {
      setDisabled(true);
      if (installment?.collectFlow === "Hostel Application") {
        refundAmountByHostel({
          hid: installment?.hostelId,
          sid: studentId,
          appId: installment?.appId,
          refundData: {
            ...payData,
          },
        })
          .then(() => {
            onAdmissionFeesRefetch();
            onFeesRefetch();
            hideModal(false);
            setDisabled(false);
          })
          .catch({});
      } else {
        refundAmountByAdmissionAdmin({
          aid: installment?.admissionId,
          sid: studentId,
          appId: installment?.appId,
          refundData: {
            ...payData,
          },
        })
          .then(() => {
            onAdmissionFeesRefetch();
            onFeesRefetch();
            hideModal(false);
            setDisabled(false);
          })
          .catch({});
      }
    } else {
      if (
        // admissionId !== "" &&
        studentId !== "" &&
        installment?.install?.appId !== ""
      ) {
        const validation = onValidation(payData);
        let flag = false;
        for (let errField in validation) {
          flag = true;
          break;
        }
        if (flag) {
          setFilled(validation);
        } else {
          setDisabled(true);
          if (installment?.collectFlow === "Transport Application") {
            applicantTransportRemainingFee({
              tid: installment?.transportId,
              sid: studentId,
              id: installment?.install?.instituteId,
              remain_data: {
                ...payData,
                type: installment?.install?.installmentValue,
                rid: installment?.rid,
              },
            })
              .then((res) => {
                if (res.data.paid) {
                  onAdmissionFeesRefetch();
                  onFeesRefetch();
                  hideModal(false);
                  setDisabled(false);
                }
              })
              .catch({});
          } else if (installment?.collectFlow === "Hostel Application") {
            applicantHostelRemainingFee({
              hid: installment?.hostelId,
              sid: studentId,
              appId: installment?.install?.appId,
              receipt_status:
                payData.fee_payment_mode === "Fee Receipt Not Generated"
                  ? "Fee Receipt Not Generated"
                  : "",
              remain_data: {
                ...payData,
                type: installment?.install?.installmentValue,
              },
            })
              .then((res) => {
                if (res.data.paid) {
                  onAdmissionFeesRefetch();
                  onFeesRefetch();
                  hideModal(false);
                  setDisabled(false);
                }
              })
              .catch({});
          } else {
            if (installment?.is_already_made) {
              collectNewAddFeesByAdmission({
                aid: admissionId ? admissionId : installment?.admissionId,
                sid: studentId,
                appId: installment?.install?.appId,
                receipt_status:
                  payData.fee_payment_mode === "Fee Receipt Not Generated"
                    ? "Fee Receipt Not Generated"
                    : "",
                remain_data: {
                  ...payData,
                  type: installment?.install?.installmentValue,
                  remain_1: installment?.install?._id,
                  rid: installment?.rid,
                },
              })
                .then((res) => {
                  if (res.data.paid) {
                    onAdmissionFeesRefetch();
                    onFeesRefetch();
                    hideModal(false);
                    setDisabled(false);
                  }
                })
                .catch({});
            } else {
              applicantRemainingFees({
                aid: admissionId ? admissionId : installment?.admissionId,
                sid: studentId,
                appId: installment?.install?.appId,
                receipt_status:
                  payData.fee_payment_mode === "Fee Receipt Not Generated"
                    ? "Fee Receipt Not Generated"
                    : "",
                remain_data: {
                  ...payData,
                  type: installment?.install?.installmentValue,
                },
              })
                .then((res) => {
                  if (res.data.paid) {
                    onAdmissionFeesRefetch();
                    onFeesRefetch();
                    hideModal(false);
                    setDisabled(false);
                  }
                })
                .catch({});
            }
          }
        }
      }
    }
  };

  // console.info("payData", payData);
  return (
    <>
      {!disabled && (
        <Dialog open={payFees} onClose={() => hideModal(false)}>
          <div
            className={style.addDisplay}
            style={{
              width: "35rem",
            }}
          >
            <div className={style.title}>
              {installment?.openAs !== "REFUND"
                ? t("collect_fees")
                : t("refund_amount")}
            </div>
            <div className={style.content}>
              {installment?.collectFlow === "Transport Application" ? null : (
                <section className={style.admission_fees_amount}>
                  <h6>{t("applicable_amount")}</h6>
                  <h6>
                    {t("rs")}.{installment?.feeStructure?.applicable_fees ?? 0}
                  </h6>
                  {/* <h6>
                  {t("rs")}.{installment?.applicableAmount ?? 0}
                </h6> */}
                </section>
              )}
              <section className={style.admission_fees_amount}>
                <h6>{t("remaining_fees")}</h6>
                <h6>
                  {t("rs")}.{installment?.remainAmount ?? 0}
                </h6>
              </section>
              <PaymentModeType
                paymentHeadingPlaceholder={t("collect_fee_note")}
                paymentHeading={t("payment_type_mode")}
                onInputChange={onInputChange}
                errorShow={filled["payment_type_mode"]}
                openAs={installment?.openAs}
                viewAs={viewAs}
              />

              {installment?.openAs === "REFUND" && (
                <CustomNormalSelectInput
                  selectLabel={t("payment_type")}
                  value={
                    payData.mode
                      ? payData.mode === "Online"
                        ? "By Bank"
                        : "By Cash"
                      : ""
                  }
                  onClick={onSelectMode}
                  selectedValue={"Select Payment Type By Bank/By Cash"}
                  options={["By Bank", "By Cash"]}
                  customLabelStyle={{
                    marginTop: "7px",
                    marginBottom: "7px",
                    fontWeight: "400",
                    fontSize: "12px",
                    color: "rgba(18, 18, 18, 0.8)",
                  }}
                  customListStyle={{
                    maxHeight: "fit-content",
                  }}
                />
              )}

              <JoinFormInput
                labelText={t("amount")}
                name={"fee_payment_amount"}
                type={"tel"}
                value={payData?.fee_payment_amount}
                onChange={onAmountChange}
                placeholder={t("please_enter_amount_paid")}
                errorShow={filled["fee_payment_amount"]}
              />
              <JoinFormCalender
                labelText={t("select_date_of_transaction")}
                placeholder={t("please_select_date")}
                name={"transaction_date"}
                value={payData.transaction_date}
                onDateFunction={onDateFunction}
                customStyleContainer={{
                  position: "relative",
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                }}
                datePickerPosition={{
                  position: "relative",
                  top: "-20rem",
                }}
                // customStyleCaledarIcon={{
                //   bottom: "1.7rem",
                // }}
                customStyleLabel={{
                  marginTop: "7px",
                }}
                errorShow={filled["transaction_date"]}
              />
              {payData.fee_payment_mode === "By Cash" ||
              payData.mode === "Offline" ? (
                ""
              ) : (
                <>
                  <JoinFormInput
                    labelText={t("bank_name_collect")}
                    name={"fee_bank_name"}
                    type={"tel"}
                    value={payData.fee_bank_name}
                    onChange={onInputChange}
                    placeholder={t("please_enter_bank_name")}
                    customStyleLabel={{
                      marginTop: "7px",
                      marginBottom: "7px",
                    }}
                  />
                  <JoinFormInput
                    labelText={t("banke_holder_name")}
                    name={"fee_bank_holder"}
                    type={"tel"}
                    value={payData.fee_bank_holder}
                    onChange={onInputChange}
                    placeholder={t("please_enter_name_of_bank_holder")}
                    customStyleLabel={{
                      marginTop: "7px",
                      marginBottom: "7px",
                    }}
                  />
                  <JoinFormInput
                    labelText={t("cheque_dd_neft")}
                    name={"fee_utr_reference"}
                    type={"tel"}
                    value={payData.fee_utr_reference}
                    onChange={onInputChange}
                    placeholder={t("please_enter_utr_ref_number")}
                    customStyleLabel={{
                      marginTop: "7px",
                      marginBottom: "7px",
                    }}
                  />
                </>
              )}
              <div
                className={style.btn}
                onClick={onConfirmPayment}
                style={{
                  marginTop: "1rem",
                }}
              >
                {t("confirm")}
              </div>
            </div>
          </div>
          <Notfication
            msg={notificationState.msg}
            run={notificationState.run}
            setRun={() => setNotificationState({ msg: "", run: false })}
            postiton="bottom"
            type="error"
          />
        </Dialog>
      )}

      {disabled && <QLoader />}
    </>
  );
}

export default PaymentPendingFee;
