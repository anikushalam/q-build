import React, { useState } from "react";
import style from "../../../ClassTeacher/Profile/EditConfirm.module.css";
import EditAssignment from "./EditAssignment";
import { useSubjectDeleteAssignment } from "../../../../../../hooks/member_tab/subject-api";
import { useNavigate } from "react-router-dom";
import SearchModalBackdrop from "../../../../../../Search/SearchModalBackdrop";
import Overlay from "../../../../../../Search/Overlay";
import QLoader from "../../../../../../Loader/QLoader";

const AssignmentMenu = ({ onClose, onRefetch, aid, onParentRefetch }) => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [subjectDeleteAssignment] = useSubjectDeleteAssignment();

  const onDelete = () => {
    setDisabled((pre) => !pre);
    subjectDeleteAssignment({
      aid: aid,
    })
      .then(() => {
        onParentRefetch();
        onClose();
        setDisabled((pre) => !pre);
        navigate(-1);
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
        <EditAssignment
          onClose={() => setEdit(false)}
          onParentClose={onClose}
          aid={aid}
          onRefetch={onRefetch}
        />
      )}
    </>
  );
};

export default AssignmentMenu;
