import React, { useState } from "react";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import Overlay from "../../../../../Search/Overlay";
import QLoader from "../../../../../Loader/QLoader";
import { useDeleteClassBatchStudent } from "../../../../../hooks/member_tab/class-api";
import style from "../Profile/EditConfirm.module.css";
const ClassStudentCardMenu = ({ onClose, studentMenu, bid, onRefetch }) => {
  const [disabled, setDisabled] = useState(false);
  const [deleteClassBatchStudent] = useDeleteClassBatchStudent();

  const onDelete = () => {
    if (bid) {
      setDisabled((pre) => !pre);
      deleteClassBatchStudent({
        bid: bid,
        destroy: {
          student_arr: [studentMenu],
        },
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

export default ClassStudentCardMenu;
