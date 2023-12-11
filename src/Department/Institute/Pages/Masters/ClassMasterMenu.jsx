import React, { useState } from "react";
import SearchModalBackdrop from "../../../../Search/SearchModalBackdrop";
import Overlay from "../../../../Search/Overlay";
import {
  useOneClassMasterDelete,
  useOneClassMasterEdit,
} from "../../Components/DepartmentApi/depart-api";
import ClassMasterEdit from "./ClassMasterEdit";
import style from "../../../../MembersTab/staff/Mainbody/ClassTeacher/Profile/EditConfirm.module.css";
import QLoader from "../../../../Loader/QLoader";
const ClassMasterMenu = ({ onClose, classMenu, onRefetch }) => {
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [classMasterDelete] = useOneClassMasterDelete();
  const [classMasterEdit] = useOneClassMasterEdit();

  const onDelete = () => {
    setDisabled((pre) => !pre);
    classMasterDelete({
      cmid: classMenu?._id,
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
    classMasterEdit({
      cmid: classMenu?._id,
      cls_master: data,
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
        <ClassMasterEdit
          classMenu={classMenu}
          onEdit={onEdit}
          onClose={() => setEdit(false)}
        />
      )}
    </>
  );
};

export default ClassMasterMenu;
