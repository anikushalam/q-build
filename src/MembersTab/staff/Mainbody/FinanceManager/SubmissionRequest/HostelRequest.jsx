import React, { useState } from "react";
import AllHostelAccepted from "./Hostel/AllHostelAccepted";
import AllHostelRejected from "./Hostel/AllHostelRejected";
import AllHostelRequest from "./Hostel/AllHostelRequest";
import Tabbs from "./Tabs/Tabs";

const HostelRequest = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Tabbs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      {activeIndex === 0 && <AllHostelRequest />}
      {activeIndex === 1 && <AllHostelAccepted />}
      {activeIndex === 2 && <AllHostelRejected />}
    </>
  );
};
export default HostelRequest;
