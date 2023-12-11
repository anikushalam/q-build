import React from "react";
import style from "./FundModal.module.css";
import { Dialog } from "@mui/material";

function FundModal({ addDisplay, hideModal, duration, setDuration }) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <Dialog open={addDisplay} onClose={() => hideModal(false)}>
      <div className={style.addDisplay}>
        <div className={style.title}>
          <h6>Choose Date</h6>
        </div>

        <div className={style.content}>
          <div className={style.fundinput}>
            <h6>From</h6>
            <input
              type="date"
              max={today}
              value={duration.from}
              placeholder="Type Confirm To Continue"
              onChange={(e) =>
                setDuration({ ...duration, from: e.target.value })
              }
            />
          </div>

          <div className={style.fundinput}>
            <h6>To</h6>
            {duration.from ? (
              <input
                type="date"
                min={duration?.from}
                max={today}
                value={duration.to}
                placeholder="Type Confirm To Continue"
                onChange={(e) =>
                  setDuration({ ...duration, to: e.target.value })
                }
              />
            ) : (
              <input
                type="date"
                min={duration?.from}
                max={today}
                disabled
                value={duration.to}
                placeholder="Type Confirm To Continue"
                onChange={(e) =>
                  setDuration({ ...duration, to: e.target.value })
                }
              />
            )}
          </div>

          {duration.from !== "" && duration.to !== "" ? (
            <div
              className={`${style.btn} ${style.activeBttn}`}
              onClick={() => hideModal(false)}
            >
              Apply
            </div>
          ) : (
            <div className={style.btn}>Apply</div>
          )}
        </div>
      </div>
    </Dialog>
  );
}

export default FundModal;
