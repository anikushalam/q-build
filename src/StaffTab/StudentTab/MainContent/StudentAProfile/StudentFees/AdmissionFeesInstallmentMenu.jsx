import React, { useState } from "react";
import Overlay from "../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import style from "../../../../../MembersTab/staff/Mainbody/ClassTeacher/Profile/EditConfirm.module.css";
import { useRemoveFeesInstallmentCard } from "../../../../../hooks/member_tab/admission-api";
import QLoader from "../../../../../Loader/QLoader";

const AdmissionFeesInstallmentMenu = ({
  removeInstallMenu,
  onClose,
  onRefetch,
  rid,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [removeFeesInstallmentCard] = useRemoveFeesInstallmentCard();

  const onRemoveInstallment = () => {
    if (rid && removeInstallMenu) {
      setDisabled((pre) => !pre);
      removeFeesInstallmentCard({
        rid: rid,
        raid: removeInstallMenu,
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
      {!disabled ? (
        <>
          <SearchModalBackdrop onClose={onClose} />
          <Overlay
            customStyle={{
              zIndex: "1200",
            }}
          >
            <div
              className={style.edit_modal_container}
              style={{ width: "300px" }}
            >
              <h6 className={style.edit} onClick={onRemoveInstallment}>
                Delete
              </h6>
            </div>
          </Overlay>
        </>
      ) : (
        <QLoader />
      )}
    </>
  );
};

export default AdmissionFeesInstallmentMenu;
