import React from "react";
import Overlay from "../../../../Search/Overlay";
import SearchModalWrapper from "../../../../Search/SearchModalWrapper";
import { useOneDepartmenteDelete } from "../../../Institute/Components/DepartmentApi/depart-api";
import style from "./Departments.module.css";
const EditDepartment = ({ onId, onOpenMenu, editOneDepartment, onReftech }) => {
  const selectoptions = ["Edit", "Delete"];
  const [departmentDelete] = useOneDepartmenteDelete();

  const selectBatchHandler = (option) => {
    if (option === "Edit") {
      editOneDepartment(onId);
      onOpenMenu();
    } else if (option === "Delete") {
      departmentDelete({
        did: onId,
      })
        .then((res) => {
          if (res?.data?.deleted === "No") {
          } else {
            onReftech();
          }
          onOpenMenu();
        })
        .catch({});
    } else {
    }
  };
  return (
    <>
      <SearchModalWrapper
        onClose={onOpenMenu}
        customStyleBackdrop={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      />
      <Overlay>
        <div className={style.edit_container}>
          {selectoptions.map((option, index) => (
            <h2
              value={option}
              key={index}
              onClick={() => selectBatchHandler(option)}
            >
              {option}
            </h2>
          ))}
        </div>
      </Overlay>
    </>
  );
};

export default EditDepartment;
