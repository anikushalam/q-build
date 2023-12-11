import React from "react";
import { useLocation } from "react-router-dom";
import style from "./Transport.module.css";
import Tabs from "./Tabs";
const TransportTab = ({ carryParentState, children }) => {
  const getQuery = useLocation();
  return (
    <div className={style.MiddleContent}>
      <div className={style.MiddleContentLeft}>
        <div className={style.tabs}>
          <Tabs search={getQuery?.search} carryParentState={carryParentState} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default TransportTab;
