import React, { useEffect } from "react";
import style from "./PaySlip.module.css";
import { Dialog } from "@mui/material";
import useCalendar from "../Employee/useCalender";
import PaySlipFinal from "./PaySlipFinal";
import { useState } from "react";
import {
  useAddPayroll,
  useFinanceDetailManager,
  useFinanceOneEmployeeDetailHistory,
  useOneStaffAttendance,
} from "../../../../../../hooks/member_tab/finance-api";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import { useSelector } from "react-redux";
import QLoader from "../../../../../../Loader/QLoader";
import pdfPaySlip from "../../../../../../pdf/pdfPaySlip";
import { useOneInstituteProfile } from "../../../../../../hooks/dashboard/dashboard-api";
import moment from "moment";
function EmployeePayModal({ modalClick, hideModal, employeeId }) {
  const { selectedDate, monthNames, getNextMonth, getPrevMonth, daysInMonth } =
    useCalendar();
  const [index, setIndex] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [downloadPdf, setDownloadPdf] = useState(false);
  const [grossSalary, setGrossSalary] = useState(0);
  const [netTotal, setNetTotal] = useState(0);
  // const [getPdfData, setGetPdfData] = useState("");
  const [allInput, setAllInput] = useState({
    hra: 0,
    da: 0,
    ma: 0,
    ta: 0,
    epf: 0,
    prequ: 0,
    depf: 0,
    dtds: 0,
  });
  const currentDate = new Date();
  const isoDate = currentDate.toISOString();
  const financeId = useSelector((state) => state.financeChange);
  const [addPayroll] = useAddPayroll();
  const {
    financeOneEmployeeDetailHistory,
    financeOneEmployeeDetailHistoryRefetch,
  } = useFinanceOneEmployeeDetailHistory({
    data: {
      type: "Detail",
      eid: employeeId,
      month: "",
    },
    skip: !employeeId,
  });

  const { oneStaffAttendance, oneStaffAttendanceRefetch } =
    useOneStaffAttendance({
      data: {
        sid: financeOneEmployeeDetailHistory?.detail?.staff?._id,
        month: isoDate.substr(5, 2),
        year: isoDate.substr(0, 4),
      },
      skip: !employeeId,
    });
  React.useEffect(() => {
    if (employeeId) financeOneEmployeeDetailHistoryRefetch();
  }, [employeeId, financeOneEmployeeDetailHistoryRefetch]);

  React.useEffect(() => {
    if (financeOneEmployeeDetailHistory?.detail?.staff?._id)
      oneStaffAttendanceRefetch();
  }, [
    financeOneEmployeeDetailHistory?.detail?.staff?._id,
    oneStaffAttendanceRefetch,
  ]);

  React.useEffect(() => {
    if (financeOneEmployeeDetailHistory?.detail?.staff_salary_month) {
      setGrossSalary(
        financeOneEmployeeDetailHistory?.detail?.staff_salary_month
      );
      setNetTotal(financeOneEmployeeDetailHistory?.detail?.staff_salary_month);
    }
  }, [financeOneEmployeeDetailHistory?.detail?.staff_salary_month]);

  const onChangeInput = (e) => {
    setAllInput((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  React.useEffect(() => {
    let gross = financeOneEmployeeDetailHistory?.detail?.staff_salary_month;
    let net = financeOneEmployeeDetailHistory?.detail?.staff_salary_month;
    for (let obj in allInput) {
      if (obj === "dtds" || obj === "depf") {
        net -= +allInput[obj];
      } else {
        net += +allInput[obj];
        gross += +allInput[obj];
      }
    }
    setGrossSalary(gross);
    setNetTotal(net);
  }, [allInput]);

  const onPayHandler = (data) => {
    setDisabled((pre) => !pre);
    addPayroll({
      fid: financeId.fid,
      eid: employeeId,
      addPayroll: {
        month: isoDate.substr(0, 10),
        attendence: daysInMonth - oneStaffAttendance?.absentCount,
        paid_leaves: oneStaffAttendance?.leaveCount,
        payment_mode: data.tMode,
        purpose: data.purpose,
        amount: financeOneEmployeeDetailHistory?.detail?.staff_salary_month,
        paid_to: `${
          financeOneEmployeeDetailHistory?.detail?.staff?.staffFirstName
        } ${
          financeOneEmployeeDetailHistory?.detail?.staff?.staffMiddleName
            ? financeOneEmployeeDetailHistory?.detail?.staff?.staffMiddleName
            : ""
        } ${financeOneEmployeeDetailHistory?.detail?.staff?.staffLastName}`,
        message: data.description,
        gross_salary: grossSalary,
        net_total: netTotal,
        hra: +allInput.hra,
        da: +allInput.da,
        epc: +allInput.epf,
        ma: +allInput.ma,
        ta: +allInput.ta,
        pqs: +allInput.prequ,
        epf: +allInput.depf,
        tds: +allInput.dtds,
      },
    })
      .then((res) => {
        // setGetPdfData(res.data);
        // console.info("edsdvfjhdxx", res);

        hideModal(false);
        setDisabled((pre) => !pre);
      })
      .catch({});
  };

  const instituteId = useSelector((state) => state.financeChange);
  const { oneInstituteProfile, oneInstituteProfileRefetch } =
    useOneInstituteProfile({
      data: { id: instituteId.insId, type: "ID" },
      skip: !instituteId.insId,
    });
  useEffect(() => {
    if (instituteId.insId) oneInstituteProfileRefetch();
  }, [instituteId.insId, oneInstituteProfileRefetch]);
  const { financeDetailManager, financeDetailManagerRefetch } =
    useFinanceDetailManager({
      data: {
        fid: instituteId.fid,
        mod_id: "",
      },
      skip: !instituteId.fid,
    });
  useEffect(() => {
    if (instituteId.fid) financeDetailManagerRefetch();
  }, [instituteId.fid, financeDetailManagerRefetch]);
  const onSalaryHistory = () => {
    if (downloadPdf) {
    } else {
      setDownloadPdf((pre) => !pre);
      const imgData = oneInstituteProfile?.institute.insProfilePhoto
        ? `${imageShowUrl}/${oneInstituteProfile?.institute.insProfilePhoto}`
        : "/images/certificate/logodemo.jpg";
      let nam = financeDetailManager?.finance?.financeHead;
      const auth = `${nam?.staffFirstName} ${
        nam?.staffMiddleName ? nam?.staffMiddleName : ""
      } ${nam?.staffLastName}`;
      let date = moment(new Date()).format("DD MMMM yyyy");
      pdfPaySlip(
        imgData,
        oneInstituteProfile?.institute,
        financeOneEmployeeDetailHistory?.detail?.staff,
        monthNames[selectedDate.getMonth()],
        daysInMonth - oneStaffAttendance?.absentCount,
        oneStaffAttendance?.leaveCount,
        {
          amount: financeOneEmployeeDetailHistory?.detail?.staff_salary_month,
          hra: allInput.hra,
          gross_salary: grossSalary,
          epf: allInput.depf,
          tds: allInput.dtds,
          net_total: netTotal,
        },
        auth,
        date
      );
      setTimeout(() => {
        setDownloadPdf((pre) => !pre);
      }, 1000);
    }
  };

  return (
    <>
      {!disabled && (
        <Dialog open={modalClick} onClose={() => hideModal(false)}>
          {index === 0 && (
            <div className={style.payslipContainer}>
              <div className={`${style.top} ${style.topp}`}>
                <div className={style.dialogTop}>
                  <img
                    className={style.imgprofile}
                    src={
                      financeOneEmployeeDetailHistory?.detail?.staff
                        ?.photoId !== "1"
                        ? `${imageShowUrl}/${financeOneEmployeeDetailHistory?.detail?.staff?.staffProfilePhoto}`
                        : "/images/member_tab/class/default_avatar.svg"
                    }
                  />
                  <div className={style.text}>
                    <h6>{`${
                      financeOneEmployeeDetailHistory?.detail?.staff
                        ?.staffFirstName
                    } ${
                      financeOneEmployeeDetailHistory?.detail?.staff
                        ?.staffMiddleName
                        ? financeOneEmployeeDetailHistory?.detail?.staff
                            ?.staffMiddleName
                        : ""
                    } ${
                      financeOneEmployeeDetailHistory?.detail?.staff
                        ?.staffLastName
                    }`}</h6>
                    <p>
                      Index No.{" "}
                      {
                        financeOneEmployeeDetailHistory?.detail?.staff
                          ?.staffROLLNO
                      }
                    </p>
                  </div>
                </div>

                <div className={`${style.bluemonth} ${style.bluemonthdisplay}`}>
                  <img
                    src="/images/members/back-icon-white.svg"
                    onClick={getPrevMonth}
                  />

                  <h6 className={`${style.yearmonth}`}>
                    {`${monthNames[selectedDate.getMonth()]}`}{" "}
                    {`${selectedDate.getFullYear()}`}
                  </h6>

                  <img
                    src="/images/members/forward-icon-white.svg"
                    onClick={getNextMonth}
                  />
                </div>

                <div className={style.contentContainer}>
                  <div className={style.eachrow}>
                    <h6>Salary Per Month :</h6>
                    <h6>
                      Rs.{" "}
                      {
                        financeOneEmployeeDetailHistory?.detail
                          ?.staff_salary_month
                      }
                    </h6>
                  </div>

                  <div className={style.eachrow}>
                    <h6>Attendance :</h6>
                    <h6>
                      {daysInMonth - oneStaffAttendance?.absentCount} days
                    </h6>
                  </div>

                  <div className={style.eachrow}>
                    <h6> Basic Salary :</h6>
                    <h6>
                      {" "}
                      Rs.{" "}
                      {
                        financeOneEmployeeDetailHistory?.detail
                          ?.staff_salary_month
                      }
                    </h6>
                  </div>
                  <hr />

                  <div className={style.eachrow}>
                    <h6>Paid Leaves :</h6>
                    <h6>
                      Total{" "}
                      {
                        financeOneEmployeeDetailHistory?.detail
                          ?.staff_total_paid_leaves
                      }{" "}
                      days
                    </h6>
                  </div>

                  <div className={style.eachrow}>
                    <h6>Paid Leaves Taken:</h6>
                    <h6>Total {oneStaffAttendance?.leaveCount} days</h6>
                  </div>

                  <table>
                    <tr>
                      <th className={style.left}>Particular</th>
                      <th className={style.right}>Amount</th>
                    </tr>
                    <tr>
                      <td className={style.left}>Basic Salary</td>
                      <td className={style.right}>
                        <input
                          type="number"
                          defaultValue={
                            financeOneEmployeeDetailHistory?.detail
                              ?.staff_salary_month
                          }
                          readOnly
                          className={style.input}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className={style.left}>HRA</td>
                      <td className={style.right}>
                        <input
                          type="number"
                          min="0"
                          name="hra"
                          value={allInput.hra}
                          onChange={onChangeInput}
                          className={style.input}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className={style.left}>DA</td>
                      <td className={style.right}>
                        <input
                          type="number"
                          min="0"
                          name="da"
                          value={allInput.da}
                          onChange={onChangeInput}
                          className={style.input}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className={style.left}>Medical Allowance</td>
                      <td className={style.right}>
                        <input
                          type="number"
                          min="0"
                          name="ma"
                          value={allInput.ma}
                          onChange={onChangeInput}
                          className={style.input}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className={style.left}>Travel Allowance</td>
                      <td className={style.right}>
                        <input
                          type="number"
                          min="0"
                          name="ta"
                          value={allInput.ta}
                          onChange={onChangeInput}
                          className={style.input}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className={style.left}>
                        Employer Contribution (EPF)
                      </td>
                      <td className={style.right}>
                        <input
                          type="number"
                          min="0"
                          name="epf"
                          value={allInput.epf}
                          onChange={onChangeInput}
                          className={style.input}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className={style.left}>Perquisites</td>
                      <td className={style.right}>
                        <input
                          type="number"
                          min="0"
                          name="prequ"
                          value={allInput.prequ}
                          onChange={onChangeInput}
                          className={style.input}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className={`${style.left} ${style.weight}`}>
                        Gross Total
                      </td>
                      <td className={`${style.right} ${style.weight}`}>
                        {grossSalary}
                      </td>
                    </tr>

                    <tr>
                      <td className={style.left}>
                        Employee Contribution (EPF)
                      </td>
                      <td className={style.right}>
                        <input
                          type="number"
                          min="0"
                          name="depf"
                          value={allInput.depf}
                          onChange={onChangeInput}
                          className={style.input}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className={style.left}>TDS</td>
                      <td className={style.right}>
                        <input
                          type="number"
                          min="0"
                          name="dtds"
                          value={allInput.dtds}
                          onChange={onChangeInput}
                          className={style.input}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className={`${style.left} ${style.weight}`}>
                        Net Total
                      </td>
                      <td className={`${style.right} ${style.weight}`}>
                        {netTotal}
                      </td>
                    </tr>
                  </table>

                  <div className={style.btn} onClick={() => setIndex(1)}>
                    Next
                  </div>
                </div>
              </div>
            </div>
          )}

          {index === 1 && (
            <PaySlipFinal
              setIndex={setIndex}
              netTotal={netTotal}
              name={`${
                financeOneEmployeeDetailHistory?.detail?.staff?.staffFirstName
              } ${
                financeOneEmployeeDetailHistory?.detail?.staff?.staffMiddleName
                  ? financeOneEmployeeDetailHistory?.detail?.staff
                      ?.staffMiddleName
                  : ""
              } ${
                financeOneEmployeeDetailHistory?.detail?.staff?.staffLastName
              }`}
              month={`${monthNames[selectedDate.getMonth()]}`}
              year={`${selectedDate.getFullYear()}`}
              onPayHandler={onPayHandler}
              staffDetail={financeOneEmployeeDetailHistory?.detail?.staff}
              monthName={monthNames[selectedDate.getMonth()]}
              attendence={daysInMonth - oneStaffAttendance?.absentCount}
              paid_leaves={oneStaffAttendance?.leaveCount}
              other={{
                amount:
                  financeOneEmployeeDetailHistory?.detail?.staff_salary_month,
                hra: allInput.hra,
                gross_salary: grossSalary,
                epf: allInput.depf,
                tds: allInput.dtds,
                net_total: netTotal,
              }}
              onSalaryHistory={onSalaryHistory}
              // getPdfData={getPdfData}
            />
          )}
        </Dialog>
      )}
      {disabled && <QLoader />}
    </>
  );
}

export default EmployeePayModal;
