import React, { useState } from "react";
import style from "./AddDisplay.module.css";
import { Dialog } from "@mui/material";

const MODAL_STYLES = {
  position: "absolute",

  zIndex: 15,
  right: "0.8vw",
  top: "2vw",
};

const ITEM_STYLES = {
  zIndex: 15,
};

const SELECT_STYLES = {
  zIndex: 15,
};

// const OVERLAY_STYLES = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   zIndex: 0,
//   backgroundColor: "red",
// };

function Menu({ onPrint, open, onClose, setIsOpen }) {
  return (
    <>
      {/* <div onClick={onClose} style={OVERLAY_STYLES} /> */}
      <div style={MODAL_STYLES} className={style.menu}>
        <div className={style.menuItem} onClick={onPrint} style={ITEM_STYLES}>
          Edit Person Profile
        </div>
        <div className={style.menuItem} onClick={onPrint} style={ITEM_STYLES}>
          Remove Person Profile
        </div>
      </div>
    </>
  );
}

function AddDisplay({ addDisplay, hideModal }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (e) => {
    if (e.target?.style?.zIndex !== "15" && isOpen === true) {
      setIsOpen(false);
    }
  };
  document.addEventListener("click", handleClose);
  return (
    <Dialog open={addDisplay} onClose={() => hideModal(false)}>
      <div className={style.addDisplay}>
        <div className={style.title}>
          <h6>Add Person</h6>

          <img
            src="/images/close-post-icon.svg"
            onClick={() => hideModal(false)}
            alt=""
          />
        </div>
        <div className={style.content}>
          <div className={style.item}>
            <label>Add Title</label>
            <input type="text" placeholder="Please add the title" />
          </div>

          <div className={style.item1}>
            <h6>Select Candidate</h6>
            <div
              className={style.select}
              onClick={() => setIsOpen(true)}
              style={SELECT_STYLES}
            >
              <p>Please select candidate</p>
              <img src="/images/select-icon.svg" alt="" />
              {isOpen && (
                <Menu
                  setIsOpen={setIsOpen}
                  onPrint={() => console.log("name")}
                  onClose={handleClose}
                />
              )}
            </div>
          </div>

          <div className={style.btn}>Add Details</div>
        </div>
      </div>
    </Dialog>
  );
}

export default AddDisplay;
