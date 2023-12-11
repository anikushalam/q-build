import React from "react";
import style from "./Logout.module.css";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { LogoutQueryHandler } from "../../../../Authentication/Logout/LogoutQuery";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router";

function Logout({ logout, changeLogout }) {
  const navigate = useNavigate();
  const LogoutHandler = () => {
    navigate("/");
    LogoutQueryHandler();
  };
  return (
    <Dialog sx={{ borderRadius: "12px" }} open={logout} onClose={changeLogout}>
      <div className={style.logout}>
        <DialogTitle>
          <div className={style.title}>
            <h5>Logout of Qviple</h5>
          </div>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <div className={style.title} style={{ marginBottom: "1rem" }}>
            <h6 onClick={LogoutHandler}>Logout </h6>
          </div>
          <Divider />
          <div className={style.title} style={{ marginTop: "2rem" }}>
            <h6 onClick={changeLogout}>Cancel</h6>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
}

export default Logout;
