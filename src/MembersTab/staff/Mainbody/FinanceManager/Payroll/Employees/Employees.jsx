import React from "react";
import { useState } from "react";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import style from "./Employees.module.css";
import EmployeePayModal from "../AddPayroll/EmployeePayModal";

function Employees({ allEmployee, ref }) {
  const [openEmpModal, setOpenEmpModal] = useState(false);
  const [employeeId, setEmployeeId] = useState("");
  return (
    <div className={style.itemsContainer}>
      {allEmployee?.map((emp, index) => (
        <div
          className={style.item}
          ref={ref}
          key={index}
          onClick={() => {
            setEmployeeId(emp?._id);
            setOpenEmpModal(true);
          }}
        >
          <img
            alt="Employee Avatar"
            src={
              emp?.staff?.photoId !== "1"
                ? `${imageShowUrl}/${emp?.staff?.staffProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
          />
          <div>
            <p>{`${emp?.staff?.staffFirstName} ${
              emp?.staff?.staffMiddleName ? emp?.staff?.staffMiddleName : ""
            } ${emp?.staff?.staffLastName}`}</p>
            <p className={style.index}>Index No. {emp?.staff?.staffROLLNO}</p>
          </div>
        </div>
      ))}

      {openEmpModal && (
        <EmployeePayModal
          modalClick={openEmpModal}
          hideModal={(w) => setOpenEmpModal(w)}
          employeeId={employeeId}
        />
      )}
    </div>
  );
}

export default Employees;
