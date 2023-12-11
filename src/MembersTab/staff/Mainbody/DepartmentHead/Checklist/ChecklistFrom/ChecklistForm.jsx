import React, { useEffect, useState } from "react";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import ChecklistFormInfo from "./ChecklistFormInfo";
import ChecklistSelectDivision from "./ChecklistSelectDivision";

function ChecklistForm({
  did,
  bid,
  onRefetch,
  onClose,
  onEdit,
  is_edit,
  checklistData,
}) {
  const [activeStep, setActiveStep] = useState("FEES_INFO");
  const [createFees, setCreateFees] = useState({
    checklistName: is_edit ? checklistData?.checklistName : "",
    checklistAmount: is_edit ? checklistData?.checklistAmount : "",
    checklistFees: is_edit ? checklistData?.checklistFees : "",
  });

  useEffect(() => {
    if (is_edit && checklistData) {
      setCreateFees((prev) => ({
        ...prev,
        checklistName: checklistData?.checklistName,
        checklistAmount: checklistData?.checklistAmount,
        checklistFees: checklistData?.checklistFees,
      }));
    }
  }, [is_edit, checklistData]);
  const onGrabInfo = (val) => {
    if (is_edit) {
      onEdit(val);
    } else {
      setCreateFees((prevState) => ({
        ...prevState,
        ...val,
      }));
      setActiveStep("SELECT_DIVISION");
    }
  };
  const onResetAfterCreate = () => {
    onRefetch();
    onClose();
    setCreateFees({
      checklistName: "",
      checklistAmount: "",
      checklistFees: "",
    });
    setActiveStep("FEES_INFO");
  };
  // console.info("checklistData", checklistData);

  return (
    <PopupWrapper onClose={onClose}>
      {activeStep === "FEES_INFO" && (
        <ChecklistFormInfo
          onClose={onClose}
          onGrabInfo={onGrabInfo}
          checklistInfo={createFees}
          is_edit={is_edit}
        />
      )}
      {activeStep === "SELECT_DIVISION" && (
        <ChecklistSelectDivision
          onBack={() => setActiveStep("FEES_INFO")}
          did={did}
          bid={bid}
          createFees={createFees}
          onResetAfterCreate={onResetAfterCreate}
        />
      )}
    </PopupWrapper>
  );
}

export default ChecklistForm;
