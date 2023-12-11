import React, { useState } from "react";
import style from "./Content.module.css";
import "./Content.css";
import Events from "./Events/Events";
import SportClasses from "./SportsClasses/SportClasses";
import Tabbs from "./Tabs/Tabs";
import NewTabs from "./Tabs/NewTabs";
// -----------------------------------------

import { Divider } from "@mui/material";

function Content({ setClickEvent, ContentDetail, sportArtsDetailsRefetch }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // console.info(ContentDetail);

  return (
    <div className={style.content}>
      <div className={style.tabs}>
        <NewTabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
      <Divider />

      {activeIndex === 0 && (
        <div>
          <Events
            setClickEvent={setClickEvent}
            sportEventArr={ContentDetail?.sportEvent}
            sid={ContentDetail?._id}
          />
        </div>
      )}
      {activeIndex === 1 && (
        <div>
          <SportClasses
            sportClassArr={ContentDetail?.sportClass}
            sportDeptId={ContentDetail?._id}
            sportArtsDetailsRefetch={sportArtsDetailsRefetch}
            sid={ContentDetail?._id}
          />
        </div>
      )}
    </div>
  );
}

export default Content;
