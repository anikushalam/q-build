import React, { useEffect, useState } from "react";
import {
  useAddNewFeesByAdmission,
  useAdmissionClassMasterList,
  useGetAllDepartment,
  useRenderStudentAdmissionFees,
} from "../../../../../../hooks/member_tab/admission-api";
import AdmissionFirstPopup from "./AdmissionFirstPopup";
import AdmissionSecondPopup from "./AdmissionSecondPopup";
import SelectFeeStructure from "../../../StaffAdmisionAdmin/AdmissionApplicationRequest/AdmssionStructureSelection/SelectFeeStructure";
import AdmissionThirdPopup from "./AdmissionThirdPopup";
import { useGetStudentFeesArrayQuery } from "../../../../../../services/qvipleAPI";

const AddStudentAdmissionCard = ({
  onClose,
  admissionId,
  instituteId,
  sid,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [department, setDepartment] = useState("");
  const [batch, setBatch] = useState("");
  const [classMaster, setClassMaster] = useState("");
  const [selectApplication, setSelectApplication] = useState("");
  const [selectStructure, setSelectStructure] = useState("");
  const [filled, setFilled] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { allDepartmentList, allDepartmentListRefetch } = useGetAllDepartment({
    aid: admissionId,
    skip: !admissionId,
  });
  const [addNewFeesByAdmission] = useAddNewFeesByAdmission();
  const { refetch: feesQueryRefetch } = useGetStudentFeesArrayQuery(`${sid}`, {
    skip: !sid,
  });
  const { sudentAdmissionFeesListRefetch } = useRenderStudentAdmissionFees({
    sid: sid,
    skip: !sid,
  });
  useEffect(() => {
    if (admissionId) {
      allDepartmentListRefetch();
    }
  }, [admissionId, allDepartmentListRefetch]);
  const onDepartmentSelect = (val) => {
    setDepartment(val);
  };
  const onBatchSelect = (val) => {
    setBatch(val);
  };

  const { admissionClassMasterList, admissionClassMasterListRefetch } =
    useAdmissionClassMasterList({
      did: department?._id,
      skip: !department?._id,
    });

  useEffect(() => {
    if (department?._id) {
      admissionClassMasterListRefetch();
    }
  }, [department?._id, admissionClassMasterListRefetch]);

  const onClassSelect = (val) => {
    setClassMaster(val);
  };
  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (!data[obj]) errors[obj] = `${obj} is required!`;
    }
    return errors;
  };
  const onNext = () => {
    const validation = onValidation({
      department: department?._id,
      batch: batch?._id,
      classMaster: classMaster?._id,
    });
    let flag = false;
    for (let errField in validation) {
      if (errField) {
        flag = true;
        break;
      }
    }
    if (flag) {
      setFilled(validation);
    } else {
      setActiveStep(1);
    }
  };
  const onSelectedApplication = (val) => {
    setSelectApplication(val);
    setActiveStep(2);
  };
  const onSelectedStrucutre = (val) => {
    setSelectStructure(val?._id);
    setActiveStep(3);
  };

  const onAddAdmissionFees = () => {
    if (sid && selectStructure && selectApplication) {
      setDisabled((pre) => !pre);
      addNewFeesByAdmission({
        sid: sid,
        addFees: {
          appId: selectApplication,
          struct: selectStructure,
        },
      })
        .then(() => {
          sudentAdmissionFeesListRefetch();
          feesQueryRefetch();
          setDisabled((pre) => !pre);
          onClose();
        })
        .catch({});
    }
  };
  return (
    <>
      {activeStep === 0 && (
        <AdmissionFirstPopup
          onClose={onClose}
          onDepartmentSelect={onDepartmentSelect}
          onBatchSelect={onBatchSelect}
          onClassSelect={onClassSelect}
          allDepartment={allDepartmentList?.allDB ?? []}
          allStandard={admissionClassMasterList?.classMasters ?? []}
          department={department}
          batch={batch}
          classMaster={classMaster}
          filled={filled}
          onNext={onNext}
        />
      )}
      {activeStep === 1 && (
        <AdmissionSecondPopup
          onGrabApplication={onSelectedApplication}
          onClose={() => setActiveStep(0)}
          departmentId={department?._id}
          classMasterId={classMaster?._id}
          batchId={batch?._id}
          selectApplication={selectApplication}
          instituteId={instituteId}
        />
      )}
      {activeStep === 2 && (
        <SelectFeeStructure
          asOpen="ADMISSION_APPLICATION"
          onSelectedStrucutre={onSelectedStrucutre}
          onClose={() => setActiveStep(1)}
          departmentId={department?._id}
          classMasterId={classMaster?._id}
          batchId={batch?._id}
          selectStructure={selectStructure}
        />
      )}
      {activeStep === 3 && (
        <AdmissionThirdPopup
          onClose={() => setActiveStep(2)}
          disabled={disabled}
          onAddAdmissionFees={onAddAdmissionFees}
        />
      )}
    </>
  );
};

export default AddStudentAdmissionCard;
