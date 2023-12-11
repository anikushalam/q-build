import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useGetPayrollSalaryHistoryList } from "../../../../../../hooks/member_tab/finance-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import EmployeePayrollHistory from "../Employee/EmployeePayrollHistory";
// import style from "../Payroll.module.css";
import PayrollHistoryCard from "./PayrollHistoryCard";

const PayrollHistory = () => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const fid = useSelector((state) => state.financeChange.fid);
  const [openEmployeeHistory, setOpenEmployeeHistory] = useState("");
  const { getPayrollSalaryHistoryList, getPayrollSalaryHistoryListRefetch } =
    useGetPayrollSalaryHistoryList({
      fid: fid,
      skip: !fid,
    });
  useEffect(() => {
    if (fid) getPayrollSalaryHistoryListRefetch();
  }, [fid, getPayrollSalaryHistoryListRefetch]);

  useEffect(() => {
    if (getPayrollSalaryHistoryList?.salary) {
      setShowingDataLoading(false);
    } else if (getPayrollSalaryHistoryList?.salary?.length === 0)
      setShowingDataLoading(false);
    else {
    }
  }, [getPayrollSalaryHistoryList?.salary]);
  return (
    <>
      <h6
        style={{
          margin: "0.7rem 0",
        }}
      >
        {t("payment_record_history")}
      </h6>
      {getPayrollSalaryHistoryList?.salary?.map((staff) => (
        <PayrollHistoryCard
          staff={staff}
          setOpenEmployeeHistory={setOpenEmployeeHistory}
        />
      ))}
      {openEmployeeHistory && (
        <EmployeePayrollHistory
          openEmployeeHistory={openEmployeeHistory}
          onClose={() => setOpenEmployeeHistory("")}
        />
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default PayrollHistory;
