import React, { useState } from "react";
import { useEditHostelRules } from "../../../../../hooks/member_tab/hostel-api";
import QLoader from "../../../../../Loader/QLoader";
import Overlay from "../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import style from "../../ClassTeacher/Profile/EditConfirm.module.css";
import AddRules from "./AddRules";

const HostelRuleMenu = ({ onClose, openRuleMenu, onRefetch, hid }) => {
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  //   const [deleteExcelByAdmissionAdmin] = useDeleteExcelByAdmissionAdmin();
  const [editHostelRules] = useEditHostelRules();

  //   const onDelete = () => {
  //     setDisabled((pre) => !pre);
  //     deleteExcelByAdmissionAdmin({
  //       aid: admissionId,
  //       openRuleMenu: openRuleMenu?._id,
  //     })
  //       .then(() => {
  //         onRefetch();
  //         onClose();
  //         setDisabled((pre) => !pre);
  //       })
  //       .catch({});
  //   };
  const onEdit = (val) => {
    setEdit((pre) => !pre);
    setDisabled((pre) => !pre);
    editHostelRules({
      hid: hid,
      rid: openRuleMenu?._id,
      editRules: {
        existing_rules: {
          headLine: val?.regulation_headline,
          description: val?.regulation_description,
          attach: val?.regulation_attachment,
        },
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
              {/* <h6 className={style.remove} onClick={onDelete}>
              Delete
            </h6> */}
            </div>
            {disabled && <QLoader />}
          </Overlay>
        </>
      ) : (
        <AddRules openRuleMenu={openRuleMenu} onEdit={onEdit} openAs="EDIT" />
      )}
    </>
  );
};

export default HostelRuleMenu;
