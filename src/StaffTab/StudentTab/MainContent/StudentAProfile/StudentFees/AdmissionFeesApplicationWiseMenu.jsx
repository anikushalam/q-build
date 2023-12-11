import React, { useState } from "react";
import Overlay from "../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import style from "../../../../../MembersTab/staff/Mainbody/ClassTeacher/Profile/EditConfirm.module.css";
import AdmissionConfirmDrop from "./AdmissionConfirmDrop";

const AdmissionFeesApplicationWiseMenu = ({
  setOpenFeeStructure,
  onClose,
  onRefetch,
  rid,
  sid,
  is_drop,
  onFeesRefetch,
}) => {
  const [drop, setDrop] = useState(false);

  const onEdit = () => {
    setOpenFeeStructure((pre) => !pre);
    onClose();
  };
  return (
    <>
      {!drop ? (
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
              <h6 className={style.edit} onClick={onEdit}>
                Edit Fees Structure
              </h6>
              {is_drop && (
                <h6 className={style.remove} onClick={() => setDrop(true)}>
                  Drop
                </h6>
              )}
            </div>
          </Overlay>
        </>
      ) : (
        <AdmissionConfirmDrop
          onRefetch={onRefetch}
          onFeesRefetch={onFeesRefetch}
          rid={rid}
          sid={sid}
          onClose={() => setDrop(false)}
          onParentClose={onClose}
        />
      )}
    </>
  );
};

export default AdmissionFeesApplicationWiseMenu;
