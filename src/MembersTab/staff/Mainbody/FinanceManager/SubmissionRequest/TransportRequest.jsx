import React, { useState } from "react";
import AllTransportAccepted from "./Transport/AllTransportAccepted";
import AllTransportRejected from "./Transport/AllTransportRejected";
import AllTransportRequest from "./Transport/AllTransportRequest";
import Tabbs from "./Tabs/Tabs";

const TransportRequest = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Tabbs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      {activeIndex === 0 && <AllTransportRequest />}
      {activeIndex === 1 && <AllTransportAccepted />}
      {activeIndex === 2 && <AllTransportRejected />}
    </>
  );
};
export default TransportRequest;
