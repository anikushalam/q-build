import React, { useEffect, useState } from "react";
import SelectFeesCategory from "./SelectFeesCategory";
import SelectStandard from "./SelectStandard";
import style from "./FeesStructure.module.css";
import { useTranslation } from "react-i18next";
import { useOneViewDepartment } from "../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import CustomSelectDepartment from "../../../../../JoiningForm/Student/Form/CustomSelectDepartment";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import {
  useGetHostelAllBatch,
  useGetHostelAllStandard,
  useGetHostelUnitList,
} from "../../../../../hooks/member_tab/hostel-api";
import {
  useGetTransportAllBatch,
  useGetTransportAllStandard,
  useGetVehicleList,
} from "../../../../../hooks/member_tab/transport-api";

const SelectCategoryMaster = ({
  financeId,
  instituteId,
  departmentId,
  setFeesStructure,
  onSetNewIndex,
  setMaster,
  master,
  feesStructure,
  flowAs,
}) => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    categoryMaster: master?.category ?? "",
    classMaster: master?.standard ?? "",
    unit_master: master?.unit_master ?? "",
    vehicle_master: master?.vehicle_master ?? "",
    batch_master: master?.batch_master ?? "",
  });
  const [filled, setFilled] = useState("");
  const { oneDepartment, oneDepartmentRefetch } = useOneViewDepartment({
    did: departmentId,
    skip:
      flowAs === "Hostel_Manager" || flowAs === "Transport_Manager"
        ? true
        : !departmentId,
  });

  // for hostel related all batch
  const { getHostelAllBatch, getHostelAllBatchRefetch } = useGetHostelAllBatch({
    data: {
      hid: departmentId,
      page: 1,
      limit: 1000,
    },
    skip: flowAs === "Hostel_Manager" ? !departmentId : true,
  });
  const { getHostelAllStandard, getHostelAllStandardRefetch } =
    useGetHostelAllStandard({
      hid: departmentId,
      skip: flowAs === "Hostel_Manager" ? !departmentId : true,
    });
  const { getHostelUnitList, getHostelUnitListRefetch } = useGetHostelUnitList({
    data: {
      hid: departmentId,
      page: 1,
      limit: 1000,
      search: "",
    },
    skip: flowAs === "Hostel_Manager" ? !departmentId : true,
  });

  useEffect(() => {
    if (departmentId) {
      getHostelAllBatchRefetch();
      getHostelAllStandardRefetch();
      getHostelUnitListRefetch();
    }
  }, [
    departmentId,
    getHostelAllBatchRefetch,
    getHostelUnitListRefetch,
    getHostelAllStandardRefetch,
  ]);

  // for transport related all batch
  const { getTransportAllBatch, getTransportAllBatchRefetch } =
    useGetTransportAllBatch({
      data: {
        tid: departmentId,
        page: 1,
        limit: 1000,
      },
      skip: flowAs === "Transport_Manager" ? !departmentId : true,
    });
  const { getTransportAllStandard, getTransportAllStandardRefetch } =
    useGetTransportAllStandard({
      tid: departmentId,
      skip: flowAs === "Transport_Manager" ? !departmentId : true,
    });
  const { getVehicleList, getVehicleListRefetch } = useGetVehicleList({
    data: {
      tid: departmentId,
      page: 1,
      limit: 1000,
      search: "",
    },
    skip: flowAs === "Transport_Manager" ? !departmentId : true,
  });

  useEffect(() => {
    if (departmentId) {
      getTransportAllBatchRefetch();
      getTransportAllStandardRefetch();
      getVehicleListRefetch();
    }
  }, [
    departmentId,
    getTransportAllBatchRefetch,
    getVehicleListRefetch,
    getTransportAllStandardRefetch,
  ]);

  useEffect(() => {
    if (departmentId) {
      oneDepartmentRefetch();
    }
  }, [departmentId, oneDepartmentRefetch]);
  const onSelectOption = (e) => {
    if (e.name === "categoryMaster") {
      setState((prev) => ({
        ...prev,
        [e.name]: e.value?.category_name,
      }));
      setFeesStructure((prev) => ({
        ...prev,
        category_master: e.value?._id,
      }));
      setMaster((prev) => ({
        ...prev,
        category: e.value?.category_name,
      }));
    } else {
      // if (flowAs === "Hostel_Manager") {
      //   setState((prev) => ({
      //     ...prev,
      //     [e.name]: `${e.value?.className} - ${e.value?.department?.dName}`,
      //   }));
      //   setFeesStructure((prev) => ({
      //     ...prev,
      //     class_master: e.value?._id,
      //   }));
      //   setMaster((prev) => ({
      //     ...prev,
      //     standard: `${e.value?.className} - ${e.value?.department?.dName}`,
      //   }));
      // } else {
      setState((prev) => ({
        ...prev,
        [e.name]: e.value?.className,
      }));
      setFeesStructure((prev) => ({
        ...prev,
        class_master: e.value?._id,
      }));
      setMaster((prev) => ({
        ...prev,
        standard: e.value?.className,
      }));
      // }
    }
  };

  const onStructureName = (e) => {
    setFeesStructure((prev) => ({
      ...prev,
      structure_name: e.target.value,
    }));
  };
  const onBatchSelect = (val) => {
    setState((prev) => ({
      ...prev,
      batch_master: val?.batchName,
    }));
    setFeesStructure((prev) => ({
      ...prev,
      batch_master: val?._id,
    }));
    setMaster((prev) => ({
      ...prev,
      batch_master: val?.batchName,
    }));
  };
  const onStandardSelect = (val) => {
    setState((prev) => ({
      ...prev,
      classMaster: val?.className,
    }));
    setFeesStructure((prev) => ({
      ...prev,
      class_master: val?._id ?? null,
    }));
    setMaster((prev) => ({
      ...prev,
      standard: val?.className,
    }));
  };

  const onSelectHostelUnit = (val) => {
    setState((prev) => ({
      ...prev,
      unit_master: val?.hostel_unit_name,
    }));
    setFeesStructure((prev) => ({
      ...prev,
      unit_master: val?._id ?? null,
    }));
    setMaster((prev) => ({
      ...prev,
      unit_master: val?.hostel_unit_name,
    }));
  };
  const onSelectTransportVehicle = (val) => {
    setState((prev) => ({
      ...prev,
      vehicle_master: val?.vehicle_number,
    }));
    setFeesStructure((prev) => ({
      ...prev,
      vehicle_master: val?._id ?? null,
    }));
    setMaster((prev) => ({
      ...prev,
      vehicle_master: val?.vehicle_number,
    }));
  };
  const onValidation = (state, structName) => {
    const errors = {};
    for (let obj in state) {
      if (flowAs === "Hostel_Manager" && obj === "classMaster") {
      } else if (flowAs === "Transport_Manager" && obj === "classMaster") {
      } else if (obj === "unit_master") {
      } else if (flowAs !== "Transport_Manager" && obj === "vehicle_master") {
      } else {
        if (!state[obj]) errors[obj] = `${obj} is required!`;
      }
    }
    if (!structName) errors["structure_name"] = `structure_name is required!`;
    return errors;
  };

  const onMoveNextStep = () => {
    const validation = onValidation(state, feesStructure?.structure_name);
    let flag = false;
    for (let errField in validation) {
      flag = true;
      break;
    }
    if (flag) {
      setFilled(validation);
    } else {
      onSetNewIndex(1);
    }
  };

  // console.info("fmdans", filled);
  return (
    <div>
      <JoinFormInput
        labelText={t("fee_structure_name")}
        placeholder={t("fee_structure_name_placeholder")}
        type="text"
        name={"structure_name"}
        value={feesStructure?.structure_name}
        onChange={onStructureName}
        errorShow={filled["structure_name"]}
      />
      {flowAs === "Hostel_Manager" ? (
        <CustomSelectDepartment
          selectLabel={t("select_batch")}
          selectedValue={t("select_batch_placeholder")}
          options={
            getHostelAllBatch?.all_batches?.length
              ? getHostelAllBatch?.all_batches
              : []
          }
          onClick={onBatchSelect}
          viewAs="EVENT_MANAGER"
          defalutValue={state.batch_master}
          openAs="PROMOTE"
          errorShow={filled["batch_master"]}
        />
      ) : flowAs === "Transport_Manager" ? (
        <CustomSelectDepartment
          selectLabel={t("select_batch")}
          selectedValue={t("select_batch_placeholder")}
          options={
            getTransportAllBatch?.all_batches?.length
              ? getTransportAllBatch?.all_batches
              : []
          }
          onClick={onBatchSelect}
          viewAs="EVENT_MANAGER"
          defalutValue={state.batch_master}
          openAs="PROMOTE"
          errorShow={filled["batch_master"]}
        />
      ) : (
        <CustomSelectDepartment
          selectLabel={t("select_batch")}
          selectedValue={t("select_batch_placeholder")}
          options={
            oneDepartment?.department?.batches
              ? [...oneDepartment?.department?.batches]
              : []
          }
          onClick={onBatchSelect}
          viewAs="EVENT_MANAGER"
          defalutValue={state.batch_master}
          openAs="PROMOTE"
          errorShow={filled["batch_master"]}
        />
      )}
      <SelectFeesCategory
        financeId={financeId}
        categoryMaster={state.categoryMaster}
        onSelectOption={onSelectOption}
        filled={filled}
      />
      {flowAs === "Hostel_Manager" ? (
        <>
          <CustomSelectDepartment
            selectLabel={t("select_standard")}
            selectedValue={t("please_select_the_standard_master")}
            options={getHostelAllStandard?.all_masters ?? []}
            onClick={onStandardSelect}
            viewAs="EVENT_MANAGER"
            defalutValue={state.classMaster}
            openAs="PROMOTE"
          />

          <CustomSelectDepartment
            selectLabel={t("select_unit")}
            onClick={onSelectHostelUnit}
            selectedValue={t("select_unit_placeholder")}
            options={getHostelUnitList?.all_units ?? []}
            errorShow={filled["hostelUnit"]}
            openAs="PROMOTE"
            viewAs={"ADMISSION_APPLICATION"}
            defalutValue={state?.unit_master}
          />
        </>
      ) : flowAs === "Transport_Manager" ? (
        <>
          <CustomSelectDepartment
            selectLabel={t("select_standard")}
            selectedValue={t("please_select_the_standard_master")}
            options={getTransportAllStandard?.all_masters ?? []}
            onClick={onStandardSelect}
            viewAs="EVENT_MANAGER"
            defalutValue={state.classMaster}
            openAs="PROMOTE"
            errorShow={filled["classMaster"]}
          />

          <CustomSelectDepartment
            selectLabel={t("select_vehicle")}
            onClick={onSelectTransportVehicle}
            selectedValue={t("select_vehicle_placeholder")}
            options={getVehicleList?.all_vehicles ?? []}
            openAs="PROMOTE"
            viewAs={"ADMISSION_APPLICATION"}
            defalutValue={state?.vehicle_master}
            errorShow={filled["vehicle_master"]}
          />
        </>
      ) : (
        <SelectStandard
          departmentId={departmentId}
          instituteId={instituteId}
          classMaster={state.classMaster}
          onSelectOption={onSelectOption}
          filled={filled}
          flowAs={flowAs}
        />
      )}

      <button
        className={style.set_fees_structure_btn}
        title="Next Step"
        onClick={onMoveNextStep}
      >
        <div>{t("set_fee_structure")}</div>
        <img src="/images/forward-right-icon.svg" alt="next step" />
      </button>
    </div>
  );
};

export default SelectCategoryMaster;
