import React, { useEffect, useState } from "react";
import {
  useGetFeeReceiptDetail,
  useReApplyReceiptByStudent,
} from "../../../../hooks/member_tab/admission-api";
import { useOneReceiptReApplyByStudent } from "../../../../hooks/member_tab/hostel-api";
import QLoader from "../../../../Loader/QLoader";
import PopupWrapper from "../../../staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import PaymentForm from "./ConfirmStudentAdmisionModal/GatewayProcess/PaymentForm";

const RejectedReceipt = ({
  item,
  setOpenForm,
  openForm,
  applicationStatusFetch,
}) => {
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
      rid: item?.receipt,
      skip: !item?.receipt,
    });
  const [reApplyReceiptByStudent] = useReApplyReceiptByStudent();
  const [oneReceiptReApplyByStudent] = useOneReceiptReApplyByStudent();
  useEffect(() => {
    if (item?.receipt) getFeeReceiptDetailRefetch();
  }, [item?.receipt, getFeeReceiptDetailRefetch]);
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
    if (item?.flow_status === "Hostel Application") {
      oneReceiptReApplyByStudent({
        rid: getFeeReceiptDetail?.receipt?._id,
        sid: item?._id,
        receiptReapply: payData,
      })
        .then(() => {
          applicationStatusFetch();
          setDisabled((pre) => !pre);
          setOpenForm(false);
        })
        .catch({});
    } else {
      reApplyReceiptByStudent({
        rid: getFeeReceiptDetail?.receipt?._id,
        sid: item?._id,
        receiptReapply: payData,
      })
        .then(() => {
          applicationStatusFetch();
          setDisabled((pre) => !pre);
          setOpenForm(false);
        })
        .catch({});
    }
  };

  // console.info("ashfjashad", item);
  return (
    <>
      {item?.flow_status === "Admission Application" ? (
        <>
          <p>
            Admission confirmation is in process. Payment receipt request is
            rejected.
          </p>
          <p>
            Reason:{" "}
            <span
              style={{
                fontWeight: "500",
              }}
            >
              {getFeeReceiptDetail?.receipt?.reason}
            </span>
          </p>
          <p>Re-apply with correct details</p>
        </>
      ) : (
        <>
          <p>
            Hostel Admission confirmation is in process. Payment receipt request
            is rejected.
          </p>
          <p>
            Reason:{" "}
            <span
              style={{
                fontWeight: "500",
              }}
            >
              {getFeeReceiptDetail?.receipt?.reason}
            </span>
          </p>
          <p>Re-apply with correct details</p>
        </>
      )}
      {openForm && (
        <PopupWrapper onClose={() => setOpenForm((pre) => !pre)}>
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
              setOpenForm={setOpenForm}
            />
            {disabled && <QLoader />}
          </div>
        </PopupWrapper>
      )}
    </>
  );
};

export default RejectedReceipt;
