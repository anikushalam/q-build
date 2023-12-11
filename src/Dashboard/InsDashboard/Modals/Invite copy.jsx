import React from "react";
import style from "./Invite.module.css";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import Divider from "@mui/material/Divider";
import "./AddDisplay.css";

function Invite({ hideModal, invite }) {
  return (
    <Dialog open={invite} onClose={() => hideModal(false)}>
      <div className={style.invite}>
        <DialogTitle>
          <div className={style.title}>
            <div></div>
            <h5>Invite Friend On Qviple</h5>
            <img
              src="/images/close-post-icon.svg"
              onClick={() => hideModal(false)}
            />
          </div>
          <Divider />
        </DialogTitle>

        <DialogContent>
          <div className={style.content}>
            <h5>Share to URL anyone : </h5>
            <a href="https://www.figma.com/file/iUv8bywFxENBHfKKuYNJNM/Qviple-User?node-id=0%3A1">
              https://www.figma.com/file/iUv8bywFxENBHfKKuYNJNM/Qviple-User?node-id=0%3A1
            </a>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
}

export default Invite;
