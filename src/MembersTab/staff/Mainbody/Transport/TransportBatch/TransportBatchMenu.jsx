import React, { useState } from "react";
import QLoader from "../../../../../Loader/QLoader";
import Overlay from "../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import style from "../../ClassTeacher/Profile/EditConfirm.module.css";
import { useEditHostelBatch } from "../../../../../hooks/member_tab/hostel-api";
import CreateTransportBatch from "./CreateTransportBatch";
import {
  useDeleteTransportBatch,
  useSelectTransportBatch,
} from "../../../../../hooks/member_tab/transport-api";

const TransportBatchMenu = ({
  onClose,
  batchMenu,
  onRefetch,
  transportId,
  onMasterApiRefetch,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editHostelBatch] = useEditHostelBatch();
  const [deleteTransportBatch] = useDeleteTransportBatch();
  const [selectTransportBatch] = useSelectTransportBatch();

  const onDelete = () => {
    if (batchMenu?._id) {
      setDisabled((pre) => !pre);
      deleteTransportBatch({
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
      editHostelBatch({
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

  const onSelectBatch = () => {
    if (batchMenu?._id && transportId) {
      setDisabled((pre) => !pre);
      selectTransportBatch({
        tid: transportId,
        bid: batchMenu?._id,
      })
        .then(() => {
          onMasterApiRefetch();
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
              <h6 className={style.edit} onClick={onSelectBatch}>
                Select Batch
              </h6>{" "}
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
        <CreateTransportBatch
          openAs="EDIT"
          onEdit={onEdit}
          batchMenu={batchMenu}
          onClose={() => setEdit((pre) => !pre)}
          onRefetch={onRefetch}
          transportId={transportId}
        />
      )}
    </>
  );
};

export default TransportBatchMenu;
