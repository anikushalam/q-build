import React, { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useFileUpload } from "../../../../../../hooks/authentication-api";
import JoinFormCalender from "../../../../../../JoiningForm/Student/Form/JoinFormCalender";
import JoinFormFile from "../../../../../../JoiningForm/Student/Form/JoinFormFile";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../../../Loader/QLoader";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { Notfication } from "../../../../../../validation/Snackbar";
import style from "./GatewayProcess.module.css";

const PaymentForm = ({
  setPayData,
  payData,
  setOpenForm,
  activePaymentStatus,
  ConfirmOffline,
  ExceedAmount,
  viewAs,
}) => {
  const { t } = useTranslation();
  const [oneFileUpload] = useFileUpload();
  const [file, setFile] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [filled, setFilled] = useState("");
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  useEffect(() => {
    if (activePaymentStatus)
      setPayData((prev) => ({
        ...prev,
        fee_payment_mode: activePaymentStatus,
      }));
  }, [activePaymentStatus]);

  useEffect(() => {
    if (payData?.fee_payment_acknowledge) {
      setFile({
        originalName: "payment acknowledge",
      });
    }
  }, [payData?.fee_payment_acknowledge]);
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

  const onFileUpload = (e) => {
    // console.info("this is nofmfnsd", e.target.files[0]);
    setDisabled((pre) => !pre);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    oneFileUpload({
      fileUpload: formData,
    })
      .then((res) => {
        setFile({
          originalName: e.target.files[0]?.name,
          key: res.data?.imageKey,
          type: e.target.files[0]?.type,
        });
        setPayData((prev) => ({
          ...prev,
          fee_payment_acknowledge: res.data?.imageKey,
        }));

        setDisabled((pre) => !pre);
      })
      .catch({});
  };

  const onBackWithArrowLeft = () => {
    setOpenForm((pre) => !pre);
  };

  const onValidation = (collectPayment) => {
    const errors = {};
    for (let obj in collectPayment) {
      if (
        obj === "fee_bank_name" ||
        obj === "fee_bank_holder" ||
        obj === "fee_utr_reference" ||
        obj === "fee_payment_acknowledge"
      ) {
      } else {
        if (!collectPayment[obj]) {
          errors[obj] = `${obj} is required!`;
        }
        if (viewAs === "STUDENT") {
          if (ExceedAmount < collectPayment["fee_payment_amount"]) {
            setNotificationState({
              msg: "You can not enter amount greater than Admission fees",
              run: true,
            });
            errors["ram"] = `${obj} is required!`;
          }
        }
        // else {
        //   if (obj === "fee_payment_amount") {
        //     if (
        //       // collectPayment[obj] >=
        //       //   applicant?.student?.fee_structure?.one_installments?.fees &&
        //       collectPayment[obj] <=
        //       applicant?.student?.fee_structure?.total_admission_fees
        //     ) {
        //     } else {
        //       setNotificationState({
        //         msg: "You can not enter amount greater than Admission fees and less than first installment",
        //         run: true,
        //       });
        //       errors["fee_payment_amount"] = `${obj} is required!`;
        //     }
        //   }
        // }
      }
    }
    return errors;
  };
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
      ConfirmOffline();
    }
  };
  return (
    <>
      <section className={style.add_process_modal_title_left}>
        <img
          src="/images/arrow-left-fees-icon.svg"
          onClick={onBackWithArrowLeft}
          alt=""
        />
        <h6>{t("pay_info_fee_receipt")}</h6>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <JoinFormInput
        labelText={t("payment_type_mode")}
        name={"fee_payment_mode"}
        type={"text"}
        value={payData?.fee_payment_mode}
        onChange={() => {}}
        errorShow={filled["fee_payment_mode"]}
      />

      <JoinFormInput
        labelText={t("enter_amount_paid")}
        name={"fee_payment_amount"}
        type={"tel"}
        value={payData?.fee_payment_amount}
        onChange={onInputChange}
        placeholder={t("please_enter_amount_paid")}
        errorShow={filled["fee_payment_amount"]}
      />
      <JoinFormCalender
        labelText={t("select_date_of_transaction")}
        placeholder={t("please_select_date")}
        name={"transaction_date"}
        value={payData?.transaction_date}
        onDateFunction={onDateFunction}
        customStyleContainer={{
          position: "relative",
          marginTop: "0.5rem",
        }}
        datePickerPosition={{
          position: "relative",
          top: "-12rem",
        }}
        customStyleLabel={{
          marginTop: "7px",
        }}
        errorShow={filled["transaction_date"]}
      />

      <JoinFormInput
        labelText={t("bank_name_collect")}
        name={"fee_bank_name"}
        type={"tel"}
        value={payData?.fee_bank_name}
        onChange={onInputChange}
        placeholder={t("please_enter_bank_name")}
        customStyleLabel={{
          marginTop: "10px",
          marginBottom: "7px",
        }}
      />
      <JoinFormInput
        labelText={t("banke_holder_name")}
        name={"fee_bank_holder"}
        type={"tel"}
        value={payData?.fee_bank_holder}
        onChange={onInputChange}
        placeholder={t("please_enter_name_of_bank_holder")}
        customStyleLabel={{
          marginTop: "10px",
          marginBottom: "7px",
        }}
      />
      <JoinFormInput
        labelText={t("cheque_dd_neft")}
        name={"fee_utr_reference"}
        type={"tel"}
        value={payData?.fee_utr_reference}
        onChange={onInputChange}
        placeholder={t("please_enter_utr_ref_number")}
        customStyleLabel={{
          marginTop: "10px",
          marginBottom: "7px",
        }}
      />
      <JoinFormFile
        labelText={t("acknowledge_optional_text")}
        name={"fee_payment_acknowledge"}
        value={file}
        onChange={onFileUpload}
      />
      <p className={style.detail_note_info}>{t("detail_note_info")}</p>
      <button className={style.payment_confirm_btn} onClick={onConfirm}>
        {t("confirm")}
      </button>
      {notificationState.run && (
        <Notfication
          msg={notificationState.msg}
          run={notificationState.run}
          setRun={() => setNotificationState({ msg: "", run: false })}
          postiton="bottom"
          type="error"
        />
      )}
      {disabled && <QLoader />}
    </>
  );
};

export default PaymentForm;
