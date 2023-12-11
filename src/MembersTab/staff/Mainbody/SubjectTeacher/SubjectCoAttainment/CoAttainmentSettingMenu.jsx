import React, { useState } from "react";
import style from "../../ClassTeacher/Profile/EditConfirm.module.css";
import {
  useRemoveCopoAttainment,
  useUpdateCopoAttainment,
} from "../../../../../hooks/member_tab/subject-api";
import AddCoAttainmentSetting from "./AddCoAttainmentSetting";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import Overlay from "../../../../../Search/Overlay";
import QLoader from "../../../../../Loader/QLoader";

const CoAttainmentSettingMenu = ({ onClose, onRefetch, menu }) => {
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [updateCopoAttainment] = useUpdateCopoAttainment();
  const [removeCopoAttainment] = useRemoveCopoAttainment();

  const onDelete = () => {
    if (menu?._id) {
      setDisabled((pre) => !pre);
      removeCopoAttainment({
        atid: menu?._id,
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
    if (menu?._id) {
      setDisabled((pre) => !pre);
      setEdit(false);
      updateCopoAttainment({
        atid: menu?._id,
        updateCopo: val,
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
        <AddCoAttainmentSetting
          onClose={() => setEdit(false)}
          openAs="EDIT"
          onEdit={onEdit}
          coMenu={menu}
        />
      )}
    </>
  );
};

export default CoAttainmentSettingMenu;
