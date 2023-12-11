import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PopupWrapper from "../../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import { Notfication } from "../../validation/Snackbar";
import CustomNormalSelectInput from "./Form/CustomNormalSelectInput";
import JoinFormCalender from "./Form/JoinFormCalender";
import JoinFormInput from "./Form/JoinFormInput";
import style from "../../MembersTab/staff/Mainbody/StaffAdmisionAdmin/RemainingFees/PaymentPendingFee/PaymentPendingFee.module.css";
const AdmissionPaymentForm = ({
  onClose,
  openFeesQuery,
  setStudentAdmission,
  onCloseFunction,
}) => {
  const { t } = useTranslation();
  const [filled, setFilled] = useState("");
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
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const onAmountChange = (e) => {
    setPayData((pre) => ({
      ...pre,
      amount: +e.target.value,
      fee_payment_amount: +e.target.value,
    }));
  };
  const onInputChange = (e) => {
    setPayData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
            if (collectPayment[obj] > openFeesQuery?.total_admission_fees) {
              setNotificationState({
                msg: "You can not enter amount greater than total Admission fees",
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
      fee_payment_mode: val,
    }));
  };
  //   console.info(openFeesQuery);
  const onConfirm = () => {
    const validation = onValidation(payData);
    let flag = false;
    for (let errField in validation) {
      flag = true;
      break;
    }
    if (flag) {
      setFilled(validation);
    } else {
      setStudentAdmission((prev) => ({
        ...prev,
        ...payData,
        fee_struct: openFeesQuery?._id,
      }));
      onCloseFunction();
    }
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.add_category_modal}
        style={{
          width: "30rem",
          minHeight: "10rem",
          maxHeight: "35rem",
          overflowY: "scroll",
          overflowX: "hidden",
          scrollBehavior: "smooth",
          padding: "1rem",
        }}
      >
        <section className={style.admission_fees_amount}>
          <h6>{t("admission_fees")}</h6>
          <h6>
            {t("rs")}.{openFeesQuery?.total_admission_fees ?? 0}
          </h6>
        </section>
        <section className={style.admission_fees_amount}>
          <h6>{t("applicable_amount")}</h6>
          <h6>
            {t("rs")}.{openFeesQuery?.applicable_fees ?? 0}
          </h6>
        </section>
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
          errorShow={filled["fee_payment_mode"]}
        />
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
            top: "-3rem",
          }}
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
              type={"text"}
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
              type={"text"}
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

        <button
          className={style.btn}
          style={{
            width: "100%",
            margin: "1rem 0",
          }}
          onClick={onConfirm}
        >
          {t("confirm")}
        </button>
      </div>
      <Notfication
        msg={notificationState.msg}
        run={notificationState.run}
        setRun={() => setNotificationState({ msg: "", run: false })}
        postiton="bottom"
        type="error"
      />
    </PopupWrapper>
  );
};

export default AdmissionPaymentForm;
