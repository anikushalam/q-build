import React from "react";
import { useState } from "react";
// import style from "./AddPayroll.module.css";
// import AssignStaffModal from "../../../../../../Department/Institute/AssignStaff/AssignStaffModal";
import SelectEmployee from "./SelectEmployee";
import PayAndGenerateSlip from "./PayAndGenerateSlip";
import PaySlipFinal from "./PaySlipFinal";
import PaySlip from "./PaySlip";
import { Dialog } from "@mui/material";

function AddPayrollModal({ modalClick, hideModal, fetch, insId }) {
  const [index, setIndex] = useState(0);
  const [payrollData, setPayrollData] = useState({
    salaryPerMonth: "",
    leavePerMonth: "",
    staff: {},
  });

  return (
    <Dialog open={modalClick} onClose={() => hideModal(false)}>
      {index === 0 && (
        <SelectEmployee
          payrollData={payrollData}
          setPayrollData={setPayrollData}
          hideModal={hideModal}
          setIndex={setIndex}
          insId={insId}
        />
      )}

      {index === 1 && (
        <PayAndGenerateSlip
          payrollData={payrollData}
          setPayrollData={setPayrollData}
          hideModal={hideModal}
          setIndex={setIndex}
          fetch={fetch}
        />
      )}

      {index === 2 && (
        <PaySlip
          payrollData={payrollData}
          hideModal={hideModal}
          setIndex={setIndex}
        />
      )}

      {index === 3 && (
        <PaySlipFinal
          payrollData={payrollData}
          hideModal={hideModal}
          setIndex={setIndex}
        />
      )}
    </Dialog>
  );
}

export default AddPayrollModal;

{
  /* <div>

{index === 0 && (
        <SelectEmployee
          payrollData={payrollData}
          setPayrollData={setPayrollData}
          hideModal={hideModal}
          setIndex={setIndex}
        />
      )}

      {index === 1 && (
        <PayAndGenerateSlip
          payrollData={payrollData}
          setPayrollData={setPayrollData}
          hideModal={hideModal}
          setIndex={setIndex}
          fetch={fetch}
        />
      )}

      {index === 2 && (
        <PaySlip
          payrollData={payrollData}
          hideModal={hideModal}
          setIndex={setIndex}
        />
      )}

      {index === 3 && (
        <PaySlipFinal
          payrollData={payrollData}
          hideModal={hideModal}
          setIndex={setIndex}
        />
      )}
</div> */
}
