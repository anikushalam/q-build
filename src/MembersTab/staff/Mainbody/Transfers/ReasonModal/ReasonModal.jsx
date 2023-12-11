import React, { useState } from "react";
import style from "./ReasonModal.module.css";
import { Dialog } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useStaffTransferRequestMutation } from "../../../../../services/joining/joinApi";
import QLoader from "../../../../../Loader/QLoader";

function ReasonModal({
  addDisplay,
  selectedReason,
  setSelectedReason,
  staffId,
  setToast,
  setvMessage,
  onCloseModal,
}) {
  const [staffTransferData] = useStaffTransferRequestMutation();
  const textarea = document.querySelector("textarea");
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  textarea?.addEventListener("keyup", (e) => {
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;

    textarea.style.height = `${scHeight}px`;
  });

  const sendRequest = () => {
    setDisabled((pre) => !pre);
    staffTransferData({
      sid: staffId && staffId,
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

  // console.info(selectedReason);
  return (
    <Dialog open={addDisplay} onClose={() => onCloseModal()}>
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
      {disabled && <QLoader />}
    </Dialog>
  );
}

export default ReasonModal;
