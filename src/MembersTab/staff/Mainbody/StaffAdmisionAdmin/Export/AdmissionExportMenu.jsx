import React, { useState } from "react";
import {
  useDeleteExcelByAdmissionAdmin,
  useUpdateExcelByAdmissionAdmin,
} from "../../../../../hooks/member_tab/admission-api";
import QLoader from "../../../../../Loader/QLoader";
import Overlay from "../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import style from "../../ClassTeacher/Profile/EditConfirm.module.css";
import AdmissionExportEdit from "./AdmissionExportEdit";

const AdmissionExportMenu = ({ onClose, xlsxId, onRefetch, admissionId }) => {
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteExcelByAdmissionAdmin] = useDeleteExcelByAdmissionAdmin();
  const [updateExcelByAdmissionAdmin] = useUpdateExcelByAdmissionAdmin();

  const onDelete = () => {
    setDisabled((pre) => !pre);
    deleteExcelByAdmissionAdmin({
      aid: admissionId,
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
    updateExcelByAdmissionAdmin({
      aid: admissionId,
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
          <AdmissionExportEdit xlsxId={xlsxId} onEdit={onEdit} />
        )}

        {disabled && <QLoader />}
      </Overlay>
    </>
  );
};

export default AdmissionExportMenu;
