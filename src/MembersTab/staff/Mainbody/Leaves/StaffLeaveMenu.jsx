import React, { useState } from "react";
import style from "../ClassTeacher/Profile/EditConfirm.module.css";
import { useDeleteStaffLeaveMutation } from "../../../../services/joining/joinApi";
import SearchModalBackdrop from "../../../../Search/SearchModalBackdrop";
import Overlay from "../../../../Search/Overlay";
import QLoader from "../../../../Loader/QLoader";

const StaffLeaveMenu = ({ onClose, onRefetch, menu }) => {
  const [disabled, setDisabled] = useState(false);
  const [deleteStudentLeave] = useDeleteStaffLeaveMutation();

  const onDelete = () => {
    if (menu?._id) {
      setDisabled((pre) => !pre);
      deleteStudentLeave({
        lid: menu?._id,
      })
        .then(() => {
          onRefetch();
          onClose();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  return (
    <>
      <SearchModalBackdrop onClose={onClose} />
      <Overlay
        customStyle={{
          zIndex: "1200",
        }}
      >
        <div className={style.edit_modal_container} style={{ width: "200px" }}>
          <h6 className={style.remove} onClick={onDelete}>
            Delete
          </h6>
        </div>
        {disabled && <QLoader />}
      </Overlay>
    </>
  );
};

export default StaffLeaveMenu;
