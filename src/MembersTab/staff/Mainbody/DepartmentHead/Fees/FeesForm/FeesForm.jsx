import React, { useState } from "react";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import DepartmentFeesInfo from "./DepartmentFeesInfo";
import ExamFeesSelectDivision from "./ExamFeesSelectDivision";

function FeesForm({ did, bid, onRefetch, onClose }) {
  const [activeStep, setActiveStep] = useState("FEES_INFO");
  const [createFees, setCreateFees] = useState({
    feeName: "",
    feeAmount: "",
    feeDate: "",
  });
  const onGrabInfo = (val) => {
    setCreateFees((prevState) => ({
      ...prevState,
      ...val,
    }));
    setActiveStep("SELECT_DIVISION");
  };
  const onResetAfterCreate = () => {
    onRefetch();
    onClose();
    setCreateFees({
      feeName: "",
      feeAmount: "",
      feeDate: "",
    });
    setActiveStep("FEES_INFO");
  };
  return (
    <PopupWrapper onClose={onClose}>
      {activeStep === "FEES_INFO" && (
        <DepartmentFeesInfo
          onClose={onClose}
          onGrabInfo={onGrabInfo}
          feesInfo={{
            feeName: createFees.feeName,
            feeAmount: createFees.feeAmount,
            feeDate: createFees.feeDate,
          }}
        />
      )}
      {activeStep === "SELECT_DIVISION" && (
        <ExamFeesSelectDivision
          onBack={() => setActiveStep("EXAM_INFO")}
          did={did}
          bid={bid}
          createFees={createFees}
          onResetAfterCreate={onResetAfterCreate}
        />
      )}
    </PopupWrapper>
  );
}

export default FeesForm;
