import React, { useState } from "react";
import style from "./Content.module.css";
import "./Content.css";
import Tabbs from "./Tabs/Tabs";
import { Divider } from "@mui/material";
import Teams from "./Members/Members";
import Members from "./Teams/Teams";
// -----------------------------------------

function Content() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={style.content}>
      <div className={style.tabs}>
        <Tabbs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
      <Divider />

      {activeIndex === 0 && (
        <div>
          <Members />
        </div>
      )}
      {activeIndex === 1 && (
        <div>
          <Teams />
        </div>
      )}
    </div>
  );
}

export default Content;
