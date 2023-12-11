import React, { useEffect, useState } from "react";
import QLoader from "../../../../../../Loader/QLoader";
import PopupWrapper from "../../FeesStructure/PopupWrapper";
import style from "../../FeesStructure/FeesStructure.module.css";
import EmployeeAccountHeading from "./EmployeeAccountHeading";
import {
  useAddPayroll,
  useFinanceOneEmployeeDetailHistory,
  useOneStaffAttendance,
} from "../../../../../../hooks/member_tab/finance-api";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import useCalendar from "./useCalender";
import RecordPayment from "./RecordPayment";
import { Notfication } from "../../../../../../validation/Snackbar";

const EmployeeAccount = ({ selectedEmployee, onClose, financeId }) => {
  const { t } = useTranslation();
  const currentDate = new Date();
  const isoDate = currentDate.toISOString();
  const [openAccountPayment, setOpenAccountPayment] = useState(false);
  const [addFeeHead, setAddFeeHead] = useState([]);
  const [addFeeHeadDeduction, setAddFeeHeadDecution] = useState([]);
  const [grossTotal, setGrossTotal] = useState(0);
  const [netTotal, setNetTotal] = useState(0);
  const [basicSalary, setBasicSalary] = useState(0);
  const [attendanceDay, setAttendanceDay] = useState(0);
  const [months, setMonths] = useState("");
  const [years, setYears] = useState("");
  const { daysInMonth } = useCalendar();
  const [disabled, setDisabled] = useState(false);
  const [addPayroll] = useAddPayroll();
  const [calculateOther, setCalculateOther] = useState(false);
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  // console.info("sdngsfmd", isoDate);
  const {
    financeOneEmployeeDetailHistory,
    financeOneEmployeeDetailHistoryRefetch,
  } = useFinanceOneEmployeeDetailHistory({
    data: {
      type: "Detail",
      eid: selectedEmployee?._id,
      month: "",
    },
    skip: !selectedEmployee?._id,
  });
  const { oneStaffAttendance, oneStaffAttendanceRefetch } =
    useOneStaffAttendance({
      data: {
        sid: selectedEmployee?.staff?._id,
        month: `${isoDate.substring(5, 7)}`,
        year: `${isoDate.substring(0, 4)}`,
      },
      skip: !selectedEmployee?.staff?._id,
    });
  useEffect(() => {
    if (selectedEmployee?._id) financeOneEmployeeDetailHistoryRefetch();
  }, [selectedEmployee?._id, financeOneEmployeeDetailHistoryRefetch]);

  React.useEffect(() => {
    if (selectedEmployee?.staff?._id) oneStaffAttendanceRefetch();
  }, [selectedEmployee?.staff?._id, oneStaffAttendanceRefetch]);

  useEffect(() => {
    if (financeOneEmployeeDetailHistory?.detail) {
      let gTotal = 0;
      let nTotal = 0;
      if (financeOneEmployeeDetailHistory.detail?.pay_master_heads_particular) {
        let particul =
          financeOneEmployeeDetailHistory.detail?.pay_master_heads_particular;
        let arr = [];
        for (let inp = 0; inp < particul?.length; inp++) {
          arr.push({
            month_master_name: particul[inp]?.master_name,
            month_master_amount: particul[inp]?.master_amount,
            month_master_status: particul[inp]?.master_status,
            month_master_id: particul[inp]?.master_id,
          });
          gTotal += +particul[inp].master_amount;
          nTotal += +particul[inp].master_amount;
        }
        setAddFeeHead(arr);
      }
      if (financeOneEmployeeDetailHistory.detail?.pay_master_heads_deduction) {
        let deduct =
          financeOneEmployeeDetailHistory.detail?.pay_master_heads_deduction;
        let arr = [];

        for (let inp = 0; inp < deduct?.length; inp++) {
          arr.push({
            month_master_name: deduct[inp]?.master_name,
            month_master_amount: deduct[inp]?.master_amount,
            month_master_status: deduct[inp]?.master_status,
            month_master_id: deduct[inp]?.master_id,
          });
          nTotal -= +deduct[inp].master_amount;
        }
        setAddFeeHeadDecution(arr);
      }
      setGrossTotal(gTotal);
      setNetTotal(nTotal);
      setBasicSalary(financeOneEmployeeDetailHistory.detail?.basic_pay ?? 0);
      setCalculateOther(true);
    }
  }, [
    financeOneEmployeeDetailHistory?.detail?.pay_master_heads_particular,
    financeOneEmployeeDetailHistory?.detail?.pay_master_heads_deduction,
    financeOneEmployeeDetailHistory?.detail,
  ]);
  useEffect(() => {
    if (oneStaffAttendance && calculateOther) {
      let pdays =
        daysInMonth -
        (oneStaffAttendance?.absentCount + oneStaffAttendance?.leaveCount);
      let gTotal = 0;
      let nTotal = 0;
      setAttendanceDay(pdays);
      let abDate =
        oneStaffAttendance?.absentCount + oneStaffAttendance?.leaveCount;
      let remainDate =
        +financeOneEmployeeDetailHistory?.detail?.staff_total_paid_leaves -
        abDate;
      let lpdays = daysInMonth + remainDate;
      if (lpdays > daysInMonth) {
        lpdays = daysInMonth;
      }
      let bsalary =
        +(financeOneEmployeeDetailHistory?.detail?.basic_pay / daysInMonth) *
        lpdays;
      const inputarr = [...addFeeHead];
      for (let inp = 0; inp < inputarr?.length; inp++) {
        inputarr[inp].month_master_amount = +(
          (inputarr[inp].month_master_amount / daysInMonth) *
          lpdays
        )?.toFixed(0);
      }
      for (let inp = 0; inp < inputarr?.length; inp++) {
        gTotal += +inputarr[inp].month_master_amount;
        nTotal += +inputarr[inp].month_master_amount;
      }
      const inputarr1 = [...addFeeHeadDeduction];
      for (let inp = 0; inp < inputarr1?.length; inp++) {
        inputarr1[inp].month_master_amount = +(
          (inputarr1[inp].month_master_amount / daysInMonth) *
          lpdays
        )?.toFixed(0);
      }
      for (let inp = 0; inp < inputarr1?.length; inp++) {
        nTotal -= +inputarr1[inp].month_master_amount;
      }

      setAddFeeHead(inputarr);
      setAddFeeHeadDecution(inputarr1);
      setGrossTotal(gTotal);
      setNetTotal(nTotal);
      setBasicSalary(bsalary);
      setCalculateOther(false);
    }
  }, [
    oneStaffAttendance,
    financeOneEmployeeDetailHistory?.detail,
    calculateOther,
  ]);

  const onFeeHeadPriceChangeGross = (e, index) => {
    // console.info("this is onChagew");
    let gTotal = 0;
    let nTotal = 0;
    const inputarr = [...addFeeHead];
    for (let inp = 0; inp < inputarr?.length; inp++) {
      if (inp === index) {
        inputarr[inp].month_master_amount = +e.target.value;
      }
    }
    for (let inp = 0; inp < inputarr?.length; inp++) {
      gTotal += inputarr[inp].month_master_amount;
      nTotal += inputarr[inp].month_master_amount;
    }
    const inputarr1 = [...addFeeHeadDeduction];
    for (let inp = 0; inp < inputarr1?.length; inp++) {
      nTotal -= inputarr1[inp].month_master_amount;
    }
    setAddFeeHead(inputarr);
    setGrossTotal(gTotal);
    setNetTotal(nTotal);
  };
  const onFeeHeadPriceChangeNet = (e, index) => {
    // console.info("this is onChagew");
    let nTotal = grossTotal;
    const inputarr = [...addFeeHeadDeduction];
    for (let inp = 0; inp < inputarr?.length; inp++) {
      if (inp === index) {
        inputarr[inp].month_master_amount = +e.target.value;
      }
    }
    for (let inp = 0; inp < inputarr?.length; inp++) {
      nTotal -= inputarr[inp].month_master_amount;
    }
    setAddFeeHeadDecution(inputarr);
    setNetTotal(nTotal);
  };

  const onAttendance = (e) => {
    setAttendanceDay(+e.target.value);
  };

  useEffect(() => {
    if (attendanceDay) {
      let pdays = +attendanceDay;
      let bsalary =
        (financeOneEmployeeDetailHistory?.detail?.basic_pay / daysInMonth) *
        pdays;
      let gTotal = 0;
      let nTotal = 0;
      if (financeOneEmployeeDetailHistory.detail?.pay_master_heads_particular) {
        let particul =
          financeOneEmployeeDetailHistory.detail?.pay_master_heads_particular;
        let arr = [];
        for (let inp = 0; inp < particul?.length; inp++) {
          arr.push({
            month_master_name: particul[inp]?.master_name,
            month_master_amount: +(
              (particul[inp]?.master_amount / daysInMonth) *
              pdays
            )?.toFixed(0),
            month_master_status: particul[inp]?.master_status,
            month_master_id: particul[inp]?.master_id,
          });
          gTotal += +(
            (particul[inp]?.master_amount / daysInMonth) *
            pdays
          )?.toFixed(0);
          nTotal += +(
            (particul[inp]?.master_amount / daysInMonth) *
            pdays
          )?.toFixed(0);
        }
        setAddFeeHead(arr);
      }
      if (financeOneEmployeeDetailHistory.detail?.pay_master_heads_deduction) {
        let deduct =
          financeOneEmployeeDetailHistory.detail?.pay_master_heads_deduction;
        let arr1 = [];

        for (let inp = 0; inp < deduct?.length; inp++) {
          arr1.push({
            month_master_name: deduct[inp]?.master_name,
            month_master_amount: +(
              (deduct[inp].master_amount / daysInMonth) *
              pdays
            )?.toFixed(0),
            month_master_status: deduct[inp]?.master_status,
            month_master_id: deduct[inp]?.master_id,
          });
          nTotal -= +(
            (deduct[inp].master_amount / daysInMonth) *
            pdays
          )?.toFixed(0);
        }
        setAddFeeHeadDecution(arr1);
      }
      setGrossTotal(gTotal);
      setNetTotal(nTotal);
      setBasicSalary(bsalary);
    }
  }, [
    attendanceDay,
    financeOneEmployeeDetailHistory?.detail?.pay_master_heads_particular,
    financeOneEmployeeDetailHistory?.detail?.pay_master_heads_deduction,
  ]);

  const onNextAccount = () => {
    let tot = netTotal + basicSalary;
    if (+tot < financeOneEmployeeDetailHistory?.detail?.staff_salary_month) {
      setNotificationState({
        msg: "Net total is not less than salary per month",
        run: true,
      });
    } else if (
      +tot > financeOneEmployeeDetailHistory?.detail?.staff_salary_month
    ) {
      setNotificationState({
        msg: "Net total is not greater than salary per month",
        run: true,
      });
    } else {
      setOpenAccountPayment(true);
    }
  };
  const onAccount = (val) => {
    setDisabled((pre) => !pre);
    setOpenAccountPayment(false);
    addPayroll({
      fid: financeId,
      eid: selectedEmployee?._id,
      addPayroll: {
        month: isoDate.substring(0, 10),
        attendence: attendanceDay,
        paid_leaves:
          oneStaffAttendance?.leaveCount + oneStaffAttendance?.absentCount,
        ...val,
        amount: basicSalary,
        basic_pay: basicSalary,
        gross_salary: (grossTotal + basicSalary)?.toFixed(2),
        net_total: (netTotal + basicSalary)?.toFixed(2),
        master: [...addFeeHead, ...addFeeHeadDeduction],
      },
    })
      .then(() => {
        onClose();
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  return (
    <>
      {!openAccountPayment && (
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
                <section className={style.add_employee_staff}>
                  <img
                    src={
                      selectedEmployee?.staff?.staffProfilePhoto
                        ? `${imageShowUrl}/${selectedEmployee?.staff?.staffProfilePhoto}`
                        : "/images/member_tab/class/default_avatar.svg"
                    }
                    alt="staff avatar"
                  />
                  <div className={style.add_employee_staff_text}>
                    <h6>{`${selectedEmployee?.staff?.staffFirstName ?? ""} 
            ${selectedEmployee?.staff?.staffMiddleName ?? ""}
            ${selectedEmployee?.staff?.staffLastName ?? ""} `}</h6>
                    <p>
                      {t("index_number")} :{" "}
                      {selectedEmployee?.staff?.staffROLLNO ?? ""}
                    </p>
                  </div>
                </section>
              </section>
            </div>
            <BorderBottom
              customStyle={{
                width: "100%",
              }}
            />
            <EmployeeAccountHeading
              salaryData={financeOneEmployeeDetailHistory?.detail}
              attendanceDay={attendanceDay}
              leaveTaken={
                oneStaffAttendance?.leaveCount + oneStaffAttendance?.absentCount
              }
              onAttendance={onAttendance}
              setMonths={setMonths}
              setYears={setYears}
            />

            <section className={style.table_container}>
              <div className={style.table_heading}>
                <h6>{t("particular")}</h6>
                <h6>{t("amount")}</h6>
              </div>
              <div className={style.table_body_list}>
                <h6>Basic Salary</h6>
                <input
                  type={"number"}
                  value={basicSalary?.toFixed(0)}
                  className={style.fee_head_amount_input}
                  onChange={(e) => setBasicSalary(+e.target.value)}
                />
                {/* <h6>{feehead?.price}</h6> */}
              </div>
              <div className={style.table_body}>
                {addFeeHead?.map((feehead, index) => (
                  <div className={style.table_body_list} key={index}>
                    <h6>{feehead?.month_master_name}</h6>
                    <input
                      type={"tel"}
                      value={feehead?.month_master_amount}
                      onChange={(e) => onFeeHeadPriceChangeGross(e, index)}
                      className={style.fee_head_amount_input}
                    />
                    {/* <h6>{feehead?.price}</h6> */}
                  </div>
                ))}
              </div>
              <div className={style.table_body}>
                <div
                  className={style.table_body_list}
                  style={{
                    borderTopColor: "rgba(18, 18, 18, 0.8)",
                    borderTopWidth: "2px",
                    borderTopStyle: "solid",
                    borderBottomColor: "rgba(18, 18, 18, 0.8)",
                    borderBottomWidth: "2px",
                  }}
                >
                  <h6 className={style.fees_total}>{t("gross_total")}</h6>
                  <h6 className={style.fees_total}>
                    {(grossTotal + basicSalary).toFixed(0)}
                  </h6>
                </div>
              </div>
              <div className={style.table_body}>
                {addFeeHeadDeduction?.map((feehead, index) => (
                  <div className={style.table_body_list} key={index}>
                    <h6>{feehead?.month_master_name}</h6>
                    <input
                      type={"tel"}
                      value={feehead?.month_master_amount}
                      onChange={(e) => onFeeHeadPriceChangeNet(e, index)}
                      className={style.fee_head_amount_input}
                    />
                    {/* <h6>{feehead?.price}</h6> */}
                  </div>
                ))}
              </div>
              <div className={style.table_body}>
                <div
                  className={style.table_body_list}
                  style={{
                    borderTopColor: "rgba(18, 18, 18, 0.8)",
                    borderTopWidth: "2px",
                    borderTopStyle: "solid",
                    borderBottomColor: "rgba(18, 18, 18, 0.8)",
                    borderBottomWidth: "2px",
                  }}
                >
                  <h6 className={style.fees_total}>{t("net_total")}</h6>
                  <h6 className={style.fees_total}>
                    {(netTotal + basicSalary).toFixed(0)}
                  </h6>
                </div>
              </div>
            </section>

            <button
              className={style.payroll_account_btn}
              onClick={onNextAccount}
            >
              {t("account")}
            </button>
          </div>
          {disabled && <QLoader />}
        </PopupWrapper>
      )}
      {openAccountPayment && (
        <RecordPayment
          onClose={() => setOpenAccountPayment(false)}
          name={`${selectedEmployee?.staff?.staffFirstName ?? ""} 
        ${selectedEmployee?.staff?.staffMiddleName ?? ""}
        ${selectedEmployee?.staff?.staffLastName ?? ""} `}
          netTotal={(netTotal + basicSalary)?.toFixed(2)}
          month={months}
          year={years}
          onAccount={onAccount}
        />
      )}
      {notificationState.run && (
        <Notfication
          msg={notificationState.msg}
          run={notificationState.run}
          setRun={() => setNotificationState({ msg: "", run: false })}
          postiton="bottom"
          type="error"
        />
      )}
    </>
  );
};

export default EmployeeAccount;
