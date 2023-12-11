import React from "react";
import Overlay from "../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../Search/SearchModalBackdrop";
import style from "../ClassTeacher/Profile/EditConfirm.module.css";

const TransportSelectedBatch = ({ onChooseBatch, onClose }) => {
  return (
    <>
      <SearchModalBackdrop onClose={onClose} />
      <Overlay
        customStyle={{
          zIndex: "1200",
        }}
      >
        <div className={style.edit_modal_container} style={{ width: "200px" }}>
          <h6 className={style.edit} onClick={() => onChooseBatch("")}>
            Current Batches
          </h6>
          <h6 className={style.edit} onClick={() => onChooseBatch("PAST")}>
            Past Batches
          </h6>
          <h6 className={style.remove} onClick={() => onChooseBatch("ALL")}>
            {" "}
            All Batches
          </h6>
        </div>
      </Overlay>
    </>
  );
};

export default TransportSelectedBatch;
