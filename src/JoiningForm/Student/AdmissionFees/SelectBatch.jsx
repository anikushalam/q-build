import React, { useEffect } from "react";
import { useOneViewDepartment } from "../../../Department/Institute/Components/DepartmentApi/depart-api";
import { useTranslation } from "react-i18next";
import style from "../Form//JoinForm.module.css";

const SelectBatch = ({
  selectLabel,
  selectedValue,
  name,
  customStyleContainer,
  errorShow,
  departmentId,
  onBatchSelect,
}) => {
  const { t } = useTranslation();
  const { oneDepartment, oneDepartmentRefetch } = useOneViewDepartment({
    did: departmentId,
    skip: !departmentId,
  });
  useEffect(() => {
    if (departmentId) oneDepartmentRefetch();
  }, [departmentId, oneDepartmentRefetch]);

  const onChange = (e) => {
    oneDepartment?.department?.batches?.filter((val) =>
      val?._id === e.target.value ? onBatchSelect(val) : ""
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
          {oneDepartment?.department?.batches?.map((opt, index) => (
            <option key={index} value={opt?._id}>
              {opt?.batchName ?? ""}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectBatch;
