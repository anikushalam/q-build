import React from "react";
import { useState } from "react";
import style from "./History.module.css";
import { useTranslation } from "react-i18next";
import PaymentHistory from "./FinancePayment/PaymentHistory";
import PaymentReceipt from "./FinanceReceipt/PaymentReceipt";
import { useNavigate } from "react-router-dom";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
// import FeeHeadFilter from "../Filter/FeesHead/FeeHeadFilter";
import Repayment from "../Repayment/Repayment";
function History({ insId }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  // const [openFeeHead, setOpenFeeHead] = useState(false);
  const tabList = [
    {
      name: t("payment_receipts"),
      id: 0,
    },
    {
      name: t("payments"),
      id: 1,
    },
    {
      name: t("finance_settlement"),
      id: 2,
    },
  ];
  const onBackWithArrowLeft = () => {
    navigate(-1);
  };
  const onTabChange = (val) => {
    setIndex(val);
  };

  // const onFilterIcon = () => {
  //   setOpenFeeHead((pre) => !pre);
  // };
  return (
    <div className={style.history}>
      <section className={style.moderator_container_title}>
        <img
          src="/images/arrow-left-fees-icon.svg"
          onClick={onBackWithArrowLeft}
          alt="go to previous tab"
          title="Go Back"
          style={{
            cursor: "pointer",
          }}
        />
        <div className={style.moderator_container_title_filter}>
          <h6>{t("finance_transaction_hisotry")}</h6>
          {/* <img
            src="/images/filter-blue-icon.svg"
            alt="filter icon"
            title="Filter fess heads"
            onClick={onFilterIcon}
          /> */}
        </div>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />

      <UniversalTab
        tabList={tabList}
        activeIndexTab={index}
        setActiveIndexTab={onTabChange}
        showAs={false}
        customStyleTab={{
          width: "33.3%",
        }}
      />
      <BorderBottom
        customStyle={{
          width: "100%",
          marginBottom: "0.5rem",
        }}
      />

      {index === 0 && <PaymentReceipt insId={insId} />}
      {index === 1 && <PaymentHistory insId={insId} />}
      {index === 2 && <Repayment insId={insId} />}
      {/* {openFeeHead && <FeeHeadFilter onClose={onFilterIcon} />} */}
    </div>
  );
}

export default History;
