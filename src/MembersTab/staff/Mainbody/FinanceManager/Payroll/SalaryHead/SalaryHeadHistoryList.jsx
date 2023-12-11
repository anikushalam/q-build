import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import { useGetOnePayrollHeadEmployee } from "../../../../../../hooks/member_tab/finance-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import EmployeePayrollHistory from "../Employee/EmployeePayrollHistory";
import style from "../Payroll.module.css";
const SalaryHeadHistoryList = () => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [openEmployeeHistory, setOpenEmployeeHistory] = useState("");
  const [monthStaffList, setMonthStaffList] = useState([]);

  const { getOnePayrollHeadEmployee, getOnePayrollHeadEmployeeRefetch } =
    useGetOnePayrollHeadEmployee({
      data: {
        mwid: getQuery.state?.mwid,
        page: page,
        limit: 10,
      },
      skip: !getQuery.state?.mwid,
    });
  useEffect(() => {
    if (getQuery.state?.mwid) {
      setShowingDataLoading(true);
      getOnePayrollHeadEmployeeRefetch();
    }
  }, [getQuery.state?.mwid, page, getOnePayrollHeadEmployeeRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getOnePayrollHeadEmployee?.all_emp) {
      setMonthStaffList((prevState) =>
        [
          ...new Set(
            [...prevState, ...getOnePayrollHeadEmployee?.all_emp]?.map(
              JSON.stringify
            )
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (getOnePayrollHeadEmployee?.all_emp?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (getOnePayrollHeadEmployee?.all_emp?.length === 10) setState(true);
    else setState(false);
  }, [getOnePayrollHeadEmployee?.all_emp]);

  return (
    <div className={style.payroll_container}>
      <h6>{getQuery.state?.salaryHead ?? ""}</h6>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginBottom: "1rem",
        }}
      />
      {monthStaffList?.map((staff, index) =>
        monthStaffList?.length === index + 1 ? (
          <section
            className={style.head_history_card}
            ref={ref}
            key={staff?._id}
            style={{
              marginBottom: "0.7rem",
              cursor: "pointer",
            }}
            onClick={() =>
              setOpenEmployeeHistory({
                emp_pay: staff?.emp,
              })
            }
            title="View Payroll History"
          >
            <img
              src={
                staff?.emp?.staff?.staffProfilePhoto
                  ? `${imageShowUrl}/${staff?.emp?.staff?.staffProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt="staff"
            />
            <div className={style.head_history_card_text}>
              <h6>{`${staff?.emp?.staff?.staffFirstName ?? ""} 
            ${staff?.emp?.staff?.staffMiddleName ?? ""}
            ${staff?.emp?.staff?.staffLastName ?? ""} `}</h6>
              <p>
                {t("rs")}. {staff?.amount}
              </p>
            </div>
          </section>
        ) : (
          <section
            className={style.head_history_card}
            key={staff?._id}
            style={{
              marginBottom: "0.7rem",
              cursor: "pointer",
            }}
            onClick={() =>
              setOpenEmployeeHistory({
                emp_pay: staff?.emp,
              })
            }
            title="View Payroll History"
          >
            <img
              src={
                staff?.emp?.staff?.staffProfilePhoto
                  ? `${imageShowUrl}/${staff?.emp?.staff?.staffProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt="staff"
            />
            <div className={style.head_history_card_text}>
              <h6>{`${staff?.emp?.staff?.staffFirstName ?? ""} 
            ${staff?.emp?.staff?.staffMiddleName ?? ""}
            ${staff?.emp?.staff?.staffLastName ?? ""} `}</h6>
              <p>
                {t("rs")}. {staff?.amount}
              </p>
            </div>
          </section>
        )
      )}
      {showingDataLoading && <QvipleLoading />}
      {openEmployeeHistory && (
        <EmployeePayrollHistory
          openEmployeeHistory={openEmployeeHistory}
          onClose={() => setOpenEmployeeHistory("")}
          headMonth={getQuery.state?.monthDate}
        />
      )}
    </div>
  );
};

export default SalaryHeadHistoryList;
