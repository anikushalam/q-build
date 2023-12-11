import React, { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useCancelConfirmRenewalByHostel,
  useRefundStudentFeesByHostel,
} from "../../../../../../hooks/member_tab/hostel-api";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../../../Loader/QLoader";
import { Notfication } from "../../../../../../validation/Snackbar";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import PaymentModeType from "../../../StaffAdmisionAdmin/AdmisionApplication/OngoingApplication/Steps/CollectFeesModal/PaymentModeType";
import style from "../../../StaffAdmisionAdmin/AdmisionApplication/OngoingApplication/Steps/ConfirmAdmisionModal/ConfirmAdmisionModal.module.css";

function CancelHostelApplication({
  currentApplicant,
  onClose,
  onRefetchWhenAction,
  applicationId,
  viewAs,
  huid,
}) {
  const { t } = useTranslation();
  const [payData, setPayData] = useState({
    amount: "",
    mode: "",
    fee_payment_mode: "",
    fee_payment_amount: "",
    fee_bank_name: "",
    fee_bank_holder: "",
    fee_utr_reference: "",
  });
  const [filled, setFilled] = useState("");
  const [paidAmount, setPaidAmount] = useState(0);
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [disable, setDisabled] = useState(false);

  const [refundStudentFeesByHostel] = useRefundStudentFeesByHostel();
  const [cancelConfirmRenewalByHostel] = useCancelConfirmRenewalByHostel();
  //   console.info("sfgsdjskj", currentApplicant, applicationDetail);

  useEffect(() => {
    if (currentApplicant?.student?.paidFeeList?.length) {
      const amout = currentApplicant?.student?.paidFeeList?.filter(
        (val) => val?.appId === applicationId
      );
      setPaidAmount(amout?.[0]?.paidAmount ?? 0);
    }
  }, [currentApplicant?.student?.paidFeeList]);
  const onAmountChange = (e) => {
    setPayData((pre) => ({
      ...pre,
      amount: +e.target.value,
      fee_payment_amount: +e.target.value,
    }));
  };

  const onInputChange = (e) => {
    if (e.target.name === "fee_payment_mode") {
      setPayData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
        mode: e.target.value === "By Cash" ? "Offline" : "Online",
        fee_payment_mode: e.target.value,
      }));
    } else {
      setPayData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
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
            if (collectPayment[obj] <= paidAmount) {
            } else {
              setNotificationState({
                msg: "You can not enter amount greater than fees paid",
                run: true,
              });
              errors["fee_payment_amount_issue"] = `${obj} is required!`;
            }
          }
        }
      }
    }
    return errors;
  };
  const CancelStudent = () => {
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
      if (viewAs === "RENEWAL") {
        var data = {
          sid: currentApplicant?.student?._id,
          aid: applicationId,
          huid: huid,
          cancelRenewal: {
            ...payData,
            remainAmount: currentApplicant?.fee_remain ?? 0,
          },
        };
        if (
          data?.sid !== "" &&
          data?.aid !== "" &&
          data?.huid !== "" &&
          data?.cancelRenewal?.amount > 0
        ) {
          cancelConfirmRenewalByHostel(data)
            .then((res) => {
              if (res.data.refund_status) {
                onRefetchWhenAction();
                onClose();
                setDisabled(false);
              }
            })
            .catch({});
        }
      } else {
        var data = {
          sid: currentApplicant?.student?._id,
          aid: applicationId,
          cancel_data: {
            ...payData,
            remainAmount: currentApplicant?.fee_remain ?? 0,
          },
        };
        if (
          data?.sid !== "" &&
          data?.aid !== "" &&
          data?.cancel_data?.amount > 0
        ) {
          refundStudentFeesByHostel(data)
            .then((res) => {
              if (res.data.refund_status) {
                onRefetchWhenAction();

                onClose();
                setDisabled(false);
              }
            })
            .catch({});
        }
      }
    }
  };
  return (
    <>
      {!disable && (
        <PopupWrapper onClose={onClose}>
          <div
            className={`${style.addDisplay} ${style.cancelModal}`}
            style={{
              maxHeight: "35rem",
            }}
          >
            <div className={style.title}>
              {t(
                viewAs === "RENEWAL"
                  ? "cancel_renewal_addmission"
                  : "cancel_addmission"
              )}
            </div>
            <div className={style.content}>
              <div className={style.contentRow}>
                <h6>{t("applicable_amount")} :</h6>
                <h6>
                  Rs.{" "}
                  {currentApplicant?.student?.fee_structure
                    ?.total_admission_fees ??
                    currentApplicant?.student?.hostel_fee_structure
                      ?.total_admission_fees}
                </h6>
              </div>
              <div className={style.contentRow}>
                <h6> {t("fees_paid")} :</h6>
                <h6>Rs. {paidAmount}</h6>
              </div>
              <PaymentModeType
                paymentHeading={t("refund_payment_type_mode")}
                onInputChange={onInputChange}
                errorShow={filled["payment_type_mode"]}
              />
              <JoinFormInput
                labelText={t("refund_amount")}
                name={"amount"}
                type={"tel"}
                value={payData.amount}
                onChange={onAmountChange}
                placeholder={t("please_enter_refund_amount")}
                errorShow={filled["fee_payment_amount"]}
              />
              <h6>{t("paid_to")}</h6>
              <JoinFormInput
                labelText={t("bank_name_collect")}
                name={"fee_bank_name"}
                type={"tel"}
                value={payData.fee_bank_name}
                onChange={onInputChange}
                placeholder={t("please_enter_bank_name")}
                customStyleLabel={{
                  marginTop: "0",
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
                  marginTop: "0",
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
                  marginTop: "0",
                  marginBottom: "7px",
                }}
              />

              <div
                style={{ marginTop: "3rem" }}
                className={style.btn}
                onClick={CancelStudent}
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
        </PopupWrapper>
      )}
      {disable && <QLoader />}
    </>
  );
}

export default CancelHostelApplication;
