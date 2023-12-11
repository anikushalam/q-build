import React, { useState } from "react";
import style from "./Transfers.module.css";
import ReasonModal from "./ReasonModal/ReasonModal";
import { UpdateStatus } from "../../../../validation/Snackbar";
import { useNavigate } from "react-router-dom";

function Transfers({ studentId }) {
  const navigate = useNavigate();
  const [addDisplay, setAddDisplay] = useState(true);
  const [toast, setToast] = useState(false);
  const [vmessage, setvMessage] = useState("");
  const [selectedReason, setSelectedReason] = useState("");

  const onCloseModal = () => {
    setAddDisplay(false);
    navigate(-1);
  };
  return (
    <div className={style.complaints}>
      <UpdateStatus msg={vmessage} run={toast} setRun={setToast} />
      <div className={style.complaintDetail}>
        {addDisplay && (
          <ReasonModal
            addDisplay={addDisplay}
            selectedReason={selectedReason}
            setSelectedReason={setSelectedReason}
            setToast={setToast}
            setvMessage={setvMessage}
            studentId={studentId}
            onCloseModal={onCloseModal}
          />
        )}
      </div>
    </div>
  );
}

export default Transfers;
