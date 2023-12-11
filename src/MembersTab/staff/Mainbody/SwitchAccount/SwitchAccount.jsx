import React from "react";
import style from "./SwitchAccount.module.css";
import SwitchModal from "./SwitchModal";

function SwitchAccount() {
  return (
    <div className={style.complaints}>
      <SwitchModal />
    </div>
  );
}

export default SwitchAccount;
