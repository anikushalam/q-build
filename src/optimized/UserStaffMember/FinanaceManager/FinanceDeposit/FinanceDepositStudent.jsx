import { useState } from "react";
import FinanceDepositStudentList from "./FinanceDepositStudentList";
import FinanceDepositStudentForm from "./FinanceDepositStudentForm";

const FinanceDepositStudent = ({ onClose, fmid }) => {
  const [refundForm, setRefundForm] = useState("");

  const onSelectRefund = (val) => {
    setRefundForm(val);
  };

  const onFormClose = () => {
    setRefundForm("");
  };
  return refundForm ? (
    <FinanceDepositStudentForm
      onClose={onFormClose}
      onCloseParent={onClose}
      refundForm={refundForm}
      fmid={fmid}
    />
  ) : (
    <FinanceDepositStudentList
      fmid={fmid}
      onClose={onClose}
      onSelectRefund={onSelectRefund}
    />
  );
};

export default FinanceDepositStudent;
