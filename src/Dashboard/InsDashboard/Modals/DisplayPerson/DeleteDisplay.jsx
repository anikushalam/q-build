import React from "react";
import style from "../Logout.module.css";
import { useTranslation } from "react-i18next";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import Divider from "@mui/material/Divider";
import "./AddDisplay.css";
import { useDeleteDisplayPerson } from "../../../../hooks/dashboard/dashboard-api";
import { useSelector } from "react-redux";

function DeleteDisplay({
  deleteDisplay,
  hideModal,
  displayUserId,
  userId,
  closeTooltip,
  refetch,
}) {
  const { t } = useTranslation();
  const id = useSelector((state) => state.idChange.id);
  const [deleteDisplayPerson] = useDeleteDisplayPerson();

  const handleClose = () => {
    hideModal(false);
    closeTooltip(false);
  };

  const handleClick = () => {
    deleteDisplayPerson({
      did: displayUserId,
      uid: userId,
      id: id,
    })
      .then(() => {
        hideModal(false);
        refetch();
      })
      .catch({});
  };

  return (
    <Dialog
      sx={{ borderRadius: "12px" }}
      open={deleteDisplay}
      onClose={handleClose}
    >
      <div className={style.logout} style={{ width: "350px", zIndex: "58" }}>
        <DialogTitle>
          <div className={style.title} style={{ zIndex: "58" }}>
            <h5 style={{ zIndex: "58" }}>{t("remove_display")}?</h5>
          </div>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <div
            className={style.title}
            style={{ marginBottom: "1rem", zIndex: "58" }}
          >
            <h6 style={{ zIndex: "58" }} onClick={handleClick}>
              {t("remove")}{" "}
            </h6>
          </div>
          <Divider />
          <div
            className={style.title}
            style={{ marginTop: "2rem", zIndex: "58" }}
          >
            <h6 style={{ zIndex: "58" }} onClick={handleClose}>
              {t("cancel")}
            </h6>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
}

export default DeleteDisplay;
