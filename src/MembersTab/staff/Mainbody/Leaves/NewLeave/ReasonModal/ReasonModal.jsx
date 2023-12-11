import React from "react";
import style from "./ReasonModal.module.css";
import { Dialog } from "@mui/material";
import { useTranslation } from "react-i18next";

function ReasonModal({
  addDisplay,
  hideModal,
  selectedReason,
  setSelectedReason,
  sendRequest,
}) {
  const { t } = useTranslation();
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
          <h6>{t("add_leave_reason")}</h6>
        </div>
        <div className={style.content}>
          <div className={style.item}>
            <textarea
              className={style.postTextarea}
              type="text"
              required
              // ref={announcementDescriptionRef}
              name="CreateInsPost"
              placeholder={t("enter_reason")}
              value={selectedReason}
              onChange={(e) => setSelectedReason(e.target.value)}
            />
          </div>

          {selectedReason ? (
            <div
              className={`${style.btn} ${style.active}`}
              onClick={sendRequest}
            >
              {t("send_request")}
            </div>
          ) : (
            <div className={style.btn}>{t("send_request")}</div>
          )}
        </div>
      </div>
    </Dialog>
  );
}

export default ReasonModal;
