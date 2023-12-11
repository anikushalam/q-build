import React, { useState } from "react";
import QLoader from "../../../../../../Loader/QLoader";
import {
  useAdmissionRevertBackDocsToSelected,
  useAdmissionRevertBackSelectedToApplication,
} from "../../../../../../hooks/member_tab/admission-api";

const ApplicationProcessUndo = ({
  applicationId,
  studentId,
  statusId,
  onRefetch,
  isSelected,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [admissionRevertBackSelectedToApplication] =
    useAdmissionRevertBackSelectedToApplication();
  const [admissionRevertBackDocsToSelected] =
    useAdmissionRevertBackDocsToSelected();
  const onUndoEventFire = (e) => {
    e.stopPropagation();
    if (statusId && studentId && applicationId) {
      if (isSelected === "Not Collected") {
        setDisabled((pre) => !pre);
        admissionRevertBackSelectedToApplication({
          sid: studentId,
          aid: applicationId,
          revertData: {
            statusId: statusId,
          },
        })
          .then(() => {
            onRefetch();
            setDisabled((pre) => !pre);
          })
          .catch({});
      } else if (isSelected === "Collected") {
        setDisabled((pre) => !pre);
        admissionRevertBackDocsToSelected({
          sid: studentId,
          aid: applicationId,
          revertData: {
            statusId: statusId,
          },
        })
          .then(() => {
            onRefetch();
            setDisabled((pre) => !pre);
          })
          .catch({});
      } else {
      }
    }
  };
  return (
    <>
      <img
        src="/images/member_tab/admission/admission-undo-icon.svg"
        alt="undo icon"
        style={{
          cursor: "pointer",
          width: "30px",
        }}
        onClick={onUndoEventFire}
        title={
          isSelected === "Not Collected"
            ? "Undo Application"
            : "Undo Collect Document"
        }
      />
      {disabled && <QLoader />}
    </>
  );
};

export default ApplicationProcessUndo;
