import React, { useState } from "react";
import {
  useDeleteFeesStructure,
  useUpdateFeesStructure,
  useUpdateRetroFeesStructure,
} from "../../../../../hooks/member_tab/finance-api";
import QLoader from "../../../../../Loader/QLoader";
import Overlay from "../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import style from "../../ClassTeacher/Profile/EditConfirm.module.css";
import AddFeesStructure from "./AddFeesStructure";

const FeeStructureMenu = ({
  onClose,
  openStructureMenu,
  onDetailRefetch,
  onRefetch,
  financeId,
  instituteId,
  departmentId,
  flowAs,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteFeesStructure] = useDeleteFeesStructure();
  const [updateFeesStructure] = useUpdateFeesStructure();
  const [updateRetroFeesStructure] = useUpdateRetroFeesStructure();

  const onDelete = () => {
    setDisabled((pre) => !pre);
    deleteFeesStructure({
      flow: flowAs,
      sid: openStructureMenu?._id,
    })
      .then(() => {
        onRefetch();
        onClose();
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  const onEdit = (val, asEdit) => {
    // console.info("this is fee edit");
    setDisabled((pre) => !pre);
    setEdit(false);
    if (asEdit === "RETRO" && departmentId) {
      updateRetroFeesStructure({
        sid: openStructureMenu?._id,
        flow: flowAs,
        updateStructure: {
          ...val,
          department: departmentId,
        },
      })
        .then(() => {
          onRefetch();
          onDetailRefetch();
          onClose();
          setDisabled((pre) => !pre);
        })
        .catch({});
    } else {
      updateFeesStructure({
        sid: openStructureMenu?._id,
        flow: flowAs,
        updateStructure: val,
      })
        .then(() => {
          onRefetch();
          onDetailRefetch();
          onClose();
          setDisabled((pre) => !pre);
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
        <AddFeesStructure
          onClose={onClose}
          fid={financeId}
          openAs={"EDIT"}
          openStructureMenu={openStructureMenu}
          onEdit={onEdit}
          did={departmentId}
          instituteId={instituteId}
          flowAs={flowAs}
        />
      )}
    </>
  );
};

export default FeeStructureMenu;
