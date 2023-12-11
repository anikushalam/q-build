import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Notfication } from "../../../../../../../validation/Snackbar";
import { useApplicantAdmissionConfirm } from "../../../../../../../hooks/member_tab/admission-api";
import QLoader from "../../../../../../../Loader/QLoader";
import PaymentModeType from "./PaymentModeType";
import JoinFormInput from "../../../../../../../JoiningForm/Student/Form/JoinFormInput";
import JoinFormCalender from "../../../../../../../JoiningForm/Student/Form/JoinFormCalender";
import style from "../../AdmissionApplicationRequest.module.css";
import PopupWrapper from "../../../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";

function CollectFees({
  currentApplicant,
  applicationId,
  onRefetchWhenConfirm,
  onClose,
}) {
  const [disabled, setDisabled] = useState(false);
  const { t } = useTranslation();
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
  const [filled, setFilled] = useState("");

  const [confirmAppliacntAdmission] = useApplicantAdmissionConfirm();

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
            if (
              // collectPayment[obj] >=
              //   applicant?.student?.fee_structure?.one_installments?.fees &&
              collectPayment[obj] <=
              currentApplicant?.student?.fee_structure?.total_admission_fees
            ) {
            } else {
              setNotificationState({
                msg: "You can not enter amount greater than Admission fees.",
                run: true,
              });
              errors["fee_payment_amount"] = `${obj} is required!`;
            }
          }
        }
      }
    }
    return errors;
  };
  const ConfirmStudent = () => {
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
      const data = {
        sid: currentApplicant?.student?._id,
        aid: applicationId,
        confirm_data: payData,
        receipt_status:
          payData.fee_payment_mode === "Fee Receipt Not Generated"
            ? "Fee Receipt Not Generated"
            : "",
      };
      if (
        data?.sid !== "" &&
        data?.aid !== "" &&
        data?.confirm_data?.amount > 0 &&
        data?.confirm_data?.mode !== ""
      ) {
        confirmAppliacntAdmission(data)
          .then((res) => {
            if (res.data.confirm_status) {
              onRefetchWhenConfirm();
              onClose(false);
              setDisabled(false);
            }
          })
          .catch({});
      } else {
        setDisabled(false);
      }
    }
  };

  // console.info("collect fees", currentApplicant);
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.admission_modal}>
        <h6 className={style.admission_modal_heading}>{t("collect_fees")}</h6>
        <BorderBottom
          customStyle={{
            width: "100%",
            margin: "0.7rem 0",
          }}
        />
        <div className={style.admission_fees_row}>
          <h6>{t("applicable_amount")} :</h6>
          <h6>
            {t("rs")}.{" "}
            {currentApplicant?.student?.fee_structure?.applicable_fees}
            {/* {currentApplicant?.student?.fee_structure?.total_admission_fees} */}
          </h6>
        </div>

        <JoinFormInput
          labelText={`${t("amount_first_installment")} ${
            currentApplicant?.student?.fee_structure?.one_installments?.fees
          }`}
          name={"amount"}
          type={"tel"}
          value={payData.amount}
          onChange={onAmountChange}
          placeholder={t("amoute_details_collect")}
          errorShow={filled["fee_payment_amount"]}
          customStyleLabel={{
            marginTop: "15px",
            marginBottom: "7px",
          }}
          customStyleContainer={{
            marginBottom: "15px",
          }}
        />

        <PaymentModeType
          paymentHeading={t("payment_type_mode")}
          onInputChange={onInputChange}
          errorShow={filled["fee_payment_mode"]}
          // viewAs="ADMISSION_COLLECT_FEES"
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
          }}
          datePickerPosition={{
            position: "relative",
            top: "-20rem",
          }}
          // customStyleCaledarIcon={{
          //   bottom: "1.7rem",
          // }}
          customStyleLabel={{
            marginTop: "15px",
          }}
          errorShow={filled["transaction_date"]}
        />
        {payData.fee_payment_mode === "By Cash" ? (
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
                marginTop: "15px",
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
                marginTop: "15px",
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
                marginTop: "15px",
                marginBottom: "7px",
              }}
            />
          </>
        )}

        <div className={style.confirm_btn} onClick={ConfirmStudent}>
          {t("collect")}
        </div>
        <Notfication
          msg={notificationState.msg}
          run={notificationState.run}
          setRun={() => setNotificationState({ msg: "", run: false })}
          postiton="bottom"
          type="error"
        />
      </div>

      {disabled && <QLoader />}
    </PopupWrapper>
  );
}

export default CollectFees;
