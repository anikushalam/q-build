import React from "react";
import { useFinanceOneEmployeeDetailHistory } from "../../../../../../hooks/member_tab/finance-api";
import style from "./PaySlip.module.css";

function PaySlip({ payrollData, hideModal, setIndex }) {
  // const {financeOneEmployeeDetailHistory, financeOneEmployeeDetailHistoryRefetch}=useFinanceOneEmployeeDetailHistory({
  //   data:{

  //   }, skip:"",
  // })
  return (
    <div className={style.payslipContainer}>
      <div className={style.top}>
        <div className={style.dialogTop}>
          <img src={payrollData.staff.img} alt="" />
          <div className={style.text}>
            <h6> {payrollData.staff.name}</h6>
            <p>Index No. 015</p>
          </div>
        </div>
        <img
          src="/images/close-post-icon.svg"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setIndex(0);
            hideModal(false);
          }}
          alt=""
        />
      </div>

      <div className={style.bluemonth}>April 2022</div>
      <div className={style.eachrow}>
        <h6>Salary Per Day :</h6>
        <h6>Rs. 900</h6>
      </div>

      <div className={style.eachrow}>
        <h6>Attendance :</h6>
        <h6>25 days</h6>
      </div>

      <div className={style.eachrow}>
        <h6> Basic Salary :</h6>
        <h6>(By Cash) Rs. 27,000</h6>
      </div>
      <hr />

      <div className={style.eachrow}>
        <h6>Paid Leaves :</h6>
        <h6>Total 28 days</h6>
      </div>

      <div className={style.eachrow}>
        <h6>Paid Leaves Taken:</h6>
        <h6>Total 24 days</h6>
      </div>

      <table>
        <tr>
          <th className={style.left}>Particular</th>
          <th className={style.right}>Amount</th>
        </tr>
        <tr>
          <td className={style.left}>Basic Salary</td>
          <td className={style.right}>34,000.00</td>
        </tr>

        <tr>
          <td className={style.left}>Basic Salary</td>
          <td className={style.right}>34,000.00</td>
        </tr>

        <tr>
          <td className={style.left}>HRA</td>
          <td className={style.right}>5,000.00</td>
        </tr>

        <tr>
          <td className={`${style.left} ${style.weight}`}>Gross Total</td>
          <td className={`${style.right} ${style.weight}`}>39,000.00</td>
        </tr>

        <tr>
          <td className={style.left}>Employees Provident Fund</td>
          <td className={style.right}>(2000.00)</td>
        </tr>

        <tr>
          <td className={style.left}>TDS</td>
          <td className={style.right}>(2000.00)</td>
        </tr>

        <tr>
          <td className={`${style.left} ${style.weight}`}>Net Total</td>
          <td className={`${style.right} ${style.weight}`}>39,000.00</td>
        </tr>
      </table>

      <div className={style.btnContainer}>
        <div className={style.btn}>Generate Slip</div>
        <div
          className={`${style.btn} ${style.greenbtn}`}
          onClick={() => setIndex(3)}
        >
          Pay
        </div>
      </div>
    </div>
  );
}

export default PaySlip;
