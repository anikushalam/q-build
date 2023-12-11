import React, { useEffect, useState } from "react";
import PopupWrapper from "../../../../staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import PaymentForm from "./GatewayProcess/PaymentForm";
import { useGetFeeReceiptDetail } from "../../../../../hooks/member_tab/admission-api";
import { useOneReceiptReApplyByStudent } from "../../../../../hooks/member_tab/hostel-api";
import QLoader from "../../../../../Loader/QLoader";

const RenewalReApplyPaymentFees = ({ receipt, onClose, onRefetch, sid }) => {
  const [payData, setPayData] = useState({
    fee_payment_mode: "",
    fee_payment_amount: "",
    transaction_date: "",
    fee_bank_name: "",
    fee_bank_holder: "",
    fee_utr_reference: "",
    fee_payment_acknowledge: "",
  });
  const [disabled, setDisabled] = useState(false);

  const { getFeeReceiptDetail, getFeeReceiptDetailRefetch } =
    useGetFeeReceiptDetail({
      rid: receipt,
      skip: !receipt,
    });
  const [oneReceiptReApplyByStudent] = useOneReceiptReApplyByStudent();
  useEffect(() => {
    if (receipt) getFeeReceiptDetailRefetch();
  }, [receipt, getFeeReceiptDetailRefetch]);
  //   console.info("this is applicationsasyum,", item);
  useEffect(() => {
    if (getFeeReceiptDetail?.receipt) {
      setPayData({
        fee_payment_mode: getFeeReceiptDetail?.receipt?.fee_payment_mode,
        fee_payment_amount: getFeeReceiptDetail?.receipt?.fee_payment_amount,
        transaction_date:
          getFeeReceiptDetail?.receipt?.fee_transaction_date?.substr(0, 10),
        fee_bank_name: getFeeReceiptDetail?.receipt?.fee_bank_name,
        fee_bank_holder: getFeeReceiptDetail?.receipt?.fee_bank_holder,
        fee_utr_reference: getFeeReceiptDetail?.receipt?.fee_utr_reference,
        fee_payment_acknowledge:
          getFeeReceiptDetail?.receipt?.fee_payment_acknowledge,
      });
    }
  }, [getFeeReceiptDetail?.receipt]);

  const ConfirmOffline = () => {
    setDisabled((pre) => !pre);
    oneReceiptReApplyByStudent({
      rid: getFeeReceiptDetail?.receipt?._id,
      sid: sid,
      receiptReapply: payData,
    })
      .then(() => {
        onRefetch();
        onClose();
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div
        style={{
          width: "30rem",
          maxHeight: "35rem",
          padding: "0.9rem",
          overflowX: "hidden",
          scrollBehavior: "smooth",
          overflowY: "auto",
        }}
      >
        <PaymentForm
          payData={payData}
          setPayData={setPayData}
          ConfirmOffline={ConfirmOffline}
          setOpenForm={onClose}
        />
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default RenewalReApplyPaymentFees;
