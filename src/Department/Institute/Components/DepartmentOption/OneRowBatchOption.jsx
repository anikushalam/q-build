import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  useAssignDesignationToStaff,
  useOneBatchDelete,
  useOneDepartmentSetCurrentBatch,
  useOneViewDepartment,
  useBatchLockUnlockAction,
} from "../DepartmentApi/depart-api";
import OptionWrapper from "../OptionWrapper";
import { useTranslation } from "react-i18next";
import QLoader from "../../../../Loader/QLoader";

const OneRowBatchOption = ({
  bid,
  setClick,
  editOneBatch,
  batchName,
  designation_send,
  batch_type,
  batchStatus,
}) => {
  const { t } = useTranslation();
  const [selectoptions, setSelectoptions] = useState([
    t("select_batch"),
    t("edit_"),
    t("delete"),
  ]);
  const ids = useSelector((state) => state.idChange);
  const [setBatch] = useOneDepartmentSetCurrentBatch();
  const [disabled, setDisabled] = useState(false);
  const [batchDelete] = useOneBatchDelete();
  const [assignDesignationToStaff] = useAssignDesignationToStaff();
  const [batchLockUnlockAction] = useBatchLockUnlockAction();
  const { oneDepartmentRefetch } = useOneViewDepartment({
    did: ids?.did,
    skip: false,
  });

  useEffect(() => {
    if (batch_type === "Identical" && designation_send === "No") {
      setSelectoptions([
        t("select_batch"),
        t("edit_"),
        t("delete"),
        "Assign Designation",
        batchStatus === "UnLocked" ? "Complete" : "Uncomplete",
      ]);
    } else {
      setSelectoptions([
        t("select_batch"),
        t("edit_"),
        t("delete"),
        batchStatus === "UnLocked" ? "Complete" : "UnComplete",
      ]);
    }
  }, [designation_send, batch_type, batchStatus]);
  const selectBatchHandler = (option) => {
    if (option === "Select Batch") {
      setDisabled((pre) => !pre);
      setBatch({
        did: ids?.did,
        bid: bid,
        batch: "",
      })
        .then(() => {
          oneDepartmentRefetch();
          setDisabled((pre) => !pre);
          setClick(false);
        })
        .catch({});
    } else if (option === "Edit") {
      editOneBatch({
        batchName: batchName,
        bid: bid,
      });
      setClick(false);
    } else if (option === "Delete") {
      setDisabled((pre) => !pre);
      batchDelete({
        bid: bid,
      })
        .then(() => {
          oneDepartmentRefetch();
          setDisabled((pre) => !pre);
          setClick(false);
        })
        .catch({});
    } else if (option === "Assign Designation") {
      setDisabled((pre) => !pre);
      assignDesignationToStaff({
        bid: bid,
      })
        .then(() => {
          oneDepartmentRefetch();
          setDisabled((pre) => !pre);
          setClick(false);
        })
        .catch({});
    } else if (option === "Complete" || option === "UnComplete") {
      setDisabled((pre) => !pre);
      batchLockUnlockAction({
        bid: bid,
      })
        .then(() => {
          oneDepartmentRefetch();
          setDisabled((pre) => !pre);
          setClick(false);
        })
        .catch({});
    } else {
    }
  };
  return (
    <>
      <OptionWrapper
        selectOptions={selectoptions}
        onClickOptionHandler={selectBatchHandler}
      />
      {disabled && <QLoader />}
    </>
  );
};

export default OneRowBatchOption;
