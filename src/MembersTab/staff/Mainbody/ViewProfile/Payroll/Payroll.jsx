import React from "react";
import style from "./Payroll.module.css";
import { useStaffSalaryHistoryQuery } from "../../../../../services/joining/joinApi";
import { useState } from "react";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import SalarySlip from "../../FinanceManager/Payroll/AddPayroll/SalarySlip";

function Item({ key, name, amount, mode, photoId, photo, empData, sal_month }) {
  const [addDisplay, setAddDisplay] = useState(false);

  return (
    <div className={style.item} onClick={() => setAddDisplay(true)} key={key}>
      <img
        src={
          photoId !== "1"
            ? `${imageShowUrl}/${photo}`
            : "/images/member_tab/class/default_avatar.svg"
        }
        alt="Staff Avatar"
      />
      <div className={style.text}>
        <h6>{name}</h6>
        <p>
          Salary : Rs. <span>{amount}</span> /- ({mode})
        </p>
      </div>

      {/* {open && (
        <SalarySlip
          open={open}
          hideModal={(w) => setOpen(w)}
          setOpen={setOpen}
        />
      )} */}

      {addDisplay && (
        <SalarySlip
          hideModal={(w) => setAddDisplay(w)}
          modalClick={addDisplay}
          history={empData?._id}
          sal_month={sal_month}
        />
      )}
    </div>
  );
}

function Payroll({ sid }) {
  const { data: staffPayroll } = useStaffSalaryHistoryQuery(sid);

  return (
    <div className={style.payroll}>
      {staffPayroll?.salary?.length > 0 ? (
        <div>
          {staffPayroll?.salary?.map((sal, index) => (
            <Item
              key={index}
              name={`${sal?.emp_pay?.staff?.staffFirstName} ${
                sal?.emp_pay?.staff?.staffMiddleName
                  ? sal?.emp_pay?.staff?.staffMiddleName
                  : ""
              } ${sal?.emp_pay?.staff?.staffLastName}`}
              amount={sal?.salary}
              mode={sal?.pay_mode}
              photoId={sal?.emp_pay?.staff?.photoId}
              photo={sal?.emp_pay?.staff?.staffProfilePhoto}
              empData={sal?.emp_pay}
              sal_month={sal?.month}
            />
          ))}
        </div>
      ) : (
        <div className={style.payrollContainer}>No Payroll Data Found</div>
      )}
    </div>
  );
}

export default Payroll;
