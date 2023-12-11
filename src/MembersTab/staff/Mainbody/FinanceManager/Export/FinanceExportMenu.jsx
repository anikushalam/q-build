import React, { useState } from "react";
import {
  useDeleteExcelByFinance,
  useUpdateExcelByFinance,
} from "../../../../../hooks/member_tab/finance-api";
import QLoader from "../../../../../Loader/QLoader";
import Overlay from "../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import style from "../../ClassTeacher/Profile/EditConfirm.module.css";
import FinanceExportEdit from "./FinanceExportEdit";

const AdmissionExportMenu = ({ onClose, xlsxId, onRefetch, instituteId }) => {
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteExcelByFinance] = useDeleteExcelByFinance();
  const [updateExcelByFinance] = useUpdateExcelByFinance();

  const onDelete = () => {
    setDisabled((pre) => !pre);
    deleteExcelByFinance({
      id: instituteId,
      xlsxId: xlsxId?._id,
    })
      .then(() => {
        onRefetch();
        onClose();
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  const onEdit = (val) => {
    setDisabled((pre) => !pre);
    updateExcelByFinance({
      id: instituteId,
      xlsxId: xlsxId?._id,
      excelUpdate: {
        excel_file_name: val,
      },
    })
      .then(() => {
        onRefetch();
        setDisabled((pre) => !pre);
        onClose();
      })
      .catch({});
  };
  return (
    <>
      <SearchModalBackdrop onClose={onClose} />
      <Overlay
        customStyle={{
          zIndex: "1200",
        }}
      >
        {!edit ? (
          <div
            className={style.edit_modal_container}
            style={{ width: "200px" }}
          >
            <h6 className={style.edit} onClick={() => setEdit((pre) => !pre)}>
              Edit
            </h6>
            <h6 className={style.remove} onClick={onDelete}>
              Delete
            </h6>
          </div>
        ) : (
          <FinanceExportEdit xlsxId={xlsxId} onEdit={onEdit} />
        )}

        {disabled && <QLoader />}
      </Overlay>
    </>
  );
};

export default AdmissionExportMenu;
