import React from "react";
import style from "./HolidayModal.module.css";
import { Dialog } from "@mui/material";
import { useTranslation } from "react-i18next";

function HolidayModal({
  hideModal,
  reason,
  clickAdd,
  handleReason,
  submitHandler,
}) {
  const { t } = useTranslation();
  return (
    <Dialog open={clickAdd} onClose={() => hideModal(false)}>
      <div className={style.addDisplay}>
        <div className={style.title}>
          <h6>{t("add_holiday_reason")}</h6>

          {/* <img
            src="/images/close-post-icon.svg"
            onClick={() => hideModal(false)}
          /> */}
        </div>
        <div className={style.content}>
          <div className={style.searchbar}>
            <textarea
              className={style.postTextarea}
              id="textarea"
              type="text"
              name="CreateInsPost"
              placeholder={t("add_reason")}
              rows="4"
              value={reason}
              onChange={handleReason}
            />
          </div>

          <div className={style.btn} onClick={() => hideModal(false)}>
            {t("add_details")}
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default HolidayModal;
