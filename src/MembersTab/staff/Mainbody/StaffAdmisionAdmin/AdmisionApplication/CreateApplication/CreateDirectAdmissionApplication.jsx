import React, { useEffect, useState } from "react";
import style from "../../../DepartmentHead/Exminations/SeatingArrangement/SeatingArrangement.module.css";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import CustomSelectDepartment from "../../../../../../JoiningForm/Student/Form/CustomSelectDepartment";
import {
  useAdmissionClassMasterList,
  useCreateNewApplication,
  useGetAllDepartment,
} from "../../../../../../hooks/member_tab/admission-api";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import SelectApplicationDivision from "./SelectApplicationDivision";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import ApplicationOtherInfo from "./ApplicationOtherInfo";
import QLoader from "../../../../../../Loader/QLoader";
import SelectFeeStructure from "../../AdmissionApplicationRequest/AdmssionStructureSelection/SelectFeeStructure";
const CreateDirectAdmissionApplication = ({
  onClose,
  admissionId,
  setRefetchOngoining,
  onCloseParent,
}) => {
  const { t } = useTranslation();
  const [activeStep, setActivatedStep] = useState(0);
  const [filled, setFilled] = useState("");
  const [department, setDepartment] = useState("");
  const [batch, setBatch] = useState("");
  const [classMaster, setClassMaster] = useState("");
  const [selectStructure, setSelectStructure] = useState("");
  const [selectDivision, setSelectDivision] = useState("");
  const [formdata, setFormData] = useState({
    applicationName: "",
    gr_initials: "",
  });
  const { allDepartmentList, allDepartmentListRefetch } = useGetAllDepartment({
    aid: admissionId,
    skip: !admissionId,
  });

  const [createNewApplication] = useCreateNewApplication();

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

  const onActiveStep = (val) => {
    setActivatedStep(val);
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
      applicationName: formdata.applicationName,
      // gr_initials: formdata.gr_initials,
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
      onActiveStep(1);
    }
  };
  const onSelectedStrucutre = (val) => {
    setSelectStructure(val?._id);
    onActiveStep(2);
  };
  const onSelectedDivision = (val) => {
    setSelectDivision(val?._id);
    onActiveStep(3);
  };

  const onInputChange = (e) => {
    if (e.target.name === "gr_initials") {
      if (e.target.value?.length <= 10)
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
    } else
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
  };

  const onSkip = () => {
    onActiveStep(3);
  };

  const onCreateApplication = (other) => {
    setActivatedStep(5);
    const sendObj = {
      applicationName: formdata.applicationName,
      gr_initials: formdata.gr_initials,
      applicationDepartment: department?._id,
      applicationBatch: batch?._id,
      applicationMaster: classMaster?._id,
      direct_linked_structure: selectStructure,
      direct_attach_class: selectDivision ?? "",
      application_type: "Direct Admisison",
      ...other,
    };
    createNewApplication({
      aid: admissionId,
      new_Data: sendObj,
    })
      .then(() => {
        // console.info(res);
        setRefetchOngoining();
        onCloseParent();
        setActivatedStep(0);
      })
      .catch({});

    // for (let [key, value] of application.entries()) {
    //   console.info(key, ":", value);
    // }
  };
  //   console.info("slfdsgfsfkdf", department, batch, classMaster);
  return (
    <>
      {activeStep === 0 && (
        <PopupWrapper onClose={onClose}>
          <div className={style.seating_modal}>
            <section
              className={style.seating_modal_title_left}
              style={{
                position: "relative",
              }}
            >
              <img
                src="/images/arrow-left-fees-icon.svg"
                onClick={onClose}
                alt=""
              />
              <h6>{t("new_direct_admission_application")}</h6>
            </section>
            <BorderBottom
              customStyle={{
                width: "100%",
              }}
            />
            <JoinFormInput
              labelText={t("application_name")}
              placeholder={t("please_enter_application_name")}
              name={"applicationName"}
              value={formdata?.applicationName}
              type={"text"}
              onChange={onInputChange}
              errorShow={filled["applicationName"]}
            />
            <JoinFormInput
              labelText={t("application_initials")}
              placeholder={t("department_initials_placeholder")}
              name={"gr_initials"}
              value={formdata?.gr_initials}
              type={"text"}
              onChange={onInputChange}
              errorShow={filled["gr_initials"]}
            />

            <CustomSelectDepartment
              selectLabel={t("select_department")}
              onClick={onDepartmentSelect}
              selectedValue={t("please_select_the_department")}
              options={allDepartmentList?.allDB ?? []}
              errorShow={filled["department"]}
              openAs="PROMOTE"
              viewAs={"ADMISSION_APPLICATION"}
              defalutValue={department?.dName}
            />
            <CustomSelectDepartment
              selectLabel={t("select_batch")}
              onClick={onBatchSelect}
              selectedValue={t("select_batch_placeholder")}
              options={department?.batches ?? []}
              errorShow={filled["batch"]}
              openAs="PROMOTE"
              defalutValue={batch?.batchName}
            />
            <CustomSelectDepartment
              selectLabel={t("select_standerd")}
              onClick={onClassSelect}
              selectedValue={t("please_select_standerd")}
              options={admissionClassMasterList?.classMasters ?? []}
              errorShow={filled["classMaster"]}
              openAs="PROMOTE"
              defalutValue={classMaster?.className}
            />
            <button className={style.start_arrangement_btn} onClick={onNext}>
              {t("next")}
            </button>
          </div>
        </PopupWrapper>
      )}
      {activeStep === 1 && (
        <SelectFeeStructure
          onClose={() => onActiveStep(0)}
          departmentId={department?._id}
          classMasterId={classMaster?._id}
          batchId={batch?._id}
          asOpen="ADMISSION_APPLICATION"
          onSelectedStrucutre={onSelectedStrucutre}
        />
      )}
      {activeStep === 2 && (
        <SelectApplicationDivision
          onClose={() => onActiveStep(1)}
          bid={batch?._id}
          onSelectedDivision={onSelectedDivision}
          onSkip={onSkip}
        />
      )}
      {activeStep === 3 && (
        <ApplicationOtherInfo
          onClose={() => onActiveStep(2)}
          onCreateApplication={onCreateApplication}
          isDirect
        />
      )}
      {activeStep === 5 && <QLoader />}
    </>
  );
};

export default CreateDirectAdmissionApplication;
