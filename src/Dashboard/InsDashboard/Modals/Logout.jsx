import React from "react";
import style from "./Logout.module.css";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import Divider from "@mui/material/Divider";
import "./AddDisplay.css";
import { useTranslation } from "react-i18next";
import { LogoutQueryHandler } from "../../../Authentication/Logout/LogoutQuery";

function Logout({ logout, changeLogout }) {
  const { t } = useTranslation();
  const LogoutHandler = () => {
    LogoutQueryHandler();
    window.location.reload();
  };
  return (
    <Dialog sx={{ borderRadius: "12px" }} open={logout} onClose={changeLogout}>
      <div className={style.logout}>
        <DialogTitle>
          <div className={style.title}>
            <h5>{t("logout_")}</h5>
          </div>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <div className={style.title} style={{ marginBottom: "1rem" }}>
            <h6 onClick={LogoutHandler}> {t("logout")} </h6>
          </div>
          <Divider />
          <div className={style.title} style={{ marginTop: "2rem" }}>
            <h6 onClick={changeLogout}>{t("cancel")}</h6>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
}

export default Logout;
