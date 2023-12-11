import React from "react";
import style from "./ReasonModal.module.css";
import { Dialog } from "@mui/material";

function ReasonModal({
  addDisplay,
  hideModal,
  selectedReason,
  setSelectedReason,
  sendRequest,
}) {
  const textarea = document.querySelector("textarea");
  textarea?.addEventListener("keyup", (e) => {
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;

    textarea.style.height = `${scHeight}px`;
  });
  return (
    <Dialog open={addDisplay} onClose={() => hideModal(false)}>
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
    </Dialog>
  );
}

export default ReasonModal;
