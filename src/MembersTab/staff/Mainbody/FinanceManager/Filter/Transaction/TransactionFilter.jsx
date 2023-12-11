import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useFilterTransactionHistory } from "../../../../../../hooks/member_tab/finance-api";
import QLoader from "../../../../../../Loader/QLoader";
import PopupWrapper from "../../FeesStructure/PopupWrapper";
import FilterDate from "./FilterDate";
import FilterExpense from "./FilterExpense";
import FilterFeesType from "./FilterFeesType";
import FilterIncome from "./FilterIncome";
import style from "./TransactionFilter.module.css";
const TransactionFilter = ({ onClose, instituteId, viewAs, onRefetch }) => {
  const { t } = useTranslation();
  const [filterStatus, setFilterStatus] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [filterData, setFilterData] = useState({
    tab_flow: "",
    timeline: "false",
    timeline_content: "",
    from: "",
    to: "",
    fee_type: "",
    fee_mode: "",
  });
  const { filterTransactionHistory, filterTransactionHistoryRefetch } =
    useFilterTransactionHistory({
      data: {
        id: instituteId,
        ...filterData,
      },
      skip: filterStatus,
    });
  const onFilterData = (val) => {
    setDisabled((pre) => !pre);
    setFilterData(val);
    setFilterStatus(false);
    filterTransactionHistoryRefetch();
  };
  useEffect(() => {
    if (filterTransactionHistory?.message) {
      if (viewAs === "EXPORT") {
        onRefetch();
      }
      setDisabled((pre) => !pre);
      onClose();
    }
  }, [filterTransactionHistory]);
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.transaction_container}>
        <h6>{t("filter_transaction_data")}</h6>
        <section className={style.filter_tab}>
          <h6
            onClick={() => setActiveIndex(0)}
            className={activeIndex === 0 && style.filter_tab_active}
          >
            {t("filter_date")}
          </h6>
          <h6
            onClick={() => setActiveIndex(1)}
            className={activeIndex === 1 && style.filter_tab_active}
          >
            {t("filter_fee_type")}
          </h6>
          <h6
            onClick={() => setActiveIndex(2)}
            className={activeIndex === 2 && style.filter_tab_active}
          >
            {t("filter_expense")}
          </h6>
          <h6
            onClick={() => setActiveIndex(3)}
            className={activeIndex === 3 && style.filter_tab_active}
          >
            {t("filter_incomes")}
          </h6>
        </section>
        {activeIndex === 0 && <FilterDate onFilterData={onFilterData} />}
        {activeIndex === 1 && <FilterFeesType onFilterData={onFilterData} />}
        {activeIndex === 2 && <FilterExpense onFilterData={onFilterData} />}
        {activeIndex === 3 && <FilterIncome onFilterData={onFilterData} />}
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default TransactionFilter;
