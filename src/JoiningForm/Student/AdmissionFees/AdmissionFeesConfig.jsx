import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import JoinFormInput from "../Form/JoinFormInput";
import SelectApplication from "./SelectApplication";
import SelectBatch from "./SelectBatch";
import SelectFeeStructure from "./SelectFeeStructure";

const AdmissionFeesConfig = ({
  admissionId,
  onNewFieldInputChange,
  index,
  classMasterId,
}) => {
  const { t } = useTranslation();
  const [departmentId, setDepartmentId] = useState("");
  const [bId, setBId] = useState("");
  const [state, setState] = useState({
    amount: "",
    appName: "",
    fee_struct_name_amount: "",
    batchName: "",
  });
  const onInputChange = () => {};
  const onApplicationSelect = (val) => {
    setState((prev) => ({
      ...prev,
      appName: val?.applicationName ?? "",
    }));
    setDepartmentId(val?.applicationDepartment?._id ?? "");
    onNewFieldInputChange(
      {
        name: "appId",
        value: val?._id,
      },
      index
    );
  };
  const onFeeStructureSelect = (val) => {
    // console.info("ddjs fee_struct_name_amount", val);
    setState((prev) => ({
      ...prev,
      fee_struct_name_amount: val?.total_admission_fees,
    }));
    onNewFieldInputChange(
      {
        name: "fee_struct",
        value: val?._id,
      },
      index
    );
  };
  const onBatchSelect = (val) => {
    setState((prev) => ({
      ...prev,
      batchName: val?.batchName,
    }));
    onNewFieldInputChange(
      {
        name: "batchId",
        value: val?._id,
      },
      index
    );
    setBId(val?._id);
  };
  const onAmountChange = (e) => {
    // if (+e.target.value <= state.fee_struct_name_amount) {
    setState((prev) => ({
      ...prev,
      amount: +e.target.value,
    }));
    onNewFieldInputChange(
      {
        name: "amount",
        value: state.fee_struct_name_amount - +e.target.value,
      },
      index
    );
    // }
  };

  //   console.info("nmsdjstate", state);
  return (
    <>
      <SelectApplication
        selectLabel={t("form_select_application_label")}
        selectedValue={t("form_select_application_placeholder")}
        name={"application"}
        onChange={onInputChange}
        customStyleContainer={{
          width: "24%",
        }}
        // errorShow={formErrors["mode"]}
        admissionId={admissionId}
        setDepartmentId={setDepartmentId}
        onApplicationSelect={onApplicationSelect}
        // studentNewFieldIds={studentNewFieldIds}
      />
      <SelectBatch
        selectLabel={t("form_select_batch_label")}
        selectedValue={t("form_select_batch_placeholder")}
        name={"batch"}
        customStyleContainer={{
          width: "24%",
        }}
        // errorShow={formErrors["mode"]}
        departmentId={departmentId}
        onBatchSelect={onBatchSelect}
        // studentNewFieldIds={studentNewFieldIds}
      />
      <SelectFeeStructure
        selectLabel={t("form_select_fee_structure_label")}
        selectedValue={t("form_select_fee_structure_label")}
        value={state.fee_struct_name}
        name={"fees"}
        customStyleContainer={{
          width: "24%",
        }}
        // errorShow={formErrors["mode"]}
        departmentId={departmentId}
        classMasterId={classMasterId}
        batchId={bId}
        onFeeStructureSelect={onFeeStructureSelect}
        // studentNewFieldIds={studentNewFieldIds}
      />

      <JoinFormInput
        labelText={t("form_remaining_amount_label")}
        placeholder={t("form_remaining_amount_label_placeholder")}
        name={"amount"}
        value={state.amount}
        type={"text"}
        onChange={onAmountChange}
        customStyleContainer={{
          width: "24%",
        }}
      />
    </>
  );
};

export default AdmissionFeesConfig;
