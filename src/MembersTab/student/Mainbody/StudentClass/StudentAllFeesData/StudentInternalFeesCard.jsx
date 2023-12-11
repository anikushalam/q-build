import React, { useState } from "react";
import style from "./StudentAllFeesData.module.css";
import { useTranslation } from "react-i18next";
import moment from "moment";
import StudentInternalFeeReceipt from "./StudentInternalFeeReceipt";
import {
  get_initiate_paytm,
  paytmPostInfo,
} from "../../../../../Decrypt/paytmUpiInitiative";
import { paytmActionUrl } from "../../../../../services/BaseUrl";
import { useStudentBankValidationByAdmission } from "../../../../../hooks/member_tab/admission-api";
import { Notfication } from "../../../../../validation/Snackbar";
import QLoader from "../../../../../Loader/QLoader";
const buttonAccess = ["STUDENT"];

const StudentInternalFeesCard = ({
  amount,
  feesName,
  dateOffCreation,
  is_paid,
  is_checklist,
  feesId,
  setAllContent,
  setCharges,
  moduleType,
  rid,
  transactionDate,
  transactionMode,
  viewAs,
  is_static,
  bookId,
  validateId,
  financeId,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [studentBankValidationByAdmission] =
    useStudentBankValidationByAdmission();
  const paymentData = {
    amount: 10,
    moduleId: "38965823534u5t23y",
    paidBy: "34532h423424f4g5f23j",
    name: "Shreya_1540",

    // amount,
    // moduleId,
    // paidBy,
    // name,
    // paidTo,
    // amount_nocharges,
    // isApk,
    // payment_installment,
    // payment_card_type,
    // payment_remain_1,
    // ad_status_id,
    // type,
  };

  const makePayment = () => {
    get_initiate_paytm(paymentData)
      .then((response) => {
        var information = {
          action: paytmActionUrl,
          params: response,
        };
        paytmPostInfo(information);
      })
      .catch((e) => {
        console.info(e);
      });
  };

  const onCheckPayment = () => {
    if (moduleType === "Library Fees") {
      setDisabled((pre) => !pre);
      studentBankValidationByAdmission({
        fid: financeId,
        aid: validateId,
        flow: "BY_LIBRARY",
      })
        .then((res) => {
          setDisabled((pre) => !pre);
          if (res?.data?.denied) {
            setNotificationState({
              msg: "Before initiating payment. you must have a valid bank account to receive payment.",
              run: true,
            });
          } else {
            setAllContent((prev) => ({
              ...prev,
              amount: amount,
              feesId: feesId,
              type:
                moduleType === "Backlog"
                  ? "Backlog"
                  : moduleType === "Library Fees"
                  ? "Library Fees"
                  : "Fees",
              bookId: bookId ?? "",
            }));
            setCharges(true);
          }
        })
        .catch({});
    } else {
      setAllContent((prev) => ({
        ...prev,
        amount: amount,
        feesId: feesId,
        type:
          moduleType === "Backlog"
            ? "Backlog"
            : moduleType === "Library Fees"
            ? "Library Fees"
            : "Fees",
        bookId: bookId ?? "",
      }));
      setCharges(true);
    }
  };
  return (
    <>
      <h5>
        {t("rs")}.{amount ?? 0}{" "}
      </h5>
      <h6>{feesName ?? "Static"}</h6>
      {transactionDate ? (
        <p>
          {t("paid_on")}
          {moment(transactionDate).format("DD MMMM yyyy")}
        </p>
      ) : is_checklist ? (
        ""
      ) : (
        <p>
          {t("pay_by")}
          {moment(dateOffCreation).format("DD MMMM yyyy")}
        </p>
      )}

      {is_paid !== "Not Paid" ? (
        <button className={style.student_internal_card_btn_paid}>
          {t("internal_paid")} {transactionMode ?? ""}
        </button>
      ) : is_static ? (
        <button
          className={style.student_internal_card_btn_pay}
          onClick={makePayment}
        >
          {t("pay_now")}
        </button>
      ) : buttonAccess?.includes(viewAs) ? (
        <button
          className={style.student_internal_card_btn_pay}
          onClick={onCheckPayment}
        >
          {t("pay_now")}
        </button>
      ) : (
        <button className={style.student_internal_card_btn_pay}>
          {t("unpaid")}
        </button>
      )}
      {is_paid !== "Not Paid" ? (
        <StudentInternalFeeReceipt rid={rid} />
      ) : (
        // <img src="/images/members/receipt-icon.svg" alt="receipt icon" />
        ""
      )}
      <Notfication
        msg={notificationState.msg}
        run={notificationState.run}
        setRun={() => setNotificationState({ msg: "", run: false })}
        postiton="bottom"
        type="error"
      />
      {disabled && <QLoader />}
    </>
  );
};

export default StudentInternalFeesCard;
