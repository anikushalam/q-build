import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useClassAllBatchWithClass,
  useClassAllDepartmentWithBatch,
} from "../../../../../hooks/member_tab/class-api";
import CustomSelectDepartment from "../../../../../JoiningForm/Student/Form/CustomSelectDepartment";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../PromoteDepartment.module.css";
import SelectNotPromoteStudent from "./SelectNotPromoteStudent";
import CustomNormalSelectInput from "../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";

const Promote = ({ onClose, classId, onRefetchParent }) => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState("INITIAL_STEP");
  const [promoteData, setPromoteData] = useState({
    promot_with_fees: "",
    applicable_with_fees: "",
    departmentId: "",
    batchId: "",
    classId: "",
    students: [],
    re_ads: "",
  });
  const [filled, setFilled] = useState("");

  const { classAllDepartmentWithBatch, classAllDepartmentWithBatchRefetch } =
    useClassAllDepartmentWithBatch({
      data: {
        cid: classId,
        page: 1,
        limit: 30,
      },
      skip: !classId,
    });

  const { classAllBatchWithClass, classAllBatchWithClassRefetch } =
    useClassAllBatchWithClass({
      data: {
        bid: promoteData.batchId?._id,
        page: 1,
        limit: 30,
      },
      skip: !promoteData.batchId?._id,
    });
  React.useEffect(() => {
    if (classId) classAllDepartmentWithBatchRefetch();
  }, [classId, classAllDepartmentWithBatchRefetch]);

  React.useEffect(() => {
    if (promoteData.batchId?._id) classAllBatchWithClassRefetch();
  }, [promoteData.batchId?._id, classAllBatchWithClassRefetch]);

  const onDepartmentSelect = (val) => {
    setPromoteData((prev) => ({
      ...prev,
      departmentId: val,
    }));
  };
  const onBatchSelect = (val) => {
    setPromoteData((prev) => ({
      ...prev,
      batchId: val,
    }));
  };
  const onMasterSelect = (val) => {
    setPromoteData((prev) => ({
      ...prev,
      classId: val,
    }));
  };

  const onChooseYes = (val) => {
    setPromoteData((prev) => ({
      ...prev,
      promot_with_fees: val,
    }));
  };

  const onChooseFees = (val) => {
    setPromoteData((prev) => ({
      ...prev,
      applicable_with_fees: val,
    }));
  };

  const onChooseReadmission = (val) => {
    setPromoteData((prev) => ({
      ...prev,
      re_ads: val,
    }));
  };
  const onValidation = (collectPayment) => {
    const errors = {};
    for (let obj in collectPayment) {
      if (obj === "students") {
      } else {
        if (!collectPayment[obj]) {
          errors[obj] = `${obj} is required!`;
        }
      }
    }
    return errors;
  };
  const onShowStudent = () => {
    const validation = onValidation(promoteData);
    let flag = false;
    for (let errField in validation) {
      flag = true;
      break;
    }
    if (flag) {
      setFilled(validation);
    } else {
      setActiveStep("SELECT_STUDENT");
    }
  };

  // console.info("fdgs", promoteData);
  return (
    <PopupWrapper
      onClose={
        activeStep === "INITIAL_STEP"
          ? onClose
          : () => setActiveStep("INITIAL_STEP")
      }
    >
      <div className={style.promote_container}>
        {activeStep === "INITIAL_STEP" && (
          <>
            <h6
              style={{
                textAlign: "center",
              }}
            >
              {t("promote_students")}
            </h6>
            <BorderBottom
              customStyle={{
                width: "100%",
              }}
            />
            <CustomNormalSelectInput
              selectLabel={t("promote_with_fees_structure")}
              selectedValue={t("select_yes_or_no")}
              options={["Yes", "No"]}
              value={promoteData.promot_with_fees}
              errorShow={filled["promot_with_fees"]}
              onClick={onChooseYes}
            />

            <CustomSelectDepartment
              selectLabel={t("select_department")}
              selectedValue={t("select_department")}
              options={classAllDepartmentWithBatch?.departmets ?? []}
              onClick={onDepartmentSelect}
              openAs="PROMOTE"
              errorShow={filled["departmentId"]}
            />
            <CustomSelectDepartment
              selectLabel={t("select_batch")}
              selectedValue={t("select_batch")}
              options={promoteData.departmentId?.batches ?? []}
              onClick={onBatchSelect}
              openAs="PROMOTE"
              errorShow={filled["batchId"]}
            />

            <CustomSelectDepartment
              selectLabel={t("select_class")}
              selectedValue={t("select_class")}
              options={classAllBatchWithClass?.classes ?? []}
              onClick={onMasterSelect}
              openAs="PROMOTE"
              errorShow={filled["classId"]}
            />

            <CustomNormalSelectInput
              selectLabel={t("promote_applicable_fee")}
              selectedValue={t("select_yes_or_no")}
              options={["Yes", "No"]}
              value={promoteData.applicable_with_fees}
              errorShow={filled["applicable_with_fees"]}
              onClick={onChooseFees}
            />

            <CustomNormalSelectInput
              selectLabel={t("promote_with_re_admission")}
              selectedValue={t("select_yes_or_no")}
              options={["Yes", "No"]}
              value={promoteData.re_ads}
              // errorShow={filled["re_ads"]}
              onClick={onChooseReadmission}
            />
            <button
              className={style.select_application_btn}
              onClick={onShowStudent}
              style={{
                width: "100%",
              }}
              title="Select student"
            >
              <div>{t("select_student")}</div>
              <img src="/images/forward-right-icon.svg" alt="next step" />
            </button>
          </>
        )}

        {activeStep === "SELECT_STUDENT" && (
          <SelectNotPromoteStudent
            classId={classId}
            setPromoteData={setPromoteData}
            promoteData={promoteData}
            onClose={onClose}
            onRefetchParent={onRefetchParent}
          />
        )}
      </div>
    </PopupWrapper>
  );
};

export default Promote;
