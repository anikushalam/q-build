// import React from "react";
// import style from "./Payroll.module.css";
// import "./Payroll.css";
// import Employees from "./Employees/Employees";
// import AddPayrollModal from "./AddPayroll/AddPayrollModal";
// import Tabbs from "./Tabs/Tabs";
// import { Divider } from "@mui/material";
// import { useState } from "react";
// import SalaryHistory from "./Employees/SalaryHistory";
// import { useInView } from "react-intersection-observer";
// import { useSelector } from "react-redux";
// import { useGetAllEmployeeQuery } from "../../../../../services/financeAPI";
// import { useEffect } from "react";

// function Payroll({ insId }) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [modalClick, setModalClick] = useState(false);
//   const [state, setState] = useState(true);
//   const [page, setPage] = useState(1);
//   const [ref, inView] = useInView();
//   const [allEmployee, setAllEmployee] = useState([]);
//   const financeAuthor = useSelector((state) => state.financeChange);
//   const { data: allEmpQuery, refetch: allEmpFetch } = useGetAllEmployeeQuery(
//     {
//       fid: financeAuthor?.fid,
//       page: page,
//       limit: 10,
//     },
//     { skip: !financeAuthor?.fid }
//   );

//   useEffect(() => {
//     if (inView && state) setPage((page) => page + 1);
//   }, [inView, state]);

//   useEffect(() => {
//     if (page && financeAuthor?.fid) allEmpFetch();
//   }, [page, financeAuthor?.fid, allEmpFetch]);

//   useEffect(() => {
//     if (allEmpQuery?.allEmp)
//       setAllEmployee([...new Set([...allEmployee, ...allEmpQuery?.allEmp])]);
//     if (allEmpQuery?.allEmp?.length === 10) setState(true);
//     else setState(false);
//   }, [allEmpQuery?.allEmp]);
//   // console.info(allEmployee);
//   return (
//     <div className={style.payroll}>
//       <div className={style.payrolltop}>
//         <img
//           src="/images/addPayroll.svg"
//           alt=""
//           onClick={() => setModalClick(true)}
//         />
//       </div>
//       <div className={style.payrollContent}>
//         <div className={style.tabs}>
//           <Tabbs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
//         </div>
//         <Divider />

//         {activeIndex === 0 && <Employees allEmployee={allEmployee} ref={ref} />}
//         {activeIndex === 1 && <SalaryHistory />}
//       </div>
//       {modalClick && (
//         <AddPayrollModal
//           modalClick={modalClick}
//           hideModal={() => setModalClick(false)}
//           fetch={allEmpFetch}
//           insId={insId}
//         />
//       )}
//     </div>
//   );
// }

// export default Payroll;

import React from "react";
import style from "./Payroll.module.css";
import { useState } from "react";
import SalaryHistory from "./Employees/SalaryHistory";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useGetAllEmployeeQuery } from "../../../../../services/financeAPI";
import { useEffect } from "react";

import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import { useLocation } from "react-router-dom";
import SalaryHead from "./SalaryHead/SalaryHead";
import Employee from "./Employee/Employee";
import PayrollHistory from "./PayrollHistory/PayrollHistory";
import SalaryHeadInfo from "./SalaryHead/SalaryHeadInfo";
import SalaryHeadHistoryList from "./SalaryHead/SalaryHeadHistoryList";
import { useScrollbar } from "../../../../../Scroll/use-scroll";

function Payroll({ insId, carryParentState }) {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const tabList = [
    {
      name: t("payroll_staffs"),
      id: 0,
      url: "member/finance?a=payroll",
    },
    {
      name: t("salary_heads"),
      id: 1,
      url: "member/finance?a=payroll&n=head",
    },
    {
      name: t("history"),
      id: 2,
      url: "member/finance?a=payroll&n=history",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalClick, setModalClick] = useState(false);
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [allEmployee, setAllEmployee] = useState([]);
  const financeAuthor = useSelector((state) => state.financeChange);
  const { data: allEmpQuery, refetch: allEmpFetch } = useGetAllEmployeeQuery(
    {
      fid: financeAuthor?.fid,
      page: page,
      limit: 10,
    },
    { skip: !financeAuthor?.fid }
  );
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (page && financeAuthor?.fid) allEmpFetch();
  }, [page, financeAuthor?.fid, allEmpFetch]);

  useEffect(() => {
    if (allEmpQuery?.allEmp)
      setAllEmployee([...new Set([...allEmployee, ...allEmpQuery?.allEmp])]);
    if (allEmpQuery?.allEmp?.length === 10) setState(true);
    else setState(false);
  }, [allEmpQuery?.allEmp]);
  // console.info(allEmployee);
  return (
    <>
      {getQuery?.search?.substring(13) === "head&info" ||
      getQuery?.search?.substring(13) === "head&info&staff" ? (
        ""
      ) : (
        <div className={style.payroll_container}>
          <h6>{t("payroll")}</h6>

          <UniversalTab
            tabList={tabList}
            activeIndexTab={
              getQuery?.search?.substring(3) === "payroll"
                ? 0
                : getQuery?.search?.substring(13) === "head"
                ? 1
                : 2
            }
            // setActiveIndexTab={setActiveIndex}
            showAs={true}
            customStyleTab={{
              width: "100%",
            }}
            carryParentState={carryParentState}
            customStyleLink={{
              width: "33.3%",
            }}
          />
          <BorderBottom
            customStyle={{
              width: "100%",
            }}
          />
        </div>
      )}

      {getQuery?.search?.substring(3) === "payroll" && <Employee />}
      {getQuery?.search?.substring(13) === "head" && (
        <SalaryHead carryParentState={carryParentState} />
      )}
      {getQuery?.search?.substring(13) === "history" && <PayrollHistory />}
      {getQuery?.search?.substring(13) === "head&info" && (
        <SalaryHeadInfo carryParentState={carryParentState} />
      )}
      {getQuery?.search?.substring(13) === "head&info&staff" && (
        <SalaryHeadHistoryList carryParentState={carryParentState} />
      )}
    </>
  );
}

export default Payroll;
