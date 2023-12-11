import React, { useState } from "react";
import QLoader from "../../../../../Loader/QLoader";
import Overlay from "../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import style from "../../ClassTeacher/Profile/EditConfirm.module.css";
import { useOneSchloarshipActionAdmission } from "../../../../../hooks/member_tab/admission-api";

const ScholarshipMenu = ({ onClose, openScholarshipMenu, onRefetch }) => {
  const [disabled, setDisabled] = useState(false);
  const [oneSchloarshipActionAdmission] = useOneSchloarshipActionAdmission();

  const onComplete = () => {
    setDisabled((pre) => !pre);
    oneSchloarshipActionAdmission({
      sid: openScholarshipMenu?._id,
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
        <div className={style.edit_modal_container} style={{ width: "200px" }}>
          {/* <h6 className={style.edit} onClick={() => setEdit((pre) => !pre)}>
        Edit
      </h6> */}
          <h6 className={style.remove} onClick={onComplete}>
            Mark As Complete
          </h6>
        </div>
        {disabled && <QLoader />}
      </Overlay>
    </>
  );
};

export default ScholarshipMenu;
