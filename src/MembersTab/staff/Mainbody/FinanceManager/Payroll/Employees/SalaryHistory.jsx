import React from "react";
import style from "./Employees.module.css";
import SalarySlip from "../AddPayroll/SalarySlip";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetAllSalaryHistoryQuery } from "../../../../../../services/financeAPI";
import { imageShowUrl } from '../../../../../../services/BaseUrl'

function SalaryHistory() {
  const financeAuthor = useSelector((state) => state.financeChange)
  const [history, setHistory] = useState('')
  const [month, setMonth] = useState('')
  const { data: salaryQuery } = useGetAllSalaryHistoryQuery(`${financeAuthor?.fid}`)
  const [modalClick, setModalClick] = useState(false);
  return (
    <div className={style.itemsContainer}>
      {salaryQuery?.salary?.map((sal, index) => (
      <div className={style.item} onClick={() => {
        setModalClick(true)
        setHistory(`${sal?.emp_pay?._id}`)
        setMonth(`${sal?.month}`)
        }} key={index}>
        <img alt="Staff Profile" 
        src={
          sal?.emp_pay?.staff?.photoId !== '1'
          ? `${imageShowUrl}/${sal?.emp_pay?.staff?.staffProfilePhoto}`
          : '/images/demo_users/user1.svg'
        } 
        />
        <div>
          <p>{`${sal?.emp_pay?.staff?.staffFirstName} ${sal?.emp_pay?.staff?.staffMiddleName ? sal?.emp_pay?.staff?.staffMiddleName : ''} ${sal?.emp_pay?.staff?.staffLastName}`}</p>
          <p className={style.index}>
            Salary : Rs. <span>{sal?.salary}</span> /- ({sal?.pay_mode})
          </p>
        </div>
      </div>
      ))}
      {modalClick && (
        <SalarySlip
          modalClick={modalClick}
          hideModal={(val) => setModalClick(val)}
          history={history}
          sal_month={month}
        />
      )}
    </div>
  );
}

export default SalaryHistory;
