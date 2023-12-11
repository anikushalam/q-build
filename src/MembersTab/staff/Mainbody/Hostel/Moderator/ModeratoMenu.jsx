import React, { useState } from "react";
import QLoader from "../../../../../Loader/QLoader";
import Overlay from "../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import style from "../../ClassTeacher/Profile/EditConfirm.module.css";
import AddModerator from "./AddModerator";
import {
  useDeleteModeratorByHostel,
  useUpdateModeratorByHostel,
} from "../../../../../hooks/member_tab/hostel-api";

const ModeratoMenu = ({
  onClose,
  hid,
  onRefetch,
  openModeratorMenu,
  instituteId,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteModeratorByHostel] = useDeleteModeratorByHostel();
  const [updateModeratorByHostel] = useUpdateModeratorByHostel();

  const onDelete = () => {
    setDisabled((pre) => !pre);
    deleteModeratorByHostel({
      hid: hid,
      modId: openModeratorMenu?._id,
    })
      .then(() => {
        onRefetch();
        onClose();
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  const onEdit = (val, application) => {
    setDisabled((pre) => !pre);
    setEdit(false);
    updateModeratorByHostel({
      modId: openModeratorMenu?._id,
      active_tab: val?.one_tab,
      updateModerator: {
        role: val?.mod_role,
        staffId: val?.sid,
        app_array:
          val?.mod_role === "MULTI_APP_ACCESS" ||
          val?.mod_role === "MULTI_APP_ACCESS"
            ? application
            : [],
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
        <AddModerator
          onClose={() => setEdit(false)}
          hid={hid}
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

export default ModeratoMenu;
