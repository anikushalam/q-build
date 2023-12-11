import React, { useState } from "react";
import SelectInstituteStudent from "./SelectInstituteStudent";
import SelectStop from "./SelectStop";
import PreviewPassengerAdd from "./PreviewPassengerAdd";

const AddPassenger = ({ instituteId, onClose, vehicleId, onRefetch }) => {
  const [activeStep, setActiveStep] = useState("STUDENT_ACTION");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedStop, setSelectedStop] = useState("");

  const onRemoveStep = () => {
    if (activeStep === "SELECT_STOP") {
      setActiveStep("STUDENT_ACTION");
    } else if (activeStep === "PREVIEW_PASSENGER") {
      setActiveStep("SELECT_STOP");
    } else {
      setActiveStep("");
    }
  };

  const onSelectStudent = (val) => {
    setSelectedStudent(val);
    setActiveStep("SELECT_STOP");
  };

  const onSelectStop = (val) => {
    setSelectedStop(val);
    setActiveStep("PREVIEW_PASSENGER");
  };
  return (
    <>
      {activeStep === "STUDENT_ACTION" && (
        <SelectInstituteStudent
          instituteId={instituteId}
          onClose={onClose}
          onSelectStudent={onSelectStudent}
        />
      )}
      {activeStep === "SELECT_STOP" && (
        <SelectStop
          vehicleId={vehicleId}
          onClose={onRemoveStep}
          onSelectStop={onSelectStop}
        />
      )}
      {activeStep === "PREVIEW_PASSENGER" && (
        <PreviewPassengerAdd
          vehicleId={vehicleId}
          onClose={onRemoveStep}
          selectedStop={selectedStop}
          selectedStudent={selectedStudent}
          onParentClose={onClose}
          onRefetch={onRefetch}
        />
      )}
    </>
  );
};

export default AddPassenger;
