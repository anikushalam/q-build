import React, { useState } from "react";
import style from "../../ClassTeacher/Profile/EditConfirm.module.css";
import { useRemoveDayTimetable } from "../../../../../hooks/member_tab/class-api";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import Overlay from "../../../../../Search/Overlay";
import QLoader from "../../../../../Loader/QLoader";
import AddTimetable from "./AddTimetable";

const TimetableMenu = ({ onClose, onRefetch, dayMenu, clsId, day }) => {
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [removeDayTimetable] = useRemoveDayTimetable();

  const onDelete = () => {
    if (dayMenu?.tid && dayMenu?.sfid) {
      setDisabled((pre) => !pre);
      removeDayTimetable({
        tid: dayMenu?.tid,
        scid: dayMenu?.sfid,
        flow: "PARTICULAR",
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
        <AddTimetable
          onCloseParent={onClose}
          onClose={() => setEdit(false)}
          openAs="EDIT"
          dayMenu={dayMenu}
          clsId={clsId}
          day={day}
          onRefetch={onRefetch}
        />
      )}
    </>
  );
};

export default TimetableMenu;
