import React, { useState } from "react";
import style from "../ApplicationStatus.module.css";
import ApplicationPreviewDetail from "../../../../staff/Mainbody/FinanceManager/FeesStructure/ApplicationPreviewDetail";
import DocumentPreview from "../DocumentPreview";
import StudentConfirmDocs from "./StudentConfirmDocs";

const AdmissionSecondNotification = ({ message, onRefetchApplication }) => {
  const [openDocument, setOpenDocument] = useState("");
  const [structureId, setStructureId] = useState("");
  const [actionStep, setActionStep] = useState("");
  return (
    <>
      <p>
        You have been selected for{" "}
        <span
          style={{
            fontWeight: "500",
          }}
        >
          {message?.applicationId?.applicationName ?? ""}.
        </span>
      </p>
      <p>
        Your fee structure is (
        <span
          style={{
            color: "#002BBE",
            cursor: "pointer",
          }}
          title="View fees structure"
          onClick={() => setStructureId(message?.feeStructure?._id ?? "")}
        >
          click here to view structure
        </span>{" "}
        ). And required documents are ({" "}
        <span
          style={{
            color: "#002BBE",
            cursor: "pointer",
          }}
          title="View Document Preview"
          onClick={() =>
            setOpenDocument(message?.applicationId?.admissionAdmin ?? "")
          }
        >
          {" "}
          click here for Documents{" "}
        </span>
        ).
      </p>
      <p>Start your admission process by confirming below.</p>
      {!message?.docs_status ? (
        <div className={style.itemrow}>
          <div
            className={`${style.itembtn} ${style.red}`}
            onClick={() => setActionStep("CANCEL_QUERY")}
          >
            Cancel
          </div>
          <div
            className={`${style.itembtn} ${style.blue}`}
            onClick={() => setActionStep("CONFIRM_QUERY")}
          >
            Confirm
          </div>
        </div>
      ) : (
        ""
      )}

      {openDocument && (
        <DocumentPreview
          admissionId={openDocument}
          onClose={() => setOpenDocument("")}
        />
      )}
      {structureId && (
        <ApplicationPreviewDetail
          structureId={structureId}
          setStructureId={setStructureId}
          viewAs="HOSTEL_SEARCH"
        />
      )}
      {actionStep && (
        <StudentConfirmDocs
          onClose={() => setActionStep("")}
          actionStep={actionStep}
          applicationId={message?.applicationId?._id}
          statusId={message?._id}
          studentId={message?.studentId}
          onRefetchApplication={onRefetchApplication}
        />
      )}
    </>
  );
};

export default AdmissionSecondNotification;
