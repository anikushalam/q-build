import React, { useState } from "react";
import PopupWrapper from "../../../../FinanceManager/FeesStructure/PopupWrapper";
import SelectMulitpleStaff from "./SelectMulitpleStaff";
import SelectAvailableClass from "./SelectAvailableClass";
import RearrangeClass from "./RearrangeClass";
import StartSeatArrangement from "./StartSeatArrangement";
import QLoader from "../../../../../../../Loader/QLoader";
import { useCreateAutomateSeatingArrangement } from "../../../../../../../hooks/member_tab/department-api";

const SeatingAutomate = ({ onClose, instituteId, examId, examName }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [automateState, setAutomateState] = useState({
    staff_list: [],
    class_list: [],
    // hall_limit: 0,
    // sequence: "",
  });
  const [clsList, setClsList] = useState([]);
  const [studentCount, setStudentCount] = useState(0);
  const [createAutomateSeatingArrangement] =
    useCreateAutomateSeatingArrangement();
  const onGrabStaff = (staff) => {
    setAutomateState((prev) => ({
      ...prev,
      staff_list: staff,
    }));
    setActiveStep(2);
  };
  const onGrabClass = (cls, value) => {
    setAutomateState((prev) => ({
      ...prev,
      class_list: cls,
    }));
    setClsList(value);
    setActiveStep(3);
  };
  const onGrabRearrangeClass = (cls, value) => {
    setAutomateState((prev) => ({
      ...prev,
      class_list: cls,
    }));
    setClsList(value);
    setActiveStep(4);
  };

  const onAddAutoMateSeating = (otherData) => {
    setDisabled((pre) => !pre);
    createAutomateSeatingArrangement({
      eid: examId,
      createAutomate: {
        ...automateState,
        ...otherData,
      },
    })
      .then(() => {
        setDisabled((pre) => !pre);
        onClose();
      })
      .catch({});
  };
  return (
    <PopupWrapper onClose={onClose}>
      {activeStep === 1 && (
        <SelectMulitpleStaff
          instituteId={instituteId}
          onGrabStaff={onGrabStaff}
          staff_list={automateState.staff_list}
          onBack={onClose}
        />
      )}

      {activeStep === 2 && (
        <SelectAvailableClass
          examId={examId}
          onGrabClass={onGrabClass}
          class_list={automateState.class_list}
          onBack={() => setActiveStep(1)}
          clsList={clsList}
          setStudentCount={setStudentCount}
        />
      )}

      {activeStep === 3 && (
        <RearrangeClass
          onGrabRearrangeClass={onGrabRearrangeClass}
          class_list={automateState.class_list}
          onBack={() => setActiveStep(2)}
          clsList={clsList}
        />
      )}
      {activeStep === 4 && (
        <StartSeatArrangement
          automateState={automateState}
          onBack={() => setActiveStep(3)}
          onAddAutoMateSeating={onAddAutoMateSeating}
          examName={examName}
          studentCount={studentCount}
        />
      )}

      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default SeatingAutomate;
