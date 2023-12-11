import React, { useState } from "react";
import QLoader from "../../../../../../Loader/QLoader";
import Overlay from "../../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../../Search/SearchModalBackdrop";
import style from "../../../ClassTeacher/Profile/EditConfirm.module.css";
import {
  useDepartmentDeleteChecklist,
  useDepartmentUpadateChecklist,
} from "../../../../../../hooks/member_tab/department-api";
import ChecklistForm from "../ChecklistFrom/ChecklistForm";

const ChecklistMenu = ({ did, onRefetch, openChecklistMenu, onClose }) => {
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [departmentDeleteChecklist] = useDepartmentDeleteChecklist();
  const [departmentUpadateChecklist] = useDepartmentUpadateChecklist();
  // const [notificationState, setNotificationState] = useState({
  //   msg: "",
  //   run: false,
  // });
  const onDelete = () => {
    setDisabled((pre) => !pre);
    departmentDeleteChecklist({
      did: did,
      cid: openChecklistMenu?._id,
    })
      .then(() => {
        onRefetch();
        setDisabled((pre) => !pre);
        onClose();
      })
      .catch({});
  };

  const onEdit = (value) => {
    setDisabled((pre) => !pre);
    setEdit(false);
    departmentUpadateChecklist({
      cid: openChecklistMenu?._id,
      checklist: value,
    })
      .then(() => {
        onRefetch();
        setDisabled((pre) => !pre);
        onClose();
      })
      .catch({});
  };

  // console.info(openChecklistMenu);
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
        <ChecklistForm
          checklistData={openChecklistMenu}
          onClose={() => setEdit(false)}
          onEdit={onEdit}
          is_edit
        />
      )}
    </>
  );
};

export default ChecklistMenu;
