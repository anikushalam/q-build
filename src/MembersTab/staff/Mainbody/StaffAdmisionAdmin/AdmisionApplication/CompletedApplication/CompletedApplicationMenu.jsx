import React, { useState } from "react";
import { useMarkCompleteToOngoingApplication } from "../../../../../../hooks/member_tab/admission-api";
import QLoader from "../../../../../../Loader/QLoader";
import Overlay from "../../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../../Search/SearchModalBackdrop";
import style from "../../../ClassTeacher/Profile/EditConfirm.module.css";

const CompletedApplicationMenu = ({
  onClose,
  onRefetch,
  openApplicationMenu,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [markCompleteToOngoingApplication] =
    useMarkCompleteToOngoingApplication();

  const onOngoing = () => {
    if (openApplicationMenu) {
      setDisabled((pre) => !pre);
      markCompleteToOngoingApplication({
        aid: openApplicationMenu,
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
      <SearchModalBackdrop onClose={onClose} />
      <Overlay
        customStyle={{
          zIndex: "1200",
        }}
      >
        <div className={style.edit_modal_container} style={{ width: "200px" }}>
          <h6 className={style.edit} onClick={onOngoing}>
            Mark as Ongoing
          </h6>
        </div>
        {disabled && <QLoader />}
      </Overlay>
    </>
  );
};

export default CompletedApplicationMenu;
