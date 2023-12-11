import React, { useState } from "react";
import {
  useDeleteDocumentByAdmissionAdmin,
  useUpdateDocumentByAdmissionAdmin,
} from "../../../../../hooks/member_tab/admission-api";
import QLoader from "../../../../../Loader/QLoader";
import Overlay from "../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import style from "../../ClassTeacher/Profile/EditConfirm.module.css";
import AddDocument from "./AddDocument";

const AdmissionDocumentMenu = ({
  onClose,
  document,
  onRefetch,
  admissionId,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteDocumentByAdmissionAdmin] = useDeleteDocumentByAdmissionAdmin();
  const [updateDocumentByAdmissionAdmin] = useUpdateDocumentByAdmissionAdmin();

  const onDelete = () => {
    setDisabled((pre) => !pre);
    deleteDocumentByAdmissionAdmin({
      aid: admissionId,
      docId: document?._id,
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
    setEdit(false);
    console.info("sjfsdhf", val);
    updateDocumentByAdmissionAdmin({
      aid: admissionId,
      documentUpdate: {
        doc: {
          id: document?._id,
          name: val?.doc_name,
          newKey:
            val?.doc_key === document?.document_key
              ? document?.document_key
              : val?.doc_key,
          oldKey: val?.doc_key === document?.document_key ? "" : val?.doc_key,
          applicable_to: val?.applicable_to ?? "",
        },
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
              style={{ width: "200px" }}
            >
              <h6 className={style.edit} onClick={() => setEdit((pre) => !pre)}>
                Edit
              </h6>
              <h6 className={style.remove} onClick={onDelete}>
                Delete
              </h6>
            </div>
            {disabled && <QLoader />}
          </Overlay>
        </>
      ) : (
        <AddDocument
          editDocument={document}
          onEdit={onEdit}
          viewAs="EDIT"
          setOpenDocument={setEdit}
        />
      )}
    </>
  );
};

export default AdmissionDocumentMenu;
