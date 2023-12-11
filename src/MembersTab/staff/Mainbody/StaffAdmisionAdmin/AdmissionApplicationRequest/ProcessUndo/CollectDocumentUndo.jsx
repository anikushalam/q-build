import React, { useState } from "react";
import QLoader from "../../../../../../Loader/QLoader";

const CollectDocumentUndo = ({ applicantId, onRefetch }) => {
  const [disabled, setDisabled] = useState(false);

  const onUndoEventFire = () => {
    // if (applicantId) {
    //   setDisabled((pre) => !pre)({})
    //     .then(() => {
    //       onRefetch();
    //       setDisabled((pre) => !pre);
    //     })
    //     .catch({});
    // }
  };
  return (
    <>
      <img
        src="/images/member_tab/admission/admission-undo-icon.svg"
        alt="undo icon"
        style={{
          cursor: "pointer",
        }}
        onClick={onUndoEventFire}
      />
      {disabled && <QLoader />}
    </>
  );
};

export default CollectDocumentUndo;
