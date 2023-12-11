import React, { useState } from "react";
import { useAddNewMentee } from "../../../../../../hooks/member_tab/department-api";
import SelectMenteeClass from "./SelectMenteeClass";
import SelectMenteeList from "./SelectMenteeList";

const AddStudent = ({ onClose, onRefetch, did, mid }) => {
  const [disabled, setDisabled] = useState(false);
  const [activeStep, setActiveStep] = useState("SELECT_CLASS");
  const [clsId, setClsId] = useState("");
  const [addNewMentee] = useAddNewMentee();

  const onActiveStep = (val) => {
    setActiveStep(val);
  };

  const onSelect = (cid) => {
    setClsId(cid);
    onActiveStep("SELECT_STUDENT");
  };

  const onAddStudent = (ids) => {
    // setAssignHeadStaff(assing);
    setDisabled((pre) => !pre);
    addNewMentee({
      did: did,
      mid: mid,
      add_mentee: {
        student_array: ids,
      },
    })
      .then(() => {
        onRefetch();
        onClose();
        setDisabled((pre) => !pre);
        // setAssignHead((pre) => !pre);
      })
      .catch({});
  };
  return (
    <>
      {activeStep === "SELECT_CLASS" && (
        <SelectMenteeClass onBack={onClose} did={did} onSelect={onSelect} />
      )}
      {activeStep === "SELECT_STUDENT" && (
        <SelectMenteeList
          onClose={() => onActiveStep("SELECT_CLASS")}
          cid={clsId}
          onAddStudent={onAddStudent}
          disabled={disabled}
        />
      )}
    </>
  );
};

export default AddStudent;
