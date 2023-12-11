import React from "react";
import style from "./AddDisplay.module.css";
import { Dialog } from "@mui/material";
import "./AddDisplay.css";

function AddDisplay({ addDisplay, hideModal }) {
  return (
    <Dialog open={addDisplay} onClose={() => hideModal(false)}>
      <div className={style.addDisplay}>
        <div className={style.title}>
          <h6>Add Display Person</h6>

          <img
            src="/images/close-post-icon.svg"
            onClick={() => hideModal(false)}
          />
        </div>
        <div className={style.content}>
          <div className={style.item}>
            <label>Add Title</label>
            <input type="text" placeholder="Please add the title" />
          </div>

          <div className={style.item1}>
            <h6>Select Candidate</h6>
            <div className={style.select}>
              <p>Please select candidate</p>
              <img src="/images/select-icon.svg" />
            </div>

            {/* {click.emailClick && (
          <div className={style.tooltip3}>
            <Menu options={selectOptions} switchOption={switchEmail} />
          </div>
        )} */}
          </div>

          <div className={style.btn}>Add Details</div>
        </div>
      </div>
    </Dialog>
  );
}

export default AddDisplay;
