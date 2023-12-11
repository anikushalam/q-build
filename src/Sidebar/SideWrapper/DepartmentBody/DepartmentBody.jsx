import React, { useState } from "react";
import DepartmentSide from "./DepartmentSide/DepartmentSide";
import style from "./DepartmentBody.module.css";
import RemainingFees from "../../AdmisionAdmin/RemainingFees/RemainingFees";
import OngoingApplication from "../../AdmisionAdmin/OngoingApplication/OngoingApplication";
import CompletedApplication from "../../AdmisionAdmin/CompletedApplication/CompletedApplication";

function DepartmentBody({
  deptHead,
  deptHeadDesig,
  sideRow1Heading,
  sideRow2Heading,
  sideRow1para,
  sideRow2para,
  sideRow1Count,
  sideRow2Count,
  tab1,
  tab2,
  admission,
  insName,
  insNamee,
}) {
  const [tabIndex, setTabIndex] = useState(0);
  const [status, setStatus] = useState("");
  // console.info(admission, insName, insNamee);
  return (
    <div className={style.mainbody}>
      <div className={style.sidebar}>
        <DepartmentSide
          deptHead={deptHead}
          deptHeadDesig={deptHeadDesig}
          sideRow1Heading={sideRow1Heading}
          sideRow2Heading={sideRow2Heading}
          sideRow1para={sideRow1para}
          sideRow2para={sideRow2para}
          sideRow1Count={sideRow1Count}
          sideRow2Count={sideRow2Count}
          insName={insName}
        />
      </div>
      <div className={style.rightbody}>
        {status === "" && (
          <div>
            <div className={style.bodytabs}>
              <div
                className={
                  tabIndex === 0
                    ? `${style.bodytab} ${style.bodytab0} ${style.bodytabActive}`
                    : `${style.bodytab} ${style.bodytab0}`
                }
                onClick={() => setTabIndex(0)}
              >
                {tab1}
              </div>
              <div
                className={
                  tabIndex === 1
                    ? `${style.bodytab} ${style.bodytab1} ${style.bodytabActive}`
                    : `${style.bodytab} ${style.bodytab1}`
                }
                onClick={() => setTabIndex(1)}
              >
                {tab2}
              </div>
            </div>

            <div className={style.departmentContent}>
              {tabIndex === 0 && (
                <div className={style.items}>
                  <div
                    className={style.itemIcon}
                    onClick={() => {
                      setStatus("ongoing");
                    }}
                  >
                    <img
                      src="/images/members/department-staff-room.svg"
                      alt="Class Catalog"
                    />
                    <p>Ongoing</p>
                  </div>
                  <div
                    className={style.itemIcon}
                    onClick={() => {
                      setStatus("completed");
                    }}
                  >
                    <img src="/images/members/completed.svg" alt="completed" />
                    <p>Completed</p>
                  </div>

                  <div
                    className={style.itemIcon}
                    // onClick={() => {
                    //   setStatus("qrcode");
                    // }}
                  >
                    <img
                      src="/images/admidion_department/qrcode.svg"
                      alt="qrcode"
                    />
                    <p>QR Codes</p>
                  </div>

                  <div
                    className={style.itemIcon}
                    // onClick={() => {
                    //   setStatus("qrcode");
                    // }}
                  >
                    <img
                      src="/images/admidion_department/pending.svg"
                      alt="pending fees"
                    />
                    <p>Pending Fees</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {status === "remainingFees" && <RemainingFees setStatus={setStatus} />}
        {status === "ongoing" && <OngoingApplication setStatus={setStatus} />}
        {status === "completed" && (
          <CompletedApplication setStatus={setStatus} />
        )}
      </div>
    </div>
  );
}

export default DepartmentBody;
