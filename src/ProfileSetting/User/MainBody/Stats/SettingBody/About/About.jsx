import React, { useState } from "react";
import style from "./About.module.css";
import Dialog from "@mui/material/Dialog";

function About() {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onClose={() => setOpen((open) => !open)}>
      <div className={style.about}>
        <div className={style.top}>About Qviple</div>
        <div className={style.content}>
          <p>Please Check the Qviple Site:</p>
          <a
            href="https://dashboard.qviple.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://dashboard.qviple.com
          </a>
        </div>
      </div>
    </Dialog>
  );
}

export default About;
