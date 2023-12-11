import React from "react";
import style from "./Employees.module.css";
import SalarySlip from "../../FinanceManager/Payroll/AddPayroll/SalarySlip";
import { useState } from "react";

function SalaryHistory() {
  const [modalClick, setModalClick] = useState(false);
  return (
    <div className={style.itemsContainer}>
      <div className={style.item} onClick={() => setModalClick(true)}>
        <img alt="" src="/images/member_tab/class/default_avatar.svg" />
        <div>
          <p>Abhishek Singh</p>
          <p className={style.index}>
            Salary : Rs. <span>27,000</span> /- (By Cash)
          </p>
        </div>
      </div>
      <div className={style.item} onClick={() => setModalClick(true)}>
        <img alt="" src="/images/member_tab/class/default_avatar.svg" />
        <div>
          <p>Abhishek Singh</p>
          <p className={style.index}>
            Salary : Rs. <span>27,000</span> /- (By Cash)
          </p>
        </div>
      </div>
      <div className={style.item} onClick={() => setModalClick(true)}>
        <img alt="" src="/images/member_tab/class/default_avatar.svg" />
        <div>
          <p>Abhishek Singh</p>
          <p className={style.index}>
            Salary : Rs. <span>27,000</span> /- (By Cash)
          </p>
        </div>
      </div>
      <div className={style.item} onClick={() => setModalClick(true)}>
        <img alt="" src="/images/member_tab/class/default_avatar.svg" />
        <div>
          <p>Abhishek Singh</p>
          <p className={style.index}>
            Salary : Rs. <span>27,000</span> /- (By Cash)
          </p>
        </div>
      </div>
      {modalClick && (
        <SalarySlip
          modalClick={modalClick}
          hideModal={(val) => setModalClick(val)}
        />
      )}
    </div>
  );
}

export default SalaryHistory;
