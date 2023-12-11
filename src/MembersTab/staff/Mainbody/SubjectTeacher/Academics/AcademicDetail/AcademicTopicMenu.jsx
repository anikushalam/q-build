import React, { useState } from "react";
import SearchModalBackdrop from "../../../../../../Search/SearchModalBackdrop";
import Overlay from "../../../../../../Search/Overlay";
import { useDeleteOneTopicChapter } from "../../../../../../hooks/member_tab/subject-api";
import QLoader from "../../../../../../Loader/QLoader";
import AcademicTopicEdit from "./AcademicTopicEdit";
import style from "../../../ClassTeacher/Profile/EditConfirm.module.css";
const AcademicTopicMenu = ({ onClose, topicMenu, onRefetch }) => {
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteOneTopicChapter] = useDeleteOneTopicChapter();

  const onDelete = () => {
    if (topicMenu?.subject && topicMenu?._id) {
      setDisabled((pre) => !pre);
      deleteOneTopicChapter({
        ctid: topicMenu?._id,
        sid: topicMenu?.subject,
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
        <AcademicTopicEdit
          topicMenu={topicMenu}
          onClose={() => setEdit((pre) => !pre)}
          onCloseParent={onClose}
          onRefetch={onRefetch}
        />
      )}
    </>
  );
};

export default AcademicTopicMenu;
