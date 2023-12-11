import React from "react";
import JoinFormFileView from "../../../../../JoiningForm/Student/Form/JoinFormFileView";
import style from "./Document.module.css";

const DocumentCard = ({
  document,
  viewAs,
  onOpenFileView,
  setOpenDocumentMenu,
}) => {
  const onClosePreviousModal = (val) => {
    if (viewAs === "APPLICATION_STATUS") {
      onOpenFileView(val);
    }
  };
  return (
    <div className={style.document_card}>
      <img
        src="/images/admission-required-document-icon.svg"
        alt="document icon"
      />
      <div className={style.document_card_text}>
        <p>
          {document?.document_name ?? ""}
          {document?.applicable_to ? (
            <span
              style={{
                fontSize: "11px",
              }}
            >
              {` (Applicable To - ${document?.applicable_to})`}
            </span>
          ) : (
            ""
          )}
        </p>
        <JoinFormFileView
          asAttachment={true}
          value={document?.document_key ?? ""}
          customStyleContainer={{
            marginTop: "0",
            marginBottom: "0",
          }}
          customStyleLabel={{
            marginRight: "0",
          }}
          onClosePreviousModal={onClosePreviousModal}
          viewAs={viewAs}
        />
      </div>
      {viewAs !== "APPLICATION_STATUS" && (
        <img
          src="/images/three-24-dot-icon.svg"
          alt="menu icon"
          onClick={() => setOpenDocumentMenu(document)}
          className={style.menu_icon}
          title="Menu"
        />
      )}
    </div>
  );
};

export default DocumentCard;
