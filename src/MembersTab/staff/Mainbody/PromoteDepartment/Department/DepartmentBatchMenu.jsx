import React, { useState } from "react";
import CustomSuspense from "../../../../../Custom/SuspenseLoading/CustomSuspense";
import CreateBatch from "../../../../../Dashboard/InsDashboard/Modals/Batch/CreateBatch";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import Overlay from "../../../../../Search/Overlay";
import QLoader from "../../../../../Loader/QLoader";
import style from "../../ClassTeacher/Profile/EditConfirm.module.css";
import {
  useAssignDesignationToStaff,
  useBatchLockUnlockAction,
  useOneBatchDelete,
  useOneDepartmentSetCurrentBatch,
} from "../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import { useTranslation } from "react-i18next";
const DepartmentBatchMenu = ({
  onClose,
  did,
  onRefetch,
  instituteId,
  openBatchMenu,
  onParentRefetch,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [setBatch] = useOneDepartmentSetCurrentBatch();
  const [batchDelete] = useOneBatchDelete();
  const [assignDesignationToStaff] = useAssignDesignationToStaff();
  const [batchLockUnlockAction] = useBatchLockUnlockAction();

  const onReset = () => {
    onRefetch();
    setDisabled((pre) => !pre);
    onClose();
  };
  const onOptionAction = (option) => {
    if (openBatchMenu?._id) {
      if (option === "Select Batch") {
        setDisabled((pre) => !pre);
        setBatch({
          did: did,
          bid: openBatchMenu?._id,
          batch: "",
        })
          .then(() => {
            onParentRefetch();
            onReset();
          })
          .catch({});
      } else if (option === "Delete") {
        setDisabled((pre) => !pre);
        batchDelete({
          bid: openBatchMenu?._id,
        })
          .then(() => {
            onReset();
          })
          .catch({});
      } else if (option === "Assign Designation") {
        setDisabled((pre) => !pre);
        assignDesignationToStaff({
          bid: openBatchMenu?._id,
        })
          .then(() => {
            onReset();
          })
          .catch({});
      } else if (option === "Complete") {
        setDisabled((pre) => !pre);
        batchLockUnlockAction({
          bid: openBatchMenu?._id,
        })
          .then(() => {
            onReset();
          })
          .catch({});
      } else {
      }
    }
  };
  return (
    <>
      {!edit ? (
        <>
          <SearchModalBackdrop onClose={onClose} />
          <Overlay
            customStyle={{
              zIndex: "1200",
            }}
          >
            <div
              className={style.edit_modal_container}
              style={{ width: "230px" }}
            >
              <h6
                className={style.edit}
                onClick={() => onOptionAction("Select Batch")}
              >
                {t("select_batch")}
              </h6>
              <h6 className={style.remove} onClick={() => setEdit(true)}>
                {t("edit_")}
              </h6>
              {openBatchMenu?.batch_type === "Identical" &&
                openBatchMenu?.designation_send === "No" && (
                  <h6
                    className={style.edit}
                    onClick={() => onOptionAction("Assign Designation")}
                  >
                    Assign Designation
                  </h6>
                )}
              {openBatchMenu?.batchStatus === "UnLocked" ? (
                <h6
                  className={style.edit}
                  onClick={() => onOptionAction("Complete")}
                >
                  Complete Batch
                </h6>
              ) : (
                <h6
                  className={style.edit}
                  onClick={() => onOptionAction("Complete")}
                >
                  UnComplete Batch
                </h6>
              )}

              <h6
                className={style.remove}
                onClick={() => onOptionAction("Delete")}
              >
                {t("delete")}
              </h6>
            </div>
            {disabled && <QLoader />}
          </Overlay>
        </>
      ) : (
        <CustomSuspense>
          {edit && (
            <CreateBatch
              departmentModal={edit}
              hideModal={setEdit}
              id={instituteId}
              did={did}
              edit={true}
              setEdit={onClose}
              editBatch={openBatchMenu}
              onDepartmentRefetch={onRefetch}
              is_promote={openBatchMenu?._id}
            />
          )}
        </CustomSuspense>
      )}
    </>
  );
};

export default DepartmentBatchMenu;
