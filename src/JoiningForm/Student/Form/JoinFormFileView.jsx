import React, { useState } from "react";
import style from "./JoinForm.module.css";
import ViewFileDialog from "./ViewFileDialog";
const JoinFormFileView = ({
  labelText,
  value,
  asAttachment,
  customStyleContainer,
  customStyleLabel,
  onClosePreviousModal,
  viewAs,
}) => {
  const [openFile, setOpenFile] = useState("");
  const onViewFile = (val) => {
    if (viewAs === "APPLICATION_STATUS") {
      onClosePreviousModal(val);
    } else {
      setOpenFile(val);
    }
  };
  const onClose = () => {
    setOpenFile("");
  };

  return (
    <>
      <div
        className={style.join_form_container_view}
        style={{ ...customStyleContainer }}
      >
        <label
          className={style.join_form_label_view}
          style={{ ...customStyleLabel }}
        >
          {labelText}
        </label>
        <h6
          className={style.join_form_input_view}
          onClick={() => onViewFile(value)}
          style={{ color: "#002BBE", cursor: "pointer" }}
        >
          {asAttachment ? "View Attachment" : "View"}
        </h6>
      </div>
      {openFile && <ViewFileDialog onClose={onClose} keyValue={openFile} />}
    </>
  );
};

export default JoinFormFileView;
