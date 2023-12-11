import React, { useState } from "react";
import {
  useDeleteFeesHead,
  useUpdateFeeHeadMaster,
} from "../../../../../hooks/member_tab/finance-api";
import QLoader from "../../../../../Loader/QLoader";
import Overlay from "../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import style from "../../ClassTeacher/Profile/EditConfirm.module.css";
import AddFeeHeadMaster from "./AddFeeHeadMaster";

const FeeHeadMenu = ({ onClose, openFeeHeadMenu, onRefetch, financeId }) => {
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteFeesHead] = useDeleteFeesHead();
  const [updateFeeHeadMaster] = useUpdateFeeHeadMaster();

  const onDelete = () => {
    setDisabled((pre) => !pre);
    deleteFeesHead({
      fhid: openFeeHeadMenu?._id,
      fid: financeId,
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
    onClose();
    updateFeeHeadMaster({
      fmid: openFeeHeadMenu?._id,
      updateFeeHead: val,
    })
      .then(() => {
        onRefetch();
        setDisabled((pre) => !pre);
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
        <AddFeeHeadMaster
          onClose={onClose}
          financeId={financeId}
          onRefetch={onRefetch}
          openAs={"EDIT"}
          openFeeHeadMenu={openFeeHeadMenu}
          onEdit={onEdit}
        />
      )}
    </>
  );
};

export default FeeHeadMenu;
