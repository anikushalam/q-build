import React, { useState } from "react";
import style from "./ReasonModal.module.css";
import { Dialog } from "@mui/material";
import { useStudentTransferRequestMutation } from "../../../../../services/joining/joinApi";
import QLoader from "../../../../../Loader/QLoader";

function ReasonModal({
  addDisplay,
  selectedReason,
  setSelectedReason,
  studentId,
  setToast,
  setvMessage,
  onCloseModal,
}) {
  const [studentTransferData] = useStudentTransferRequestMutation();
  const textarea = document.querySelector("textarea");
  const [disabled, setDisabled] = useState(false);

  textarea?.addEventListener("keyup", (e) => {
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;

    textarea.style.height = `${scHeight}px`;
  });

  const sendRequest = () => {
    setDisabled((pre) => !pre);

    studentTransferData({
      sid: studentId && studentId,
      transferData: {
        transferReason: selectedReason,
      },
    })
      .then((res) => {
        if (res.data) {
          setvMessage("Successfully Submitted Request");
          setToast(true);
          setDisabled((pre) => !pre);
          onCloseModal();
        }
      })
      .catch(() => {
        setDisabled((pre) => !pre);
      });
  };

  return (
    <Dialog open={addDisplay} onClose={() => onCloseModal()}>
      <div className={style.addDisplay}>
        <div className={style.title}>
          <h6>Add Leave Reason</h6>
        </div>
        <div className={style.content}>
          <div className={style.item}>
            <textarea
              className={style.postTextarea}
              type="text"
              required
              // ref={announcementDescriptionRef}
              name="CreateInsPost"
              placeholder="Enter Reason"
              value={selectedReason}
              onChange={(e) => setSelectedReason(e.target.value)}
            />
          </div>

          {selectedReason ? (
            <div
              className={`${style.btn} ${style.active}`}
              onClick={sendRequest}
            >
              Send Request
            </div>
          ) : (
            <div className={style.btn}>Send Request</div>
          )}
        </div>
      </div>
      {disabled && <QLoader />}
    </Dialog>
  );
}

export default ReasonModal;
