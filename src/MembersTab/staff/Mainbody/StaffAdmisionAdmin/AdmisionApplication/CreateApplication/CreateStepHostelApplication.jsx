import React, { useEffect, useState } from "react";
import style from "../../../DepartmentHead/Exminations/SeatingArrangement/SeatingArrangement.module.css";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import CustomSelectDepartment from "../../../../../../JoiningForm/Student/Form/CustomSelectDepartment";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../../../Loader/QLoader";
import {
  useCreateHostelApplication,
  useGetHostelAllBatch,
  useGetHostelAllStandard,
  useGetHostelUnitList,
} from "../../../../../../hooks/member_tab/hostel-api";
import ApplicationOtherInfo from "./ApplicationOtherInfo";
const CreateStepHostelApplication = ({
  onClose,
  hostelId,
  setRefetchOngoining,
}) => {
  const { t } = useTranslation();
  const [activeStep, setActivatedStep] = useState(0);
  const [filled, setFilled] = useState("");
  const [hostelUnit, setHostelUnit] = useState("");
  const [formdata, setFormData] = useState({
    applicationName: "",
    gr_initials: "",
  });
  const [batch, setBatch] = useState("");
  const [classMaster, setClassMaster] = useState("");

  const { getHostelUnitList, getHostelUnitListRefetch } = useGetHostelUnitList({
    data: {
      hid: hostelId,
      page: 1,
      limit: 1000,
      search: "",
    },
    skip: !hostelId,
  });
  const { getHostelAllBatch, getHostelAllBatchRefetch } = useGetHostelAllBatch({
    data: {
      hid: hostelId,
      page: 1,
      limit: 1000,
    },
    skip: !hostelId,
  });

  const { getHostelAllStandard, getHostelAllStandardRefetch } =
    useGetHostelAllStandard({
      hid: hostelId,
      skip: !hostelId,
    });
  useEffect(() => {
    if (hostelId) {
      getHostelAllBatchRefetch();
      getHostelUnitListRefetch();
      getHostelAllStandardRefetch();
    }
  }, [
    hostelId,
    getHostelAllBatchRefetch,
    getHostelUnitListRefetch,
    getHostelAllStandardRefetch,
  ]);

  const [createHostelApplication] = useCreateHostelApplication();

  const onSelectHostelUnit = (val) => {
    setHostelUnit(val);
  };
  const onActiveStep = (val) => {
    setActivatedStep(val);
  };

  const onBatchSelect = (val) => {
    setBatch(val);
  };
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
      hostelUnit: hostelUnit?._id,
      applicationName: formdata.applicationName,
      batch: batch?._id,
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
  const onCreateApplication = (other) => {
    setActivatedStep(2);
    const sendObj = {
      applicationName: formdata.applicationName,
      gr_initials: formdata.gr_initials,
      applicationUnit: hostelUnit?._id,
      applicationBatch: batch?._id,
      applicationMaster: classMaster?._id,
      application_type: "Step Wise Admission",
      ...other,
    };
    createHostelApplication({
      hid: hostelId,
      new_Data: sendObj,
    })
      .then(() => {
        setRefetchOngoining();
        onClose();
        setActivatedStep(0);
      })
      .catch({});
  };
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
              <h6>{t("create_new_application")}</h6>
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
            {/* <JoinFormInput
              labelText={t("application_initials")}
              placeholder={t("department_initials_placeholder")}
              name={"gr_initials"}
              value={formdata?.gr_initials}
              type={"text"}
              onChange={onInputChange}
              errorShow={filled["gr_initials"]}
            /> */}

            <CustomSelectDepartment
              selectLabel={t("select_unit")}
              onClick={onSelectHostelUnit}
              selectedValue={t("select_unit_placeholder")}
              options={getHostelUnitList?.all_units ?? []}
              errorShow={filled["hostelUnit"]}
              openAs="PROMOTE"
              viewAs={"ADMISSION_APPLICATION"}
              defalutValue={hostelUnit?.hostel_unit_name}
            />

            <CustomSelectDepartment
              selectLabel={t("select_batch")}
              onClick={onBatchSelect}
              selectedValue={t("select_batch_placeholder")}
              options={
                getHostelAllBatch?.all_batches?.length
                  ? getHostelAllBatch?.all_batches
                  : []
              }
              errorShow={filled["batch"]}
              openAs="PROMOTE"
              viewAs={"ADMISSION_APPLICATION"}
              defalutValue={batch?.batchName}
            />

            <CustomSelectDepartment
              selectLabel={t("select_standerd")}
              onClick={onClassSelect}
              selectedValue={t("please_select_standerd")}
              options={getHostelAllStandard?.all_masters ?? []}
              openAs="PROMOTE"
              viewAs={"ADMISSION_APPLICATION"}
              defalutValue={classMaster?.className}
            />

            <button className={style.start_arrangement_btn} onClick={onNext}>
              {t("next")}
            </button>
          </div>
        </PopupWrapper>
      )}
      {activeStep === 1 && (
        <ApplicationOtherInfo
          onClose={() => onActiveStep(0)}
          onCreateApplication={onCreateApplication}
          isType="Normal Application"
        />
      )}
      {activeStep === 2 && <QLoader />}
    </>
  );
};

export default CreateStepHostelApplication;
