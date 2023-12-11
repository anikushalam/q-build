import React, { useState } from "react";
import SearchModalBackdrop from "../../../../Search/SearchModalBackdrop";
import Overlay from "../../../../Search/Overlay";
import {
  useOneSubjectMasterDelete,
  useOneSubjectMasterEdit,
} from "../../Components/DepartmentApi/depart-api";
import style from "../../../../MembersTab/staff/Mainbody/ClassTeacher/Profile/EditConfirm.module.css";
import QLoader from "../../../../Loader/QLoader";
import SubjectMasterEdit from "./SubjectMasterEdit";
const SubjectMasterMenu = ({ onClose, subjectMenu, onRefetch }) => {
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [subjectMasterDelete] = useOneSubjectMasterDelete();
  const [subjectMasterEdit] = useOneSubjectMasterEdit();

  const onDelete = () => {
    setDisabled((pre) => !pre);
    subjectMasterDelete({
      smid: subjectMenu?._id,
    })
      .then(() => {
        onRefetch();
        setDisabled((pre) => !pre);
        onClose(false);
      })
      .catch({});
  };

  const onEdit = (data) => {
    setDisabled((pre) => !pre);
    setEdit(false);
    subjectMasterEdit({
      smid: subjectMenu?._id,
      sub_master: data,
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
        <SubjectMasterEdit
          subjectMenu={subjectMenu}
          onEdit={onEdit}
          onClose={() => setEdit(false)}
        />
      )}
    </>
  );
};

export default SubjectMasterMenu;
