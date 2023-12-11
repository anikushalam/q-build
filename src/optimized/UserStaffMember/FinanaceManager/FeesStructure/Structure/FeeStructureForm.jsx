import { useEffect, useState } from "react";
import style from "../FeesStructure.module.css";
import FormInput from "../../../../Ui/Input/FormInput";
import CustomSelectBatch from "../../../../Ui/Select/CustomSelectBatch";
import CustomSelectCategory from "../../../../Ui/Select/CustomSelectCategory";
import CustomSelectStandard from "../../../../Ui/Select/CustomSelectStandard";
import {
  useDepartmentAllBatch,
  useDepartmentAllClassMaster,
  useFinanceAllFeesCategory,
} from "../../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { assestsUserFinanceUrl } from "../../../../Services/UrlConfig/AssestsBaseUrl";
import UserMemberContentWrapper from "../../../../Ui/UserMember/UserMemberContentWrapper";
import Modal from "../../../../Ui/Modal/Modal";
import BorderBottom from "../../../../Ui/Border/BorderBottom";
import { useTranslation } from "react-i18next";
import SetButton from "../../../../Ui/Button/SetButton";
import {
  existingRequiredField,
  requiredField,
} from "../../../../Validation/functions/checkingRequiredField";

const FeeStructureForm = ({
  onClose,
  did,
  instituteId,
  fid,
  structure,
  setStructure,
  setStep,
}) => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    structure_name: structure?.structure_name ?? "",
    category_master: structure?.category_master ?? "",
    class_master: structure?.class_master ?? "",
    batch_master: structure?.batch_master ?? "",
  });
  const [errorField, setErrorField] = useState("");

  useEffect(() => {
    if (structure?.structure_name) {
      setState((prev) => ({
        ...prev,
        structure_name: structure?.structure_name ?? "",
        category_master: structure?.category_master ?? "",
        class_master: structure?.class_master ?? "",
        batch_master: structure?.batch_master ?? "",
      }));
    }
  }, [structure?.structure_name]);

  const { departmentAllBatch } = useDepartmentAllBatch({
    did: did,
    skip: !did,
  });

  const { departmentAllClassMaster } = useDepartmentAllClassMaster({
    data: {
      did: did,
      id: instituteId,
    },
    skip: !did ? !did : !instituteId,
  });

  const { financeAllFeesCategory } = useFinanceAllFeesCategory({
    fid: fid,
    skip: !fid,
  });

  const onInputChange = (e) => {
    setState((prev) => ({
      ...prev,
      structure_name: e.target.value,
    }));
  };
  const onBatchSelect = (value) => {
    setState((prev) => ({
      ...prev,
      batch_master: value,
    }));
  };

  const onCategorySelect = (value) => {
    setState((prev) => ({
      ...prev,
      category_master: value,
    }));
  };

  const onStandardSelect = (value) => {
    setState((prev) => ({
      ...prev,
      class_master: value,
    }));
  };

  const onSetFeeStructure = () => {
    let validation = requiredField(state);
    if (existingRequiredField(validation)) {
      setStructure((prev) => ({
        ...prev,
        ...state,
      }));
      setStep(1);
    } else {
      setErrorField(validation);
    }
  };
  return (
    <>
      <Modal>
        <div className={style.modal_container}>
          <UserMemberContentWrapper>
            <div className={style.modal_container_outer_header}>
              <div className={style.modal_container_header}>
                <h6>{t("add_new_fees_structure")}</h6>
              </div>
              <img
                src={`${assestsUserFinanceUrl}/close.svg`}
                alt="close icon"
                onClick={onClose}
              />
            </div>
          </UserMemberContentWrapper>
          <BorderBottom />
          <UserMemberContentWrapper
            customStyle={{
              paddingTop: "0",
            }}
          >
            <FormInput
              label={t("fee_structure_name")}
              placeholder={t("fee_structure_name_placeholder")}
              type="text"
              name={"structure_name"}
              value={state.structure_name}
              onChange={onInputChange}
              errorShow={errorField["structure_name"]}
            />
            <CustomSelectBatch
              selectLabel={t("select_batch")}
              selectedValue={t("select_batch_placeholder")}
              options={departmentAllBatch?.length > 0 ? departmentAllBatch : []}
              onClick={onBatchSelect}
              viewAs="NORMAL_FILTER"
              defalutValue={state.batch_master?.batchName}
              errorShow={errorField["batch_master"]}
              isFull
            />
            <CustomSelectCategory
              selectLabel={t("select_fee_category_master")}
              selectedValue={t("please_select_fees_category")}
              options={
                financeAllFeesCategory?.length > 0 ? financeAllFeesCategory : []
              }
              onClick={onCategorySelect}
              viewAs="NORMAL_FILTER"
              defalutValue={state.category_master?.category_name}
              errorShow={errorField["category_master"]}
              isFull
            />

            <CustomSelectStandard
              selectLabel={t("select_standard")}
              selectedValue={t("please_select_the_standard_master")}
              defalutValue={state.class_master?.className}
              onClick={onStandardSelect}
              name="class_master"
              options={
                departmentAllClassMaster?.length > 0
                  ? departmentAllClassMaster
                  : []
              }
              errorShow={errorField["class_master"]}
              viewAs="NORMAL_FILTER"
              isFull
            />

            <SetButton label="set_fee_structure" onAction={onSetFeeStructure} />
          </UserMemberContentWrapper>
        </div>
      </Modal>
    </>
  );
};

export default FeeStructureForm;
