import React from "react";
import style from "./NewEnquiryModal.module.css";
import { Dialog } from "@mui/material";
import { useState } from "react";
import AllApplication from "./AllApplication";
import AddEnquiryForm from "./AddEnquiryForm";

function NewEnquiryModal({ open, onClose, instituteId, setReftechWhenMark }) {
  const [index, setIndex] = useState(0);
  const [selectApplication, setSelectApplication] = useState("");

  const onSelectApplication = (val) => {
    setSelectApplication(val);
    setIndex(1);
  };
  return (
    <Dialog open={open}>
      <div className={style.modalContainer}>
        {index === 0 && (
          <AllApplication
            onSelectApplication={onSelectApplication}
            onClose={onClose}
            instituteId={instituteId}
          />
        )}

        {index === 1 && (
          <AddEnquiryForm
            setIndex={setIndex}
            selectApplication={selectApplication}
            onClose={onClose}
            setReftechWhenMark={setReftechWhenMark}
          />
        )}
      </div>
    </Dialog>
  );
}

export default NewEnquiryModal;
