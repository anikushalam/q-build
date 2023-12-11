import React, { useState } from "react";
import style from "../MembersTab/staff/Mainbody/ClassTeacher/Profile/EditConfirm.module.css";

import {
  useDeleteModeratorByInstitute,
  useUpdateModeratorByInstitute,
} from "../Department/Institute/Components/DepartmentApi/depart-api";
import QLoader from "../Loader/QLoader";
import Overlay from "../Search/Overlay";
import SearchModalBackdrop from "../Search/SearchModalBackdrop";
import AddInstituteModerator from "./AddInstituteModerator";
import AddLeaveAndTransferModerator from "./AddLeaveAndTransferModerator";

const InstituteModeratoMenu = ({
  onClose,
  onRefetch,
  openModeratorMenu,
  instituteId,
  viewBy,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteModeratorByInstitute] = useDeleteModeratorByInstitute();
  const [updateModeratorByInstitute] = useUpdateModeratorByInstitute();

  const onDelete = () => {
    setDisabled((pre) => !pre);
    deleteModeratorByInstitute({
      id: instituteId,
      mid: openModeratorMenu?._id,
    })
      .then(() => {
        onRefetch();
        onClose();
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  const onEdit = (val, deptId) => {
    setDisabled((pre) => !pre);
    updateModeratorByInstitute({
      mid: openModeratorMenu?._id,
      updateModerator: {
        role: val?.mod_role,
        staffId: val?.sid,
        social_media_password_query: val?.social_media_password_query ?? "",
        academic_department: deptId ?? "",
      },
    })
      .then(() => {
        onRefetch();
        setDisabled((pre) => !pre);
        onClose();
      })
      .catch({});
  };

  // console.info("jsgfhsd", openModeratorMenu);
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
      ) : viewBy === "LEAVE_AUTHORITY" ? (
        <AddLeaveAndTransferModerator
          onClose={() => setEdit(false)}
          instituteId={instituteId}
          onRefetchWhenAdd={onRefetch}
          openAs={"EDIT"}
          openModeratorMenu={openModeratorMenu}
          onEdit={onEdit}
          viewBy={viewBy}
        />
      ) : (
        <AddInstituteModerator
          onClose={() => setEdit(false)}
          instituteId={instituteId}
          onRefetchWhenAdd={onRefetch}
          openAs={"EDIT"}
          openModeratorMenu={openModeratorMenu}
          onEdit={onEdit}
          viewBy={viewBy}
        />
      )}
    </>
  );
};

export default InstituteModeratoMenu;
