import React, { useState } from "react";
import SearchModalBackdrop from "../../../../../../Search/SearchModalBackdrop";
import Overlay from "../../../../../../Search/Overlay";
import AddBlock from "./AddBlock";
import QLoader from "../../../../../../Loader/QLoader";
import {
  useDestroyOneSeatingExam,
  useUpdateOneSeatingExam,
} from "../../../../../../hooks/member_tab/department-api";
import style from "../../../ClassTeacher/Profile/EditConfirm.module.css";
const SeatingMenu = ({ onClose, onRefetch, examId, said }) => {
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [destroyOneSeatingExam] = useDestroyOneSeatingExam();
  const [updateOneSeatingExam] = useUpdateOneSeatingExam();

  const onDelete = () => {
    setDisabled((pre) => !pre);
    destroyOneSeatingExam({
      eid: examId,
      said: said?._id,
    })
      .then(() => {
        onRefetch();
        onClose();
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  const onEdit = (val, pap) => {
    setEdit(false);
    setDisabled((pre) => !pre);
    updateOneSeatingExam({
      eid: examId,
      said: said?._id,
      updateSeating: {
        seat_block_name: val?.seat_block_name,
        seat_block_class: val?.seat_block_class,
        seat_valid_staff: val?.seat_valid_staff,
        seat_block_staff: val?.seat_block_staff,
        seat_valid_staff_name: val?.seat_valid_staff_name,
        papers: pap,
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
        <AddBlock
          said={said}
          onEdit={onEdit}
          openAs="EDIT"
          onClose={() => setEdit(false)}
        />
      )}
    </>
  );
};

export default SeatingMenu;
