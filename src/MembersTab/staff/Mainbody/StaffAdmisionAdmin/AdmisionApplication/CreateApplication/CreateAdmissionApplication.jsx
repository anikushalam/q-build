import React, { useState } from "react";
import SelectApplicationType from "./SelectApplicationType";
import CreateStepHostelApplication from "./CreateStepHostelApplication";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import CreateStepAdmissionApplication from "./CreateStepAdmissionApplication";
import CreateDirectAdmissionApplication from "./CreateDirectAdmissionApplication";
import CreateDirectHostelApplication from "./CreateDirectHostelApplication";

const CreateAdmissionApplication = ({
  viewAs,
  admissionId,
  setCreateApplication,
  setRefetchOngoining,
  hostelId,
}) => {
  const [selectedApplicationType, setSelectedApplicationType] = useState("");

  return (
    <>
      {!selectedApplicationType ? (
        <PopupWrapper onClose={() => setCreateApplication((pre) => !pre)}>
          <SelectApplicationType
            onClose={() => setCreateApplication((pre) => !pre)}
            setSelectedApplicationType={setSelectedApplicationType}
          />
        </PopupWrapper>
      ) : selectedApplicationType === "Direct_Admission" ? (
        viewAs === "HOSTEL_MANAGER" ? (
          <CreateDirectHostelApplication
            hostelId={hostelId}
            onClose={() => setCreateApplication((pre) => !pre)}
            setRefetchOngoining={setRefetchOngoining}
            onCloseParent={() => setCreateApplication((pre) => !pre)}
          />
        ) : (
          <CreateDirectAdmissionApplication
            admissionId={admissionId}
            onClose={() => setSelectedApplicationType("")}
            setRefetchOngoining={setRefetchOngoining}
            onCloseParent={() => setCreateApplication((pre) => !pre)}
          />
        )
      ) : viewAs === "HOSTEL_MANAGER" ? (
        <CreateStepHostelApplication
          hostelId={hostelId}
          onClose={() => setCreateApplication((pre) => !pre)}
          setRefetchOngoining={setRefetchOngoining}
        />
      ) : (
        <CreateStepAdmissionApplication
          admissionId={admissionId}
          onClose={() => setSelectedApplicationType("")}
          onCloseParent={() => setCreateApplication((pre) => !pre)}
          setRefetchOngoining={setRefetchOngoining}
        />
      )}
    </>
  );
};

export default CreateAdmissionApplication;
