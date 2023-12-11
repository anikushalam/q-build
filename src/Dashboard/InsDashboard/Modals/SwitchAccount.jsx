import React from "react";
import style from "./SwitchAccount.module.css";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import Divider from "@mui/material/Divider";
import "./Switch.css";
import Avatar from "@mui/material/Avatar";
import "./AddDisplay.css";

function Item({ userName, desc, img }) {
  return (
    <div className={style.tooltipHeader}>
      <div className={style.imgcontainer}>
        <img alt="not found" src={img} />
      </div>
      <h5>{userName}</h5>
      <p className={style.insName}>{desc}</p>

      <div className={style.close}>
        <img src="/images/close-white-icon.svg" alt="" />
      </div>
    </div>
  );
}

function SwitchAccount({ swichAccount, hideModal }) {
  return (
    <Dialog open={swichAccount} onClose={() => hideModal(false)}>
      <div className={style.switch}>
        <DialogTitle>
          <div className={style.title}>
            <div></div>
            <h5>Add or Swithch Account</h5>
            <img
              src="/images/close-post-icon.svg"
              onClick={() => hideModal(false)}
              alt=""
            />
          </div>
          <Divider />
        </DialogTitle>

        <DialogContent>
          <div className={style.content}>
            <Item
              userName="kkwagh_engineering01"
              desc="K. K. Wagh Institute of Engineering Education and Research"
              img="/images/ins_default_profile.svg"
            />
            <Item
              userName="shekarchandra_patil23"
              desc="Principle Of K. K. Wagh Institute
    of Engineering"
              img="/images/member_tab/class/default_avatar.svg"
            />
          </div>

          <div className={style.item}>
            <Avatar sx={{ width: 62, height: 62 }} src="/broken-image.jpg" />
            <div className={style.itemText}>
              <h6>Add</h6>
              <p>Name and Profession</p>
            </div>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
}

export default SwitchAccount;
