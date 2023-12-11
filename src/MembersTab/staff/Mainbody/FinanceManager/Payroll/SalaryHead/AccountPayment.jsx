import React, { useState } from "react";
import PopupWrapper from "../../FeesStructure/PopupWrapper";
import style from "../../FeesStructure/FeesStructure.module.css";
import JoinFormCalender from "../../../../../../JoiningForm/Student/Form/JoinFormCalender";
import { useTranslation } from "react-i18next";
import { usePayrollAccountHeadPayment } from "../../../../../../hooks/member_tab/finance-api";
import QLoader from "../../../../../../Loader/QLoader";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PaymentModeType from "../../../StaffAdmisionAdmin/AdmissionApplicationRequest/AdmissionSelected/SelectedProcess/PaymentModeType";

const AccountPayment = ({
  onClose,
  fid,
  onRefetchWhenConfirm,
  openAccountPayment,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
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
  const [payrollAccountHeadPayment] = usePayrollAccountHeadPayment();
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
              collectPayment[obj] <= openAccountPayment?.pay_amount
            ) {
            } else {
              setNotificationState({
                msg: "You can not enter amount greater than payable amount",
                run: true,
              });
              errors["remain"] = `${obj} is required!`;
            }
          }
        }
      }
    }
    return errors;
  };

  const onAccountPayment = () => {
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
      if (fid !== "") {
        payrollAccountHeadPayment({
          fid: fid,
          mwid: openAccountPayment?._id,
          accountHead: payData,
        })
          .then((res) => {
            onRefetchWhenConfirm();
            onClose();
            setDisabled(false);
          })
          .catch({});
      } else {
        setDisabled(false);
      }
    }
  };

  // console.info("openAccountPayment", openAccountPayment);
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.add_category_modal}
        style={{
          width: "35rem",
          minHeight: "10rem",
          maxHeight: "35rem",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <div className={style.add_category_modal_title}>
          <h6>
            {t("account")} TDS {t("payment")}
          </h6>
          <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginTop: "0.7rem",
          }}
        />
        <div className={style.account_payment_row}>
          <h6>{t("payable")} :</h6>
          <h6>
            {t("rs")}. {openAccountPayment?.pay_amount ?? 0}
          </h6>
        </div>
        <PaymentModeType
          paymentHeading={t("payment_type_mode")}
          onInputChange={onInputChange}
          errorShow={filled["payment_type_mode"]}
        />
        <JoinFormInput
          labelText={`${t("amount")} `}
          name={"amount"}
          type={"tel"}
          value={payData.amount}
          onChange={onAmountChange}
          placeholder={t("amoute_placeholder")}
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
          }}
          datePickerPosition={{
            position: "relative",
            top: "-20rem",
          }}
          customStyleLabel={{
            marginTop: "7px",
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
        <button
          className={style.set_fees_structure_btn}
          onClick={onAccountPayment}
          style={{ justifyContent: "center" }}
        >
          {t("confirm")}
        </button>
        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default AccountPayment;
