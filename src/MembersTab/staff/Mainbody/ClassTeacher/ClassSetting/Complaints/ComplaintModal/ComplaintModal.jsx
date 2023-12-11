import React from "react";
import style from "./ComplaintModal.module.css";
// import { Dialog } from "@mui/material";

function ComplaintModal({ openModal, hideModal }) {
  return (
    <div class={style.modal}>
      <div classNsme={style.modalContent}>
        <h1>rthgg</h1>
      </div>
    </div>

    // <div class={style.modal}>
    //   <div classNsme={style.modalContent}>
    //     <span classNsme={style.closeButton}>×</span>
    //     <h1>Hello, I am a modal!</h1>
    //   </div>
    // </div>
  );
}

export default ComplaintModal;

// openModal ? `${style.modal} ${style.shoeModal}` :
