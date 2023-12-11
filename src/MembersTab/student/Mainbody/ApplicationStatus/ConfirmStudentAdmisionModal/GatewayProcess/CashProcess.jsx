import React from "react";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "./GatewayProcess.module.css";
const CashProcess = ({ setIndex, ConfirmOffline }) => {
  const { t } = useTranslation();
  const onBackWithArrowLeft = () => {
    setIndex(1);
  };
  return (
    <div className={style.process_modal}>
      <section className={style.add_process_modal_title_left}>
        <img
          src="/images/arrow-left-fees-icon.svg"
          onClick={onBackWithArrowLeft}
          alt=""
        />
        <h6>{t("pay_fees_in_cash")}</h6>
      </section>
      <BorderBottom customStyle={{ width: "100%" }} />
      <section className={style.process_description}>
        <h6>{t("procedure_for_paying_in_cash")}</h6>
        <p>1. {t("visit_school")} </p>
        <p>2. {t("contact_admission_department")}</p>
        <p>3. {t("pay_fees_in_cash")}</p>
        <p>4. {t("your_admission_will_be_confirmed_and_fee")}</p>
      </section>
      <button className={style.pay_in_cash_btn} onClick={ConfirmOffline}>
        {t("pay_in_cash")}
      </button>
    </div>
  );
};

export default CashProcess;
