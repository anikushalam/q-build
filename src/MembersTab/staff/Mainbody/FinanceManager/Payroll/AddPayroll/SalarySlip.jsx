import React from "react";
import { Dialog } from "@mui/material";
import style from "./PaySlip.module.css";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import pdfPaySlip from "../../../../../../pdf/pdfPaySlip";
import { useGetOneEmpDetailAndOneSalaryHistoryQuery } from "../../../../../../services/financeAPI";
import moment from "moment";
function SalarySlip({ modalClick, hideModal, history, sal_month }) {
  const { data: oneSalary } = useGetOneEmpDetailAndOneSalaryHistoryQuery({
    eid: history && history,
    type: "History",
    month: sal_month && sal_month,
  });

  // console.info("/sdvghagj,s", oneSalary);
  const onSalaryHistory = () => {
    const imgData = oneSalary?.institute.insProfilePhoto
      ? `${imageShowUrl}/${oneSalary?.institute.insProfilePhoto}`
      : "/images/certificate/logodemo.jpg";
    let nam = oneSalary?.institute?.financeDepart?.[0]?.financeHead;
    const auth = `${nam?.staffFirstName} ${
      nam?.staffMiddleName ? nam?.staffMiddleName : ""
    } ${nam?.staffLastName}`;
    let date = moment(new Date()).format("DD MMMM yyyy");
    pdfPaySlip(
      imgData,
      oneSalary?.institute,
      oneSalary?.detail?.staff,
      moment(oneSalary?.filter?.[0]?.month).format("MMMM yyyy"),
      oneSalary?.filter[0]?.attendence,
      oneSalary?.filter[0]?.paid_leaves,
      oneSalary?.filter[0],
      auth,
      date
    );
  };
  return (
    <Dialog open={modalClick} onClose={() => hideModal(false)}>
      <div className={style.payslipContainer}>
        <div className={`${style.top} ${style.topp}`}>
          <div className={style.dialogTop}>
            <img
              className={style.imgprofile}
              alt="Employee"
              src={
                oneSalary?.detail?.staff?.photoId !== "1"
                  ? `${imageShowUrl}/${oneSalary?.detail?.staff?.staffProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
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

          <div className={style.bluemonth}>
            {/* {monthIndex[parseInt(oneSalary?.detail?.month >= 9 ? oneSalary?.detail?.month?.slice(1, 3) : oneSalary?.detail?.month?.slice(1, 2))]} */}
            {moment(oneSalary?.filter?.[0]?.month).format("MMMM yyyy")}
          </div>

          <div className={style.contentContainer}>
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
                ({oneSalary?.filter ? oneSalary?.filter[0]?.payment_mode : ""})
                Rs. {oneSalary?.filter ? oneSalary?.filter[0]?.amount : ""}
              </h6>
            </div>
            <hr />

            <div className={style.eachrow}>
              <h6>Paid Leaves :</h6>
              <h6>
                Total{" "}
                {oneSalary?.filter ? oneSalary?.filter[0]?.total_leaves : ""}{" "}
                days
              </h6>
            </div>

            <div className={style.eachrow}>
              <h6>Paid Leaves Taken:</h6>
              <h6>
                Total{" "}
                {oneSalary?.filter ? oneSalary?.filter[0]?.paid_leaves : ""}{" "}
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
                  {oneSalary?.filter
                    ? oneSalary?.filter[0]?.medical_allowance
                    : ""}
                </td>
              </tr>

              <tr>
                <td className={style.left}>Travel Allowance</td>
                <td className={style.right}>
                  {oneSalary?.filter
                    ? oneSalary?.filter[0]?.travel_allowance
                    : ""}
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
                <td className={style.left}>Employee Contribution (EPF)</td>
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

            <div className={style.btn} onClick={onSalaryHistory}>
              Download
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default SalarySlip;
