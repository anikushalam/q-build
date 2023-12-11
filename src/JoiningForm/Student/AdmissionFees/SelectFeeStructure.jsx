import React, { useEffect } from "react";
import { useGetAllFeesStructure } from "../../../hooks/member_tab/finance-api";
import { useTranslation } from "react-i18next";
import style from "../Form/JoinForm.module.css";

const SelectFeeStructure = ({
  selectLabel,
  selectedValue,
  // value,
  name,
  // onChange,
  customStyleContainer,
  errorShow,
  departmentId,
  classMasterId,
  batchId,
  onFeeStructureSelect,
}) => {
  const { t } = useTranslation();
  const { getAllFeesStructure, getAllFeesStructureRefetch } =
    useGetAllFeesStructure({
      data: {
        did: departmentId,
        filterBy: classMasterId,
        page: 1,
        limit: 1000,
        batch_by: batchId,
      },
      skip: !departmentId,
    });

  useEffect(() => {
    if (departmentId) {
      // setShowingDataLoading(true);
      getAllFeesStructureRefetch();
    }
  }, [departmentId, getAllFeesStructureRefetch]);
  const onChange = (e) => {
    getAllFeesStructure?.all_structures?.filter((val) =>
      val?._id === e.target.value ? onFeeStructureSelect(val) : ""
    );
  };
  return (
    <>
      <div
        className={style.join_form_container}
        style={{ ...customStyleContainer }}
      >
        <p className={style.join_form_select_paragraph}>
          {selectLabel}{" "}
          {errorShow && (
            <span style={{ color: "red", marginLeft: "15px" }}>
              * {t("form_require_label")}
            </span>
          )}
        </p>
        <select
          className={style.join_form_select}
          // value={value}
          onChange={onChange}
          name={name}
        >
          <option selected>{selectedValue}</option>
          {getAllFeesStructure?.all_structures?.map((opt, index) => (
            <option key={index} value={opt?._id}>
              {opt?.unique_structure_name ?? ""}
              {/* {opt?.structure_name ?? ""} */}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectFeeStructure;
