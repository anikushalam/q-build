import React from "react";
import { useSelector } from "react-redux";
import { useAddEmployeePayroll } from "../../../../../../hooks/member_tab/finance-api";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import style from "./AddPayroll.module.css";

function PayAndGenerateSlip({
  payrollData,
  setPayrollData,
  hideModal,
  setIndex,
  fetch,
}) {
  const financeAuthor = useSelector((state) => state.financeChange);
  const [addEmployeePayroll] = useAddEmployeePayroll();
  const AddEmployeeHandler = () => {
    if (payrollData) {
      var data = {
        staff_salary_month: payrollData?.salaryPerMonth,
        staff_total_paid_leaves: payrollData?.leavePerMonth,
      };
      addEmployeePayroll({
        employeePayroll: data,
        sid: payrollData?.staff?._id,
        fid: financeAuthor?.fid,
      }).then((res) => {
        if (res.data.status) {
          fetch();
          hideModal();
          setIndex(0);
        }
      });
    }
  };

  return (
    <div className={style.scheduleModal}>
      <div className={style.modalTitle}>
        <img
          src="/images/members/arrow-left.svg"
          alt=""
          onClick={() => setIndex(0)}
        />
        <h6>Add Employee</h6>
        <div />
      </div>

      <div className={style.modalBody}>
        <div className={style.item} style={{ borderBottom: "0" }}>
          <img
            alt="Staff Profile Avatar"
            src={
              payrollData?.staff?.photoId !== "1"
                ? `${imageShowUrl}/${payrollData?.staff?.staffProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
          />
          <div>
            <p>{`${payrollData?.staff?.staffFirstName} ${
              payrollData?.staff?.staffMiddleName
                ? payrollData?.staff?.staffMiddleName
                : ""
            } ${payrollData?.staff?.staffLastName}`}</p>
            <p className={style.index}>
              Index No. {payrollData?.staff?.staffROLLNO}
            </p>
          </div>
        </div>

        <div className={style.row} style={{ marginBottom: "0" }}>
          <h6>Salary Per Month</h6>

          <input
            type="tel"
            placeholder="Please enter employee salary per month"
            name="staff_salary_month"
            value={payrollData.salaryPerMonth}
            onChange={(e) =>
              setPayrollData({ ...payrollData, salaryPerMonth: e.target.value })
            }
            required
          />
        </div>

        <div className={style.row} style={{ marginBottom: "0" }}>
          <h6>Paid Leaves Per Month</h6>

          <input
            type="tel"
            placeholder="Please enter paid leaves"
            value={payrollData.leavePerMonth}
            name="staff_total_paid_leaves"
            onChange={(e) =>
              setPayrollData({ ...payrollData, leavePerMonth: e.target.value })
            }
            required
          />
        </div>

        <div className={style.btnContainer}>
          {payrollData.leavePerMonth &&
          payrollData.salaryPerMonth &&
          payrollData.staff?._id ? (
            <div
              className={`${style.btn} ${style.active}`}
              onClick={AddEmployeeHandler}
            >
              Add Employee
            </div>
          ) : (
            <div className={style.btn}>Add Employee</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PayAndGenerateSlip;
