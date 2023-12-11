import React, { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomNormalSelectInput from "../../../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import style from "./PaymentModeType.module.css";
const paymentModeOptions = [
  "Cash",
  "UPI Transfer",
  "Net Banking",
  "NEFT/RTGS/IMPS",
  "Cheque",
  "Demand Draft",
  "Fee Receipt Not Generated",
];
// const paymentModeOptionsCollectFees = [
//   "Cash",
//   "UPI Transfer",
//   "Net Banking",
//   "NEFT/RTGS/IMPS",
//   "Cheque",
//   "Demand Draft",
//   "Fee Receipt Not Generated",
// ];
const paymentModeOptionsViaProfile = [
  "Cash",
  "UPI Transfer",
  "Net Banking",
  "NEFT/RTGS/IMPS",
  "Cheque",
  "Demand Draft",
  // "Govt. Grant/Scholarship",
  // "Refunded",
  "Unrecovered/Exemption",
  "Fee Receipt Not Generated",
];
const depositRefundList = ["By Bank", "By Cash"];
const PaymentModeType = ({
  paymentHeading,
  paymentHeadingPlaceholder,
  onInputChange,
  errorShow,
  openAs,
  viewAs,
}) => {
  const { t } = useTranslation();
  const [selectedMode, setSelectedMode] = useState("");
  useEffect(() => {
    if (openAs === "REFUND") {
      setSelectedMode("Refunded");
    }
    if (viewAs === "FINANCE_MANAGER")
      setSelectedMode("Govt. Grant/Scholarship");
  }, [openAs]);
  const onSelectMode = (val) => {
    setSelectedMode(val);
    onInputChange({
      target: {
        name: "fee_payment_mode",
        value:
          val === "Cash"
            ? "By Cash"
            : val === "Unrecovered/Exemption"
            ? "Exempted/Unrecovered"
            : val === "Govt. Grant/Scholarship"
            ? "Government/Scholarship"
            : val,
      },
    });
  };
  const onSelectDeposit = (val) => {
    setSelectedMode(val);
    onInputChange(val);
  };
  return (
    <>
      <h6 className={style.payment_mode_heading}> {paymentHeading} </h6>
      <CustomNormalSelectInput
        selectLabel={
          paymentHeadingPlaceholder
            ? paymentHeadingPlaceholder
            : t("mode_placeholder")
        }
        value={selectedMode}
        onClick={
          openAs === "DEPOSIT_REFUND_LIST" ? onSelectDeposit : onSelectMode
        }
        selectedValue={t("please_select_payment_mode")}
        options={
          openAs === "DEPOSIT_REFUND_LIST"
            ? depositRefundList
            : paymentHeadingPlaceholder
            ? paymentModeOptionsViaProfile
            : //  viewAs === "ADMISSION_COLLECT_FEES"
              // ? paymentModeOptionsCollectFees
              // :
              paymentModeOptions
        }
        customLabelStyle={{
          marginTop: "0",
          marginBottom: "7px",
          fontWeight: "400",
          fontSize: "12px",
          color: "rgba(18, 18, 18, 0.8)",
        }}
        customListStyle={{
          maxHeight: "fit-content",
        }}
        errorShow={errorShow}
        openAs={openAs}
        viewAs={viewAs}
      />
    </>
  );
};

export default PaymentModeType;
