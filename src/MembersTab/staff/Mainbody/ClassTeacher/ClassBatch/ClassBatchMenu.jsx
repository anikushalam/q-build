import React, { useState } from "react";
import QLoader from "../../../../../Loader/QLoader";
import Overlay from "../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import style from "../../ClassTeacher/Profile/EditConfirm.module.css";
import CreateClassBatch from "./CreateClassBatch";
import {
  useDeleteClassBatch,
  useEditClassBatch,
} from "../../../../../hooks/member_tab/class-api";

const ClassBatchMenu = ({ onClose, batchMenu, onRefetch }) => {
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editClassBatch] = useEditClassBatch();
  const [deleteClassBatch] = useDeleteClassBatch();

  const onDelete = () => {
    if (batchMenu?._id) {
      setDisabled((pre) => !pre);
      deleteClassBatch({
        bid: batchMenu?._id,
      })
        .then(() => {
          onRefetch();
          onClose();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  const onEdit = (val) => {
    if (batchMenu?._id) {
      setEdit(false);
      setDisabled((pre) => !pre);
      editClassBatch({
        bid: batchMenu?._id,
        updateBatch: {
          batchName: val,
        },
      })
        .then(() => {
          onRefetch();
          setDisabled((pre) => !pre);
          onClose();
        })
        .catch({});
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
        <CreateClassBatch
          openAs="EDIT"
          onEdit={onEdit}
          batchMenu={batchMenu}
          onClose={() => setEdit((pre) => !pre)}
          onRefetch={onRefetch}
        />
      )}
    </>
  );
};

export default ClassBatchMenu;
