import React, { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAllDepartmentCondition } from "../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import CustomSelectDepartment from "../../../../../JoiningForm/Student/Form/CustomSelectDepartment";
import PopupWrapper from "../FeesStructure/PopupWrapper";
import style from "./BankDetails.module.css";

const SelectApplicable = ({
  onCloseApplicable,
  instituteId,
  setApplicablFor,
  libraryId,
  transportId,
  hostelId,
}) => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    flow: "",
    flow_id: "",
    flow_name: "",
    depart_arr: [],
  });
  const { allDepartment, allDepartmentRefetch } = useAllDepartmentCondition({
    id: instituteId,
    skip: !instituteId,
  });
  useEffect(() => {
    if (instituteId) allDepartmentRefetch();
  }, [instituteId]);

  const onSelectApplicable = (val) => {
    if (val === "Hostel") {
      setState({
        flow: "Hostel",
        flow_id: hostelId,
        flow_name: "Hostel",
        depart_arr: [],
      });
    } else if (val === "Transport") {
      setState({
        flow: "Transport",
        flow_id: transportId,
        flow_name: "Transport",
        depart_arr: [],
      });
    } else if (val === "Library") {
      setState({
        flow: "Library",
        flow_id: libraryId,
        flow_name: "Library",
        depart_arr: [],
      });
    } else if (val === "Internal Department") {
      setState({
        flow: "Department",
        flow_id: "",
        flow_name: "",
        depart_arr: [],
      });
    } else {
    }
  };

  const onSelectInternalDepartment = (val) => {
    setState((prev) => ({
      ...prev,
      flow_id: val?._id,
      flow_name: val?.dName,
      depart_arr: [...new Set([...prev.depart_arr, val?._id])],
    }));
  };

  const onSelect = () => {
    setApplicablFor(state);
    onCloseApplicable();
  };
  return (
    <PopupWrapper onClose={onCloseApplicable}>
      <div className={style.applicable_container}>
        <CustomSelectDepartment
          selectLabel={t("applicable_for")}
          selectedValue={t("applicable_for_placeholder")}
          options={["Internal Department", "Transport", "Library", "Hostel"]}
          onClick={onSelectApplicable}
        />
        {state.flow === "Department" && (
          <CustomSelectDepartment
            selectLabel={t("select_internal_department")}
            selectedValue={t("select_internal_department_placeholder")}
            options={allDepartment?.institute?.depart ?? []}
            onClick={onSelectInternalDepartment}
            openAs="PROMOTE"
            viewAs="FINANCE_BANK"
            defalutValue={
              state.depart_arr?.length > 1
                ? `${state.depart_arr?.length} department selected`
                : state.flow_name
            }
          />
        )}
        <button
          className={style.applicable_btn}
          onClick={onSelect}
          style={{
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div>{t("select")}</div>
        </button>
      </div>
    </PopupWrapper>
  );
};

export default SelectApplicable;
