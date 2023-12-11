import React from "react";
import style from "./Payroll.module.css";
import { Dialog } from "@mui/material";
import { useGetOneEmpDetailAndOneSalaryHistoryQuery } from "../../../../../services/financeAPI";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import moment from "moment";
import { useEffect } from "react";

function SalarySlip({ addDisplay, hideModal, empData, sal_month }) {
  // console.info(sal_month, empData);
  const { data: oneSalary, refetch: oneFetch } =
    useGetOneEmpDetailAndOneSalaryHistoryQuery({
      eid: empData?._id,
      type: "History",
      month: sal_month,
    });

  useEffect(() => {
    if (empData?._id) {
      oneFetch();
    }
  }, [empData?._id, oneFetch]);
  return (
    <Dialog open={addDisplay} onClose={() => hideModal(false)}>
      <div className={style.dialog}>
        <div className={style.top}>
          <div className={style.dialogTop}>
            <img
              src={
                oneSalary?.detail?.staff?.photoId !== "1"
                  ? `${imageShowUrl}/${oneSalary?.detail?.staff?.staffProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt="Staff Avatar"
            />
            <div className={style.text}>
              <h6>{`${oneSalary?.detail?.staff?.staffFirstName} ${
                oneSalary?.detail?.staff?.staffMiddleName
                  ? oneSalary?.detail?.staff?.staffMiddleName
                  : ""
              } ${oneSalary?.detail?.staff?.staffLastName}`}</h6>
              <p>Index No. {oneSalary?.detail?.staff?.staffROLLNO}</p>
            </div>
          </div>
          <img
            src="/images/close-post-icon.svg"
            style={{ cursor: "pointer" }}
            onClick={() => hideModal(false)}
            alt=""
          />
        </div>
        <div className={style.bluemonth}>
          {moment(oneSalary?.filter?.[0]?.month).format("MMMM yyyy")}
        </div>
        <div className={style.eachrow}>
          <h6>Salary Per Day :</h6>
          <h6>Rs. {oneSalary?.detail?.staff_salary_month}</h6>
        </div>

        <div className={style.eachrow}>
          <h6>Attendance :</h6>
          <h6>
            {oneSalary?.filter ? oneSalary?.filter[0]?.attendence : ""} days
          </h6>
        </div>

        <div className={style.eachrow}>
          <h6> Basic Salary :</h6>
          <h6>
            ({oneSalary?.filter ? oneSalary?.filter[0]?.payment_mode : ""}) Rs.{" "}
            {oneSalary?.filter ? oneSalary?.filter[0]?.amount : ""}
          </h6>
        </div>
        <hr />

        <div className={style.eachrow}>
          <h6>Paid Leaves :</h6>
          <h6>
            Total {oneSalary?.filter ? oneSalary?.filter[0]?.total_leaves : ""}{" "}
            days
          </h6>
        </div>

        <div className={style.eachrow}>
          <h6>Paid Leaves Taken:</h6>
          <h6>
            Total {oneSalary?.filter ? oneSalary?.filter[0]?.paid_leaves : ""}{" "}
            days
          </h6>
        </div>

        <table>
          <tr>
            <th className={style.left}>Particular</th>
            <th className={style.right}>Amount</th>
          </tr>
          <tr>
            <td className={style.left}>Basic Salary</td>
            <td className={style.right}>
              {oneSalary?.filter ? oneSalary?.filter[0]?.amount : ""}
            </td>
          </tr>
          <tr>
            <td className={style.left}>HRA</td>
            <td className={style.right}>
              {oneSalary?.filter ? oneSalary?.filter[0]?.hra : ""}
            </td>
          </tr>
          <tr>
            <td className={style.left}>DA</td>
            <td className={style.right}>
              {oneSalary?.filter ? oneSalary?.filter[0]?.da : ""}
            </td>
          </tr>
          <tr>
            <td className={style.left}>Medical Allowance</td>
            <td className={style.right}>
              {oneSalary?.filter ? oneSalary?.filter[0]?.medical_allowance : ""}
            </td>
          </tr>

          <tr>
            <td className={style.left}>Travel Allowance</td>
            <td className={style.right}>
              {oneSalary?.filter ? oneSalary?.filter[0]?.travel_allowance : ""}
            </td>
          </tr>

          <tr>
            <td className={style.left}>Employer Contribution (EPF)</td>
            <td className={style.right}>
              {oneSalary?.filter
                ? oneSalary?.filter[0]?.employer_contribution
                : ""}
            </td>
          </tr>

          <tr>
            <td className={style.left}>Perquisites</td>
            <td className={style.right}>
              {oneSalary?.filter ? oneSalary?.filter[0]?.perquisites : ""}
            </td>
          </tr>

          <tr>
            <td className={`${style.left} ${style.weight}`}>Gross Total</td>
            <td className={`${style.right} ${style.weight}`}>
              {oneSalary?.filter ? oneSalary?.filter[0]?.gross_salary : ""}
            </td>
          </tr>

          <tr>
            <td className={style.left}>Employee Contribution</td>
            <td className={style.right}>
              {oneSalary?.filter ? oneSalary?.filter[0]?.epf : ""}
            </td>
          </tr>

          <tr>
            <td className={style.left}>TDS</td>
            <td className={style.right}>
              {oneSalary?.filter ? oneSalary?.filter[0]?.tds : ""}
            </td>
          </tr>

          <tr>
            <td className={`${style.left} ${style.weight}`}>Net Total</td>
            <td className={`${style.right} ${style.weight}`}>
              {oneSalary?.filter ? oneSalary?.filter[0]?.net_total : ""}
            </td>
          </tr>
        </table>

        <div className={style.btn}>Download</div>
      </div>
    </Dialog>
  );
}

export default SalarySlip;
