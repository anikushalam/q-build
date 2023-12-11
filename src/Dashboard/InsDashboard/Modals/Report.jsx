import React from "react";
import { Dialog } from "@mui/material";
import Divider from "@mui/material/Divider";
import style from "./Report.module.css";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./AddDisplay.css";

function Report({ report, hideModal }) {
  return (
    <Dialog open={report}>
      <div className={style.report}>
        <div className={style.title}>
          <h5>Reoport Type</h5>
          <div className={style.submitbtn} onClick={() => hideModal(false)}>
            Submit
          </div>
        </div>
        <Divider />

        <div className={`${style.content} row`}>
          <div className={`${style.text} col-8`}>
            <p>Sexual content</p>
          </div>

          <div className={`${style.radio} col-4`}>
            <FormControlLabel value="female" control={<Radio />} />
          </div>

          <div className={`${style.text} col-8`}>
            <p>Violent or repulsive content</p>
          </div>

          <div className={`${style.radio} col-4`}>
            <FormControlLabel value="female" control={<Radio />} disabled />
          </div>

          <div className={`${style.text} col-8`}>
            <p>Hateful or abusive content</p>
          </div>

          <div className={`${style.radio} col-4`}>
            <FormControlLabel value="female" control={<Radio />} />
          </div>

          <div className={`${style.text} col-8`}>
            <p>Harmful or dangerous act</p>
          </div>

          <div className={`${style.radio} col-4`}>
            <FormControlLabel value="female" control={<Radio />} />
          </div>

          <div className={`${style.text} col-8`}>
            <p>Spam or misleading</p>
          </div>

          <div className={`${style.radio} col-4`}>
            <FormControlLabel value="female" control={<Radio />} />
          </div>

          <div className={`${style.text} col-8`}>
            <p>Other</p>
          </div>

          <div className={`${style.radio} col-4`}>
            <FormControlLabel value="female" control={<Radio />} />
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default Report;
