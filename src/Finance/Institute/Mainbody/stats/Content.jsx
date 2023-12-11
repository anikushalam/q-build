import React, { useState } from "react";
import style from "./Content.module.css";
import "./Content.css";
// import Funds from "./Funds/Funds";
import Tabbs from "./Tabs/Tabs";
// -----------------------------------------

import LinkedAccount from "./LinkedAccount/LinkedAccount";
import { Divider } from "@mui/material";
import DueList from "./DueList/DueList";

function Content({ contentDetail, status, fetch, insFund, setInsFund }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dueList, setDueList] = useState(false);

  return (
    <div className={style.content}>
      <div className={style.tabs}>
        <Tabbs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
      <Divider />

      {activeIndex === 0 && (
        <div>
          {/* <Funds
            fundsBalance={contentDetail && contentDetail}
            insFund={insFund}
            setInsFund={setInsFund}
            setDueList={setDueList}     
            dueList={dueList}
          /> */}
          {dueList && <DueList />}
        </div>
      )}
      {activeIndex === 1 && (
        <LinkedAccount status={status && status} fetch={fetch && fetch} />
      )}
    </div>
  );
}

export default Content;
