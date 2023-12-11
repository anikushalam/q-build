import React, { useState } from "react";
import {
  useDeleteModeratorByFinance,
  useUpdateModeratorByFinance,
} from "../../../../../hooks/member_tab/finance-api";
import QLoader from "../../../../../Loader/QLoader";
import Overlay from "../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import style from "../../ClassTeacher/Profile/EditConfirm.module.css";
import AddFinanceModerator from "./AddFinanceModerator";

const FinanceModeratoMenu = ({
  onClose,
  financeId,
  onRefetch,
  openModeratorMenu,
  instituteId,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteModeratorByFinance] = useDeleteModeratorByFinance();
  const [updateModeratorByFinance] = useUpdateModeratorByFinance();

  const onDelete = () => {
    setDisabled((pre) => !pre);
    deleteModeratorByFinance({
      fid: financeId,
      modId: openModeratorMenu?._id,
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
    updateModeratorByFinance({
      modId: openModeratorMenu?._id,
      updateModerator: {
        role: val?.mod_role,
        staffId: val?.sid,
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
        <AddFinanceModerator
          onClose={() => setEdit(false)}
          fid={financeId}
          instituteId={instituteId}
          onRefetch={onRefetch}
          openAs={"EDIT"}
          openModeratorMenu={openModeratorMenu}
          onEdit={onEdit}
        />
      )}
    </>
  );
};

export default FinanceModeratoMenu;
