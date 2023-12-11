import React, { useState } from "react";
import QueriesTab from "./QueriesTab";
import UnsolvedQuesries from "./UnsolvedQuesries";
import SolvedQuesries from "./SolvedQuesries";

const DepartmentQueries = ({ carryParentState, did, queryFlow }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <QueriesTab activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      {activeIndex === 0 && (
        <UnsolvedQuesries
          carryParentState={carryParentState}
          did={did}
          queryFlow={queryFlow}
        />
      )}
      {activeIndex === 1 && (
        <SolvedQuesries
          carryParentState={carryParentState}
          did={did}
          queryFlow={queryFlow}
        />
      )}
    </>
  );
};

export default DepartmentQueries;
