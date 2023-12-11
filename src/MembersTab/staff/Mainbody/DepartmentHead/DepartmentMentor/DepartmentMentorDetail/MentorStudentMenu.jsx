import React, { useState } from "react";
import SearchModalBackdrop from "../../../../../../Search/SearchModalBackdrop";
import Overlay from "../../../../../../Search/Overlay";
import QLoader from "../../../../../../Loader/QLoader";
import { useRemoveMentee } from "../../../../../../hooks/member_tab/department-api";
import style from "../../../ClassTeacher/Profile/EditConfirm.module.css";
import { t } from "i18next";
const MentorStudentMenu = ({
  onClose,
  openMenteeMenu,
  onRefetch,
  did,
  mid,
}) => {
  const [disabled, setDisabled] = useState(false);

  const [removeMentee] = useRemoveMentee();

  const onDelete = () => {
    setDisabled((pre) => !pre);
    removeMentee({
      did: did,
      mid: mid,
      destroy_mentee: {
        sid: openMenteeMenu?._id,
      },
    })
      .then(() => {
        onRefetch();
        onClose();
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  return (
    <>
      <SearchModalBackdrop onClose={onClose} />
      <Overlay
        customStyle={{
          zIndex: "1200",
        }}
      >
        <div className={style.edit_modal_container} style={{ width: "300px" }}>
          <h6>{t("confirm_to_remove_mentee")}</h6>
          <button className={style.update_to_btn} onClick={onDelete}>
            Confirm
          </button>
        </div>
        {disabled && <QLoader />}
      </Overlay>
    </>
  );
};

export default MentorStudentMenu;
