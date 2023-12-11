import React, { useState } from "react";
import AllLibraryAccepted from "./Library/AllLibraryAccepted";
import AllLibraryRejected from "./Library/AllLibraryRejected";
import AllLibraryRequest from "./Library/AllLibraryRequest";
import Tabbs from "./Tabs/Tabs";

const LibraryRequest = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Tabbs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      {activeIndex === 0 && <AllLibraryRequest />}
      {activeIndex === 1 && <AllLibraryAccepted />}
      {activeIndex === 2 && <AllLibraryRejected />}
    </>
  );
};

export default LibraryRequest;
