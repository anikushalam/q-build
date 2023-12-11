import moment from "moment";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useOneInstituteProfile } from "../../../../../../hooks/dashboard/dashboard-api";
import { useFinanceDetailManager } from "../../../../../../hooks/member_tab/finance-api";
import QLoader from "../../../../../../Loader/QLoader";
import pdfPaySlip from "../../../../../../pdf/pdfPaySlip";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import style from "./AddPayroll.module.css";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const MODAL_STYLES = {
  position: "absolute",
  right: "0",
  top: "2.2vw",
  zIndex: 10,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  zIndex: 10,
};

function Options({ setIncomeData, onClose, incomeData, setIsOpen }) {
  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className={style.options}>
        <div
          className={style.option}
          onClick={() => {
            setIncomeData({ ...incomeData, tMode: "By Cash" });
            setIsOpen(false);
          }}
        >
          By Cash
        </div>
        <div
          className={style.option}
          onClick={() => {
            setIncomeData({ ...incomeData, tMode: "By Bank" });
            setIsOpen(false);
          }}
        >
          By Bank
        </div>
      </div>
    </>
  );
}

function PaySlipFinal({
  netTotal,
  name,
  setIndex,
  month,
  year,
  onPayHandler,
  // getPdfData,
  staffDetail,
  monthName,
  attendence,
  paid_leaves,
  other,
  onSalaryHistory,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [incomeData, setIncomeData] = useState({
    tMode: "",
  });

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
  // console.info("this is master", oneInstituteProfile);
  // const onSalaryHistory = () => {
  //   setDisabled((pre) => !pre);
  //   const imgData = oneInstituteProfile?.institute.insProfilePhoto
  //     ? `${imageShowUrl}/${oneInstituteProfile?.institute.insProfilePhoto}`
  //     : "/images/certificate/logodemo.jpg";
  //   let nam = financeDetailManager?.finance?.financeHead;
  //   const auth = `${nam?.staffFirstName} ${
  //     nam?.staffMiddleName ? nam?.staffMiddleName : ""
  //   } ${nam?.staffLastName}`;
  //   let date = moment(new Date()).format("DD MMMM yyyy");
  //   pdfPaySlip(
  //     imgData,
  //     oneInstituteProfile?.institute,
  //     staffDetail,
  //     monthName,
  //     attendence,
  //     paid_leaves,
  //     other,
  //     auth,
  //     date
  //   );
  //   console.info("this is downalod info", financeDetailManager);
  //   setTimeout(() => {
  //     setDisabled((pre) => !pre);
  //   }, 1000);
  // };
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

      <div className={style.modalBody1}>
        <div className={style.row1}>
          <h6>Select Transaction Mode</h6>
          <div className={style.input} style={BUTTON_WRAPPER_STYLES}>
            <div>
              {incomeData?.tMode !== "" ? (
                <h6 onClick={() => setIsOpen(true)}>{incomeData.tMode}</h6>
              ) : (
                <h6 onClick={() => setIsOpen(true)}>
                  {" "}
                  Please select transaction mode
                </h6>
              )}
              <img className={style.down} src="/images/downn-icon.svg" alt="" />
            </div>
            {isOpen && (
              <Options
                onClose={() => setIsOpen(false)}
                setIncomeData={setIncomeData}
                incomeData={incomeData}
                setIsOpen={setIsOpen}
              />
            )}
          </div>
        </div>

        <div className={style.row2}>
          <p>Purpose</p>
          <h6>Monthly Salary</h6>
        </div>

        <div className={style.row2}>
          <p>Amount</p>
          <h6>Rs. {netTotal} /-</h6>
        </div>

        <div className={style.row2}>
          <p>Paid to</p>
          <h6>Mr. {name}</h6>
        </div>

        <div className={style.row2}>
          <p>Description</p>
          <h6>
            Salary for the month of {month} {year}
          </h6>
        </div>

        <div className={style.btnContainer}>
          {incomeData.tMode ? (
            <div className={style.btnContainerr}>
              <div
                className={`${style.btn} ${style.active}`}
                onClick={() =>
                  onPayHandler({
                    tMode: incomeData.tMode,
                    purpose: "Monthly Salary",
                    description: `Salary for the month of ${month} ${year}`,
                  })
                }
              >
                Pay
              </div>
              <div
                className={`${style.btn} ${style.active}`}
                onClick={onSalaryHistory}
              >
                Generate Slip
              </div>
            </div>
          ) : (
            <div className={style.btnContainerr}>
              <div className={style.btn}>Pay</div>
              <div className={style.btn}>Generate Slip</div>
            </div>
          )}
        </div>
        {disabled && <QLoader />}
      </div>
    </div>
  );
}

export default PaySlipFinal;
