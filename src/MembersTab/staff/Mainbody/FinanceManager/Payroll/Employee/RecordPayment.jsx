import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomNormalSelectInput from "../../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../FeesStructure/PopupWrapper";
import styleMy from "../Payroll.module.css";
import style from "../../FeesStructure/FeesStructure.module.css";

const RecordPayment = ({ netTotal, onClose, name, month, year, onAccount }) => {
  const { t } = useTranslation();
  const [incomeData, setIncomeData] = useState({
    payment_mode: "",
  });
  const [filled, setFilled] = useState("");
  const onSelect = (val) => {
    setIncomeData({
      payment_mode: val,
    });
  };

  const onAccountVerify = () => {
    if (!incomeData.payment_mode) {
      setFilled({
        payment_mode: "* required",
      });
    } else {
      onAccount({
        payment_mode: incomeData.payment_mode,
        purpose: "Monthly Salary",
        message: `Salary for the month of ${month} ${year}`,
        paid_to: name,
      });
    }
  };
  return (
    <PopupWrapper onClose={() => {}}>
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
          <section className={style.add_category_modal_title_left}>
            <img
              src="/images/arrow-left-fees-icon.svg"
              onClick={onClose}
              alt=""
            />
            <h6>{t("record_payment_entry")}</h6>
          </section>
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        <CustomNormalSelectInput
          selectLabel={t("select_transaction_mode")}
          selectedValue={t("select_transaction_mode_placeholder")}
          options={["By Cash", "By Bank"]}
          errorShow={filled["payment_mode"]}
          value={incomeData.payment_mode}
          onClick={onSelect}
        />
        <div
          className={styleMy.row2}
          style={{
            marginTop: "1rem",
          }}
        >
          <p>Purpose</p>
          <h6>Monthly Salary</h6>
        </div>
        <div className={styleMy.row2}>
          <p>Amount</p>
          <h6>Rs. {netTotal} /-</h6>
        </div>
        <div className={styleMy.row2}>
          <p>Paid to</p>
          <h6>Mr. {name}</h6>
        </div>
        <div className={styleMy.row2}>
          <p>Description</p>
          <h6>
            Salary for the month of {month} {year}
          </h6>
        </div>
        <button className={style.payroll_account_btn} onClick={onAccountVerify}>
          {t("account")}
        </button>
        {/* {disabled && <QLoader />} */}
      </div>
    </PopupWrapper>
  );
};

export default RecordPayment;
